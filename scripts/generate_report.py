#!/usr/bin/env python3
"""
Generates the final data.js file from the CANSLIM analysis results.
Outputs data compatible with the existing index.html schema.
"""
import sys
import json
import os
from datetime import datetime

# In GitHub Actions, REPO_DIR is set to the workspace root via env var
# Locally, auto-detect from script location
REPO_DIR = os.environ.get("REPO_DIR", os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def generate_report(canslim_results):
    """
    Generates the data.js file content from CANSLIM analysis results.
    Results are already sorted by totalScore from calculate_canslim.py.
    """
    # Keep top N stocks (default: all, but cap at 5 for display)
    top_stocks = canslim_results[:3]

    report_date = datetime.now().strftime("%Y年%m月%d日")

    us_stocks_json = json.dumps(top_stocks, indent=2, ensure_ascii=False)
    output = f"""// 自動生成ファイル - {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
// CANSLIM Bot (Manus) - 米国株専用

const reportDate = "{report_date}";

const usStocks = {us_stocks_json};
"""

    return output

if __name__ == "__main__":
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as f:
            canslim_results = json.load(f)
    else:
        canslim_results = json.load(sys.stdin)

    if canslim_results:
        report_content = generate_report(canslim_results)
        output_path = os.path.join(REPO_DIR, "data.js")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(report_content)
        print(f"data.js generated successfully at {output_path}", file=sys.stderr)
    else:
        print("No results to generate report from.", file=sys.stderr)
        sys.exit(1)
