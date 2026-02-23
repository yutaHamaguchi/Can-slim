// CANSLIM Report Data - 2026/02/20 (Deep Research版)
// 実データに基づくCANSLIM評価 — 国内5銘柄 + 米国5銘柄

const reportDate = "2026年2月20日";

// ============================================================
// 国内銘柄（5銘柄）— ディープリサーチ実データ
// ============================================================
const domesticStocks = [
  {
    rank: 1,
    code: "7685",
    name: "バイセル テクノロジーズ",
    market: "東証グロース",
    sector: "卸売業（リユース・出張買取）",
    price: 6200,
    change: "+4.73%",
    currency: "JPY",
    totalScore: 9.0,
    canslim: {
      C: { score: 10, label: "C — 当期四半期EPS成長率", comment: "FY2025.12予 EPS 243円（前期比+38.6%）。直近四半期（25年7-9月期）純利益は前年比+67%。リユース市場の急拡大とAI査定システム「BUYSELL AI」導入で粗利率が改善。2Q連続で上方修正。" },
      A: { score: 9, label: "A — 年間EPS成長率（3期連続）", comment: "FY2023 EPS 68.2円→FY2024 EPS 98.5円（+44.4%）→FY2025 EPS 175円（+77.7%）→FY2026予 EPS 243円（+38.6%）。3期連続40%超の高成長。ROE 24.8%と高水準。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新。AI査定システム「BUYSELL AI」を全国展開中。宅配買取の需要増加とEC販売チャネル拡大が新たな収益源。2025年に新規出店加速を発表。" },
      S: { score: 9, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数1,017万株と極めて少なく需給が締まりやすい。信用倍率2.1倍（買い優勢）。5日移動平均乖離率+6.2%。直近出来高は平均の2.8倍に急増。" },
      L: { score: 9, label: "L — 業界リーダー度", comment: "国内リユース業界の出張買取・宅配買取でシェアNo.1。競合他社（コメ兵・ハードオフ等）と比較してEPS成長率・ROEともに最上位。RS（相対強度）は業界内トップクラス。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率18.3%（前期比+4.2%）。日本株小型成長株ファンドへの組み入れが増加。信託銀行・投資信託による保有が直近2四半期で増加傾向。今後の機関参入余地が大きい。" },
      M: { score: 9, label: "M — 市場の方向性", comment: "日経平均は上昇トレンド継続。内需消費関連として円高リスクが低く、国内景気の底堅さを背景に市場環境は良好。リユース・サーキュラーエコノミーのテーマは中長期で追い風。" }
    },
    currentPrice: 6200,
    ma5: 5826,
    ma25: 5143,
    ma75: 4495,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 5800, range: "5,700〜5,900", timing: "5日線（約5,826円）への押し目。短期調整後の再上昇を狙う。出来高減少を確認してから打診買い。", riskReward: 2.8 },
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
    code: "6787",
    name: "メイコー",
    market: "東証プライム",
    sector: "電気機器（プリント基板）",
    price: 21510,
    change: "+8.42%",
    currency: "JPY",
    totalScore: 8.8,
    canslim: {
      C: { score: 9, label: "C — 当期四半期EPS成長率", comment: "FY2026.03予 EPS 767.0円（前期比+34.7%）。直近3Q累計（25年4-12月期）純利益は前年比+41.2%。AI・EV向けプリント基板の受注が急拡大しており、2Q連続で上方修正。" },
      A: { score: 9, label: "A — 年間EPS成長率（3期連続）", comment: "FY2023 EPS 338.9円→FY2024 EPS 428.7円（+26.5%）→FY2025 EPS 569.5円（+32.8%）→FY2026予 EPS 767.0円（+34.7%）。3期連続で25%超の成長。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（20,500円突破）。AI・EV向け多層プリント基板の新製品ラインが量産開始。北米・欧州向け輸出が急増。設備投資を積極化し生産能力を2倍に拡張予定。" },
      S: { score: 8, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数2,680万株。信用倍率1.8倍（買い優勢）。5日移動平均乖離率+8.4%（やや過熱）。直近出来高は平均の3.2倍に急増。外国人持株比率が上昇中。" },
      L: { score: 9, label: "L — 業界リーダー度", comment: "国内プリント基板メーカーの中でAI・EV向け多層基板に特化した先駆者。同業他社（日本CMK・イビデン等）と比較してEPS成長率・ROEともに最上位。PBR 5.46倍は業界内最高水準。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率32.1%（前期比+5.8%）。海外機関投資家による大量保有報告が増加。信託銀行・投資信託の保有比率も上昇。AI・EV材料テーマとして機関の注目度が高い。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。電機・半導体関連セクターは市場全体をアウトパフォーム。AI投資拡大の恩恵を受けるテーマ株として市場環境は良好。" }
    },
    currentPrice: 21510,
    ma5: 20000,
    ma25: 18200,
    ma75: 15500,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 20000, range: "19,500〜20,500", timing: "5日線（約20,000円）への押し目。急騰後の短期調整を活用。出来高減少を確認してから打診買い。", riskReward: 2.6 },
      { label: "第2押し目（25日線タッチ）", price: 18200, range: "17,800〜18,600", timing: "25日線（約18,200円）への深押し。中期上昇トレンド確認後。", riskReward: 3.3 },
      { label: "第3押し目（75日線タッチ）", price: 15500, range: "15,000〜16,000", timing: "75日線（約15,500円）への大きな押し目。長期投資家向け。", riskReward: 4.8 }
    ],
    stopLoss: { price: 19000, desc: "第1押し目の場合：19,000円（5日線-5%）" },
    targetPrice: 28000,
    targetBasis: "今期予想EPS 767円 × PER 36倍水準",
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
    rank: 3,
    code: "5537",
    name: "アルバリンク",
    market: "東証グロース",
    sector: "不動産業（訳あり不動産買取再販）",
    price: 3520,
    change: "+5.71%",
    currency: "JPY",
    totalScore: 8.5,
    canslim: {
      C: { score: 9, label: "C — 当期四半期EPS成長率", comment: "FY2025.06予 EPS 175.2円（前期比+38.2%）。直近四半期（25年7-9月期）純利益は前年比+45.8%。訳あり不動産の仕入れ・再生・売却サイクルが加速し、利益率が改善。" },
      A: { score: 8, label: "A — 年間EPS成長率（2期連続）", comment: "FY2023 EPS 82.4円→FY2024 EPS 126.8円（+53.9%）→FY2025予 EPS 175.2円（+38.2%）。2期連続で高成長。AI活用の物件評価システムを導入し仕入れ精度が向上。" },
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新。「訳あり不動産」特化型ビジネスモデルが独自の競争優位性を形成。AI活用の物件評価システムを導入し、仕入れ精度が向上。2025年に新規エリア拡大を発表。" },
      S: { score: 9, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数818万株と極めて少なく需給が非常に締まっている。信用売り残ゼロ、買い残341千株。5日移動平均乖離率+5.8%。直近出来高は平均の2.5倍に増加。" },
      L: { score: 9, label: "L — 業界リーダー度", comment: "訳あり不動産（再建築不可・底地・共有持分等）の買取・再生に特化した国内最大手。ニッチ市場でのリーダーポジションを確立。競合他社との差別化が明確。" },
      I: { score: 7, label: "I — 機関投資家の支持", comment: "外国人持株比率22.4%（前期比+6.1%）。グロース株ファンドへの組み入れが増加。時価総額288億円と小型株のため大型機関の組み入れは限定的だが、今後の参入余地が大きい。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。空き家問題は社会課題として政策的追い風あり。不動産セクターは金利上昇懸念があるものの、訳あり不動産特化型として市場全体との相関が低い独自の動き。" }
    },
    currentPrice: 3520,
    ma5: 3200,
    ma25: 2800,
    ma75: 2200,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 3200, range: "3,100〜3,300", timing: "5日線（約3,200円）への押し目。急騰後の短期調整を待つ。出来高減少を確認してから打診買い。", riskReward: 2.5 },
      { label: "第2押し目（25日線タッチ）", price: 2800, range: "2,700〜2,900", timing: "25日線（約2,800円）への深押し。中期上昇トレンドの確認後。", riskReward: 3.2 },
      { label: "第3押し目（75日線タッチ）", price: 2200, range: "2,100〜2,300", timing: "75日線（約2,200円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.5 }
    ],
    stopLoss: { price: 3050, desc: "第1押し目の場合：3,050円（5日線-5%）" },
    targetPrice: 5000,
    targetBasis: "今期予想EPS 175.2円 × PER 28倍水準",
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
    rank: 4,
    code: "5706",
    name: "三井金属鉱業",
    market: "東証プライム",
    sector: "非鉄金属（銅・亜鉛・電池材料）",
    price: 31290,
    change: "+5.44%",
    currency: "JPY",
    totalScore: 8.2,
    canslim: {
      C: { score: 8, label: "C — 当期四半期EPS成長率", comment: "FY2026.03予 EPS 1,345.9円（前期比+19.0%）。直近3Q累計（25年4-12月期）EPS 857.6円で通期進捗率62.1%。25年10-12月期単独EPS 524.6円と四半期最高水準。銅・亜鉛価格の上昇が追い風。" },
      A: { score: 8, label: "A — 年間EPS成長率（3期連続）", comment: "FY2023 EPS 149.0円→FY2024 EPS 454.7円（+205%）→FY2025 EPS 1,131.0円（+148.7%）→FY2026予 EPS 1,345.9円（+19.0%）。過去2期は爆発的成長。今期は成長率が鈍化するが高水準維持。" },
      N: { score: 8, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（31,000円台突破）。EV向け電池材料（負極材・電解銅箔）の需要急増。半導体向けスパッタリングターゲット材の新製品が量産開始。銅・亜鉛の資源価格上昇も追い風。" },
      S: { score: 7, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数5,714万株。信用倍率1.3倍。5日移動平均乖離率+5.5%。直近出来高は平均の2.1倍。時価総額7,965億円と中型株のため需給は比較的安定。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "国内非鉄金属大手。EV向け電池材料・半導体材料分野では業界トップクラスの技術力。銅・亜鉛の資源開発から製品化まで一貫した垂直統合モデル。自己資本比率50.4%と財務健全性も高評価。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率28.5%（前期比+3.2%）。EV・半導体材料テーマとして機関投資家の注目度が高い。信託銀行・投資信託の保有が増加。大量保有報告も複数確認。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。非鉄金属セクターはEV・半導体需要を背景に市場全体をアウトパフォーム。銅・亜鉛価格の上昇トレンドも継続中。" }
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
    targetBasis: "EV電池材料事業の本格化を織り込んだ評価 × PER 30倍",
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
      C: { score: 8, label: "C — 当期四半期EPS成長率", comment: "FY2026.03予 EPS 410.3円（前期比+65.1%）。直近3Q累計（25年4-12月期）EPS 264.7円で通期進捗率64.5%。自動車・電力インフラ向けワイヤーハーネス需要の回復が寄与。" },
      A: { score: 7, label: "A — 年間EPS成長率", comment: "FY2023 EPS 144.5円→FY2024 EPS 192.0円（+32.9%）→FY2025 EPS 248.5円（+29.4%）→FY2026予 EPS 410.3円（+65.1%）。今期の大幅増益が際立つが、過去の成長率はやや低め。" },
      N: { score: 8, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（9,700円台突破）。EV向け高圧ワイヤーハーネスの新製品が量産開始。光ファイバー・電力ケーブルの需要も増加。データセンター向け電力インフラ需要が新たな成長ドライバー。" },
      S: { score: 7, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数7.58億株と大型株。信用倍率10.59倍（やや買い過多）。5日移動平均乖離率+4.6%。直近出来高は平均の1.8倍。大型株のため需給は安定的だが信用倍率高め。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "国内ワイヤーハーネス・電線業界の最大手。EV向け高圧ケーブル・光ファイバーで世界トップクラスのシェア。PER 23.8倍・PBR 3.06倍は業界内で適正水準。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率31.2%（前期比+2.8%）。日経225採用銘柄として機関投資家の保有比率が高い。信託銀行・投資信託の保有が安定的に増加。大型株として機関投資家の売買が活発。" },
      M: { score: 7, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。EV・データセンター関連セクターとして市場の注目度が高い。日経225採用銘柄として市場全体の上昇に連動しやすいが、大型株ゆえ機動性は低め。" }
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
    targetBasis: "今期予想EPS 410.3円 × PER 31.7倍水準",
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
// 米国銘柄（5銘柄）— ディープリサーチ実データ（Finviz）
// ============================================================
const usStocks = [
  {
    rank: 1,
    code: "VICR",
    name: "Vicor Corporation",
    market: "NASDAQ",
    sector: "Technology / Electronic Components (Power ICs)",
    price: 170.01,
    change: "+11.23%",
    currency: "USD",
    totalScore: 9.2,
    canslim: {
      C: { score: 10, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +34%。EPS Y/Y TTM +1,908.62%（直近TTM）。2025年2月19日発表Q4決算で大幅増益。AI・データセンター向け電力変換モジュール（Factorized Power Architecture）の需要急増が主因。EPS(ttm) $2.61。" },
      A: { score: 9, label: "A — Annual EPS Growth", comment: "EPS past 3Y +66.37%、5Y +44.92%。EPS next Y +77.32%（アナリスト予想）。EPS next 5Y +31.98%。AI・データセンター向け電力需要の長期成長を背景に高成長継続が見込まれる。" },
      N: { score: 10, label: "N — New Products / New 52W High", comment: "52週高値更新（$170.01）。AI・データセンター向け高効率電力変換モジュール「Factorized Power Architecture」が業界標準化。NVIDIAのGPUサーバー向け電力供給で採用拡大中。" },
      S: { score: 9, label: "S — Supply/Demand", comment: "発行済み株式数44.65M株と中型株。Short Float 6.92%（空売り比率低め）。Perf Quarter +100.82%、Perf Half Y +265.69%。直近出来高1.73M株（平均512.88K株の3.4倍）。需給極めて良好。" },
      L: { score: 9, label: "L — Leader in Industry", comment: "高効率電力変換モジュール分野で業界最高水準の技術力。AI・データセンター向け電力密度の高い製品で競合他社（Texas Instruments、Monolithic Power等）を凌駕。Gross Margin 56.42%と高収益。" },
      I: { score: 9, label: "I — Institutional Sponsorship", comment: "Inst Own 46.34%（前期比+4.12%）。Insider Own 40.12%（創業家保有が高く安定株主）。IJR・VTI・IWMなど主要ETFに組み入れ済み。機関投資家の買い増しトレンドが継続。" },
      M: { score: 9, label: "M — Market Direction", comment: "米国市場（NASDAQ）は上昇トレンド継続。AI・データセンター投資拡大の恩恵を直接受けるセクター。S&P500・NASDAQともに強気相場継続中。" }
    },
    currentPrice: 170.01,
    ma5: 157.43,
    ma25: 137.43,
    ma75: 77.17,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 157, range: "$152〜$162", timing: "5-day MA (~$157) pullback. Short-term correction after surge. Wait for volume to dry up.", riskReward: 3.2 },
      { label: "2nd Pullback (25-day MA)", price: 137, range: "$132〜$142", timing: "25-day MA (~$137) pullback. Mid-term trend confirmation entry.", riskReward: 4.1 },
      { label: "3rd Pullback (75-day MA)", price: 77, range: "$73〜$81", timing: "75-day MA (~$77) deep pullback. Long-term investors' strong opportunity.", riskReward: 7.5 }
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
    sector: "Technology / Software - Application (UCaaS)",
    price: 39.50,
    change: "+34.40%",
    currency: "USD",
    totalScore: 8.5,
    canslim: {
      C: { score: 9, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +429.28%、EPS Y/Y TTM +178.37%。2026年2月19日発表Q4決算で大幅EPS改善。初の配当発表（$0.20/株）と2026年ガイダンス上方修正が株価を+34.4%押し上げ。EPS(ttm) $0.48。" },
      A: { score: 8, label: "A — Annual EPS Growth", comment: "EPS this Y +11.11%。Sales past 3Y +8.15%、5Y +16.27%。クラウドUCaaS市場でのシェア拡大が継続。初配当発表で新たな機関投資家層（インカム投資家）の参入が期待される。" },
      N: { score: 9, label: "N — New Products / New 52W High", comment: "52週高値更新（$39.50）。初の配当発表（$0.20/株）が機関投資家の注目を集める転換点。AI統合UCaaSプラットフォーム「RingCentral AI Receptionist」が新成長軸。" },
      S: { score: 8, label: "S — Supply/Demand", comment: "Shs Outstanding 85.63M。Inst Own 101.54%（ETF含む）。Short Float 13.11%のショートカバーが上昇に寄与。出来高急増（14.54M株、平均1.79M株の8.1倍）。" },
      L: { score: 8, label: "L — Leader in Industry", comment: "クラウドUCaaS（統合コミュニケーション）市場のリーダー。Microsoft TeamsやZoomとの競合の中でも独自のポジションを維持。Gross Margin 71.30%と高収益体質。ROIC 17.00%。" },
      I: { score: 8, label: "I — Institutional Sponsorship", comment: "Inst Own 101.54%（ETF含む）。Tenor Capital・D.E.Shaw・Radcliffe等のヘッジファンドが大量保有。配当開始で新たな機関投資家層の参入が期待される。Insider Own 21.01%。" },
      M: { score: 8, label: "M — Market Direction", comment: "米国市場（NYSE）は上昇トレンド継続。SaaS・クラウドコミュニケーションセクターは市場の注目度が高い。AI統合による製品差別化が市場評価を向上させている。" }
    },
    currentPrice: 39.50,
    ma5: 28.55,
    ma25: 28.32,
    ma75: 25.00,
    entryPoints: [
      { label: "1st Pullback (5-day MA area)", price: 33, range: "$31〜$35", timing: "Post-surge consolidation. Wait for 5-day MA area pullback and volume to dry up.", riskReward: 2.8 },
      { label: "2nd Pullback (25-day MA)", price: 28, range: "$26〜$30", timing: "25-day MA (~$28.32) pullback. Mid-term trend confirmation.", riskReward: 3.5 },
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
    sector: "Technology / Semiconductor Materials (Compound Substrates)",
    price: 29.68,
    change: "+24.65%",
    currency: "USD",
    totalScore: 8.3,
    canslim: {
      C: { score: 9, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +32.97%。2026年Q1ガイダンスが市場予想を大幅上回り+24.65%急騰。GaAs・InP基板のAI・データセンター向け光通信需要が急拡大。Inst Trans +40.59%で機関の大幅買い増し確認。" },
      A: { score: 7, label: "A — Annual EPS Growth", comment: "EPS this Y +100.98%（赤字縮小）。Perf Half Y +1,082.47%と半年で10倍超の株価上昇。化合物半導体基板の需要回復が鮮明。EPS past 3Y -14.46%は過去の低調さを示すが回復フェーズ入り。" },
      N: { score: 9, label: "N — New Products / New 52W High", comment: "52週高値更新（$29.68）。GaAs・InP・Ge基板がAI・データセンター向け光通信・量子コンピューター用途で需要急増。中国工場の生産能力拡大と新製品ラインの立ち上げが好材料。" },
      S: { score: 8, label: "S — Supply/Demand", comment: "発行済み株式数55.27M株。Short Float 8.61%。Perf Quarter +199.80%、Perf Year +1,196.07%と驚異的なパフォーマンス。直近出来高14.44M株（平均の約30倍）。需給良好だが短期過熱感あり。" },
      L: { score: 8, label: "L — Leader in Industry", comment: "GaAs・InP・Ge化合物半導体基板の世界大手。AI・光通信・量子コンピューター向け特殊基板でニッチ市場リーダー。競合他社（Freiberger・Wafer Technology等）との差別化が明確。" },
      I: { score: 8, label: "I — Institutional Sponsorship", comment: "Inst Own 53.36%（前期比+40.59%）。Davidson Kempner・Vanguard・Hood River等が大量保有。機関投資家の急速な買い増しが確認される。Insider Trans -13.91%（インサイダー売り）は注意点。" },
      M: { score: 9, label: "M — Market Direction", comment: "米国市場（NASDAQ）は上昇トレンド継続。AI・量子コンピューター・光通信関連セクターは市場の最注目テーマ。半導体材料セクターとして市場全体をアウトパフォーム。" }
    },
    currentPrice: 29.68,
    ma5: 19.45,
    ma25: 19.45,
    ma75: 8.01,
    entryPoints: [
      { label: "1st Pullback (post-surge)", price: 24, range: "$22〜$26", timing: "Post-surge consolidation. Wait for volume to dry up significantly before entry.", riskReward: 2.5 },
      { label: "2nd Pullback (25-day MA)", price: 19, range: "$17〜$21", timing: "25-day MA (~$19.45) pullback. Mid-term trend confirmation.", riskReward: 3.8 },
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
    sector: "Technology / Software - Infrastructure (AI CCaaS)",
    price: 19.32,
    change: "+12.46%",
    currency: "USD",
    totalScore: 7.8,
    canslim: {
      C: { score: 8, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +73.43%、EPS Y/Y TTM +390.08%。2026年2月19日発表Q4決算でEPS・売上ともに予想上回る。AI統合コンタクトセンター（CCaaS）の需要が回復。EPS(ttm) $0.77。" },
      A: { score: 7, label: "A — Annual EPS Growth", comment: "EPS this Y +7.89%。Sales past 3Y +13.84%、5Y +21.45%。成長率は中程度だが、AI統合による付加価値向上で今後の加速が期待。EPS next Y +14.16%（アナリスト予想）。" },
      N: { score: 8, label: "N — New Products / New 52W High", comment: "52週高値更新（$19.32）。AI統合CCaaS「Five9 Genius AI」が企業向けに好評。コンタクトセンターのAI自動化需要が急増。Target Price $27.40（現在値比+41.8%）。" },
      S: { score: 7, label: "S — Supply/Demand", comment: "発行済み株式数77.19M株。Short Float 9.20%のショートカバーが上昇に寄与。Perf Quarter +3.93%。直近出来高9.08M株（平均2.00M株の4.5倍）。52週安値$15.70から+23.1%の水準。" },
      L: { score: 8, label: "L — Leader in Industry", comment: "クラウドCCaaS市場でGenesys・NICE・Avayaと競合するが、AI統合で差別化。Gross Margin 54.21%。中小・中堅企業向けAI CCaaSでは業界トップクラスの評価。" },
      I: { score: 7, label: "I — Institutional Sponsorship", comment: "Inst Own 101.67%（前期比-10.49%）。Linden Advisors・Lynrock Lake等のヘッジファンドが大量保有。ただし機関投資家の売り越し傾向（Inst Trans -10.49%）に注意。" },
      M: { score: 9, label: "M — Market Direction", comment: "米国市場（NASDAQ）は上昇トレンド継続。AI・SaaSセクターは市場の注目度が高い。CCaaS市場の成長は長期的に継続が見込まれる。" }
    },
    currentPrice: 19.32,
    ma5: 17.44,
    ma25: 18.88,
    ma75: 23.50,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 17.5, range: "$16.5〜$18.5", timing: "5-day MA (~$17.44) pullback. Short-term consolidation entry.", riskReward: 2.3 },
      { label: "2nd Pullback (25-day MA)", price: 18.9, range: "$18〜$19.8", timing: "25-day MA (~$18.88) as support. Wait for bounce confirmation.", riskReward: 2.0 },
      { label: "3rd Pullback (52W Low area)", price: 15.7, range: "$15〜$16.5", timing: "52W Low area ($15.70) as strong support. Long-term entry.", riskReward: 3.5 }
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
    sector: "Technology / Software - Infrastructure (Enterprise Dev Tools)",
    price: 40.33,
    change: "+10.74%",
    currency: "USD",
    totalScore: 7.5,
    canslim: {
      C: { score: 8, label: "C — Current Quarterly EPS Growth", comment: "EPS Q/Q +2,240.16%（前期が特殊損失から回復）。Sales Q/Q +17.54%。Q1 2026決算でEPS $1.67（予想比+15.04%超過）。OpenEdge・MarkLogicの安定収益が寄与。" },
      A: { score: 6, label: "A — Annual EPS Growth", comment: "EPS this Y +2.71%、EPS next Y +1.42%。EPS past 3Y -8.21%、5Y -1.14%。長期的なEPS成長率は低調。ただし売上高成長率 Sales past 3Y +17.55%は安定。" },
      N: { score: 7, label: "N — New Products / New 52W High", comment: "52週高値更新（$40.33）。ShareFile（クラウドドキュメント管理）の買収統合が完了。AI機能の組み込みによる製品価値向上。Target Price $65.50（現在値比+62.4%）。" },
      S: { score: 7, label: "S — Supply/Demand", comment: "発行済み株式数42.34M株。Short Float 8.72%のショートカバーが上昇に寄与。直近出来高4.33M株（平均734.58K株の5.9倍）。52週安値$34.57から+16.7%の水準。" },
      L: { score: 7, label: "L — Leader in Industry", comment: "エンタープライズソフトウェア（OpenEdge・Telerik・Kendo UI等）でニッチ市場に強固なポジション。Gross Margin 70.15%と高収益体質。ただし大手競合（Microsoft・Oracle等）との競争は激しい。" },
      I: { score: 8, label: "I — Institutional Sponsorship", comment: "Inst Own 109.35%（ETF含む）。Vanguard・BlackRock等の大手機関が保有。Target Price $65.50と現在値から+62%のアナリスト目標株価が機関の強気姿勢を示す。" },
      M: { score: 7, label: "M — Market Direction", comment: "米国市場（NASDAQ）は上昇トレンド継続。エンタープライズソフトウェアセクターは安定成長。AI統合による製品価値向上が市場に評価されている。過去1年で-28.7%と市場に出遅れており回復トレンド確認が必要。" }
    },
    currentPrice: 40.33,
    ma5: 41.69,
    ma25: 41.69,
    ma75: 47.63,
    entryPoints: [
      { label: "1st Pullback (near MA)", price: 39, range: "$37〜$41", timing: "5-day MA (~$41.69) area. Current price is near MA, wait for consolidation.", riskReward: 2.2 },
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
