#!/usr/bin/env python3
"""
米国5銘柄（VICR, RNG, AXTI, FIVN, PRGS）の日次OHLCVデータを取得し、
CANSLIMベースのチャート分析を実施する。
- ベース形成の種類と成熟度
- ピボットポイント（買いエントリー価格）
- 出来高パターン（ブレイクアウト確認）
- RS（相対強度）ライン（S&P500比）
- 移動平均線（5日・25日・75日）
"""

import yfinance as yf
import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta

TICKERS = ["VICR", "RNG", "AXTI", "FIVN", "PRGS"]
BENCHMARK = "^GSPC"  # S&P500

def get_data(ticker, period="1y"):
    df = yf.download(ticker, period=period, auto_adjust=True, progress=False)
    df.columns = [c[0] if isinstance(c, tuple) else c for c in df.columns]
    return df

def calc_mas(df):
    df["MA5"]  = df["Close"].rolling(5).mean()
    df["MA25"] = df["Close"].rolling(25).mean()
    df["MA75"] = df["Close"].rolling(75).mean()
    df["MA200"]= df["Close"].rolling(200).mean()
    return df

def calc_rs(df, bench_df):
    """RS Line = 銘柄終値 / S&P500終値（正規化）"""
    merged = df["Close"].rename("stock").to_frame().join(
        bench_df["Close"].rename("bench"), how="inner"
    )
    merged["RS"] = merged["stock"] / merged["bench"]
    merged["RS_norm"] = merged["RS"] / merged["RS"].iloc[0] * 100
    return merged["RS_norm"]

def detect_base(df):
    """
    簡易ベース検出：
    - カップウィズハンドル：高値→下落33%以内→回復→ハンドル（1〜2週の小幅調整）
    - フラットベース：高値から下落15%以内で横ばい5週以上
    - ダブルボトム：W字型の2回の底
    """
    close = df["Close"].values
    high  = df["High"].values
    vol   = df["Volume"].values
    n = len(close)
    
    results = {}
    
    # 直近52週の高値・安値
    w52_high = float(np.max(high[-252:]) if n >= 252 else np.max(high))
    w52_low  = float(np.min(df["Low"].values[-252:]) if n >= 252 else np.min(df["Low"].values))
    current  = float(close[-1])
    
    # 直近の調整幅
    recent_high = float(np.max(high[-60:]))  # 直近3ヶ月の高値
    recent_low  = float(np.min(df["Low"].values[-60:]))
    correction_pct = (recent_high - recent_low) / recent_high * 100
    
    # 出来高分析
    avg_vol_50 = float(np.mean(vol[-50:]))
    avg_vol_10 = float(np.mean(vol[-10:]))
    latest_vol = float(vol[-1])
    vol_ratio  = latest_vol / avg_vol_50 if avg_vol_50 > 0 else 1.0
    
    # 移動平均との位置関係
    ma5  = float(df["MA5"].iloc[-1])  if not pd.isna(df["MA5"].iloc[-1])  else current
    ma25 = float(df["MA25"].iloc[-1]) if not pd.isna(df["MA25"].iloc[-1]) else current
    ma75 = float(df["MA75"].iloc[-1]) if not pd.isna(df["MA75"].iloc[-1]) else current
    
    # 株価が全MAの上にあるか
    above_all_ma = current > ma5 > ma25 > ma75
    
    # ベース形成の判定
    if correction_pct <= 15:
        base_type = "フラットベース"
        base_maturity = "成熟" if len(close) > 35 else "形成中"
        pivot = recent_high * 1.005  # ピボット = ベース高値 + 0.5%
        buy_zone_low  = pivot
        buy_zone_high = pivot * 1.05
    elif correction_pct <= 33:
        base_type = "カップウィズハンドル（推定）"
        base_maturity = "成熟" if correction_pct < 25 else "形成中"
        pivot = recent_high * 1.005
        buy_zone_low  = pivot
        buy_zone_high = pivot * 1.05
    else:
        base_type = "深い調整（ベース形成前）"
        base_maturity = "未成熟"
        pivot = recent_high * 1.005
        buy_zone_low  = pivot
        buy_zone_high = pivot * 1.05
    
    # ブレイクアウト確認（直近5日で52週高値更新 + 出来高急増）
    is_breakout = (current >= w52_high * 0.98) and (vol_ratio >= 1.5)
    
    # 押し目買いポイント
    pullback1 = round(ma5, 2)
    pullback2 = round(ma25, 2)
    pullback3 = round(ma75, 2)
    
    # ストップロス（ピボット下5〜8%）
    stop_loss = round(pivot * 0.92, 2)
    
    results = {
        "w52_high": round(w52_high, 2),
        "w52_low":  round(w52_low, 2),
        "current":  round(current, 2),
        "correction_pct": round(correction_pct, 1),
        "base_type": base_type,
        "base_maturity": base_maturity,
        "pivot": round(pivot, 2),
        "buy_zone_low":  round(buy_zone_low, 2),
        "buy_zone_high": round(buy_zone_high, 2),
        "is_breakout": is_breakout,
        "vol_ratio": round(vol_ratio, 2),
        "avg_vol_50": int(avg_vol_50),
        "latest_vol": int(latest_vol),
        "ma5":  round(ma5, 2),
        "ma25": round(ma25, 2),
        "ma75": round(ma75, 2),
        "above_all_ma": above_all_ma,
        "pullback1": pullback1,
        "pullback2": pullback2,
        "pullback3": pullback3,
        "stop_loss": stop_loss,
    }
    return results

