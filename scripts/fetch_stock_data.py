#!/usr/bin/env python3
"""
Fetch detailed stock data from Finviz + yfinance for each ticker.
Retrieves: EPS growth, Sales growth, 52W High/Low, RS, institutional data, MA, price history.
"""
import requests
from bs4 import BeautifulSoup
import json
import sys
import time
import yfinance as yf

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
}

def parse_pct(val):
    if not val or val == '-':
        return None
    try:
        return float(val.replace('%', '').replace(',', '').strip())
    except:
        return None

def parse_float(val):
    if not val or val == '-':
        return None
    try:
        return float(val.replace(',', '').replace('$', '').strip())
    except:
        return None

def parse_market_cap(val):
    if not val or val == '-':
        return None
    try:
        val = val.strip()
        if val.endswith('B'):
            return float(val[:-1])
        elif val.endswith('M'):
            return float(val[:-1]) / 1000
        elif val.endswith('T'):
            return float(val[:-1]) * 1000
        return float(val)
    except:
        return None

def fetch_finviz_data(ticker):
    url = f"https://finviz.com/quote.ashx?t={ticker}&p=d"
    try:
        resp = requests.get(url, headers=HEADERS, timeout=20)
        resp.raise_for_status()
    except Exception as e:
        print(f"Error fetching {ticker}: {e}", file=sys.stderr)
        return None

    soup = BeautifulSoup(resp.text, "html.parser")
    data = {"ticker": ticker}

    try:
        data["name"] = soup.select_one("h2.quote-header_ticker-wrapper_company").text.strip()
    except:
        data["name"] = ticker

    try:
        sector_info = soup.select("a.tab-link[href*='sec_']")
        data["sector"] = " / ".join([s.text.strip() for s in sector_info[:2]]) if sector_info else "N/A"
    except:
        data["sector"] = "N/A"

    try:
        exchange_el = soup.select_one("span.exchange")
        data["market"] = exchange_el.text.strip() if exchange_el else "NASDAQ"
    except:
        data["market"] = "NASDAQ"

    table_data = {}
    try:
        rows = soup.select("table.snapshot-table2 tr")
        for row in rows:
            cells = row.select("td")
            for i in range(0, len(cells) - 1, 2):
                key = cells[i].text.strip()
                val = cells[i+1].text.strip()
                table_data[key] = val
    except Exception as e:
        print(f"Error parsing table for {ticker}: {e}", file=sys.stderr)

    data["price"] = parse_float(table_data.get("Price"))
    data["change_pct"] = parse_pct(table_data.get("Change"))
    data["market_cap_b"] = parse_market_cap(table_data.get("Market Cap"))
    data["eps_qoq"] = parse_pct(table_data.get("EPS Q/Q"))
    data["eps_yoy"] = parse_pct(table_data.get("EPS this Y"))
    data["eps_next_y"] = parse_pct(table_data.get("EPS next Y"))
    data["eps_next_5y"] = parse_pct(table_data.get("EPS next 5Y"))
    data["sales_qoq"] = parse_pct(table_data.get("Sales Q/Q"))
    data["sales_past_5y"] = parse_pct(table_data.get("Sales past 5Y"))
    data["roe"] = parse_pct(table_data.get("ROE"))
    data["roa"] = parse_pct(table_data.get("ROA"))
    data["pe"] = parse_float(table_data.get("P/E"))
    data["forward_pe"] = parse_float(table_data.get("Forward P/E"))
    data["peg"] = parse_float(table_data.get("PEG"))
    data["short_float"] = parse_pct(table_data.get("Short Float"))
    data["short_ratio"] = parse_float(table_data.get("Short Ratio"))
    data["inst_own"] = parse_pct(table_data.get("Inst Own"))
    data["inst_trans"] = parse_pct(table_data.get("Inst Trans"))
    data["insider_own"] = parse_pct(table_data.get("Insider Own"))
    data["insider_trans"] = parse_pct(table_data.get("Insider Trans"))
    data["avg_volume"] = parse_float(table_data.get("Avg Volume"))
    data["volume"] = parse_float(table_data.get("Volume"))
    data["sma50"] = parse_pct(table_data.get("SMA50"))
    data["sma200"] = parse_pct(table_data.get("SMA200"))
    data["rsi"] = parse_float(table_data.get("RSI (14)"))
    data["target_price"] = parse_float(table_data.get("Target Price"))
    data["analyst_recom"] = parse_float(table_data.get("Recom"))
    data["shares_float"] = table_data.get("Shs Float", "N/A")
    data["shares_outstand"] = table_data.get("Shs Outstand", "N/A")
    data["dividend"] = table_data.get("Dividend", "-")
    data["beta"] = parse_float(table_data.get("Beta"))

    # 52W High/Low distance
    w52_high_raw = table_data.get("52W High", "")
    try:
        w52_high_dist = parse_pct(w52_high_raw)
        if w52_high_dist is not None and data["price"]:
            data["week52_high"] = round(data["price"] / (1 + w52_high_dist / 100), 2)
            data["week52_high_dist"] = w52_high_dist
        else:
            data["week52_high"] = None
            data["week52_high_dist"] = None
    except:
        data["week52_high"] = None
        data["week52_high_dist"] = None

    w52_low_raw = table_data.get("52W Low", "")
    try:
        w52_low_dist = parse_pct(w52_low_raw)
        if w52_low_dist is not None and data["price"]:
            data["week52_low"] = round(data["price"] / (1 + w52_low_dist / 100), 2)
        else:
            data["week52_low"] = None
    except:
        data["week52_low"] = None

    try:
        news_rows = soup.select("table#news-table tr")
        news = []
        for row in news_rows[:5]:
            link = row.select_one("a")
            if link:
                news.append(link.text.strip())
        data["recent_news"] = news
    except:
        data["recent_news"] = []

    return data

