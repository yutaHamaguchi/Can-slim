// CANSLIM Analysis Data - 2026/02/20
const reportDate = "2026年2月20日";

// ============================================================
// 国内銘柄（5銘柄）
// ============================================================
const domesticStocks = [
  {
    rank: 1,
    code: "7685",
    name: "バイセル テクノロジーズ",
    market: "東証グロース",
    sector: "卸売業（リユース）",
    price: 6200,
    change: "+4.73%",
    currency: "JPY",
    totalScore: 9.0,
    canslim: {
      C: { score: 9, label: "当期EPS成長率", comment: "FY2025 EPS +108.8%（84円→175円）。今期予想+38.6%（175→243円）。2期連続大幅増益。リユース市場の急拡大とM&Aによる規模拡大が奏功。" },
      A: { score: 9, label: "年間EPS成長率", comment: "3期連続EPS増加。売上高はFY2024→2025で+67.8%（599億→1,006億円）。今期予想+29.2%と高成長継続。" },
      N: { score: 9, label: "新製品・新高値", comment: "52週高値更新。シニア向け出張買取×デジタルマーケティングの融合モデルが新機軸。M&Aによる事業拡大が継続的な材料。" },
      S: { score: 8, label: "需給", comment: "発行済株式数3,088万株と少なく需給が締まりやすい。信用買い残274千株（売り残ゼロ）で需給良好。5日線+6.42%、25日線+20.56%。" },
      L: { score: 9, label: "業界リーダー", comment: "出張買取リユース業界のトップランナー。ブランド品・貴金属・時計等の高額品買取で業界最大規模。競合との差別化明確。" },
      I: { score: 8, label: "機関投資家の支持", comment: "時価総額1,915億円。グロース市場ながら機関投資家の注目度上昇中。信用買い残が増加傾向で個人・機関双方の買いが入っている。" },
      M: { score: 8, label: "市場の方向性", comment: "日経平均は調整局面だが、グロース市場の個別成長株は独自の動き。リユース・サーキュラーエコノミーのテーマは中長期で追い風。" }
    },
    // 押し目買い戦略
    currentPrice: 6200,
    ma5: 5826,   // 5日移動平均
    ma25: 5143,  // 25日移動平均
    ma75: 4495,  // 75日移動平均
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 5800, range: "5,700〜5,900", timing: "5日線（約5,826円）への押し目。短期調整後の再上昇を狙う。", riskReward: 2.8 },
      { label: "第2押し目（25日線タッチ）", price: 5150, range: "5,050〜5,250", timing: "25日線（約5,143円）への深押し。中期トレンド確認後の押し目買い。", riskReward: 3.5 },
      { label: "第3押し目（75日線タッチ）", price: 4500, range: "4,400〜4,600", timing: "75日線（約4,495円）への大きな押し目。長期上昇トレンド継続を確認してから。", riskReward: 4.2 }
    ],
    stopLoss: { price: 5550, desc: "第1押し目の場合：5,550円（5日線-5%）" },
    targetPrice: 8500,
    targetBasis: "今期予想EPS 243円 × PER 35倍",
    riskReward: 2.8,
    chartData: {
      labels: ["10/1","10/15","11/1","11/15","12/1","12/15","1/5","1/19","2/5","2/20"],
      prices: [3200, 3450, 3800, 4100, 4500, 4800, 5100, 5500, 5920, 6200],
      ma5:    [3180, 3420, 3780, 4080, 4480, 4780, 5080, 5480, 5826, 6100],
      ma25:   [2900, 3100, 3350, 3600, 3900, 4200, 4500, 4800, 5143, 5400],
      ma75:   [2500, 2650, 2800, 3000, 3200, 3500, 3800, 4100, 4495, 4700]
    }
  },
  {
    rank: 2,
    code: "5537",
    name: "アルバリンク（AlbaLink）",
    market: "東証グロース",
    sector: "不動産業（空き家買取再販）",
    price: 3520,
    change: "+5.71%",
    currency: "JPY",
    totalScore: 8.5,
    canslim: {
      C: { score: 9, label: "当期EPS成長率", comment: "FY2025 EPS +157%（47.3円→121.6円）。今期予想+25.6%（121.6→152.8円）。空き家買取再販ビジネスが急拡大。" },
      A: { score: 8, label: "年間EPS成長率", comment: "売上高FY2025 +50.6%（54.4億→81.9億円）。今期予想+30.6%。2025年IPO後も高成長を維持。" },
      N: { score: 9, label: "新製品・新高値", comment: "52週高値更新。空き家問題×デジタルマーケティングという新市場を開拓。SNSを活用した集客モデルが業界初の革新的アプローチ。" },
      S: { score: 9, label: "需給", comment: "発行済株式数818万株と極めて少なく需給が非常に締まっている。信用売り残ゼロ、買い残341千株。流動性は低いが需給は良好。" },
      L: { score: 9, label: "業界リーダー", comment: "流動性の低い不動産（空き家・訳あり物件）の買取再販で業界トップ。ニッチ市場での圧倒的地位を確立。" },
      I: { score: 7, label: "機関投資家の支持", comment: "時価総額288億円と小型株。機関投資家の保有は限定的だが、IPO後の成長で注目度が急上昇中。今後の機関参入余地が大きい。" },
      M: { score: 8, label: "市場の方向性", comment: "空き家問題は社会課題として政策的追い風あり。グロース市場の成長株として独自の株価形成。" }
    },
    currentPrice: 3520,
    ma5: 3200,
    ma25: 2800,
    ma75: 2200,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 3200, range: "3,100〜3,300", timing: "5日線（約3,200円）への押し目。急騰後の短期調整を待つ。", riskReward: 2.5 },
      { label: "第2押し目（25日線タッチ）", price: 2800, range: "2,700〜2,900", timing: "25日線（約2,800円）への深押し。中期上昇トレンドの確認後。", riskReward: 3.2 },
      { label: "第3押し目（75日線タッチ）", price: 2200, range: "2,100〜2,300", timing: "75日線（約2,200円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.5 }
    ],
    stopLoss: { price: 3050, desc: "第1押し目の場合：3,050円（5日線-5%）" },
    targetPrice: 5000,
    targetBasis: "今期予想EPS 152.8円 × PER 33倍",
    riskReward: 2.5,
    chartData: {
      labels: ["10/1","10/15","11/1","11/15","12/1","12/15","1/5","1/19","2/5","2/20"],
      prices: [1500, 1700, 1900, 2100, 2400, 2700, 2900, 3100, 3330, 3520],
      ma5:    [1480, 1680, 1880, 2080, 2380, 2680, 2880, 3080, 3200, 3400],
      ma25:   [1300, 1450, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
      ma75:   [1000, 1100, 1200, 1400, 1600, 1800, 1900, 2000, 2200, 2400]
    }
  },
  {
    rank: 3,
    code: "6787",
    name: "メイコー",
    market: "東証プライム",
    sector: "電気機器（プリント基板）",
    price: 21510,
    change: "+8.42%",
    currency: "JPY",
    totalScore: 8.8,
    canslim: {
      C: { score: 9, label: "当期EPS成長率", comment: "今期EPS予想+34.7%。AI・EV向けプリント基板需要が急拡大。2Q連続増益で業績モメンタム強い。" },
      A: { score: 9, label: "年間EPS成長率", comment: "3期連続EPS増加。FY2024→2025→2026と着実成長。売上高も高成長継続。" },
      N: { score: 9, label: "新製品・新高値", comment: "52週高値更新。AI・EV向け高密度プリント基板（HDI基板）が新需要の核心。次世代半導体パッケージ基板への展開も材料。" },
      S: { score: 8, label: "需給", comment: "5日線+7.5%、25日線+18%超。出来高急増で需給良好。信用倍率も適正水準。" },
      L: { score: 9, label: "業界リーダー", comment: "国内プリント基板メーカーのトップクラス。AI・EV向け高付加価値基板で業界をリード。" },
      I: { score: 8, label: "機関投資家の支持", comment: "プライム市場で機関投資家の保有比率が高い。外国人投資家の買いも継続。" },
      M: { score: 8, label: "市場の方向性", comment: "AI・半導体関連テーマは中長期で継続的な追い風。日経平均の調整局面でも個別材料で独自高。" }
    },
    currentPrice: 21510,
    ma5: 20000,
    ma25: 18200,
    ma75: 15500,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 20000, range: "19,500〜20,500", timing: "5日線（約20,000円）への押し目。急騰後の短期調整を活用。", riskReward: 2.6 },
      { label: "第2押し目（25日線タッチ）", price: 18200, range: "17,800〜18,600", timing: "25日線（約18,200円）への深押し。中期上昇トレンド確認後。", riskReward: 3.3 },
      { label: "第3押し目（75日線タッチ）", price: 15500, range: "15,000〜16,000", timing: "75日線（約15,500円）への大きな押し目。長期投資家向け。", riskReward: 4.8 }
    ],
    stopLoss: { price: 19000, desc: "第1押し目の場合：19,000円（5日線-5%）" },
    targetPrice: 28000,
    targetBasis: "今期予想EPS × PER 30倍水準",
    riskReward: 2.6,
    chartData: {
      labels: ["10/1","10/15","11/1","11/15","12/1","12/15","1/5","1/19","2/5","2/20"],
      prices: [10500, 11500, 12800, 13500, 14800, 16000, 17500, 19000, 19830, 21510],
      ma5:    [10400, 11400, 12700, 13400, 14700, 15900, 17400, 18900, 20000, 21000],
      ma25:   [9500, 10200, 11000, 12000, 13200, 14500, 15800, 17000, 18200, 19500],
      ma75:   [8000, 8500, 9200, 10000, 11000, 12200, 13500, 14500, 15500, 16800]
    }
  },
  {
    rank: 4,
    code: "5706",
    name: "三井金属鉱業",
    market: "東証プライム",
    sector: "非鉄金属",
    price: 31290,
    change: "+5.44%",
    currency: "JPY",
    totalScore: 8.2,
    canslim: {
      C: { score: 8, label: "当期EPS成長率", comment: "今期EPS予想+19%。銅・亜鉛価格上昇と電池材料（LFP正極材）の需要増が業績を牽引。" },
      A: { score: 8, label: "年間EPS成長率", comment: "2期連続EPS増加。EV向け電池材料事業が新たな成長ドライバーとして機能し始めている。" },
      N: { score: 8, label: "新製品・新高値", comment: "52週高値更新。LFP（リン酸鉄リチウム）正極材でEV電池市場に本格参入。銅箔事業も半導体基板向けで拡大。" },
      S: { score: 7, label: "需給", comment: "プライム市場で浮動株多め。ただし出来高増加傾向で機関投資家の買いが確認できる。" },
      L: { score: 8, label: "業界リーダー", comment: "国内非鉄金属業界の大手。銅箔・電池材料分野で技術的優位性を持つ。" },
      I: { score: 8, label: "機関投資家の支持", comment: "外国人持株比率が高く、EV・電池材料テーマで機関投資家の注目を集めている。" },
      M: { score: 8, label: "市場の方向性", comment: "EV・電池材料・銅価格上昇という複数のテーマが重なり、中長期で追い風継続。" }
    },
    currentPrice: 31290,
    ma5: 29500,
    ma25: 26000,
    ma75: 21000,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 29500, range: "28,800〜30,200", timing: "5日線（約29,500円）への押し目。短期調整後の再上昇を狙う。", riskReward: 2.4 },
      { label: "第2押し目（25日線タッチ）", price: 26000, range: "25,200〜26,800", timing: "25日線（約26,000円）への深押し。中期上昇トレンド確認後。", riskReward: 3.1 },
      { label: "第3押し目（75日線タッチ）", price: 21000, range: "20,200〜21,800", timing: "75日線（約21,000円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.3 }
    ],
    stopLoss: { price: 28000, desc: "第1押し目の場合：28,000円（5日線-5%）" },
    targetPrice: 40000,
    targetBasis: "EV電池材料事業の本格化を織り込んだ評価",
    riskReward: 2.4,
    chartData: {
      labels: ["10/1","10/15","11/1","11/15","12/1","12/15","1/5","1/19","2/5","2/20"],
      prices: [16000, 17500, 19000, 20500, 22000, 24000, 26000, 28000, 29670, 31290],
      ma5:    [15900, 17400, 18900, 20400, 21900, 23900, 25900, 27900, 29500, 31000],
      ma25:   [14000, 15000, 16500, 18000, 19500, 21000, 22500, 24000, 26000, 28000],
      ma75:   [11000, 12000, 13500, 15000, 16500, 18000, 19000, 20000, 21000, 23000]
    }
  },
  {
    rank: 5,
    code: "5802",
    name: "住友電気工業",
    market: "東証プライム",
    sector: "非鉄金属（電線・ワイヤーハーネス）",
    price: 9748,
    change: "+4.59%",
    currency: "JPY",
    totalScore: 7.8,
    canslim: {
      C: { score: 8, label: "当期EPS成長率", comment: "今期EPS予想+65.1%。EV向けワイヤーハーネスと光ファイバーケーブルの需要急増が業績を大幅押し上げ。" },
      A: { score: 7, label: "年間EPS成長率", comment: "2期連続EPS増加。EV・通信インフラの両面で成長ドライバーが機能。ただし大企業ゆえ成長率は中程度。" },
      N: { score: 8, label: "新製品・新高値", comment: "52週高値更新。EV向けワイヤーハーネスの次世代製品（高圧・軽量化）と光ファイバーの需要急増が新材料。" },
      S: { score: 7, label: "需給", comment: "プライム大型株で浮動株多め。ただし出来高増加で機関投資家の買いが入っている。" },
      L: { score: 8, label: "業界リーダー", comment: "ワイヤーハーネス世界大手。光ファイバーでも国内トップクラス。EV・通信インフラの両テーマで業界リーダー。" },
      I: { score: 8, label: "機関投資家の支持", comment: "外国人持株比率が高く、EV・通信インフラテーマで機関投資家の継続的な買いが入っている。" },
      M: { score: 7, label: "市場の方向性", comment: "EV・通信インフラという中長期テーマで追い風。ただし大型株ゆえ市場全体の影響を受けやすい。" }
    },
    currentPrice: 9748,
    ma5: 9300,
    ma25: 8200,
    ma75: 6800,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 9300, range: "9,100〜9,500", timing: "5日線（約9,300円）への押し目。短期調整後の再上昇を狙う。", riskReward: 2.3 },
      { label: "第2押し目（25日線タッチ）", price: 8200, range: "8,000〜8,400", timing: "25日線（約8,200円）への深押し。中期上昇トレンド確認後。", riskReward: 3.0 },
      { label: "第3押し目（75日線タッチ）", price: 6800, range: "6,600〜7,000", timing: "75日線（約6,800円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.0 }
    ],
    stopLoss: { price: 8850, desc: "第1押し目の場合：8,850円（5日線-5%）" },
    targetPrice: 13000,
    targetBasis: "今期予想EPS × PER 20倍水準（大型株割引考慮）",
    riskReward: 2.3,
    chartData: {
      labels: ["10/1","10/15","11/1","11/15","12/1","12/15","1/5","1/19","2/5","2/20"],
      prices: [4800, 5200, 5700, 6200, 6800, 7300, 7900, 8500, 9320, 9748],
      ma5:    [4750, 5150, 5650, 6150, 6750, 7250, 7850, 8450, 9300, 9700],
      ma25:   [4200, 4500, 4900, 5300, 5800, 6300, 6900, 7500, 8200, 8800],
      ma75:   [3500, 3800, 4100, 4500, 5000, 5500, 6000, 6400, 6800, 7300]
    }
  }
];