def get_chart_data(df, n=60):
    """直近n日分のチャートデータをJSON用に整形"""
    recent = df.tail(n).copy()
    labels = [d.strftime("%m/%d") for d in recent.index]
    prices = [round(float(v), 2) for v in recent["Close"]]
    ma5    = [round(float(v), 2) if not pd.isna(v) else None for v in recent["MA5"]]
    ma25   = [round(float(v), 2) if not pd.isna(v) else None for v in recent["MA25"]]
    ma75   = [round(float(v), 2) if not pd.isna(v) else None for v in recent["MA75"]]
    volume = [int(v) for v in recent["Volume"]]
    return {"labels": labels, "prices": prices, "ma5": ma5, "ma25": ma25, "ma75": ma75, "volume": volume}

def main():
    print("S&P500データ取得中...")
    bench_df = get_data(BENCHMARK, period="1y")
    bench_df = calc_mas(bench_df)
    
    all_results = {}
    
    for ticker in TICKERS:
        print(f"\n{ticker} データ取得・分析中...")
        try:
            df = get_data(ticker, period="1y")
            df = calc_mas(df)
            
            # RS計算
            rs_series = calc_rs(df, bench_df)
            rs_current = round(float(rs_series.iloc[-1]), 2)
            rs_3m_ago  = round(float(rs_series.iloc[-63]), 2) if len(rs_series) >= 63 else rs_current
            rs_trend   = "上昇" if rs_current > rs_3m_ago else "下降"
            
            # ベース分析
            base = detect_base(df)
            
            # チャートデータ（直近60日）
            chart = get_chart_data(df, n=60)
            
            # 年間パフォーマンス
            price_1y_ago = float(df["Close"].iloc[0])
            price_now    = float(df["Close"].iloc[-1])
            perf_1y      = round((price_now - price_1y_ago) / price_1y_ago * 100, 1)
            
            # S&P500の年間パフォーマンス
            bench_1y_ago = float(bench_df["Close"].iloc[0])
            bench_now    = float(bench_df["Close"].iloc[-1])
            bench_perf   = round((bench_now - bench_1y_ago) / bench_1y_ago * 100, 1)
            
            # RS Rating（簡易版：銘柄パフォーマンス / S&P500パフォーマンス）
            rs_rating = min(99, max(1, int((perf_1y / bench_perf * 50) if bench_perf != 0 else 50)))
            
            all_results[ticker] = {
                "ticker": ticker,
                "current_price": base["current"],
                "w52_high": base["w52_high"],
                "w52_low":  base["w52_low"],
                "perf_1y":  perf_1y,
                "bench_perf_1y": bench_perf,
                "rs_rating": rs_rating,
                "rs_current": rs_current,
                "rs_trend": rs_trend,
                "base_type": base["base_type"],
                "base_maturity": base["base_maturity"],
                "correction_pct": base["correction_pct"],
                "pivot": base["pivot"],
                "buy_zone_low":  base["buy_zone_low"],
                "buy_zone_high": base["buy_zone_high"],
                "is_breakout": base["is_breakout"],
                "vol_ratio": base["vol_ratio"],
                "avg_vol_50": base["avg_vol_50"],
                "latest_vol": base["latest_vol"],
                "ma5":  base["ma5"],
                "ma25": base["ma25"],
                "ma75": base["ma75"],
                "above_all_ma": base["above_all_ma"],
                "pullback1": base["pullback1"],
                "pullback2": base["pullback2"],
                "pullback3": base["pullback3"],
                "stop_loss": base["stop_loss"],
                "chart": chart,
            }
            
            print(f"  現在値: ${base['current']}")
            print(f"  52週高値: ${base['w52_high']} / 52週安値: ${base['w52_low']}")
            print(f"  ベース形成: {base['base_type']} ({base['base_maturity']})")
            print(f"  調整幅: {base['correction_pct']}%")
            print(f"  ピボット: ${base['pivot']}")
            print(f"  買いゾーン: ${base['buy_zone_low']} 〜 ${base['buy_zone_high']}")
            print(f"  ブレイクアウト: {base['is_breakout']} (出来高比: {base['vol_ratio']}x)")
            print(f"  RS Rating: {rs_rating} / RS トレンド: {rs_trend}")
            print(f"  MA5: ${base['ma5']} / MA25: ${base['ma25']} / MA75: ${base['ma75']}")
            print(f"  1年パフォーマンス: {perf_1y}% (S&P500: {bench_perf}%)")
            
        except Exception as e:
            print(f"  エラー: {e}")
            all_results[ticker] = {"error": str(e)}
    
    # JSON出力
    output_path = "/home/ubuntu/canslim_report/us_chart_analysis.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    print(f"\n\n分析完了。結果を {output_path} に保存しました。")
    return all_results

if __name__ == "__main__":
    main()
