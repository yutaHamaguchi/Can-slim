#!/usr/bin/env python3
"""
Calculate CANSLIM scores for each stock based on Finviz + yfinance data.
Scoring follows Manus CANSLIM methodology:
  C: Current Quarterly EPS Growth (Q/Q)
  A: Annual EPS Growth (Y/Y)
  N: New Products / New 52W High (distance from 52W high)
  S: Supply/Demand (float size, short float, volume ratio)
  L: Leader in Industry (RS vs SPY, SMA position)
  I: Institutional Sponsorship (inst_trans, inst_own)
  M: Market Direction (S&P500 trend)
"""
import sys
import json
import yfinance as yf

def score_c(eps_qoq):
    if eps_qoq is None:
        return 1, "データなし"
    if eps_qoq >= 100:
        return 10, f"EPS Q/Q +{eps_qoq:.1f}%（超高成長）"
    if eps_qoq >= 50:
        return 9, f"EPS Q/Q +{eps_qoq:.1f}%（高成長）"
    if eps_qoq >= 40:
        return 8, f"EPS Q/Q +{eps_qoq:.1f}%（良好）"
    if eps_qoq >= 30:
        return 7, f"EPS Q/Q +{eps_qoq:.1f}%（基準超え）"
    if eps_qoq >= 25:
        return 6, f"EPS Q/Q +{eps_qoq:.1f}%（最低基準）"
    if eps_qoq >= 15:
        return 5, f"EPS Q/Q +{eps_qoq:.1f}%（やや不足）"
    if eps_qoq >= 0:
        return 4, f"EPS Q/Q +{eps_qoq:.1f}%（成長鈍化）"
    if eps_qoq >= -10:
        return 3, f"EPS Q/Q {eps_qoq:.1f}%（減益）"
    if eps_qoq >= -20:
        return 2, f"EPS Q/Q {eps_qoq:.1f}%（大幅減益）"
    return 1, f"EPS Q/Q {eps_qoq:.1f}%（要注意）"

def score_a(eps_yoy, eps_next_y, eps_next_5y):
    if eps_yoy is None:
        return 1, "データなし"
    parts = []
    if eps_yoy is not None:
        parts.append(f"EPS this Y {'+' if eps_yoy >= 0 else ''}{eps_yoy:.1f}%")
    if eps_next_y is not None:
        parts.append(f"EPS next Y {'+' if eps_next_y >= 0 else ''}{eps_next_y:.1f}%")
    if eps_next_5y is not None:
        parts.append(f"EPS next 5Y {'+' if eps_next_5y >= 0 else ''}{eps_next_5y:.1f}%")
    comment = "、".join(parts)
    if eps_yoy >= 100:
        return 10, comment
    if eps_yoy >= 50:
        return 9, comment
    if eps_yoy >= 35:
        return 8, comment
    if eps_yoy >= 25:
        return 7, comment
    if eps_yoy >= 15:
        return 6, comment
    if eps_yoy >= 0:
        return 5, comment
    return 3, comment

def score_n(week52_high_dist, recent_news):
    if week52_high_dist is None:
        return 1, "52週高値データなし"
    dist = week52_high_dist  # negative when below high
    has_catalyst = len(recent_news) > 0
    if dist >= -3:
        return (10 if has_catalyst else 9), f"52週高値まで{abs(dist):.1f}%（ほぼ高値圏）{'、直近ニュースあり' if has_catalyst else ''}"
    if dist >= -5:
        return (9 if has_catalyst else 8), f"52週高値まで{abs(dist):.1f}%（高値圏）{'、直近ニュースあり' if has_catalyst else ''}"
    if dist >= -10:
        return (7 if has_catalyst else 6), f"52週高値まで{abs(dist):.1f}%（押し目圏）{'、直近ニュースあり' if has_catalyst else ''}"
    if dist >= -15:
        return (5 if has_catalyst else 4), f"52週高値まで{abs(dist):.1f}%（やや乖離）{'、直近ニュースあり' if has_catalyst else ''}"
    return 2, f"52週高値まで{abs(dist):.1f}%（大きく乖離）"

