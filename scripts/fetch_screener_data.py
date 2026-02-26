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
    
    # GitHub ActionsのSecretsから取得したセッション情報
    sessionid = os.environ.get("TRADINGVIEW_SESSIONID")
    sessionid_sign = os.environ.get("TRADINGVIEW_SESSIONID_SIGN")
    
    if not sessionid or not sessionid_sign:
        print("Error: TRADINGVIEW_SESSIONID or TRADINGVIEW_SESSIONID_SIGN not set", file=sys.stderr)
        return []

    url = "https://scanner.tradingview.com/america/scan"
    
    # 保存済みスクリーナーを適用するためのペイロード
    # フィルター条件はサーバー側に保存されているため、IDを指定する
    payload = {
        "filter": [],
        "options": {"lang": "ja"},
        "markets": ["america"],
        "symbols": {"query": {"types": []}, "tickers": []},
        "columns": ["base_currency_logoid", "currency", "description", "exchange", "name", "type", "subtype", "update_mode"],
        "sort": {"sortBy": "name", "sortOrder": "asc"},
        "range": [0, 100],
        "preset": SCREENER_ID
    }
    
    cookies = {
        "sessionid": sessionid,
        "sessionid_sign": sessionid_sign
    }
    
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        print(f"Fetching TradingView screener {SCREENER_ID}...", file=sys.stderr)
        response = requests.post(url, json=payload, cookies=cookies, headers=headers, timeout=15)
        response.raise_for_status()
        
        data = response.json()
        tickers = []
        
        for item in data.get("data", []):
            # item["s"] は "NASDAQ:ANAB" のような形式
            symbol_full = item.get("s", "")
            if ":" in symbol_full:
                ticker = symbol_full.split(":")[1]
                tickers.append(ticker)
        
        print(f"Successfully fetched {len(tickers)} tickers: {tickers}", file=sys.stderr)
        return tickers
        
    except Exception as e:
        print(f"Error fetching from TradingView: {e}", file=sys.stderr)
        # 失敗した場合は空リストを返す
        return []

def main():
    tickers = fetch_tickers_from_tradingview()
    
    # フィルタリング (念のため)
    tickers = [t for t in tickers if len(t) <= 5 and t.isalpha()]
    
    # 出力
    print(json.dumps(tickers))

    # 後続のスクリプトのために中間ファイルを保存
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_dir = os.path.dirname(script_dir)
    screener_data = [{"ticker": t} for t in tickers]
    with open(os.path.join(repo_dir, "screener_data.json"), "w") as f:
        json.dump(screener_data, f, indent=2)

if __name__ == "__main__":
    main()
