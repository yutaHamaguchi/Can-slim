// CANSLIM デイリーレポート データ
// 生成日時: 2026-02-24 21:15:10
// 自動生成ファイル - 手動編集不要

const reportDate = "2026年02月24日";

const marketSummary = {
  "nikkei225": {
    "price": 58199.9,
    "change": 877.97,
    "changeRate": 1.53,
    "trend": "上昇"
  },
  "topix": {
    "price": null,
    "trend": "上昇"
  },
  "sp500": {
    "price": 5700.0,
    "changeRate": 0.75,
    "trend": "上昇"
  },
  "usdJpy": {
    "price": 155.75,
    "change": -0.14
  },
  "marketCondition": "強気相場",
  "marketComment": "日経平均は+1.5%の上昇で58,000円台を維持。米国市場も堅調で、CANSLIM投資に適した環境。"
};

const domesticStocks = [
  {
    "code": "4588",
    "name": "オンコリス",
    "market": "グロース",
    "price": "2,779",
    "change": "+471",
    "changeRate": "+20.41%",
    "sector": "医薬品",
    "marketCap": 814.0,
    "per": null,
    "pbr": null,
    "roe": null,
    "creditRatio": null,
    "foreignRatio": null,
    "finance": {
      "epsQuarters": [
        -50.2,
        -37.0,
        -52.9,
        -18.2
      ],
      "epsAnnual": [
        -66.3,
        -108.9,
        -77.2,
        -80.0
      ],
      "salesQuarters": [
        63.0,
        31.0,
        28.0,
        0.0
      ],
      "epsQoQGrowth": -35.7
    },
    "canslimScores": {
      "C": 2,
      "A": 10,
      "N": 10,
      "S": 7,
      "L": 10,
      "I": 3,
      "M": 7,
      "total": 7.0,
      "details": {
        "C": [
          "EPS Q/Q: -35.7% (要注意)"
        ],
        "A": [
          "3期以上連続成長確認"
        ],
        "N": [
          "52週高値更新中",
          "本日+20.4%の大幅高（新材料あり）"
        ],
        "S": [
          "出来高比1.5x（強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア99（市場最強クラス）",
          "優先業種（医薬品）"
        ],
        "I": [
          "外国人持株比率データなし"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 2769.0,
      "ma5": 2423.4,
      "ma25": 2012.12,
      "ma75": 1410.29,
      "rsScore": 99,
      "baseType": "上昇トレンド",
      "baseMaturity": 100,
      "pivotPoint": 2945.25,
      "volumeRatio": 1.51,
      "atr": 251.57,
      "week52High": 2805.0,
      "week52Low": 458.0,
      "visualComment": "バイオ医薬品銘柄として急騰中。本日+20%超の大幅高。ただし75日線からの乖離率が大きく、短期的な過熱感がある。抗ウイルス薬の開発進捗が材料か。押し目買いを狙うなら5日線付近まで調整を待ちたい。",
      "visualScore": 7
    },
    "buyStrategy": {
      "currentPrice": 2769.0,
      "buyPoints": {
        "aggressive": {
          "price": 2423.4,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 2012.12,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 1410.29,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 2945.25,
      "stopLoss": 2391.64,
      "targetPrice": 3506.25,
      "rrRatio": 1.95,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -6.0
    }
  },
  {
    "code": "3723",
    "name": "ファルコム",
    "market": "グロース",
    "price": "2,369",
    "change": "+138",
    "changeRate": "+6.19%",
    "sector": "情報・通信",
    "marketCap": 245.0,
    "per": null,
    "pbr": null,
    "roe": null,
    "creditRatio": null,
    "foreignRatio": null,
    "finance": {
      "epsQuarters": [
        46.3,
        34.7,
        4.3,
        29.1
      ],
      "epsAnnual": [
        100.0,
        88.7,
        82.9,
        87.9
      ],
      "salesQuarters": [
        1138.0,
        1013.0,
        604.0,
        693.0
      ],
      "epsQoQGrowth": 33.4
    },
    "canslimScores": {
      "C": 8,
      "A": 10,
      "N": 8,
      "S": 5,
      "L": 8,
      "I": 3,
      "M": 7,
      "total": 7.2,
      "details": {
        "C": [
          "EPS Q/Q: +33.4% (良好)"
        ],
        "A": [
          "3期以上連続成長確認"
        ],
        "N": [
          "52週高値更新中",
          "本日+6.2%の上昇"
        ],
        "S": [
          "出来高比0.3x（低め）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア80（強い）",
          "優先業種（情報・通信）"
        ],
        "I": [
          "外国人持株比率データなし"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 2383.0,
      "ma5": 2272.6,
      "ma25": 1850.84,
      "ma75": 1643.53,
      "rsScore": 80,
      "baseType": "ダブルボトム",
      "baseMaturity": 100,
      "pivotPoint": 2502.15,
      "volumeRatio": 0.31,
      "atr": 107.29,
      "week52High": 2383.0,
      "week52Low": 1035.28,
      "visualComment": "ゲーム会社として着実な上昇トレンド。移動平均線が全てゴールデンクロス形成済みで健全な上昇。出来高は少ないが、ピボット付近での推移。EPS成長率33%と好調。",
      "visualScore": 8
    },
    "buyStrategy": {
      "currentPrice": 2383.0,
      "buyPoints": {
        "aggressive": {
          "price": 2272.6,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 1850.84,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 1643.53,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 2502.15,
      "stopLoss": 2222.06,
      "targetPrice": 2978.75,
      "rrRatio": 3.7,
      "recommendedAction": "🟢 今が買い時",
      "actionCode": "BUY",
      "deviationFromPivot": -4.8
    }
  },
  {
    "code": "3063",
    "name": "Ｊグループ",
    "market": "グロース",
    "price": "871",
    "change": "+25",
    "changeRate": "+2.96%",
    "sector": null,
    "marketCap": 108.0,
    "per": null,
    "pbr": null,
    "roe": null,
    "creditRatio": null,
    "foreignRatio": null,
    "finance": {
      "epsQuarters": [
        -40.3,
        10.6,
        -4.8,
        9.4
      ],
      "epsAnnual": [
        2.67,
        4.83,
        -623.0,
        -4.0
      ],
      "salesQuarters": [
        4431.0,
        5328.0,
        5426.0,
        7660.0
      ],
      "epsQoQGrowth": -480.2
    },
    "canslimScores": {
      "C": 2,
      "A": 10,
      "N": 7,
      "S": 7,
      "L": 2,
      "I": 3,
      "M": 7,
      "total": 5.5,
      "details": {
        "C": [
          "EPS Q/Q: -480.2% (要注意)"
        ],
        "A": [
          "3期以上連続成長確認"
        ],
        "N": [
          "52週高値更新中",
          "本日+3.0%"
        ],
        "S": [
          "出来高比1.7x（強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア45（弱い）"
        ],
        "I": [
          "外国人持株比率データなし"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 870.0,
      "ma5": 858.6,
      "ma25": 841.56,
      "ma75": 806.83,
      "rsScore": 45,
      "baseType": "フラットベース",
      "baseMaturity": 100,
      "pivotPoint": 918.75,
      "volumeRatio": 1.69,
      "atr": 8.64,
      "week52High": 875.0,
      "week52Low": 618.43,
      "visualComment": "飲食系グループ会社として安定した上昇。フラットベース形成中で、ブレイクアウト待ちの状態。時価総額が小さく、流動性リスクに注意。",
      "visualScore": 6
    },
    "buyStrategy": {
      "currentPrice": 870.0,
      "buyPoints": {
        "aggressive": {
          "price": 858.6,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 841.56,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 806.83,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 918.75,
      "stopLoss": 857.04,
      "targetPrice": 1093.75,
      "rrRatio": 17.26,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -5.3
    }
  },
  {
    "code": "5252",
    "name": "日本ナレッジ",
    "market": "グロース",
    "price": "925",
    "change": "+57",
    "changeRate": "+6.57%",
    "sector": "情報・通信",
    "marketCap": 38.4,
    "per": null,
    "pbr": null,
    "roe": null,
    "creditRatio": null,
    "foreignRatio": null,
    "finance": {
      "epsQuarters": [],
      "epsAnnual": [
        159.0,
        81.0,
        2.0
      ],
      "salesQuarters": [],
      "epsQoQGrowth": null
    },
    "canslimScores": {
      "C": 4,
      "A": 7,
      "N": 8,
      "S": 7,
      "L": 10,
      "I": 3,
      "M": 7,
      "total": 6.7,
      "details": {
        "C": [
          "EPS成長率データなし"
        ],
        "A": [
          "2期連続成長"
        ],
        "N": [
          "52週高値更新中",
          "本日+6.6%の上昇"
        ],
        "S": [
          "出来高比1.5x（強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア90（市場最強クラス）",
          "優先業種（情報・通信）"
        ],
        "I": [
          "外国人持株比率データなし"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 925.0,
      "ma5": 851.0,
      "ma25": 707.04,
      "ma75": 597.32,
      "rsScore": 90,
      "baseType": "ダブルボトム",
      "baseMaturity": 100,
      "pivotPoint": 971.25,
      "volumeRatio": 1.54,
      "atr": 32.86,
      "week52High": 925.0,
      "week52Low": 278.33,
      "visualComment": "IT・情報通信系の小型株として急騰中。本日+6.6%の上昇。ただし時価総額が38億円と非常に小さく、流動性リスクに注意。ピボット付近での推移で買いタイミングを検討。",
      "visualScore": 7
    },
    "buyStrategy": {
      "currentPrice": 925.0,
      "buyPoints": {
        "aggressive": {
          "price": 851.0,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 707.04,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 597.32,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 971.25,
      "stopLoss": 875.71,
      "targetPrice": 1156.25,
      "rrRatio": 4.69,
      "recommendedAction": "🟢 今が買い時",
      "actionCode": "BUY",
      "deviationFromPivot": -4.8
    }
  },
  {
    "code": "7409",
    "name": "エアロエッジ",
    "market": "グロース",
    "price": "5,610",
    "change": "+490",
    "changeRate": "+9.57%",
    "sector": "機械",
    "marketCap": 669.0,
    "per": null,
    "pbr": null,
    "roe": null,
    "creditRatio": null,
    "foreignRatio": null,
    "finance": {
      "epsQuarters": [
        38.4,
        48.0,
        46.3,
        13.3
      ],
      "epsAnnual": [
        0.7,
        67.3,
        61.1,
        63.8
      ],
      "salesQuarters": [
        1527.0,
        1895.0,
        1908.0,
        1455.0
      ],
      "epsQoQGrowth": -20.0
    },
    "canslimScores": {
      "C": 2,
      "A": 10,
      "N": 8,
      "S": 5,
      "L": 10,
      "I": 3,
      "M": 7,
      "total": 6.7,
      "details": {
        "C": [
          "EPS Q/Q: -20.0% (要注意)"
        ],
        "A": [
          "3期以上連続成長確認"
        ],
        "N": [
          "52週高値更新中",
          "本日+9.6%の上昇"
        ],
        "S": [
          "出来高比0.8x（低め）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア99（市場最強クラス）",
          "優先業種（機械）"
        ],
        "I": [
          "外国人持株比率データなし"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 5660.0,
      "ma5": 5352.0,
      "ma25": 4078.6,
      "ma75": 2861.89,
      "rsScore": 99,
      "baseType": "上昇トレンド",
      "baseMaturity": 100,
      "pivotPoint": 5943.0,
      "volumeRatio": 0.78,
      "atr": 368.93,
      "week52High": 5660.0,
      "week52Low": 575.0,
      "visualComment": "航空宇宙・防衛関連の機械メーカーとして強い上昇トレンド。本日+9.6%の大幅高。RS99と市場最強クラスの相対強度。ピボット付近での買いを検討。",
      "visualScore": 8
    },
    "buyStrategy": {
      "currentPrice": 5660.0,
      "buyPoints": {
        "aggressive": {
          "price": 5352.0,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 4078.6,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 2861.89,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 5943.0,
      "stopLoss": 5106.6,
      "targetPrice": 7075.0,
      "rrRatio": 2.56,
      "recommendedAction": "🟢 今が買い時",
      "actionCode": "BUY",
      "deviationFromPivot": -4.8
    }
  }
];

const usStocks = [
  {
    "ticker": "VIR",
    "company": "Vir Biotechnology Inc",
    "price": "9.49",
    "change": "27.73%",
    "sector": null,
    "industry": null,
    "marketCap": "1.32B",
    "country": null,
    "finvizData": {
      "epsQoQ": "59.67%",
      "epsYoY": "17.32%",
      "salesQoQ": "417.78%",
      "instTrans": "2.70%",
      "shortFloat": "12.92%",
      "perfYear": "0.21%",
      "description": null
    },
    "canslimScores": {
      "C": 10,
      "A": 5,
      "N": 10,
      "S": 8,
      "L": 2,
      "I": 7,
      "M": 7,
      "total": 7.0,
      "details": {
        "C": [
          "EPS Q/Q: +59.7% (優秀)"
        ],
        "A": [
          "EPS Y/Y: +17.3% (普通)"
        ],
        "N": [
          "52週高値更新中",
          "本日+27.7%の大幅高（新材料あり）"
        ],
        "S": [
          "出来高比9.8x（非常に強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア45（弱い）"
        ],
        "I": [
          "外国人持株比率データなし",
          "機関投資家小幅買い増し+2.7%",
          "ショートフロート12.9%（中程度）"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 9.49,
      "ma5": 8.03,
      "ma25": 7.51,
      "ma75": 6.52,
      "rsScore": 45,
      "baseType": "上昇トレンド",
      "baseMaturity": 100,
      "pivotPoint": 10.8,
      "volumeRatio": 9.75,
      "atr": 0.65,
      "week52High": 10.29,
      "week52Low": 4.16
    },
    "buyStrategy": {
      "currentPrice": 9.49,
      "buyPoints": {
        "aggressive": {
          "price": 8.03,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 7.51,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 6.52,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 10.8,
      "stopLoss": 8.51,
      "targetPrice": 12.86,
      "rrRatio": 3.44,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -12.1
    }
  },
  {
    "ticker": "ZETA",
    "company": "Zeta Global Holdings Corp",
    "price": "16.98",
    "change": "13.35%",
    "sector": null,
    "industry": null,
    "marketCap": "4.18B",
    "country": null,
    "finvizData": {
      "epsQoQ": "82.38%",
      "epsYoY": "85.20%",
      "salesQoQ": "25.67%",
      "instTrans": "0.09%",
      "shortFloat": "10.93%",
      "perfYear": "-21.50%",
      "description": null
    },
    "canslimScores": {
      "C": 10,
      "A": 10,
      "N": 10,
      "S": 7,
      "L": 2,
      "I": 7,
      "M": 7,
      "total": 7.6,
      "details": {
        "C": [
          "EPS Q/Q: +82.4% (優秀)"
        ],
        "A": [
          "EPS Y/Y: +85.2% (優秀)"
        ],
        "N": [
          "52週高値更新中",
          "本日+13.3%の大幅高（新材料あり）"
        ],
        "S": [
          "出来高比1.9x（強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア30（弱い）"
        ],
        "I": [
          "外国人持株比率データなし",
          "機関投資家小幅買い増し+0.1%",
          "ショートフロート10.9%（中程度）"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 16.98,
      "ma5": 15.96,
      "ma25": 17.83,
      "ma75": 18.96,
      "rsScore": 30,
      "baseType": "上昇トレンド",
      "baseMaturity": 69,
      "pivotPoint": 22.28,
      "volumeRatio": 1.95,
      "atr": 1.18,
      "week52High": 24.9,
      "week52Low": 10.69
    },
    "buyStrategy": {
      "currentPrice": 16.98,
      "buyPoints": {
        "aggressive": {
          "price": 15.96,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 17.83,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 18.96,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 22.28,
      "stopLoss": 15.21,
      "targetPrice": 31.12,
      "rrRatio": 7.99,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -23.8
    }
  },
  {
    "ticker": "POET",
    "company": "POET Technologies Inc",
    "price": "6.11",
    "change": "10.69%",
    "sector": null,
    "industry": null,
    "marketCap": "933.07M",
    "country": null,
    "finvizData": {
      "epsQoQ": "46.65%",
      "epsYoY": "-6.99%",
      "salesQoQ": "7998.62%",
      "instTrans": "2.29%",
      "shortFloat": "12.25%",
      "perfYear": "46.88%",
      "description": null
    },
    "canslimScores": {
      "C": 8,
      "A": 2,
      "N": 10,
      "S": 5,
      "L": 6,
      "I": 7,
      "M": 7,
      "total": 6.4,
      "details": {
        "C": [
          "EPS Q/Q: +46.6% (良好)"
        ],
        "A": [
          "EPS Y/Y: -7.0% (要注意)"
        ],
        "N": [
          "52週高値更新中",
          "本日+10.7%の大幅高（新材料あり）"
        ],
        "S": [
          "出来高比0.9x（低め）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア80（強い）"
        ],
        "I": [
          "外国人持株比率データなし",
          "機関投資家小幅買い増し+2.3%",
          "ショートフロート12.2%（中程度）"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 6.11,
      "ma5": 5.69,
      "ma25": 6.13,
      "ma75": 6.12,
      "rsScore": 80,
      "baseType": "上昇トレンド",
      "baseMaturity": 66,
      "pivotPoint": 7.43,
      "volumeRatio": 0.88,
      "atr": 0.45,
      "week52High": 9.41,
      "week52Low": 3.09
    },
    "buyStrategy": {
      "currentPrice": 6.11,
      "buyPoints": {
        "aggressive": {
          "price": 5.69,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 6.13,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 6.12,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 7.43,
      "stopLoss": 5.44,
      "targetPrice": 11.76,
      "rrRatio": 8.43,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -17.8
    }
  },
  {
    "ticker": "INTA",
    "company": "Intapp Inc",
    "price": "21.32",
    "change": "9.50%",
    "sector": null,
    "industry": null,
    "marketCap": "1.71B",
    "country": null,
    "finvizData": {
      "epsQoQ": "44.04%",
      "epsYoY": "0.51%",
      "salesQoQ": "15.67%",
      "instTrans": "-2.80%",
      "shortFloat": "3.05%",
      "perfYear": "-67.65%",
      "description": null
    },
    "canslimScores": {
      "C": 8,
      "A": 5,
      "N": 8,
      "S": 5,
      "L": 2,
      "I": 6,
      "M": 7,
      "total": 5.9,
      "details": {
        "C": [
          "EPS Q/Q: +44.0% (良好)"
        ],
        "A": [
          "EPS Y/Y: +0.5% (普通)"
        ],
        "N": [
          "52週高値更新中",
          "本日+9.5%の上昇"
        ],
        "S": [
          "出来高比0.9x（低め）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア15（弱い）"
        ],
        "I": [
          "外国人持株比率データなし",
          "機関投資家売り越し-2.8%",
          "ショートフロート3.0%（低い）"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 21.32,
      "ma5": 21.52,
      "ma25": 28.85,
      "ma75": 38.35,
      "rsScore": 15,
      "baseType": "上昇トレンド",
      "baseMaturity": 32,
      "pivotPoint": 41.23,
      "volumeRatio": 0.91,
      "atr": 2.23,
      "week52High": 67.76,
      "week52Low": 19.24
    },
    "buyStrategy": {
      "currentPrice": 21.32,
      "buyPoints": {
        "aggressive": {
          "price": 21.52,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 28.85,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 38.35,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 41.23,
      "stopLoss": 17.97,
      "targetPrice": 84.7,
      "rrRatio": 18.92,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -48.3
    }
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices Inc",
    "price": "80.85",
    "change": "8.77%",
    "sector": null,
    "industry": null,
    "marketCap": "348.65B",
    "country": null,
    "finvizData": {
      "epsQoQ": "210.61%",
      "epsYoY": "163.27%",
      "salesQoQ": "34.11%",
      "instTrans": "1.98%",
      "shortFloat": "2.08%",
      "perfYear": "97.80%",
      "description": null
    },
    "canslimScores": {
      "C": 10,
      "A": 10,
      "N": 8,
      "S": 7,
      "L": 8,
      "I": 8,
      "M": 7,
      "total": 8.3,
      "details": {
        "C": [
          "EPS Q/Q: +210.6% (優秀)"
        ],
        "A": [
          "EPS Y/Y: +163.3% (優秀)"
        ],
        "N": [
          "52週高値更新中",
          "本日+8.8%の上昇"
        ],
        "S": [
          "出来高比1.9x（強い）",
          "信用倍率データなし"
        ],
        "L": [
          "RSスコア90（市場最強クラス）"
        ],
        "I": [
          "外国人持株比率データなし",
          "機関投資家小幅買い増し+2.0%",
          "ショートフロート2.1%（低い）"
        ],
        "M": [
          "日経平均+1.5%（上昇トレンド）",
          "S&P500+0.75%（上昇トレンド）"
        ]
      }
    },
    "chartAnalysis": {
      "currentPrice": 213.84,
      "ma5": 202.82,
      "ma25": 224.13,
      "ma75": 221.72,
      "rsScore": 90,
      "baseType": "上昇トレンド",
      "baseMaturity": 80,
      "pivotPoint": 273.56,
      "volumeRatio": 1.92,
      "atr": 12.97,
      "week52High": 267.08,
      "week52Low": 76.48
    },
    "buyStrategy": {
      "currentPrice": 213.84,
      "buyPoints": {
        "aggressive": {
          "price": 202.82,
          "type": "第1押し目（積極的）",
          "description": "5日MA付近"
        },
        "standard": {
          "price": 224.13,
          "type": "第2押し目（標準）",
          "description": "25日MA付近"
        },
        "conservative": {
          "price": 221.72,
          "type": "第3押し目（保守的）",
          "description": "75日MA付近"
        }
      },
      "pivotPoint": 273.56,
      "stopLoss": 194.38,
      "targetPrice": 333.85,
      "rrRatio": 6.17,
      "recommendedAction": "⏳ 押し目待ち",
      "actionCode": "WAIT",
      "deviationFromPivot": -21.8
    }
  }
];

// エクスポート（モジュール環境用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { reportDate, marketSummary, domesticStocks, usStocks };
}