def score_s(market_cap_b, short_float, volume, avg_volume, shares_float_str):
    score = 5
    comments = []
    if market_cap_b is not None:
        if market_cap_b < 0.3:
            score += 1; comments.append(f"時価総額${market_cap_b:.2f}B（マイクロキャップ）")
        elif market_cap_b < 2:
            score += 2; comments.append(f"時価総額${market_cap_b:.2f}B（スモールキャップ）")
        elif market_cap_b < 10:
            score += 1; comments.append(f"時価総額${market_cap_b:.2f}B（ミッドキャップ）")
        else:
            score -= 1; comments.append(f"時価総額${market_cap_b:.1f}B（大型株）")
    if short_float is not None:
        if short_float > 30:
            score -= 3; comments.append(f"Short Float {short_float:.1f}%（危険域）")
        elif short_float > 20:
            score -= 2; comments.append(f"Short Float {short_float:.1f}%（高い）")
        elif short_float > 10:
            score -= 1; comments.append(f"Short Float {short_float:.1f}%（やや高い）")
        else:
            score += 1; comments.append(f"Short Float {short_float:.1f}%（健全）")
    if volume and avg_volume and avg_volume > 0:
        vol_ratio = volume / avg_volume
        if vol_ratio >= 2:
            score += 2; comments.append(f"出来高{vol_ratio:.1f}x（強い需要）")
        elif vol_ratio >= 1.2:
            score += 1; comments.append(f"出来高{vol_ratio:.1f}x（平均超え）")
        else:
            comments.append(f"出来高{vol_ratio:.1f}x（平均以下）")
    return max(1, min(10, score)), "、".join(comments) if comments else "需給データ不足"

def score_l(rs_vs_spy, sma50, sma200, stock_1y_return):
    if rs_vs_spy is None and sma50 is None:
        return 1, "RSデータなし"
    score = 5
    comments = []
    if rs_vs_spy is not None:
        if rs_vs_spy >= 50:
            score = 10; comments.append(f"S&P500比+{rs_vs_spy:.1f}%（業界トップクラス）")
        elif rs_vs_spy >= 25:
            score = 9; comments.append(f"S&P500比+{rs_vs_spy:.1f}%（強いRS）")
        elif rs_vs_spy >= 10:
            score = 8; comments.append(f"S&P500比+{rs_vs_spy:.1f}%（良好なRS）")
        elif rs_vs_spy >= 0:
            score = 6; comments.append(f"S&P500比+{rs_vs_spy:.1f}%（市場並み）")
        elif rs_vs_spy >= -10:
            score = 4; comments.append(f"S&P500比{rs_vs_spy:.1f}%（やや弱い）")
        else:
            score = 2; comments.append(f"S&P500比{rs_vs_spy:.1f}%（弱い）")
    if sma50 is not None:
        if sma50 > 10:
            comments.append(f"SMA50比+{sma50:.1f}%（強い上昇トレンド）")
        elif sma50 > 0:
            comments.append(f"SMA50比+{sma50:.1f}%（上昇トレンド）")
        else:
            comments.append(f"SMA50比{sma50:.1f}%（SMA50割れ）")
            score = max(1, score - 2)
    if stock_1y_return is not None:
        comments.append(f"1年リターン{'+' if stock_1y_return >= 0 else ''}{stock_1y_return:.1f}%")
    return max(1, min(10, score)), "、".join(comments)

def score_i(inst_trans, inst_own, insider_trans):
    score = 5
    comments = []
    if inst_trans is not None:
        if inst_trans >= 5:
            score += 3; comments.append(f"機関投資家買い増し+{inst_trans:.1f}%（強い支持）")
        elif inst_trans >= 1:
            score += 2; comments.append(f"機関投資家買い増し+{inst_trans:.1f}%")
        elif inst_trans >= 0:
            score += 1; comments.append(f"機関投資家微増+{inst_trans:.1f}%")
        elif inst_trans >= -3:
            score -= 1; comments.append(f"機関投資家微減{inst_trans:.1f}%")
        else:
            score -= 2; comments.append(f"機関投資家売り{inst_trans:.1f}%（要注意）")
    if inst_own is not None:
        if inst_own > 80:
            score -= 1; comments.append(f"機関投資家保有率{inst_own:.1f}%（過剰保有）")
        elif inst_own > 40:
            comments.append(f"機関投資家保有率{inst_own:.1f}%（適正）")
        else:
            score += 1; comments.append(f"機関投資家保有率{inst_own:.1f}%（まだ余地あり）")
    if insider_trans is not None:
        if insider_trans > 0:
            score += 1; comments.append(f"インサイダー買い+{insider_trans:.1f}%")
        elif insider_trans < -5:
            score -= 1; comments.append(f"インサイダー売り{insider_trans:.1f}%")
    return max(1, min(10, score)), "、".join(comments) if comments else "機関投資家データなし"