def fetch_yfinance_data(ticker):
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        result = {}
        result["longName"] = info.get("longName", ticker)
        result["sector"] = info.get("sector", "N/A")
        result["industry"] = info.get("industry", "N/A")
        result["exchange"] = info.get("exchange", "NASDAQ")
        result["fiftyDayAverage"] = info.get("fiftyDayAverage")
        result["twoHundredDayAverage"] = info.get("twoHundredDayAverage")
        result["fiftyTwoWeekHigh"] = info.get("fiftyTwoWeekHigh")
        result["fiftyTwoWeekLow"] = info.get("fiftyTwoWeekLow")
        result["marketCap"] = info.get("marketCap")
        result["floatShares"] = info.get("floatShares")
        result["sharesOutstanding"] = info.get("sharesOutstanding")
        result["shortRatio"] = info.get("shortRatio")
        result["heldPercentInstitutions"] = info.get("heldPercentInstitutions")
        result["regularMarketPrice"] = info.get("regularMarketPrice") or info.get("currentPrice")
        result["regularMarketChangePercent"] = info.get("regularMarketChangePercent")
        result["trailingPE"] = info.get("trailingPE")
        result["forwardPE"] = info.get("forwardPE")
        result["pegRatio"] = info.get("pegRatio")
        result["returnOnEquity"] = info.get("returnOnEquity")
        result["returnOnAssets"] = info.get("returnOnAssets")
        result["revenueGrowth"] = info.get("revenueGrowth")
        result["earningsGrowth"] = info.get("earningsGrowth")
        result["targetMeanPrice"] = info.get("targetMeanPrice")
        result["recommendationMean"] = info.get("recommendationMean")

        hist = stock.history(period="1y", interval="1mo")
        if not hist.empty:
            result["monthlyPrices"] = [round(p, 2) for p in hist["Close"].tolist()]
            result["monthlyVolumes"] = [round(v / 1e6, 2) for v in hist["Volume"].tolist()]
            result["monthlyLabels"] = [d.strftime("%b %y") for d in hist.index]
        else:
            result["monthlyPrices"] = []
            result["monthlyVolumes"] = []
            result["monthlyLabels"] = []

        # RS vs SPY
        try:
            spy = yf.Ticker("SPY")
            stock_hist_rs = stock.history(period="1y")
            spy_hist_rs = spy.history(period="1y")
            if not stock_hist_rs.empty and not spy_hist_rs.empty:
                stock_ret = (stock_hist_rs["Close"].iloc[-1] / stock_hist_rs["Close"].iloc[0] - 1) * 100
                spy_ret = (spy_hist_rs["Close"].iloc[-1] / spy_hist_rs["Close"].iloc[0] - 1) * 100
                result["rs_vs_spy"] = round(stock_ret - spy_ret, 2)
                result["stock_1y_return"] = round(stock_ret, 2)
                result["spy_1y_return"] = round(spy_ret, 2)
            else:
                result["rs_vs_spy"] = None
                result["stock_1y_return"] = None
        except:
            result["rs_vs_spy"] = None
            result["stock_1y_return"] = None

        return result
    except Exception as e:
        print(f"yfinance error for {ticker}: {e}", file=sys.stderr)
        return {}

def fetch_all(tickers):
    results = []
    for i, ticker in enumerate(tickers):
        print(f"[{i+1}/{len(tickers)}] Fetching {ticker}...", file=sys.stderr)
        finviz = fetch_finviz_data(ticker)
        if not finviz:
            continue
        yf_data = fetch_yfinance_data(ticker)
        combined = {**finviz, "yf": yf_data}
        results.append(combined)
        time.sleep(0.8)
    return results

if __name__ == "__main__":
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as f:
            tickers = json.load(f)
    else:
        tickers = json.load(sys.stdin)

    if isinstance(tickers, list):
        data = fetch_all(tickers)
        print(json.dumps(data, ensure_ascii=False, indent=2))
    else:
        print("Error: input must be a JSON array of ticker strings", file=sys.stderr)
        sys.exit(1)
