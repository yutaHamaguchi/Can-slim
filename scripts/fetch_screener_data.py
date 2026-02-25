#!/usr/bin/env python3
"""
Fetch US stock tickers from Finviz screener using CANSLIM criteria.
Criteria:
  - US stocks only (geo_usa)
  - Small to Mid cap (cap_midsmall)
  - EPS Q/Q growth > 25% (fa_epsqoq_o25)
  - EPS Y/Y growth > 25% (fa_epsyoy_o25)
  - Sales Q/Q growth > 25% (fa_salesqoq_o25)
  - Average volume > 200K (sh_avgvol_o200)
  - 52-week high within 15% (ta_highlow52w_b15h)
  - Sorted by volume descending
"""
import requests
from bs4 import BeautifulSoup
import json
import sys
import time
import re

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

SCREENER_URL = (
    "https://finviz.com/screener.ashx?v=111"
    "&f=cap_midsmall,fa_epsqoq_o25,fa_epsyoy_o25,fa_salesqoq_o25,"
    "geo_usa,sh_avgvol_o200,ta_highlow52w_b15h"
    "&ft=4&o=-volume"
)

# Exclude REITs and financial instruments that don't fit CANSLIM
EXCLUDE_TICKERS = {'ORC', 'EFC', 'NLY', 'AGNC', 'STWD', 'BXMT'}

def fetch_tickers():
    tickers = []
    seen = set()
    page = 1

    while True:
        url = SCREENER_URL + f"&r={1 + (page-1)*20}"
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            resp.raise_for_status()
        except Exception as e:
            print(f"Error fetching page {page}: {e}", file=sys.stderr)
            break

        soup = BeautifulSoup(resp.text, "html.parser")

        # Extract tickers from href attribute (most reliable method)
        ticker_links = soup.find_all('a', href=re.compile(r'quote\.ashx\?t=[A-Z]+\b'))
        page_tickers = []
        for a in ticker_links:
            href = a.get('href', '')
            m = re.search(r'quote\.ashx\?t=([A-Z]{1,5})\b', href)
            if m:
                t = m.group(1)
                if t not in seen and t not in EXCLUDE_TICKERS:
                    seen.add(t)
                    page_tickers.append(t)

        if not page_tickers:
            break

        tickers.extend(page_tickers)
        print(f"Page {page}: found {len(page_tickers)} unique tickers", file=sys.stderr)

        # Check if there's a next page
        next_btn = soup.select_one("a#screener-next-page")
        if not next_btn or len(page_tickers) < 20:
            break

        page += 1
        time.sleep(1.5)

    return tickers

if __name__ == "__main__":
    tickers = fetch_tickers()
    print(f"Total tickers found: {len(tickers)}", file=sys.stderr)
    print(json.dumps(tickers))