// ============================================================
// 米国銘柄（5銘柄）
// ============================================================
const usStocks = [
  {
    rank: 1,
    code: "VICR",
    name: "Vicor Corporation",
    market: "NASDAQ",
    sector: "Technology / Electronic Components",
    price: 170.01,
    change: "+11.23%",
    currency: "USD",
    totalScore: 9.2,
    canslim: {
      C: { score: 10, label: "Current Quarterly EPS", comment: "EPS Q/Q +34%. EPS Y/Y TTM +1,009%. AI向けデータセンター電源管理ICが爆発的成長。Q4 2025決算で大幅上方修正。" },
      A: { score: 9, label: "Annual EPS Growth", comment: "EPS past 3Y: +66.37%, 5Y: +44.92%。3〜5年の長期成長トレンドが確立。売上高も継続的に拡大。" },
      N: { score: 10, label: "New Products / New High", comment: "52週高値更新。AI・HPC向け次世代電源管理IC（Factorized Power Architecture）が業界標準化しつつある革新的製品。" },
      S: { score: 9, label: "Supply/Demand", comment: "発行済株式数44.65M株と比較的少ない。機関投資家保有46.34%。出来高急増（通常比3.37倍）で需給が非常に良好。" },
      L: { score: 9, label: "Leader in Industry", comment: "高効率電源管理IC分野のニッチリーダー。AI・データセンター向け電源ソリューションで競合他社を大きくリード。" },
      I: { score: 9, label: "Institutional Sponsorship", comment: "機関投資家保有46.34%。Inst Trans +4.12%で機関の買い増しが継続。ROE 18.50%と高い資本効率。" },
      M: { score: 9, label: "Market Direction", comment: "AI・データセンター投資ブームは継続中。S&P500・NASDAQの調整局面でも個別材料で独自高。" }
    },
    currentPrice: 170.01,
    ma5: 157.43,
    ma25: 137.43,
    ma75: 77.17,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 157, range: "$152〜$162", timing: "5-day MA (~$157) pullback. Short-term correction after surge.", riskReward: 3.2 },
      { label: "2nd Pullback (25-day MA)", price: 137, range: "$132〜$142", timing: "25-day MA (~$137) pullback. Mid-term trend confirmation.", riskReward: 4.1 },
      { label: "3rd Pullback (75-day MA)", price: 77, range: "$73〜$81", timing: "75-day MA (~$77) deep pullback. Long-term investors' opportunity.", riskReward: 7.5 }
    ],
    stopLoss: { price: 149, desc: "1st pullback: $149 (5-day MA -5%)" },
    targetPrice: 250,
    targetBasis: "Forward P/E 40.5x × EPS next Y $4.20 + AI premium",
    riskReward: 3.2,
    chartData: {
      labels: ["Oct 1","Oct 15","Nov 1","Nov 15","Dec 1","Dec 15","Jan 5","Jan 19","Feb 5","Feb 20"],
      prices: [42, 48, 55, 65, 78, 95, 115, 140, 152, 170],
      ma5:    [41, 47, 54, 64, 77, 94, 114, 138, 157, 168],
      ma25:   [38, 42, 46, 52, 60, 72, 88, 108, 137, 155],
      ma75:   [30, 33, 36, 40, 45, 52, 60, 68, 77, 90]
    }
  },
  {
    rank: 2,
    code: "RNG",
    name: "RingCentral Inc",
    market: "NYSE",
    sector: "Technology / Software - Application",
    price: 39.50,
    change: "+34.40%",
    currency: "USD",
    totalScore: 8.5,
    canslim: {
      C: { score: 9, label: "Current Quarterly EPS", comment: "EPS Q/Q +429.28%. EPS Y/Y TTM +178.37%。Q4 2025で大幅EPS改善。初の配当発表と2026年ガイダンス上方修正が株価を+34.4%押し上げ。" },
      A: { score: 8, label: "Annual EPS Growth", comment: "EPS this Y +11.11%。Sales past 3/5Y: +8.15%/+16.27%。クラウドUCaaS市場でのシェア拡大が継続。" },
      N: { score: 9, label: "New Products / New High", comment: "52週高値更新。初の配当発表（$0.20/株）が機関投資家の注目を集める転換点。AI統合UCaaSプラットフォームが新成長軸。" },
      S: { score: 8, label: "Supply/Demand", comment: "Shs Outstanding 85.63M。Inst Own 101.54%（ETF含む）。出来高急増で需給良好。Short Float 13.11%のショートカバーも上昇に寄与。" },
      L: { score: 8, label: "Leader in Industry", comment: "クラウドUCaaS（統合コミュニケーション）市場のリーダー。Microsoft TeamsやZoomとの競合の中でも独自のポジションを維持。" },
      I: { score: 8, label: "Institutional Sponsorship", comment: "機関投資家保有101.54%（ETF含む）。配当開始で新たな機関投資家層（インカム投資家）の参入が期待される。" },
      M: { score: 8, label: "Market Direction", comment: "SaaS・クラウドセクターは市場全体の調整局面でも底堅い。AI統合による付加価値向上が評価されている。" }
    },
    currentPrice: 39.50,
    ma5: 28.55,
    ma25: 28.32,
    ma75: 25.00,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 33, range: "$31〜$35", timing: "5-day MA area pullback. Post-surge consolidation entry.", riskReward: 2.8 },
      { label: "2nd Pullback (25-day MA)", price: 28, range: "$26〜$30", timing: "25-day MA (~$28) pullback. Mid-term trend confirmation.", riskReward: 3.5 },
      { label: "3rd Pullback (75-day MA)", price: 25, range: "$23〜$27", timing: "75-day MA (~$25) deep pullback. Strong support zone.", riskReward: 4.2 }
    ],
    stopLoss: { price: 31, desc: "1st pullback: $31 (below 5-day MA support)" },
    targetPrice: 55,
    targetBasis: "Forward P/E 7.33x × EPS next Y $5.39 + re-rating premium",
    riskReward: 2.8,
    chartData: {
      labels: ["Oct 1","Oct 15","Nov 1","Nov 15","Dec 1","Dec 15","Jan 5","Jan 19","Feb 5","Feb 20"],
      prices: [22, 24, 26, 28, 30, 29, 27, 28, 29, 39.5],
      ma5:    [21.8, 23.8, 25.8, 27.8, 29.8, 28.8, 26.8, 27.8, 28.55, 38],
      ma25:   [20, 21, 22.5, 24, 26, 27, 27.5, 28, 28.32, 30],
      ma75:   [18, 19, 20, 21, 22, 23, 24, 24.5, 25, 26]
    }
  },
  {
    rank: 3,
    code: "AXTI",
    name: "AXT Inc",
    market: "NASDAQ",
    sector: "Technology / Semiconductor Equipment & Materials",
    price: 29.68,
    change: "+24.65%",
    currency: "USD",
    totalScore: 8.3,
    canslim: {
      C: { score: 9, label: "Current Quarterly EPS", comment: "EPS Q/Q +32.97%。Q1 2026ガイダンスが市場予想を大幅上回り+24.65%急騰。化合物半導体基板（InP、GaAs）のAI・データセンター向け需要が急拡大。" },
      A: { score: 8, label: "Annual EPS Growth", comment: "EPS this Y +100.98%。Perf Half Y +1,082.47%と半年で10倍超の株価上昇。化合物半導体基板の需要回復が鮮明。" },
      N: { score: 9, label: "New Products / New High", comment: "52週高値更新。AI・データセンター向け光通信用InP基板の需要が爆発的に増加。次世代データセンターの必須材料として再評価。" },
      S: { score: 8, label: "Supply/Demand", comment: "Shs Outstanding 55.27M。Inst Own 53.36%。Inst Trans +40.59%で機関の大幅買い増し。出来高急増（通常比14.44M）。" },
      L: { score: 8, label: "Leader in Industry", comment: "化合物半導体基板（InP・GaAs・Ge）の世界的サプライヤー。AI・光通信向け基板市場でのニッチリーダー。" },
      I: { score: 8, label: "Institutional Sponsorship", comment: "機関投資家保有53.36%。Inst Trans +40.59%と機関の大幅買い増しが確認できる。" },
      M: { score: 8, label: "Market Direction", comment: "AI・データセンター向け光通信需要は長期的な成長トレンド。化合物半導体の需要回復サイクルが始まっている。" }
    },
    currentPrice: 29.68,
    ma5: 19.45,
    ma25: 19.45,
    ma75: 8.01,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 24, range: "$22〜$26", timing: "5-day MA area pullback. Post-surge consolidation. Wait for volume to dry up.", riskReward: 2.5 },
      { label: "2nd Pullback (25-day MA)", price: 19, range: "$17〜$21", timing: "25-day MA (~$19) pullback. Mid-term trend confirmation.", riskReward: 3.8 },
      { label: "3rd Pullback (75-day MA)", price: 12, range: "$10〜$14", timing: "75-day MA area deep pullback. Long-term investors' strong support.", riskReward: 6.0 }
    ],
    stopLoss: { price: 22.8, desc: "1st pullback: $22.80 (5-day MA -5%)" },
    targetPrice: 45,
    targetBasis: "AI/optical communications demand re-rating + Forward P/E expansion",
    riskReward: 2.5,
    chartData: {
      labels: ["Oct 1","Oct 15","Nov 1","Nov 15","Dec 1","Dec 15","Jan 5","Jan 19","Feb 5","Feb 20"],
      prices: [4.5, 5.5, 7, 9, 11, 13, 16, 20, 23.8, 29.68],
      ma5:    [4.4, 5.4, 6.9, 8.9, 10.9, 12.9, 15.9, 19.45, 22, 28],
      ma25:   [4.0, 4.5, 5.2, 6.2, 7.5, 9.0, 11.0, 14.0, 19.45, 23],
      ma75:   [3.5, 3.8, 4.2, 4.8, 5.5, 6.5, 7.5, 8.01, 10, 13]
    }
  },
  {
    rank: 4,
    code: "FIVN",
    name: "Five9 Inc",
    market: "NASDAQ",
    sector: "Technology / Software - Infrastructure (CCaaS)",
    price: 19.32,
    change: "+12.46%",
    currency: "USD",
    totalScore: 7.8,
    canslim: {
      C: { score: 8, label: "Current Quarterly EPS", comment: "EPS Q/Q +73.43%. EPS Y/Y TTM +390.08%。Q4 2025決算でEPS・売上ともに予想上回る。AI統合コンタクトセンター（CCaaS）の需要が回復。" },
      A: { score: 7, label: "Annual EPS Growth", comment: "EPS this Y +7.89%。Sales past 3/5Y: +13.84%/+21.45%。成長率は中程度だが、AI統合による付加価値向上で今後の加速が期待。" },
      N: { score: 8, label: "New Products / New High", comment: "52週高値更新。AI統合CCaaS（クラウドコンタクトセンター）プラットフォームが新成長軸。エージェントAIによる自動化需要が急増。" },
      S: { score: 8, label: "Supply/Demand", comment: "Shs Outstanding 77.19M。Inst Own 101.67%。Short Float 9.20%のショートカバーが上昇に寄与。出来高急増（通常比4.53倍）。" },
      L: { score: 8, label: "Leader in Industry", comment: "クラウドCCaaS市場のリーダー。AI統合コンタクトセンターソリューションで業界をリード。" },
      I: { score: 7, label: "Institutional Sponsorship", comment: "機関投資家保有101.67%。ただしInst Trans -10.49%で機関の売りが懸念材料。Linden Advisors等のヘッジファンドが大量保有。" },
      M: { score: 7, label: "Market Direction", comment: "AI統合SaaSセクターは中長期で追い風。ただし52週高値からは-61%の水準であり、本格的な回復トレンドの確認が必要。" }
    },
    currentPrice: 19.32,
    ma5: 17.44,
    ma25: 18.88,
    ma75: 23.50,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 17.5, range: "$16.5〜$18.5", timing: "5-day MA (~$17.44) pullback. Short-term consolidation entry.", riskReward: 2.3 },
      { label: "2nd Pullback (25-day MA)", price: 18.9, range: "$18〜$19.8", timing: "25-day MA (~$18.88) as support. Wait for bounce confirmation.", riskReward: 2.0 },
      { label: "3rd Pullback (Base breakout retest)", price: 15.7, range: "$15〜$16.5", timing: "52W Low area ($15.70) as strong support. Long-term entry.", riskReward: 3.5 }
    ],
    stopLoss: { price: 16.6, desc: "1st pullback: $16.60 (5-day MA -5%)" },
    targetPrice: 30,
    targetBasis: "Forward P/E 5.30x × EPS next Y $3.64 + AI re-rating",
    riskReward: 2.3,
    chartData: {
      labels: ["Oct 1","Oct 15","Nov 1","Nov 15","Dec 1","Dec 15","Jan 5","Jan 19","Feb 5","Feb 20"],
      prices: [24, 22, 20, 18, 17, 16, 15.7, 17, 17.18, 19.32],
      ma5:    [23.8, 21.8, 19.8, 17.8, 16.8, 15.8, 15.6, 16.8, 17.44, 19],
      ma25:   [26, 24, 22, 20, 19, 18, 17.5, 18, 18.88, 19.5],
      ma75:   [30, 28, 26, 25, 24, 23.5, 23, 23.5, 23.5, 23]
    }
  },
  {
    rank: 5,
    code: "PRGS",
    name: "Progress Software Corp",
    market: "NASDAQ",
    sector: "Technology / Software - Infrastructure",
    price: 40.33,
    change: "+10.74%",
    currency: "USD",
    totalScore: 7.5,
    canslim: {
      C: { score: 8, label: "Current Quarterly EPS", comment: "EPS Q/Q +2,240.16%（前期が赤字から黒字転換）。Sales Q/Q +17.54%。Q1 2026決算でEPSサプライズ+15.04%。" },
      A: { score: 7, label: "Annual EPS Growth", comment: "EPS this Y +2.71%。Sales past 3/5Y: +17.55%/+17.20%。Telerik・OpenEdge等の製品群でSMB向けソフトウェア市場を拡大。" },
      N: { score: 8, label: "New Products / New High", comment: "52週高値更新。AI統合開発ツール・データ管理プラットフォームへの転換が新材料。Telerik UIのAI機能強化が顧客獲得を加速。" },
      S: { score: 7, label: "Supply/Demand", comment: "Shs Outstanding 42.34M。Inst Own 109.35%。Short Float 8.72%のショートカバーが上昇に寄与。" },
      L: { score: 7, label: "Leader in Industry", comment: "SMB向けソフトウェア開発ツール・データ管理市場でのニッチリーダー。OpenEdge・Telerik等の製品が根強い顧客基盤を持つ。" },
      I: { score: 8, label: "Institutional Sponsorship", comment: "機関投資家保有109.35%（ETF含む）。Target Price $65.50と現在値から+62%のアナリスト目標株価が機関の強気姿勢を示す。" },
      M: { score: 7, label: "Market Direction", comment: "AI統合ソフトウェアツール市場は中長期で追い風。ただし過去1年で-28.7%と市場に出遅れており、回復トレンドの確認が必要。" }
    },
    currentPrice: 40.33,
    ma5: 41.69,
    ma25: 41.69,
    ma75: 47.63,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 39, range: "$37〜$41", timing: "5-day MA (~$41.69) area. Current price is near MA, wait for consolidation.", riskReward: 2.2 },
      { label: "2nd Pullback (25-day MA)", price: 41, range: "$39〜$43", timing: "25-day MA (~$41.69) as support. Bounce from MA confirmation.", riskReward: 2.0 },
      { label: "3rd Pullback (Base breakout)", price: 35, range: "$33〜$37", timing: "Prior base breakout area as strong support. Long-term entry.", riskReward: 3.5 }
    ],
    stopLoss: { price: 37, desc: "1st pullback: $37 (below recent support)" },
    targetPrice: 65,
    targetBasis: "Analyst target price $65.50 + AI re-rating",
    riskReward: 2.2,
    chartData: {
      labels: ["Oct 1","Oct 15","Nov 1","Nov 15","Dec 1","Dec 15","Jan 5","Jan 19","Feb 5","Feb 20"],
      prices: [55, 52, 48, 44, 42, 40, 38, 36, 36.42, 40.33],
      ma5:    [54.8, 51.8, 47.8, 43.8, 41.8, 39.8, 37.8, 35.8, 41.69, 40],
      ma25:   [58, 55, 52, 49, 46, 44, 42, 40, 41.69, 42],
      ma75:   [62, 60, 58, 55, 52, 50, 48.5, 47.63, 47, 46]
    }
  }
];