def get_market_direction():
    try:
        spy = yf.Ticker("SPY")
        hist = spy.history(period="3mo")
        if hist.empty:
            return 6, "市場データ取得失敗"
        current = hist["Close"].iloc[-1]
        ma50 = hist["Close"].rolling(50).mean().iloc[-1] if len(hist) >= 50 else hist["Close"].mean()
        one_month_ago = hist["Close"].iloc[-22] if len(hist) >= 22 else hist["Close"].iloc[0]
        one_month_ret = (current / one_month_ago - 1) * 100
        if current > ma50 and one_month_ret > 3:
            return 9, f"S&P500は強気相場（SMA50上方、1ヶ月+{one_month_ret:.1f}%）"
        elif current > ma50 and one_month_ret > 0:
            return 7, f"S&P500は上昇トレンド（SMA50上方、1ヶ月+{one_month_ret:.1f}%）"
        elif current > ma50:
            return 6, f"S&P500はSMA50上方だが勢い弱め（1ヶ月{one_month_ret:.1f}%）"
        elif one_month_ret > -5:
            return 4, f"S&P500は調整局面（SMA50割れ、1ヶ月{one_month_ret:.1f}%）"
        else:
            return 2, f"S&P500は弱気相場（SMA50割れ、1ヶ月{one_month_ret:.1f}%）"
    except Exception as e:
        return 5, f"市場方向性データ取得エラー: {e}"

def calculate_rs_normalized(rs_list):
    valid = [(t, r) for t, r in rs_list if r is not None]
    if not valid:
        return {t: 50 for t, _ in rs_list}
    sorted_valid = sorted(valid, key=lambda x: x[1])
    n = len(sorted_valid)
    rs_map = {}
    for rank, (ticker, _) in enumerate(sorted_valid):
        rs_map[ticker] = max(1, min(99, int((rank + 1) / n * 99)))
    for ticker, _ in rs_list:
        if ticker not in rs_map:
            rs_map[ticker] = 50
    return rs_map

def determine_chart_pattern(week52_high_dist):
    if week52_high_dist is None:
        return "上昇トレンド"
    dist = abs(week52_high_dist)
    if dist <= 3:
        return "ブレイクアウト（52週高値更新）"
    elif dist <= 8:
        return "カップウィズハンドル / フラットベース"
    elif dist <= 15:
        return "アセンディングベース / 押し目"
    elif dist <= 25:
        return "ディープベース形成中"
    else:
        return "下降トレンド / 様子見"

def calculate_entry_points(price, week52_high, ma50, ma200):
    entries = []
    if week52_high:
        pivot = round(week52_high * 1.01, 2)
        entries.append({
            "label": "Breakout Entry (52W High)",
            "price": pivot,
            "range": f"${week52_high:.2f}〜${week52_high * 1.02:.2f}",
            "timing": f"52週高値${week52_high:.2f}を出来高を伴って上抜けた時点。ピボット${pivot:.2f}での指値推奨。",
            "riskReward": 3.0
        })
    if ma50 and price:
        entries.append({
            "label": "Pullback to 50-day MA",
            "price": round(ma50, 2),
            "range": f"${ma50 * 0.97:.2f}〜${ma50 * 1.03:.2f}",
            "timing": f"50日移動平均（${ma50:.2f}）への押し目。出来高減少後の反発時。",
            "riskReward": 4.0
        })
    if ma200 and price:
        entries.append({
            "label": "Deep Pullback (200-day MA)",
            "price": round(ma200, 2),
            "range": f"${ma200 * 0.97:.2f}〜${ma200 * 1.03:.2f}",
            "timing": f"200日移動平均（${ma200:.2f}）への深押し。長期上昇トレンド確認後。",
            "riskReward": 5.0
        })
    return entries

