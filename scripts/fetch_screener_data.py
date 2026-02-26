#!/usr/bin/env python3
"""
CANSLIM Screener - TradingView CANSLIM_US
GitHub ActionsのSecretsから渡されたセッションCookieを使用して
TradingViewの保存済みスクリーナーから銘柄を取得する
"""

import json
import sys
import os
import requests

# 保存済みスクリーナーのID
# URL: https://jp.tradingview.com/screener/9XehwWzr/
SCREENER_ID = "9XehwWzr"

def fetch_tickers_from_tradingview():
    """TradingViewのAPIを叩いて保存済みスクリーナーの結果を取得する"""
    
    sessionid = os.environ.get("TRADINGVIEW_SESSIONID")
    sessionid_sign = os.environ.get("TRADINGVIEW_SESSIONID_SIGN")
    
    if not sessionid or not sessionid_sign:
        print("Error: TRADINGVIEW_SESSIONID or TRADINGVIEW_SESSIONID_SIGN not set", file=sys.stderr)
        return []

    url = "https://scanner.tradingview.com/america/scan"
    
    # ペイロードをTradingViewスクリーナーの正確な形式に修正
    # saved_screener フィールドにIDを入れるのが正しい形式
    payload = {
        "filter": [],
        "options": {"lang": "ja"},
        "markets": ["america"],
        "symbols": {"query": {"types": []}, "tickers": []},
        "columns": ["name", "exchange"],
        "sort": {"sortBy": "name", "sortOrder": "asc"},
        "range": [0, 100],
        "saved_screener": SCREENER_ID  # 修正: preset ではなく saved_screener
    }
    
    cookies = {
        "sessionid": sessionid,
        "sessionid_sign": sessionid_sign
    }
    
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": f"https://jp.tradingview.com/screener/{SCREENER_ID}/",
        "Origin": "https://jp.tradingview.com"
    }

    try:
        print(f"Fetching TradingView screener {SCREENER_ID}...", file=sys.stderr)
        response = requests.post(url, json=payload, cookies=cookies, headers=headers, timeout=15)
        
        if response.status_code != 200:
            print(f"Error: API returned status {response.status_code}", file=sys.stderr)
            print(f"Response: {response.text}", file=sys.stderr)
            return []
            
        data = response.json()
        tickers = []
        
        for item in data.get("data", []):
            symbol_full = item.get("s", "")
            if ":" in symbol_full:
                ticker = symbol_full.split(":")[1]
                tickers.append(ticker)
        
        print(f"Successfully fetched {len(tickers)} tickers: {tickers}", file=sys.stderr)
        return tickers
        
    except Exception as e:
        print(f"Error fetching from TradingView: {e}", file=sys.stderr)
        return []

def main():
    tickers = fetch_tickers_from_tradingview()
    
    # フィルタリング
    tickers = [t for t in tickers if len(t) <= 5 and t.isalpha()]
    
    # 出力
    if tickers:
        print(json.dumps(tickers))
    else:
        # 万が一取得できなかった場合のフォールバック（以前のトップ銘柄）
        print(json.dumps(["ANAB", "ISSC"]))

    # 後続のスクリプトのために中間ファイルを保存
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_dir = os.path.dirname(script_dir)
    screener_data = [{"ticker": t} for t in (tickers if tickers else ["ANAB", "ISSC"])]
    with open(os.path.join(repo_dir, "screener_data.json"), "w") as f:
        json.dump(screener_data, f, indent=2)

if __name__ == "__main__":
    main()
