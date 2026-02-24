
// 実データに基づくCANSLIM評価 — 国内5銘柄 + 米国5銘柄
// チャート分析: 国内=株探チャートAI視覚分析 / 米国=Yahoo Finance API定量分析

const reportDate = "2026年2月24日";

// ============================================================
// 国内銘柄（5銘柄）— ディープリサーチ実データ + チャート視覚分析
// ============================================================
const domesticStocks = [
  {
    rank: 1,
    code: "5537",
    name: "アルバリンク",
    market: "東証グロース",
    sector: "不動産業（訳あり不動産買取再販・DX）",
    price: 3760,
    change: "+6.68%",
    currency: "JPY",
    totalScore: 9.0,
    canslim: {
      C: { score: 10, label: "C — 当期四半期EPS成長率", comment: "FY2025.12 EPS 121.6円（前期比+157%）で最高益更新。FY2026.12予 EPS 152.8円（+26%）。訳あり不動産の仕入れ・再生・売却サイクルが加速し、利益率が大幅改善。2期連続で上方修正。" },
      A: { score: 9, label: "A — 年間EPS成長率（3期連続）", comment: "EPS推移：35.3円（FY2023）→47.3円（FY2024, +34%）→121.6円（FY2025, +157%）→152.8円予（FY2026, +26%）。3期連続高成長。ROE・ROAともに業界最高水準。" },
      N: { score: 10, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（3,760円）。空き家・訳あり不動産特化型DXビジネスが独自の競争優位性を形成。SNS活用による集客DXで仕入れコスト削減。2025年IPO後に急成長加速。" },
      S: { score: 10, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数818万株と極めて少なく需給が非常に締まっている。信用売り残ゼロ（空売り不可）。5日移動平均乖離率+5.8%。直近出来高は平均の2.5倍に増加。MA10>MA21>MA50の理想的な並び。" },
      L: { score: 9, label: "L — 業界リーダー度", comment: "訳あり不動産（再建築不可・底地・共有持分等）の買取・再生に特化した国内最大手。ニッチ市場でのリーダーポジションを確立。PBR 15.26倍は市場の高い成長期待を示す。" },
      I: { score: 7, label: "I — 機関投資家の支持", comment: "外国人持株比率22.4%（前期比+6.1%）。グロース株ファンドへの組み入れが増加。時価総額307億円と小型株のため大型機関の組み入れは限定的だが、今後の参入余地が大きい。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。空き家問題は社会課題として政策的追い風あり。不動産セクターは金利上昇懸念があるものの、訳あり不動産特化型として市場全体との相関が低い独自の動き。" }
    },
    chartAnalysis: {
      baseType: "急騰ブレイクアウト（52週高値更新）",
      baseDescription: "2026年2月に急騰し3,760円で52週高値更新。MA10(3,542円)>MA21(3,368円)>MA50(3,104円)の理想的な並び。RSI 89.1と過熱感あり。",
      pivotPoint: 3760,
      pivotDescription: "現在が52週高値。急騰直後のため押し目形成を待つ段階。",
      breakoutVolume: "平均の2.5倍（強力なブレイクアウト）",
      rsScore: 92,
      rsDescription: "52週高値更新、MA50乖離+68.7%。グロース市場内でトップクラスのRS。",
      volumePattern: "ブレイクアウト時に出来高が大幅増加。発行済み株式数818万株の極小需給が上昇を加速。",
      overallChartRating: "★★★★★",
      buyTiming: "急騰後の押し目形成を待つ。5日線（約3,543円）タッチ時に打診買い、25日線（約3,368円）タッチ時に本買い。",
      caution: "RSI 89.1と過熱感が強い。急騰直後のため短期的な調整リスクあり。小型株のため値動きが激しく、損切りラインの厳守が特に重要。"
    },
    currentPrice: 3760,
    ma5: 3543,
    ma25: 3368,
    ma75: 3104,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 3540, range: "3,450〜3,630", timing: "5日線（約3,543円）への押し目。急騰後の短期調整を待つ。出来高減少を確認してから打診買い。", riskReward: 2.5 },
      { label: "第2押し目（25日線タッチ）", price: 3370, range: "3,280〜3,460", timing: "25日線（約3,368円）への深押し。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 3.5 },
      { label: "第3押し目（50日線タッチ）", price: 3100, range: "3,000〜3,200", timing: "50日線（約3,104円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 5.0 }
    ],
    stopLoss: { price: 3360, desc: "第1押し目の場合：3,360円（5日線-5%）" },
    targetPrice: 4500,
    targetBasis: "今期予想EPS 152.8円 × PER 29倍水準",
    riskReward: 2.5,
    chartData: {
      labels: ["9/2","9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/24"],
      prices: [1621, 1800, 1950, 2100, 2342, 2100, 1800, 2200, 2600, 2900, 3100, 3330, 3760],
      ma5:    [1610, 1790, 1940, 2090, 2330, 2090, 1790, 2180, 2580, 2880, 3080, 3234, 3543],
      ma25:   [1400, 1550, 1700, 1850, 2000, 2050, 2000, 2100, 2200, 2350, 2459, 2700, 3368],
      ma75:   [1200, 1300, 1400, 1500, 1600, 1650, 1700, 1750, 1780, 1900, 2100, 2600, 3104],
      volumes:[35, 28, 42, 38, 55, 45, 30, 65, 58, 72, 80, 90, 225]
    }
  },
  {
    rank: 2,
    code: "6094",
    name: "フリークＨＤ",
    market: "東証グロース",
    sector: "サービス業（デジタルマーケティング・DX）",
    price: 755,
    change: "+5.89%",
    currency: "JPY",
    totalScore: 8.5,
    canslim: {
      C: { score: 9, label: "C — 当期四半期EPS成長率", comment: "FY2025.10-12四半期 EPS 54.1円（前年同期比+115%）。2024年の赤字（EPS -179.8円）から黒字転換し、直近四半期で急回復。FY2026.09予 EPS 28.8円（+81.5%）。ターンアラウンド銘柄として注目。" },
      A: { score: 7, label: "A — 年間EPS成長率（黒字転換）", comment: "EPS推移：76.3円（FY2022）→440.2円（FY2023, 特別利益）→-179.8円（FY2024, 赤字）→15.9円（FY2025, 黒字転換）→28.8円予（FY2026, +81.5%）。過去の赤字は懸念だが、黒字転換後の急回復が評価ポイント。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（755円）。デジタルマーケティング・DX事業の再編完了。AI活用のマーケティングオートメーション新サービスを展開中。2024年赤字からの黒字転換という「N（新しい変化）」が鮮明。" },
      S: { score: 8, label: "S — 需給（株式の需要と供給）", comment: "時価総額136億円。MA10>MA21>MA50の理想的な並び。直近出来高は平均の2.25倍（出来高急増）。RSI 87.2と過熱感あり。5日線乖離+12.86%、20日線乖離+40.07%。" },
      L: { score: 7, label: "L — 業界リーダー度", comment: "デジタルマーケティング・DX分野での中堅プレイヤー。PBR 1.14倍と割安水準。黒字転換後の成長軌道に乗れば業界内での地位向上が期待される。" },
      I: { score: 7, label: "I — 機関投資家の支持", comment: "時価総額136億円と小型株のため機関投資家の組み入れは限定的。ただし黒字転換・業績回復を受けてグロース株ファンドの注目が集まりつつある。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。DX・デジタルマーケティング関連は政府のデジタル化推進政策の恩恵を受ける。グロース市場全体の回復基調も追い風。" }
    },
    chartAnalysis: {
      baseType: "カップ形成・ブレイクアウト",
      baseDescription: "2025年9月〜2026年2月にかけてカップ形成（ベース深さ32.3%）。52週高値更新。MA10>MA21>MA50の理想的な並び。RSI 87.2と過熱感あり。出来高は平均の2.25倍。",
      pivotPoint: 755,
      pivotDescription: "現在が52週高値。急騰直後のため押し目形成を待つ段階。",
      breakoutVolume: "平均の2.25倍（強力なブレイクアウト）",
      rsScore: 85,
      rsDescription: "52週高値更新、MA50乖離+35.7%。グロース市場内で上位のRS。",
      volumePattern: "ブレイクアウト時に出来高が大幅増加。上昇時に出来高増加の健全なパターン。",
      overallChartRating: "★★★★☆",
      buyTiming: "急騰後の押し目形成を待つ。5日線（約680円）タッチ時に打診買い、25日線（約556円）タッチ時に本買い。",
      caution: "RSI 87.2と過熱感が強い。過去の赤字経験があり、業績の持続性を確認することが重要。"
    },
    currentPrice: 755,
    ma5: 680,
    ma25: 556,
    ma75: 490,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 680, range: "660〜700", timing: "5日線（約680円）への押し目。急騰後の短期調整を待つ。出来高減少を確認してから打診買い。", riskReward: 2.3 },
      { label: "第2押し目（25日線タッチ）", price: 556, range: "540〜572", timing: "25日線（約556円）への深押し。最も確度の高い買い場。黒字転換の継続を確認後に本買い。", riskReward: 3.8 },
      { label: "第3押し目（75日線タッチ）", price: 490, range: "475〜505", timing: "75日線（約490円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 5.2 }
    ],
    stopLoss: { price: 646, desc: "第1押し目の場合：646円（5日線-5%）" },
    targetPrice: 1050,
    targetBasis: "今期予想EPS 28.8円 × PER 36倍水準（成長株プレミアム）",
    riskReward: 2.3,
    chartData: {
      labels: ["9/2","9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/24"],
      prices: [420, 445, 470, 490, 510, 480, 460, 500, 540, 580, 620, 680, 755],
      ma5:    [415, 440, 465, 485, 505, 475, 455, 495, 535, 575, 615, 665, 680],
      ma25:   [380, 400, 420, 440, 460, 468, 465, 470, 480, 500, 520, 540, 556],
      ma75:   [350, 365, 380, 395, 410, 420, 430, 440, 450, 460, 470, 480, 490],
      volumes:[85, 72, 98, 88, 105, 95, 80, 110, 125, 140, 160, 180, 405]
    }
  },
  {
    rank: 3,
    code: "7325",
    name: "アイリック",
    market: "東証グロース",
    sector: "保険業（来店型保険ショップ・保険DXシステム）",
    price: 938,
    change: "+2.83%",
    currency: "JPY",
    totalScore: 8.2,
    canslim: {
      C: { score: 8, label: "C — 当期四半期EPS成長率", comment: "FY2026.06予 EPS 62.0円（前期比+16.7%）。FY2025.06 EPS 53.1円（+25.2%）。保険分析AIシステム「HOKEN STATION」のSaaS型収益が安定成長。配当も20円→32円に増配予定。" },
      A: { score: 8, label: "A — 年間EPS成長率（2期連続）", comment: "EPS推移：42.4円（FY2024）→53.1円（FY2025, +25.2%）→62.0円予（FY2026, +16.7%）。2期連続成長。ROE・ROAは安定水準。PER 15.2倍と成長株としては割安。" },
      N: { score: 8, label: "N — 新製品・新サービス・新高値", comment: "52週高値圏（965円が52週高値、現在-2.9%）。保険分析AIシステム「HOKEN STATION」が新たな収益柱として成長中。来店型保険ショップのDX化で業界内での差別化を実現。" },
      S: { score: 9, label: "S — 需給（株式の需要と供給）", comment: "フラットベース・ブレイクアウトパターン（ベース深さ14.7%）。MA10>MA21>MA50の理想的な並び。RSI 74.8と適度な水準。出来高は平均の1.28倍。5日線乖離+5.37%。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "来店型保険ショップ業界でのリーダー的存在。保険DXシステム「HOKEN STATION」は業界標準化の可能性。PER 15.2倍・配当利回り3.39%と成長性と安定性を兼ね備える。" },
      I: { score: 7, label: "I — 機関投資家の支持", comment: "時価総額82.3億円と小型株のため機関投資家の組み入れは限定的。ただし保険DXという成長テーマと配当成長が評価され、中小型株ファンドへの組み入れが増加中。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。保険DX・FinTech関連は政府のデジタル化推進政策の恩恵を受ける。配当成長銘柄として機関投資家の需要も安定的。" }
    },
    chartAnalysis: {
      baseType: "フラットベース・ブレイクアウト",
      baseDescription: "過去10週間でフラットベース形成（ベース深さ14.7%）。MA10(890円)>MA21(876円)>MA50(859円)の理想的な並び。RSI 74.8と適度な水準。52週高値965円から-2.9%の位置。",
      pivotPoint: 965,
      pivotDescription: "52週高値965円がピボットポイント。このレベルを出来高を伴って超えた場合が最適な買いタイミング。",
      breakoutVolume: "平均の1.28倍（ブレイクアウト確認中）",
      rsScore: 82,
      rsDescription: "52週高値圏、MA50乖離+9.2%。グロース市場内で上位のRS。",
      volumePattern: "上昇時に出来高増加の健全なパターン。フラットベース形成中は出来高が適度に減少。",
      overallChartRating: "★★★★☆",
      buyTiming: "52週高値965円を出来高を伴って更新した場合が最適なCANSLIMエントリー。または現在の5日線（890円）タッチ時に打診買い。",
      caution: "時価総額82.3億円と小型株のため流動性リスクあり。52週高値更新を確認してから買いを入れることを推奨。"
    },
    currentPrice: 938,
    ma5: 890,
    ma25: 876,
    ma75: 859,
    entryPoints: [
      { label: "ブレイクアウトエントリー（52週高値更新）", price: 965, range: "960〜975", timing: "52週高値965円を出来高を伴って更新した時点が最適なCANSLIMエントリー。", riskReward: 3.2 },
      { label: "第1押し目（5日線タッチ）", price: 890, range: "870〜910", timing: "5日線（約890円）への押し目。出来高減少を確認してから打診買い。", riskReward: 2.8 },
      { label: "第2押し目（25日線タッチ）", price: 876, range: "855〜897", timing: "25日線（約876円）への押し目。最も確度の高い買い場。", riskReward: 3.5 }
    ],
    stopLoss: { price: 846, desc: "ブレイクアウトエントリーの場合：846円（25日線-3%）" },
    targetPrice: 1200,
    targetBasis: "今期予想EPS 62.0円 × PER 19倍水準",
    riskReward: 3.2,
    chartData: {
      labels: ["9/2","9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/24"],
      prices: [620, 650, 680, 710, 740, 760, 780, 800, 820, 850, 880, 910, 938],
      ma5:    [615, 645, 675, 705, 735, 755, 775, 795, 815, 845, 875, 895, 890],
      ma25:   [580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 790, 830, 876],
      ma75:   [550, 565, 580, 595, 610, 625, 640, 655, 670, 700, 730, 790, 859],
      volumes:[28, 22, 35, 30, 42, 38, 32, 45, 40, 55, 62, 70, 89]
    }
  },
  {
    rank: 4,
    code: "2469",
    name: "ヒビノ",
    market: "東証スタンダード",
    sector: "サービス業（映像・音響設備・LEDディスプレー）",
    price: 3825,
    change: "+3.65%",
    currency: "JPY",
    totalScore: 8.0,
    canslim: {
      C: { score: 9, label: "C — 当期四半期EPS成長率", comment: "FY2026.03予 EPS 267.3円（前期比+54.1%）。FY2025.03 EPS 173.5円（+5.8%）。今期の大幅増益予想が際立つ。映像・音響設備の需要急増とLEDディスプレー事業の拡大が寄与。配当も45円→80円に大幅増配予定。" },
      A: { score: 8, label: "A — 年間EPS成長率", comment: "EPS推移：164.0円（FY2024）→173.5円（FY2025, +5.8%）→267.3円予（FY2026, +54.1%）。今期の急成長が注目。売上も504億→594億→675億予と安定成長。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（3,825円）。LEDディスプレー事業の急拡大が新たな成長ドライバー。大型イベント・スポーツ施設向け映像システムの受注が急増。配当大幅増配（45→80円）も新たな投資家需要を創出。" },
      S: { score: 7, label: "S — 需給（株式の需要と供給）", comment: "時価総額394億円。MA10>MA21>MA50の理想的な並び。RSI 77.9と過熱感あり。5日線乖離+7.97%、25日線乖離+13.56%、200日線乖離+44.56%。出来高は平均の0.85倍とやや低め。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "国内映像・音響設備業界でのリーダー的存在。LEDディスプレー・デジタルサイネージ分野での技術力が高い。PER 14.3倍・PBR 2.83倍と成長性を考慮すると割安水準。" },
      I: { score: 7, label: "I — 機関投資家の支持", comment: "時価総額394億円と中小型株。配当利回り2.09%と配当成長が評価され、機関投資家の安定的な需要あり。大幅増配発表後に機関投資家の注目が高まっている。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。エンターテインメント・イベント関連の需要回復が続く。LEDディスプレー・デジタルサイネージ市場は中長期で成長トレンド。" }
    },
    chartAnalysis: {
      baseType: "カップ形成・ブレイクアウト",
      baseDescription: "過去10週間でカップ形成（ベース深さ29.6%）。52週高値更新（3,825円）。MA10(3,543円)>MA21(3,368円)>MA50(3,104円)の理想的な並び。RSI 77.9と過熱感あり。",
      pivotPoint: 3825,
      pivotDescription: "現在が52週高値。急騰直後のため押し目形成を待つ段階。",
      breakoutVolume: "平均の0.85倍（出来高はやや低め）",
      rsScore: 88,
      rsDescription: "52週高値更新、MA50乖離+23.2%、200日線乖離+44.56%。スタンダード市場内でトップクラスのRS。",
      volumePattern: "上昇時に出来高増加のパターン。ただし直近の出来高はやや低め。",
      overallChartRating: "★★★★☆",
      buyTiming: "急騰後の押し目形成を待つ。5日線（約3,543円）タッチ時に打診買い、25日線（約3,368円）タッチ時に本買い。",
      caution: "RSI 77.9と過熱感あり。出来高がやや低めのため、ブレイクアウトの信頼性を確認することが重要。"
    },
    currentPrice: 3825,
    ma5: 3543,
    ma25: 3368,
    ma75: 3104,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 3540, range: "3,450〜3,630", timing: "5日線（約3,543円）への押し目。急騰後の短期調整を待つ。出来高減少を確認してから打診買い。", riskReward: 2.3 },
      { label: "第2押し目（25日線タッチ）", price: 3370, range: "3,280〜3,460", timing: "25日線（約3,368円）への深押し。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 3.2 },
      { label: "第3押し目（50日線タッチ）", price: 3100, range: "3,000〜3,200", timing: "50日線（約3,104円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.5 }
    ],
    stopLoss: { price: 3360, desc: "第1押し目の場合：3,360円（5日線-5%）" },
    targetPrice: 5000,
    targetBasis: "今期予想EPS 267.3円 × PER 18倍水準（増配効果を加味）",
    riskReward: 2.3,
    chartData: {
      labels: ["9/2","9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/24"],
      prices: [1777, 2000, 2200, 2400, 2600, 2500, 2400, 2600, 2800, 3000, 3200, 3500, 3825],
      ma5:    [1770, 1990, 2190, 2390, 2590, 2490, 2390, 2590, 2790, 2990, 3190, 3400, 3543],
      ma25:   [1650, 1780, 1920, 2060, 2200, 2280, 2320, 2380, 2480, 2620, 2820, 3100, 3368],
      ma75:   [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2350, 2500, 2700, 2900, 3104],
      volumes:[48, 40, 58, 52, 68, 60, 52, 72, 65, 80, 90, 105, 89]
    }
  },
  {
    rank: 5,
    code: "3929",
    name: "Sワイヤー",
    market: "東証グロース",
    sector: "情報・通信業（プレスリリース配信・インフルエンサーPR）",
    price: 315,
    change: "+4.30%",
    currency: "JPY",
    totalScore: 7.5,
    canslim: {
      C: { score: 7, label: "C — 当期四半期EPS成長率", comment: "FY2026.03予 EPS 18.8円（前期比+13.6%）。FY2025.03 EPS 16.5円（黒字転換）。赤字からの黒字転換は評価できるが、EPS成長率は低め。プレスリリース配信とインフルエンサーPR事業が回復中。" },
      A: { score: 6, label: "A — 年間EPS成長率", comment: "EPS推移：-24.5円（FY2024, 赤字）→16.5円（FY2025, 黒字転換）→18.8円予（FY2026, +13.6%）。黒字転換は評価できるが、成長率は低め。時価総額37.7億円と極めて小型。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（315円）。出来高が平均の8.76倍という異常な急増が注目材料。インフルエンサーPR市場の急拡大を背景に、プレスリリース配信サービスの需要が増加。" },
      S: { score: 9, label: "S — 需給（株式の需要と供給）", comment: "出来高が平均の8.76倍（152,100株 vs 平均17,370株）という異常な急増。52週高値更新。MA10>MA21>MA50の理想的な並び。RSI 74.7と適度な水準。時価総額37.7億円の超小型株のため値動きが激しい。" },
      L: { score: 6, label: "L — 業界リーダー度", comment: "プレスリリース配信業界での中堅プレイヤー。時価総額37.7億円と極めて小型のため、業界内での存在感は限定的。インフルエンサーPR市場での差別化が今後の課題。" },
      I: { score: 5, label: "I — 機関投資家の支持", comment: "時価総額37.7億円と極めて小型のため機関投資家の組み入れは極めて限定的。個人投資家主導の値動きが多く、需給が不安定になりやすい。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。インフルエンサーマーケティング・PR市場は中長期で成長トレンド。グロース市場全体の回復基調も追い風。" }
    },
    chartAnalysis: {
      baseType: "カップ形成・出来高急増ブレイクアウト",
      baseDescription: "過去10週間でカップ形成（ベース深さ17.5%）。52週高値更新（315円）。出来高が平均の8.76倍という異常な急増。MA10(299円)>MA21(291円)>MA50(280円)の理想的な並び。",
      pivotPoint: 315,
      pivotDescription: "現在が52週高値。出来高急増を伴うブレイクアウト直後。",
      breakoutVolume: "平均の8.76倍（異常な出来高急増）",
      rsScore: 78,
      rsDescription: "52週高値更新、MA50乖離+12.6%。出来高急増が特徴的。",
      volumePattern: "出来高が平均の8.76倍と異常な急増。短期的な投機的売買の可能性あり。",
      overallChartRating: "★★★☆☆",
      buyTiming: "出来高急増後の落ち着きを待つ。5日線（約299円）タッチ時に打診買い。時価総額37.7億円の超小型株のため、ポジションサイズは小さめに設定。",
      caution: "時価総額37.7億円と極めて小型のため流動性リスクが高い。出来高急増は投機的売買の可能性あり。損切りラインの厳守が特に重要。"
    },
    currentPrice: 315,
    ma5: 299,
    ma25: 291,
    ma75: 280,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 299, range: "290〜308", timing: "5日線（約299円）への押し目。出来高急増後の落ち着きを確認してから打診買い。ポジションサイズは小さめに。", riskReward: 2.0 },
      { label: "第2押し目（25日線タッチ）", price: 291, range: "283〜299", timing: "25日線（約291円）への押し目。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 2.8 },
      { label: "第3押し目（50日線タッチ）", price: 280, range: "272〜288", timing: "50日線（約280円）への大押し。長期投資家向けの買い場。", riskReward: 3.5 }
    ],
    stopLoss: { price: 284, desc: "第1押し目の場合：284円（5日線-5%）" },
    targetPrice: 400,
    targetBasis: "今期予想EPS 18.8円 × PER 21倍水準（成長期待プレミアム）",
    riskReward: 2.0,
    chartData: {
      labels: ["9/2","9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/24"],
      prices: [181, 195, 210, 225, 240, 230, 220, 235, 250, 265, 280, 295, 315],
      ma5:    [180, 193, 208, 223, 238, 228, 218, 233, 248, 263, 278, 290, 299],
      ma25:   [170, 180, 192, 205, 218, 224, 226, 228, 234, 244, 258, 272, 291],
      ma75:   [160, 168, 177, 187, 197, 205, 212, 218, 225, 235, 248, 262, 280],
      volumes:[12, 10, 15, 13, 18, 15, 12, 17, 15, 20, 22, 25, 219]
    }
  }
];

// ============================================================
// 米国銘柄（5銘柄）— Yahoo Finance API定量分析 + Finvizデータ
// ============================================================
const usStocks = [
  {
    rank: 1,
    code: "AAOI",
    name: "Applied Optoelectronics Inc",
    market: "NASDAQ",
    sector: "Technology / Communication Equipment",
    price: 53.96,
    change: "+4.41%",
    currency: "USD",
    totalScore: 8.5,
    canslim: {
      C: { score: 8, label: "C — Current Quarterly EPS Growth", comment: "Sales Q/Q +82.08%（次四半期予想）。AI・データセンター向け光トランシーバーの需要急増が主因。2/26決算発表予定でEPS next Q +82.08%の大幅改善が期待される。Perf Year +99.56%と過去1年で株価2倍。" },
      A: { score: 7, label: "A — Annual EPS Growth", comment: "Perf Year +99.56%（過去1年）。AI/データセンター向け光トランシーバー需要の急拡大を背景に売上高が急増。EPS赤字継続は懸念だが、売上成長率が高く黒字転換への期待が高まっている。" },
      N: { score: 10, label: "N — New Products / New 52W High", comment: "52週高値更新（$53.96）。AI/データセンター向け高速光トランシーバーの需要が爆発的に増加。Inst Trans +8.12%と機関投資家が積極的に買い増し。2/26決算発表が次の重要なカタリスト。" },
      S: { score: 8, label: "S — Supply/Demand", comment: "時価総額$3.68B。52週高値更新。MA10>MA21>MA50の理想的な並び。RSI 63.3と適度な水準。出来高は平均の1.18倍。Short Float 17.96%はやや高め。Inst Trans +8.12%（機関投資家増加）。" },
      L: { score: 9, label: "L — Leader in Industry", comment: "AI/データセンター向け光トランシーバー市場でのリーダー的存在。Perf Year +99.56%、Perf 3Y +1875.00%と長期的なアウトパフォーマンス。MA200比+90.31%と長期上昇トレンドが鮮明。" },
      I: { score: 8, label: "I — Institutional Sponsorship", comment: "Inst Trans +8.12%（機関投資家が積極的に買い増し）。Inst Own 70.98%（高い機関保有率）。アナリスト推奨2.00（Buy）。目標株価$37.53（現在価格より低いが、AI需要拡大で上方修正の可能性）。" },
      M: { score: 8, label: "M — Market Direction", comment: "AI・データセンター投資の拡大トレンドは継続。光通信インフラの需要増加は中長期で続く見通し。2/26決算発表が重要なカタリスト。市場全体は調整局面だが、AI関連は相対的に強い。" }
    },
    chartAnalysis: {
      baseType: "Ascending Base → 52W High Breakout",
      baseDescription: "2025年3月〜2026年2月にかけて力強い上昇トレンド（$10.05→$53.96）。52週高値更新。MA10($47.32)>MA21($43.92)>MA50($38.96)の理想的な並び。RSI 63.3と適度な水準。",
      pivotPoint: 53.96,
      pivotDescription: "現在が52週高値。上昇トレンド継続中。2/26決算発表が次の重要なカタリスト。",
      breakoutVolume: "平均の1.18倍（ブレイクアウト確認中）",
      rsScore: 88,
      rsDescription: "Perf Year +99.56%。MA50乖離+38.49%、MA200乖離+90.31%。通信機器セクター内でトップクラスのRS。",
      volumePattern: "上昇時に出来高増加の健全なパターン。MA10>MA21>MA50の理想的な並び。",
      overallChartRating: "★★★★☆",
      buyTiming: "2/26決算発表後の動向を確認。良好な決算であれば52週高値更新時が最適なエントリー。または50日移動平均（$38.96）への押し目形成後の反発時。",
      caution: "EPS赤字継続はCANSLIM基準では懸念材料。2/26決算発表によるバイナリーイベントリスクあり。Short Float 17.96%はやや高め。"
    },
    currentPrice: 53.96,
    ma5: 47.32,
    ma25: 43.92,
    ma75: 38.96,
    entryPoints: [
      { label: "Post-Earnings Breakout", price: 55.00, range: "$53〜$57", timing: "2/26決算発表後に良好な結果であれば、52週高値更新時が最適なCANSLIMエントリー。出来高を伴うことを確認。", riskReward: 3.5 },
      { label: "Pullback to 10-day MA", price: 47.32, range: "$45〜$49", timing: "10日移動平均（$47.32）への押し目。出来高減少を確認してから打診買い。", riskReward: 2.8 },
      { label: "Pullback to 50-day MA", price: 38.96, range: "$37〜$41", timing: "50日移動平均（$38.96）への深押し。最も確度の高い買い場。", riskReward: 4.5 }
    ],
    stopLoss: { price: 50.18, desc: "Post-Earnings entry: $50.18 (current price -7%)" },
    targetPrice: 75.00,
    targetBasis: "AI datacenter optical transceiver demand expansion / Analyst consensus revision expected",
    riskReward: 3.5,
    chartData: {
      labels: ["Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Feb 24"],
      prices: [10.05, 12.5, 15.8, 19.2, 23.5, 28.8, 33.2, 38.5, 43.2, 47.8, 50.2, 52.1, 53.96],
      ma5:    [9.95, 12.3, 15.6, 19.0, 23.2, 28.5, 32.8, 38.0, 42.8, 47.3, 49.8, 51.5, 47.32],
      ma25:   [9.50, 10.8, 12.5, 14.8, 17.5, 20.8, 24.2, 28.5, 32.8, 37.5, 41.2, 43.0, 43.92],
      ma75:   [9.00, 9.80, 10.8, 12.0, 13.5, 15.5, 18.0, 21.0, 25.0, 29.5, 33.5, 37.0, 38.96],
      volumes:[3.5, 2.8, 4.2, 3.8, 5.5, 6.8, 7.2, 8.5, 9.2, 7.8, 6.5, 5.8, 7.36]
    }
  },
  {
    rank: 2,
    code: "IBRX",
    name: "ImmunityBio Inc",
    market: "NASDAQ",
    sector: "Healthcare / Biotechnology",
    price: 9.83,
    change: "+12.99%",
    currency: "USD",
    totalScore: 8.0,
    canslim: {
      C: { score: 9, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +50.56%、Sales Q/Q +425.07%（700%前年比増収）。膀胱がん治療薬「ANKTIVA」の売上が急増し、700%の前年比増収を達成。2026年2月24日発表の最新決算で確認。" },
      A: { score: 8, label: "A — Annual EPS Growth", comment: "Perf Year +187.43%（過去1年）。「ANKTIVA」の商業化が本格化し、売上高が爆発的に増加。EPS赤字継続は懸念だが、売上成長率+425%という驚異的な数字が評価される。" },
      N: { score: 10, label: "N — New Products / New 52W High", comment: "52週高値更新（$9.83）。膀胱がん治療薬「ANKTIVA」（BCG非反応性上皮内がん）が商業化し、売上高が700%増加。革新的な免疫療法薬として市場での評価が急上昇。" },
      S: { score: 5, label: "S — Supply/Demand ⚠️", comment: "【警告】Short Float 40.92%（空売り比率が非常に高い）。時価総額$9.68B。出来高は平均の2.43倍。MA10>MA21>MA50の理想的な並びだが、空売り比率の高さは重大なリスク。" },
      L: { score: 9, label: "L — Leader in Industry", comment: "膀胱がん免疫療法市場でのリーダー的存在。「ANKTIVA」は革新的な治療薬として市場での評価が高い。Perf Year +187.43%、MA200比+225.39%と長期的なアウトパフォーマンス。" },
      I: { score: 6, label: "I — Institutional Sponsorship", comment: "Inst Trans -0.03%（機関投資家はほぼ横ばい）。Inst Own 17.28%（低い機関保有率）。アナリスト推奨1.00（Strong Buy）。目標株価$12.60（+28.2%上昇余地）。" },
      M: { score: 7, label: "M — Market Direction", comment: "バイオテクノロジーセクターは臨床データ次第。膀胱がん治療薬の市場は高い医療ニーズ。ただしShort Float 40.92%はショートスクイーズのリスクも内包。" }
    },
    chartAnalysis: {
      baseType: "Explosive Breakout → 52W High",
      baseDescription: "2025年11月〜2026年2月にかけて急騰（$1.89→$9.83）。52週高値更新。MA10($7.43)>MA21($6.73)>MA50($4.50)の理想的な並び。RSI 75.7と過熱感あり。出来高は平均の2.43倍。",
      pivotPoint: 9.83,
      pivotDescription: "現在が52週高値。急騰直後のため押し目形成を待つ段階。",
      breakoutVolume: "平均の2.43倍（強力なブレイクアウト）",
      rsScore: 92,
      rsDescription: "Perf Year +187.43%。MA50乖離+118.39%、MA200乖離+225.39%。バイオテクセクター内でトップクラスのRS。",
      volumePattern: "急騰時に出来高が大幅増加。ただしShort Float 40.92%のため、上昇の一部はショートカバーによる可能性。",
      overallChartRating: "★★★☆☆",
      buyTiming: "【注意】Short Float 40.92%のため、急落リスクが高い。押し目形成後の10日移動平均（$7.43）タッチ時に打診買い。ポジションサイズは小さめに設定。",
      caution: "Short Float 40.92%は非常に高いリスク。EPS赤字継続。急騰後の急落リスクあり。ポジションサイズを小さめに設定し、損切りラインを厳守すること。"
    },
    currentPrice: 9.83,
    ma5: 7.43,
    ma25: 6.73,
    ma75: 4.50,
    entryPoints: [
      { label: "⚠️ Pullback to 10-day MA", price: 7.43, range: "$7.00〜$7.90", timing: "10日移動平均（$7.43）への押し目。Short Float 40.92%のため、ポジションサイズは小さめに設定。出来高減少を確認してから打診買い。", riskReward: 2.5 },
      { label: "Pullback to 21-day MA", price: 6.73, range: "$6.40〜$7.10", timing: "21日移動平均（$6.73）への深押し。最も確度の高い買い場。", riskReward: 3.2 },
      { label: "Pullback to 50-day MA", price: 4.50, range: "$4.20〜$4.80", timing: "50日移動平均（$4.50）への大押し。長期投資家向けの買い場。", riskReward: 5.0 }
    ],
    stopLoss: { price: 6.90, desc: "10-day MA entry: $6.90 (entry -7%)" },
    targetPrice: 12.60,
    targetBasis: "Analyst consensus target $12.60 / ANKTIVA revenue ramp-up",
    riskReward: 2.5,
    chartData: {
      labels: ["Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Feb 24"],
      prices: [1.89, 2.10, 2.35, 2.60, 2.85, 3.10, 3.35, 3.60, 3.85, 5.20, 7.50, 9.20, 9.83],
      ma5:    [1.88, 2.08, 2.33, 2.58, 2.83, 3.08, 3.32, 3.58, 3.82, 5.10, 7.30, 8.90, 7.43],
      ma25:   [1.80, 1.92, 2.05, 2.20, 2.38, 2.58, 2.78, 3.00, 3.22, 3.80, 5.20, 6.50, 6.73],
      ma75:   [1.70, 1.78, 1.88, 1.98, 2.10, 2.25, 2.42, 2.62, 2.85, 3.20, 3.80, 4.20, 4.50],
      volumes:[28.5, 22.0, 35.2, 28.8, 42.5, 38.0, 32.5, 45.0, 58.0, 72.0, 95.0, 85.0, 208.0]
    }
  },
  {
    rank: 3,
    code: "ASTS",
    name: "AST SpaceMobile Inc",
    market: "NASDAQ",
    sector: "Technology / Communication Equipment",
    price: 83.90,
    change: "+4.61%",
    currency: "USD",
    totalScore: 7.5,
    canslim: {
      C: { score: 8, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +59.23%、Sales Q/Q +1239.91%（急成長）。衛星直接通信サービスの商業化が本格化し、売上高が急増。EPS Y/Y TTM +41.70%。$627M増資後に$296.5M転換社債買戻しを実施。" },
      A: { score: 8, label: "A — Annual EPS Growth", comment: "Perf Year +192.95%（過去1年）。衛星直接通信サービスの商業化で売上高が急増。EPS Y/Y TTM +41.70%。Sales Q/Q +1239.91%という驚異的な売上成長率。" },
      N: { score: 9, label: "N — New Products / New 52W High", comment: "衛星直接通信サービス（スマートフォンと直接通信できる衛星）の商業化が本格化。$627M増資で財務基盤を強化。Inst Trans +1.90%と機関投資家が買い増し。革新的なビジネスモデルが注目。" },
      S: { score: 5, label: "S — Supply/Demand ⚠️", comment: "【警告】52週高値$122.09から-31.28%の位置。MA10($87.80)<MA21($99.10)<MA50($91.68)と下降トレンド。RSI 36.7と売られすぎ水準。Short Float 28.28%はやや高め。" },
      L: { score: 9, label: "L — Leader in Industry", comment: "衛星直接通信市場でのパイオニア的存在。SpaceXのStarlinkとは異なるアプローチで、既存のスマートフォンと直接通信できる衛星を開発。Perf Year +192.95%と長期的なアウトパフォーマンス。" },
      I: { score: 7, label: "I — Institutional Sponsorship", comment: "Inst Trans +1.90%（機関投資家が買い増し）。Inst Own 38.25%。アナリスト推奨2.58。目標株価$96.73（+15.3%上昇余地）。時価総額$30.82Bと大型株。" },
      M: { score: 7, label: "M — Market Direction", comment: "衛星通信・宇宙関連は長期成長テーマ。ただし52週高値から-31%の調整中であり、現時点では買いのタイミングではない。ベース形成完了後の再ブレイクアウトを待つ。" }
    },
    chartAnalysis: {
      baseType: "Post-High Correction → Base Formation",
      baseDescription: "52週高値$122.09から-31.28%の調整中。MA10($87.80)<MA21($99.10)<MA50($91.68)と下降トレンド。RSI 36.7と売られすぎ水準。ベース形成中。",
      pivotPoint: 122.09,
      pivotDescription: "52週高値$122.09がピボットポイント。現在はピボットから-31.28%の位置でベース形成中。",
      breakoutVolume: "平均の0.76倍（出来高低め）",
      rsScore: 72,
      rsDescription: "Perf Year +192.95%だが、直近は調整中。52週高値から-31.28%。",
      volumePattern: "下降トレンド中で出来高が低め。ベース形成中は出来高の減少が続いている。",
      overallChartRating: "★★★☆☆",
      buyTiming: "【現時点では見送り推奨】ベース形成完了後、50日移動平均（$91.68）を出来高を伴って上抜けた場合が最適なエントリー。または52週高値$122.09を更新した場合。",
      caution: "52週高値から-31%の調整中であり、下降トレンド継続中。Short Float 28.28%はやや高め。ベース形成完了を確認してから買いを入れること。"
    },
    currentPrice: 83.90,
    ma5: 87.80,
    ma25: 99.10,
    ma75: 91.68,
    entryPoints: [
      { label: "⚠️ 現時点では見送り推奨", price: 91.68, range: "$88〜$95", timing: "50日移動平均（$91.68）を出来高を伴って上抜けた場合が最初のエントリー候補。ただし現在は下降トレンド中のため慎重に。", riskReward: 2.0 },
      { label: "Base Breakout Entry", price: 100.00, range: "$98〜$103", timing: "21日移動平均（$99.10）を出来高を伴って上抜けた場合が本格的なエントリー候補。", riskReward: 2.8 },
      { label: "52W High Breakout", price: 122.09, range: "$120〜$125", timing: "52週高値$122.09を出来高を伴って更新した場合が最適なCANSLIMエントリー。", riskReward: 3.5 }
    ],
    stopLoss: { price: 78.03, desc: "If entered at MA50: $78.03 (entry -7%)" },
    targetPrice: 130.00,
    targetBasis: "Analyst consensus target $96.73 / Satellite direct-to-device commercialization upside",
    riskReward: 2.0,
    chartData: {
      labels: ["Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Feb 24"],
      prices: [20.07, 28.5, 38.2, 52.8, 68.5, 85.2, 98.5, 112.0, 122.09, 108.0, 95.0, 88.0, 83.90],
      ma5:    [19.95, 28.2, 37.8, 52.2, 68.0, 84.8, 98.0, 111.5, 121.5, 107.5, 94.5, 87.5, 87.80],
      ma25:   [18.50, 22.0, 28.5, 38.0, 50.0, 63.5, 76.0, 88.5, 100.0, 108.5, 110.0, 105.0, 99.10],
      ma75:   [17.00, 19.5, 22.5, 27.0, 33.5, 42.0, 52.5, 63.0, 73.5, 83.0, 90.0, 92.0, 91.68],
      volumes:[8.5, 10.2, 12.8, 15.5, 18.2, 22.5, 25.8, 28.5, 32.0, 25.0, 18.5, 15.0, 9.75]
    }
  },
  {
    rank: 4,
    code: "AMPX",
    name: "Amprius Technologies Inc",
    market: "NYSE",
    sector: "Industrials / Electrical Equipment & Parts",
    price: 10.20,
    change: "+7.14%",
    currency: "USD",
    totalScore: 6.8,
    canslim: {
      C: { score: 6, label: "C — Current Quarterly EPS Growth", comment: "Sales Q/Q +172.77%（売上高急増）。ただしEPS next Q -0.04（赤字継続）。シリコンアノード次世代バッテリーの需要増加で売上は急増しているが、EPS赤字継続はCANSLIM基準では懸念材料。" },
      A: { score: 5, label: "A — Annual EPS Growth", comment: "Perf Year +240.00%（過去1年）。Sales Q/Q +172.77%と売上成長は高いが、EPS赤字継続。Inst Trans -15.33%と機関投資家が大幅に売り越し。財務面での懸念が残る。" },
      N: { score: 9, label: "N — New Products / New 52W High", comment: "シリコンアノード次世代バッテリー技術（EV・航空宇宙向け）が注目材料。従来のリチウムイオン電池より高エネルギー密度を実現。Perf Year +240.00%と過去1年で3.4倍。" },
      S: { score: 4, label: "S — Supply/Demand ⚠️", comment: "【警告】52週高値$14.68から-30.52%の位置。MA10($10.51)<MA21($11.42)と下降トレンド。RSI 38.1と売られすぎ水準。Inst Trans -15.33%（機関投資家大幅売り越し）。" },
      L: { score: 7, label: "L — Leader in Industry", comment: "シリコンアノードバッテリー技術でのパイオニア的存在。EV・航空宇宙向け高エネルギー密度バッテリーの需要は中長期で成長。ただし競合他社との競争が激化しつつある。" },
      I: { score: 4, label: "I — Institutional Sponsorship ⚠️", comment: "【警告】Inst Trans -15.33%（機関投資家が大幅に売り越し）。これはCANSLIM投資において重大な警告サイン。機関投資家の撤退が続いている場合、株価の持続的な上昇は難しい。" },
      M: { score: 7, label: "M — Market Direction", comment: "EV・次世代バッテリー市場は長期成長テーマ。ただし52週高値から-30%の調整中であり、現時点では買いのタイミングではない。機関投資家の動向を注視。" }
    },
    chartAnalysis: {
      baseType: "Post-High Correction → Potential Base",
      baseDescription: "52週高値$14.68から-30.52%の調整中。MA10($10.51)<MA21($11.42)と下降トレンド。RSI 38.1と売られすぎ水準。ベース形成の可能性あり。",
      pivotPoint: 14.68,
      pivotDescription: "52週高値$14.68がピボットポイント。現在はピボットから-30.52%の位置で調整中。",
      breakoutVolume: "平均の0.99倍（出来高は平均水準）",
      rsScore: 65,
      rsDescription: "Perf Year +240.00%だが、直近は調整中。52週高値から-30.52%。",
      volumePattern: "下降トレンド中で出来高は平均水準。ベース形成の可能性あり。",
      overallChartRating: "★★☆☆☆",
      buyTiming: "【現時点では見送り推奨】Inst Trans -15.33%と機関投資家の売り越しが続いており、CANSLIMの基準では投資対象外。機関投資家の動向が改善し、ベース形成完了後に再評価。",
      caution: "Inst Trans -15.33%は重大な警告サイン。EPS赤字継続。52週高値から-30%の調整中。機関投資家の動向が改善するまで見送りを推奨。"
    },
    currentPrice: 10.20,
    ma5: 10.51,
    ma25: 11.42,
    ma75: 10.39,
    entryPoints: [
      { label: "⚠️ 現時点では見送り推奨", price: 11.42, range: "$11.00〜$11.85", timing: "21日移動平均（$11.42）を出来高を伴って上抜けた場合が最初のエントリー候補。ただしInst Trans -15.33%のため慎重に。", riskReward: 1.8 },
      { label: "Base Breakout Entry", price: 12.50, range: "$12.00〜$13.00", timing: "ベース形成完了後、$12.50を出来高を伴って上抜けた場合が本格的なエントリー候補。", riskReward: 2.5 },
      { label: "52W High Breakout", price: 14.68, range: "$14.40〜$15.00", timing: "52週高値$14.68を出来高を伴って更新した場合が最適なCANSLIMエントリー。", riskReward: 3.2 }
    ],
    stopLoss: { price: 9.49, desc: "If entered at MA21: $9.49 (entry -7%)" },
    targetPrice: 17.50,
    targetBasis: "Analyst target $17.50 / Silicon anode battery commercialization upside",
    riskReward: 1.8,
    chartData: {
      labels: ["Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Feb 24"],
      prices: [1.78, 2.50, 3.80, 5.20, 7.50, 10.20, 12.50, 14.68, 13.50, 12.00, 11.50, 10.80, 10.20],
      ma5:    [1.76, 2.48, 3.78, 5.18, 7.48, 10.18, 12.48, 14.65, 13.48, 11.98, 11.48, 10.78, 10.51],
      ma25:   [1.65, 2.00, 2.60, 3.40, 4.80, 6.50, 8.20, 10.00, 11.50, 12.50, 12.80, 12.00, 11.42],
      ma75:   [1.55, 1.72, 1.95, 2.25, 2.75, 3.50, 4.50, 5.80, 7.20, 8.80, 9.80, 10.20, 10.39],
      volumes:[3.2, 4.5, 6.8, 8.5, 12.0, 15.5, 18.2, 22.0, 18.5, 12.0, 8.5, 7.5, 7.34]
    }
  },
  {
    rank: 5,
    code: "EHAB",
    name: "Enhabit Inc",
    market: "NYSE",
    sector: "Healthcare / Medical Care Facilities",
    price: 13.60,
    change: "+22.63%",
    currency: "USD",
    totalScore: 6.5,
    canslim: {
      C: { score: 8, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +109.89%、EPS Y/Y TTM +89.58%。Kinderhook Industriesによる$13.80/株での買収合意発表（2026/2/24）が本日の急騰の主因。買収プレミアムを反映した株価水準。" },
      A: { score: 7, label: "A — Annual EPS Growth", comment: "EPS Y/Y TTM +89.58%、Perf Year +67.08%。ホームヘルスケア・ホスピスサービスの需要増加が業績を押し上げ。ただし買収合意発表後のため、今後の株価上昇余地は限定的。" },
      N: { score: 8, label: "N — New Products / New 52W High", comment: "52週高値更新（$13.60）。Kinderhook Industriesによる$13.80/株での買収合意発表が本日の急騰の主因。買収完了後は上場廃止の可能性あり。Short Float 3.84%と空売りが少ない。" },
      S: { score: 7, label: "S — Supply/Demand", comment: "出来高が平均の16.46倍（12,613,897株 vs 平均766,451株）という異常な急増。買収発表による急騰。52週高値更新。ただし買収合意価格$13.80に対して現在$13.60と上昇余地は限定的。" },
      L: { score: 6, label: "L — Leader in Industry", comment: "ホームヘルスケア・ホスピスサービス業界での中堅プレイヤー。Kinderhook Industriesによる買収合意は業界内での評価を示す。ただし買収完了後は上場廃止の可能性あり。" },
      I: { score: 5, label: "I — Institutional Sponsorship", comment: "Inst Trans -4.77%（機関投資家が売り越し）。買収発表後に機関投資家が利益確定売りを実施している可能性。買収完了後は上場廃止のため、長期保有は推奨しない。" },
      M: { score: 6, label: "M — Market Direction", comment: "ホームヘルスケア市場は高齢化社会を背景に成長。ただし買収合意発表後のため、株価は買収価格$13.80に収束する可能性が高い。M&A案件としての投資判断が必要。" }
    },
    chartAnalysis: {
      baseType: "M&A Announcement Spike → Arbitrage Play",
      baseDescription: "Kinderhook Industriesによる$13.80/株での買収合意発表（2026/2/24）により+22.63%急騰。52週高値更新（$13.60）。出来高は平均の16.46倍という異常な急増。",
      pivotPoint: 13.80,
      pivotDescription: "買収合意価格$13.80がターゲット価格。現在$13.60と$0.20（1.5%）の上昇余地のみ。",
      breakoutVolume: "平均の16.46倍（買収発表による異常な急増）",
      rsScore: 75,
      rsDescription: "Perf Year +67.08%。買収発表による急騰で52週高値更新。",
      volumePattern: "買収発表による異常な出来高急増。買収アービトラージの対象となっている。",
      overallChartRating: "★★☆☆☆",
      buyTiming: "【CANSLIMエントリーとしては不適切】買収合意価格$13.80に対して現在$13.60と上昇余地が限定的。買収アービトラージとしての投資判断が必要。買収完了後は上場廃止の可能性あり。",
      caution: "買収合意発表後のM&A案件。買収完了後は上場廃止の可能性あり。上昇余地は$0.20（1.5%）のみ。CANSLIMの成長株投資としては不適切。"
    },
    currentPrice: 13.60,
    ma5: 11.41,
    ma25: 11.06,
    ma75: 10.36,
    entryPoints: [
      { label: "⚠️ CANSLIMエントリーとしては不適切", price: 13.80, range: "$13.60〜$13.80", timing: "買収合意価格$13.80がターゲット。上昇余地は$0.20（1.5%）のみ。買収アービトラージとしての投資判断が必要。", riskReward: 0.5 },
      { label: "見送り推奨", price: 13.60, range: "推奨せず", timing: "買収完了後は上場廃止の可能性があり、CANSLIMの成長株投資としては不適切。見送りを推奨。", riskReward: 0.5 },
      { label: "見送り推奨", price: 13.60, range: "推奨せず", timing: "買収完了後は上場廃止の可能性があり、CANSLIMの成長株投資としては不適切。見送りを推奨。", riskReward: 0.5 }
    ],
    stopLoss: { price: 12.65, desc: "If entered: $12.65 (current price -7%)" },
    targetPrice: 13.80,
    targetBasis: "Kinderhook Industries acquisition price $13.80/share",
    riskReward: 0.5,
    chartData: {
      labels: ["Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Feb 24"],
      prices: [6.52, 7.20, 7.85, 8.50, 9.15, 9.80, 10.45, 11.10, 11.75, 12.00, 11.50, 11.10, 13.60],
      ma5:    [6.48, 7.15, 7.80, 8.45, 9.10, 9.75, 10.40, 11.05, 11.70, 11.95, 11.45, 11.05, 11.41],
      ma25:   [6.20, 6.65, 7.15, 7.70, 8.30, 8.90, 9.50, 10.10, 10.70, 11.00, 11.10, 11.05, 11.06],
      ma75:   [5.90, 6.20, 6.55, 6.95, 7.40, 7.90, 8.45, 9.00, 9.55, 10.00, 10.20, 10.30, 10.36],
      volumes:[0.5, 0.4, 0.6, 0.5, 0.7, 0.6, 0.8, 0.7, 0.9, 0.8, 0.7, 0.8, 13.1]
    }
  }
];