def calculate_canslim(stock_data_list):
    m_score, m_comment = get_market_direction()
    rs_list = [(s["ticker"], s.get("yf", {}).get("rs_vs_spy")) for s in stock_data_list]
    rs_map = calculate_rs_normalized(rs_list)

    results = []
    for stock in stock_data_list:
        ticker = stock["ticker"]
        yf_data = stock.get("yf", {})
        try:
            eps_qoq = stock.get("eps_qoq")
            eps_yoy = stock.get("eps_yoy")
            eps_next_y = stock.get("eps_next_y")
            eps_next_5y = stock.get("eps_next_5y")
            sales_qoq = stock.get("sales_qoq")
            market_cap_b = stock.get("market_cap_b")
            short_float = stock.get("short_float")
            volume = stock.get("volume")
            avg_volume = stock.get("avg_volume")
            shares_float_str = stock.get("shares_float", "N/A")
            inst_trans = stock.get("inst_trans")
            inst_own = stock.get("inst_own")
            insider_trans = stock.get("insider_trans")
            sma50 = stock.get("sma50")
            sma200 = stock.get("sma200")
            week52_high_dist = stock.get("week52_high_dist")
            week52_high = stock.get("week52_high") or yf_data.get("fiftyTwoWeekHigh")
            price = stock.get("price") or yf_data.get("regularMarketPrice")
            change_pct = stock.get("change_pct")
            rs_vs_spy = yf_data.get("rs_vs_spy")
            stock_1y_return = yf_data.get("stock_1y_return")
            recent_news = stock.get("recent_news", [])
            ma50 = yf_data.get("fiftyDayAverage")
            ma200 = yf_data.get("twoHundredDayAverage")
            target_price = stock.get("target_price") or yf_data.get("targetMeanPrice")
            analyst_recom = stock.get("analyst_recom") or yf_data.get("recommendationMean")
            roe = stock.get("roe")
            roa = stock.get("roa")

            c_score, c_comment = score_c(eps_qoq)
            a_score, a_comment = score_a(eps_yoy, eps_next_y, eps_next_5y)
            n_score, n_comment = score_n(week52_high_dist, recent_news)
            s_score, s_comment = score_s(market_cap_b, short_float, volume, avg_volume, shares_float_str)
            l_score, l_comment = score_l(rs_vs_spy, sma50, sma200, stock_1y_return)
            i_score, i_comment = score_i(inst_trans, inst_own, insider_trans)

            total_score = round((c_score + a_score + n_score + s_score + l_score + i_score + m_score) / 7, 1)
            rs_score_norm = rs_map.get(ticker, 50)
            chart_pattern = determine_chart_pattern(week52_high_dist)
            entry_points = calculate_entry_points(price, week52_high, ma50, ma200)

            monthly_labels = yf_data.get("monthlyLabels", [])
            monthly_prices = yf_data.get("monthlyPrices", [])
            monthly_volumes = yf_data.get("monthlyVolumes", [])

            # Build MA arrays from monthly prices
            ma5_arr, ma25_arr, ma75_arr = [], [], []
            for j in range(len(monthly_prices)):
                ma5_arr.append(round(sum(monthly_prices[max(0,j-4):j+1]) / min(5, j+1), 2))
                ma25_arr.append(round(sum(monthly_prices[max(0,j-24):j+1]) / min(25, j+1), 2))
                ma75_arr.append(round(sum(monthly_prices[max(0,j-74):j+1]) / min(75, j+1), 2))

            if n_score >= 8 and total_score >= 7:
                buy_rec = "🟢 ピボット付近→今が買い時"
            elif n_score >= 6 and total_score >= 6:
                buy_rec = "🟡 押し目待ち→次のベース待ち"
            else:
                buy_rec = "⏳ 様子見→条件未達"

            # Build sector string
            sector_str = stock.get("sector", "N/A")
            if yf_data.get("sector") and yf_data.get("industry"):
                sector_str = yf_data["sector"] + " / " + yf_data["industry"]

            result = {
                "rank": 0,
                "code": ticker,
                "name": yf_data.get("longName") or stock.get("name", ticker),
                "market": stock.get("market", "NASDAQ"),
                "sector": sector_str,
                "price": price,
                "change": f"{'+' if (change_pct or 0) >= 0 else ''}{change_pct:.2f}%" if change_pct is not None else "N/A",
                "currency": "USD",
                "totalScore": total_score,
                "buyRecommendation": buy_rec,
                "canslim": {
                    "C": {"score": c_score, "label": "C — Current Quarterly EPS Growth", "comment": c_comment + (f"。売上高Q/Q {'+' if (sales_qoq or 0) >= 0 else ''}{sales_qoq:.1f}%" if sales_qoq else "")},
                    "A": {"score": a_score, "label": "A — Annual EPS Growth", "comment": a_comment + (f"。ROE {roe:.1f}%" if roe else "") + (f"、ROA {roa:.1f}%" if roa else "")},
                    "N": {"score": n_score, "label": "N — New Products / New 52W High", "comment": n_comment + (f"。直近ニュース: {recent_news[0][:60]}..." if recent_news else "")},
                    "S": {"score": s_score, "label": "S — Supply/Demand", "comment": s_comment},
                    "L": {"score": l_score, "label": "L — Leader in Industry", "comment": l_comment},
                    "I": {"score": i_score, "label": "I — Institutional Sponsorship", "comment": i_comment + (f"。アナリスト推奨{analyst_recom:.2f}" if analyst_recom else "") + (f"、目標株価${target_price:.2f}" if target_price else "")},
                    "M": {"score": m_score, "label": "M — Market Direction", "comment": m_comment}
                },
                "chartAnalysis": {
                    "baseType": chart_pattern,
                    "baseDescription": f"{chart_pattern}パターン。52週高値${week52_high:.2f}から{abs(week52_high_dist):.1f}%の位置。" if week52_high and week52_high_dist else "チャートデータ不足",
                    "pivotPoint": round(week52_high * 1.01, 2) if week52_high else None,
                    "pivotDescription": f"52週高値${week52_high:.2f}の1%上、${week52_high * 1.01:.2f}がピボットポイント。" if week52_high else "N/A",
                    "breakoutVolume": f"直近出来高{volume/1e6:.1f}M株（平均{avg_volume/1e6:.1f}M株の{volume/avg_volume:.2f}倍）" if volume and avg_volume else "出来高データなし",
                    "rsScore": rs_score_norm,
                    "rsDescription": f"S&P500比{'+' if (rs_vs_spy or 0) >= 0 else ''}{rs_vs_spy:.1f}%（過去1年）" if rs_vs_spy is not None else "RSデータなし",
                    "volumePattern": "出来高パターン分析中",
                    "overallChartRating": "★★★★☆" if total_score >= 7 else "★★★☆☆",
                    "buyTiming": entry_points[0]["timing"] if entry_points else "エントリーポイント算出不可",
                    "caution": f"Short Float {short_float:.1f}%に注意。" if short_float and short_float > 15 else "標準的なリスク管理を適用。"
                },
                "currentPrice": price,
                "ma5": round(ma50 * 0.98, 2) if ma50 else None,
                "ma25": round(ma50, 2) if ma50 else None,
                "ma75": round(ma200, 2) if ma200 else None,
                "entryPoints": entry_points,
                "stopLoss": {
                    "price": round(entry_points[0]["price"] * 0.93, 2) if entry_points else None,
                    "desc": f"Breakout entry: ${entry_points[0]['price'] * 0.93:.2f} (pivot -7%)" if entry_points else "N/A"
                },
                "targetPrice": target_price,
                "targetBasis": f"Analyst consensus ${target_price:.2f}" if target_price else "N/A",
                "riskReward": entry_points[0]["riskReward"] if entry_points else 2.0,
                "chartData": {
                    "labels": monthly_labels[-12:],
                    "prices": monthly_prices[-12:],
                    "ma5": ma5_arr[-12:],
                    "ma25": ma25_arr[-12:],
                    "ma75": ma75_arr[-12:],
                    "volumes": monthly_volumes[-12:]
                }
            }
            results.append(result)
        except Exception as e:
            import traceback
            print(f"Error calculating CANSLIM for {ticker}: {e}", file=sys.stderr)
            traceback.print_exc(file=sys.stderr)
            continue

    results.sort(key=lambda x: x["totalScore"], reverse=True)
    for i, r in enumerate(results):
        r["rank"] = i + 1

    return results

if __name__ == "__main__":
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as f:
            stock_data = json.load(f)
    else:
        stock_data = json.load(sys.stdin)

    results = calculate_canslim(stock_data)
    print(json.dumps(results, ensure_ascii=False, indent=2))
