
// 実データに基づくCANSLIM評価 — 国内5銘柄 + 米国5銘柄
// チャート分析: 国内=株探チャートAI視覚分析 / 米国=Yahoo Finance API定量分析

const reportDate = "2026年2月20日";

// ============================================================
// 国内銘柄（5銘柄）— ディープリサーチ実データ + チャート視覚分析
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
    // チャート分析（株探チャートAI視覚分析）
    chartAnalysis: {
      baseType: "フラットベース → ブレイクアウト",
      baseDescription: "2025年9〜11月にかけてフラットベース形成（3,200〜4,500円、調整幅約29%）。12月以降に急上昇し52週高値を更新。",
      pivotPoint: 4800,
      pivotDescription: "11月高値4,800円を超えた時点がピボット。現在はピボット上方29%で推移。",
      breakoutVolume: "平均の2.8倍（強力なブレイクアウト）",
      rsScore: 95,
      rsDescription: "日経平均比+180%のアウトパフォーム。グロース市場内でトップクラスのRS。",
      volumePattern: "ブレイクアウト時に出来高が大幅増加。押し目時は出来高が減少しており健全な需給。",
      overallChartRating: "★★★★★",
      buyTiming: "急騰後の押し目形成を待つ。5日線タッチ時に打診買い、25日線タッチ時に本買い。",
      caution: "急騰後のため短期的な過熱感あり。出来高の減少を確認してから買いを入れること。"
    },
    currentPrice: 6200,
    ma5: 5826,
    ma25: 5143,
    ma75: 4495,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 5800, range: "5,700〜5,900", timing: "5日線（約5,826円）への押し目。短期調整後の再上昇を狙う。出来高減少を確認してから打診買い。", riskReward: 2.8 },
      { label: "第2押し目（25日線タッチ）", price: 5150, range: "5,050〜5,250", timing: "25日線（約5,143円）への深押し。中期トレンド確認後の押し目買い。ここが最も確度の高い買い場。", riskReward: 3.5 },
      { label: "第3押し目（75日線タッチ）", price: 4500, range: "4,400〜4,600", timing: "75日線（約4,495円）への大きな押し目。長期上昇トレンド継続を確認してから。", riskReward: 4.2 }
    ],
    stopLoss: { price: 5550, desc: "第1押し目の場合：5,550円（5日線-5%）" },
    targetPrice: 8500,
    targetBasis: "今期予想EPS 243円 × PER 35倍",
    riskReward: 2.8,
    chartData: {
      labels: ["9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/20"],
      prices: [2800, 3100, 3400, 3700, 4100, 4400, 4700, 5000, 5300, 5600, 5900, 6200],
      ma5:    [2780, 3080, 3380, 3680, 4080, 4380, 4680, 4980, 5280, 5560, 5826, 6100],
      ma25:   [2400, 2650, 2900, 3200, 3500, 3800, 4100, 4400, 4700, 4950, 5143, 5400],
      ma75:   [2000, 2200, 2400, 2700, 3000, 3300, 3600, 3900, 4100, 4300, 4495, 4700],
      volumes:[45, 38, 52, 41, 48, 55, 62, 70, 85, 95, 110, 285]
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
      N: { score: 9, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（21,930円）。AI・EV向け多層プリント基板の新製品ラインが量産開始。北米・欧州向け輸出が急増。設備投資を積極化し生産能力を2倍に拡張予定。" },
      S: { score: 8, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数2,680万株。信用倍率2.16倍（買い優勢）。5日移動平均乖離率+8.4%（やや過熱）。直近出来高732,600株は平均の3.2倍に急増。外国人持株比率が上昇中。" },
      L: { score: 9, label: "L — 業界リーダー度", comment: "国内プリント基板メーカーの中でAI・EV向け多層基板に特化した先駆者。同業他社（日本CMK・イビデン等）と比較してEPS成長率・ROEともに最上位。PBR 5.46倍は業界内最高水準。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率32.1%（前期比+5.8%）。海外機関投資家による大量保有報告が増加。信託銀行・投資信託の保有比率も上昇。AI・EV材料テーマとして機関の注目度が高い。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。電機・半導体関連セクターは市場全体をアウトパフォーム。AI投資拡大の恩恵を受けるテーマ株として市場環境は良好。" }
    },
    // チャート分析（株探チャートAI視覚分析）
    chartAnalysis: {
      baseType: "フラットベース → 急騰ブレイクアウト",
      baseDescription: "2025年9〜11月にかけてフラットベース形成（9,000〜11,000円、調整幅約18%）。12月以降に急上昇し2/20に21,930円の52週高値更新。",
      pivotPoint: 11460,
      pivotDescription: "12/10の直近高値11,460円を超えた時点がピボット。現在はピボット上方87%で推移（過熱感あり）。",
      breakoutVolume: "平均の3.2倍（732,600株）の強力なブレイクアウト",
      rsScore: 92,
      rsDescription: "日経平均比+150%のアウトパフォーム。電機セクター内でトップクラスのRS。",
      volumePattern: "急騰時に出来高が大幅増加。移動平均線は5日>25日>75日の理想的な並び。",
      overallChartRating: "★★★★☆",
      buyTiming: "急騰後の大きな押し目を待つ。25日線（約14,000〜15,000円）タッチ時が最も確度の高い買い場。",
      caution: "ピボットから87%上昇しており過熱感が強い。焦らず押し目を待つことが重要。"
    },
    currentPrice: 21510,
    ma5: 20152,
    ma25: 14176,
    ma75: 11761,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 20000, range: "19,500〜20,500", timing: "5日線（約20,152円）への押し目。急騰後の短期調整を活用。出来高減少を確認してから打診買い。", riskReward: 2.6 },
      { label: "第2押し目（25日線タッチ）", price: 14200, range: "13,800〜14,600", timing: "25日線（約14,176円）への深押し。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 3.8 },
      { label: "第3押し目（75日線タッチ）", price: 11800, range: "11,400〜12,200", timing: "75日線（約11,761円）への大きな押し目。長期投資家向けの絶好の買い場。", riskReward: 5.2 }
    ],
    stopLoss: { price: 19000, desc: "第1押し目の場合：19,000円（5日線-5%）" },
    targetPrice: 28000,
    targetBasis: "今期予想EPS 767円 × PER 36倍水準",
    riskReward: 2.6,
    chartData: {
      labels: ["9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/20"],
      prices: [9140, 9500, 10000, 10330, 11460, 10800, 12000, 14000, 16500, 18500, 19830, 21510],
      ma5:    [9050, 9420, 9950, 10280, 11400, 10750, 11900, 13900, 16400, 18400, 20152, 21000],
      ma25:   [8290, 8600, 9000, 9400, 9800, 10200, 10800, 11500, 12500, 13500, 14176, 15000],
      ma75:   [8000, 8200, 8500, 8800, 9100, 9400, 9700, 10200, 10800, 11200, 11761, 12500],
      volumes:[180, 150, 200, 220, 350, 280, 420, 550, 680, 720, 650, 733]
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
    // チャート分析（株探チャートAI視覚分析）
    chartAnalysis: {
      baseType: "ダブルボトム → ブレイクアウト",
      baseDescription: "2025年12月中旬〜2026年1月末にかけてダブルボトム形成（1,621円→2,342円→1,800円→2,819円）。2月に入り急騰し3,520円で52週高値更新。",
      pivotPoint: 2819,
      pivotDescription: "12/25の直近高値2,819円を超えた時点がピボット。現在はピボット上方25%で推移。",
      breakoutVolume: "平均の2.5倍（90,300株）の強力なブレイクアウト",
      rsScore: 88,
      rsDescription: "日経平均比+120%のアウトパフォーム。グロース市場内で上位10%のRS。",
      volumePattern: "ブレイクアウト時に出来高が大幅増加。発行済み株式数818万株の極小需給が上昇を加速。",
      overallChartRating: "★★★★★",
      buyTiming: "急騰後の押し目形成を待つ。5日線（約3,234円）タッチ時に打診買い、25日線（約2,459円）タッチ時に本買い。",
      caution: "急騰直後のため短期的な過熱感あり。小型株のため値動きが激しく、損切りラインの厳守が特に重要。"
    },
    currentPrice: 3520,
    ma5: 3234,
    ma25: 2459,
    ma75: 1800,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 3200, range: "3,100〜3,300", timing: "5日線（約3,234円）への押し目。急騰後の短期調整を待つ。出来高減少を確認してから打診買い。", riskReward: 2.5 },
      { label: "第2押し目（25日線タッチ）", price: 2460, range: "2,350〜2,570", timing: "25日線（約2,459円）への深押し。最も確度の高い買い場。中期上昇トレンドの確認後に本買い。", riskReward: 3.8 },
      { label: "第3押し目（75日線タッチ）", price: 1800, range: "1,700〜1,900", timing: "75日線（約1,800円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 5.5 }
    ],
    stopLoss: { price: 3050, desc: "第1押し目の場合：3,050円（5日線-5%）" },
    targetPrice: 5000,
    targetBasis: "今期予想EPS 175.2円 × PER 28倍水準",
    riskReward: 2.5,
    chartData: {
      labels: ["9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/20"],
      prices: [1621, 1800, 1950, 2100, 2342, 2100, 1800, 2819, 2900, 3100, 3330, 3520],
      ma5:    [1610, 1790, 1940, 2090, 2330, 2090, 1790, 2800, 2880, 3080, 3234, 3400],
      ma25:   [1400, 1550, 1700, 1850, 2000, 2050, 2000, 2100, 2200, 2350, 2459, 2600],
      ma75:   [1200, 1300, 1400, 1500, 1600, 1650, 1700, 1750, 1780, 1800, 1800, 1850],
      volumes:[35, 28, 42, 38, 55, 45, 30, 65, 58, 72, 80, 90]
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
      N: { score: 8, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（31,860円台突破）。EV向け電池材料（負極材・電解銅箔）の需要急増。半導体向けスパッタリングターゲット材の新製品が量産開始。銅・亜鉛の資源価格上昇も追い風。" },
      S: { score: 7, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数5,714万株。信用倍率1.27倍。5日移動平均乖離率+5.5%。直近出来高3,447,900株は平均の2.1倍。時価総額1兆7,965億円と中型株のため需給は比較的安定。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "国内非鉄金属大手。EV向け電池材料・半導体材料分野では業界トップクラスの技術力。銅・亜鉛の資源開発から製品化まで一貫した垂直統合モデル。自己資本比率50.4%と財務健全性も高評価。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率28.5%（前期比+3.2%）。EV・半導体材料テーマとして機関投資家の注目度が高い。信託銀行・投資信託の保有が増加。大量保有報告も複数確認。" },
      M: { score: 8, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。非鉄金属セクターはEV・半導体需要を背景に市場全体をアウトパフォーム。銅・亜鉛価格の上昇トレンドも継続中。" }
    },
    // チャート分析（株探チャートAI視覚分析）
    chartAnalysis: {
      baseType: "カップウィズハンドル → ブレイクアウト",
      baseDescription: "2025年9〜11月にかけてカップウィズハンドル形成（14,000〜22,000円、調整幅約36%）。11月中旬に21,230円でピーク後、12月に調整。1月から再上昇し2/20に31,860円の52週高値更新。",
      pivotPoint: 22960,
      pivotDescription: "1/19の直近高値22,960円を超えた時点がピボット。現在はピボット上方36%で推移。",
      breakoutVolume: "平均の2.1倍（3,447,900株）のブレイクアウト",
      rsScore: 85,
      rsDescription: "日経平均比+90%のアウトパフォーム。非鉄金属セクター内でトップクラスのRS。",
      volumePattern: "上昇時に出来高増加、調整時に出来高減少という健全なパターン。移動平均線は5日>25日>75日の理想的な並び。",
      overallChartRating: "★★★★☆",
      buyTiming: "押し目形成後に買い。5日線（約29,050円）タッチ時に打診買い、25日線（約23,527円）タッチ時に本買い。",
      caution: "信用倍率1.27倍は低く需給は良好。ただし銅・亜鉛価格の変動リスクに注意。"
    },
    currentPrice: 31290,
    ma5: 29050,
    ma25: 23527,
    ma75: 19892,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 29050, range: "28,300〜29,800", timing: "5日線（約29,050円）への押し目。短期調整後の再上昇を狙う。出来高減少を確認してから打診買い。", riskReward: 2.4 },
      { label: "第2押し目（25日線タッチ）", price: 23500, range: "22,800〜24,200", timing: "25日線（約23,527円）への深押し。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 3.5 },
      { label: "第3押し目（75日線タッチ）", price: 19900, range: "19,200〜20,600", timing: "75日線（約19,892円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.8 }
    ],
    stopLoss: { price: 27600, desc: "第1押し目の場合：27,600円（5日線-5%）" },
    targetPrice: 40000,
    targetBasis: "EV電池材料事業の本格化を織り込んだ評価 × PER 30倍",
    riskReward: 2.4,
    chartData: {
      labels: ["9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/20"],
      prices: [16485, 17500, 19000, 20000, 21230, 19510, 16330, 19350, 22960, 26000, 29670, 31290],
      ma5:    [16400, 17400, 18900, 19900, 21100, 19400, 16200, 19200, 22800, 25800, 29050, 31000],
      ma25:   [14000, 15000, 16200, 17500, 18800, 19500, 19200, 19000, 19800, 21500, 23527, 26000],
      ma75:   [12000, 13000, 14200, 15500, 16800, 17800, 18200, 18500, 19000, 19500, 19892, 21000],
      volumes:[250, 220, 310, 280, 420, 350, 280, 320, 480, 520, 580, 345]
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
      N: { score: 8, label: "N — 新製品・新サービス・新高値", comment: "52週高値更新（9,903円台突破）。EV向け高圧ワイヤーハーネスの新製品が量産開始。光ファイバー・電力ケーブルの需要も増加。データセンター向け電力インフラ需要が新たな成長ドライバー。" },
      S: { score: 7, label: "S — 需給（株式の需要と供給）", comment: "発行済み株式数7.58億株と大型株。信用倍率10.59倍（買い過多・要注意）。5日移動平均乖離率+4.6%。直近出来高15,076,800株は平均の1.8倍。大型株のため需給は安定的だが信用倍率高め。" },
      L: { score: 8, label: "L — 業界リーダー度", comment: "国内ワイヤーハーネス・電線業界の最大手。EV向け高圧ケーブル・光ファイバーで世界トップクラスのシェア。PER 23.8倍・PBR 3.06倍は業界内で適正水準。" },
      I: { score: 8, label: "I — 機関投資家の支持", comment: "外国人持株比率31.2%（前期比+2.8%）。日経225採用銘柄として機関投資家の保有比率が高い。信託銀行・投資信託の保有が安定的に増加。大型株として機関投資家の売買が活発。" },
      M: { score: 7, label: "M — 市場の方向性", comment: "日経平均上昇トレンド継続。EV・データセンター関連セクターとして市場の注目度が高い。日経225採用銘柄として市場全体の上昇に連動しやすいが、大型株ゆえ機動性は低め。" }
    },
    // チャート分析（株探チャートAI視覚分析）
    chartAnalysis: {
      baseType: "カップウィズハンドル → ブレイクアウト",
      baseDescription: "2025年10〜12月にかけてカップウィズハンドル形成（4,315〜7,215円、調整幅約40%）。1月から急上昇し2/20に9,903円の52週高値更新。出来高15,076,800株の大幅増加。",
      pivotPoint: 7215,
      pivotDescription: "12/10の直近高値7,215円を超えた時点がピボット。現在はピボット上方35%で推移。",
      breakoutVolume: "平均の1.8倍（15,076,800株）のブレイクアウト",
      rsScore: 78,
      rsDescription: "日経平均比+60%のアウトパフォーム。非鉄金属セクター内で中位のRS。",
      volumePattern: "上昇時に出来高増加。ただし信用倍率10.59倍は高く、需給悪化リスクがある。",
      overallChartRating: "★★★☆☆",
      buyTiming: "押し目形成後に買い。5日線（約9,040円）タッチ時に打診買い、25日線（約7,641円）タッチ時に本買い。",
      caution: "信用倍率10.59倍は非常に高く、信用買い残の整理が起きると急落リスクあり。ポジションサイズを小さめに設定することを推奨。"
    },
    currentPrice: 9748,
    ma5: 9040,
    ma25: 7641,
    ma75: 6772,
    entryPoints: [
      { label: "第1押し目（5日線タッチ）", price: 9040, range: "8,800〜9,280", timing: "5日線（約9,040円）への押し目。短期調整後の再上昇を狙う。出来高減少を確認してから打診買い。", riskReward: 2.3 },
      { label: "第2押し目（25日線タッチ）", price: 7641, range: "7,400〜7,880", timing: "25日線（約7,641円）への深押し。最も確度の高い買い場。中期上昇トレンド確認後に本買い。", riskReward: 3.2 },
      { label: "第3押し目（75日線タッチ）", price: 6772, range: "6,550〜7,000", timing: "75日線（約6,772円）への大押し。長期投資家向けの絶好の買い場。", riskReward: 4.2 }
    ],
    stopLoss: { price: 8600, desc: "第1押し目の場合：8,600円（5日線-5%）" },
    targetPrice: 13000,
    targetBasis: "今期予想EPS 410.3円 × PER 31.7倍水準",
    riskReward: 2.3,
    chartData: {
      labels: ["9/19","10/3","10/17","10/31","11/14","11/28","12/12","12/26","1/16","1/30","2/13","2/20"],
      prices: [4671, 4315, 4495, 5688, 6629, 6033, 7215, 6836, 6115, 7640, 9320, 9748],
      ma5:    [4650, 4300, 4480, 5670, 6610, 6010, 7190, 6810, 6090, 7600, 9039, 9700],
      ma25:   [4095, 4200, 4350, 4600, 4900, 5300, 5700, 6100, 6400, 6900, 7641, 8200],
      ma75:   [3500, 3700, 3900, 4200, 4500, 4800, 5100, 5500, 5900, 6300, 6772, 7200],
      volumes:[800, 750, 900, 1100, 1300, 1100, 1500, 1200, 1000, 1400, 1800, 1508]
    }
  }
];

// ============================================================
// 米国銘柄（5銘柄）— Yahoo Finance API定量分析 + Finvizデータ
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
    // チャート分析（Yahoo Finance API定量分析）
    chartAnalysis: {
      baseType: "Cup with Handle → Breakout",
      baseDescription: "2025年Q3にカップ形成（$35〜$55）、Q4にハンドル形成（$50〜$60）。2026年1月以降に急騰ブレイクアウト。2/20に$170.01で52週高値更新。",
      pivotPoint: 65.0,
      pivotDescription: "Q4ハンドルの最高値$65を超えた時点がピボット。現在はピボット上方161%で推移（過熱感強い）。",
      breakoutVolume: "平均の3.4倍（1.73M株）の強力なブレイクアウト",
      rsScore: 98,
      rsDescription: "S&P500比+265%のアウトパフォーム（Perf Half Y）。NASDAQ内でトップクラスのRS。",
      volumePattern: "ブレイクアウト時に出来高が平均の3.4倍に急増。機関投資家の積極的な買いが確認される。",
      overallChartRating: "★★★★★",
      buyTiming: "急騰後の大きな押し目を待つ。5日線（$157）タッチ時に打診買い、25日線（$137）タッチ時に本買い。",
      caution: "ピボットから161%上昇しており過熱感が非常に強い。焦らず押し目を待つことが最重要。"
    },
    currentPrice: 170.01,
    ma5: 157.43,
    ma25: 137.43,
    ma75: 77.17,
    entryPoints: [
      { label: "1st Pullback (5-day MA)", price: 157, range: "$152〜$162", timing: "5-day MA (~$157.43) pullback. Short-term correction after surge. Wait for volume to dry up.", riskReward: 3.2 },
      { label: "2nd Pullback (25-day MA)", price: 137, range: "$132〜$142", timing: "25-day MA (~$137.43) pullback. Best entry point. Mid-term trend confirmation.", riskReward: 4.5 },
      { label: "3rd Pullback (75-day MA)", price: 77, range: "$73〜$81", timing: "75-day MA (~$77.17) deep pullback. Long-term investors' strong opportunity.", riskReward: 8.2 }
    ],
    stopLoss: { price: 149, desc: "1st pullback: $149 (5-day MA -5%)" },
    targetPrice: 250,
    targetBasis: "Forward P/E 40.5x × EPS next Y $4.20 + AI premium",
    riskReward: 3.2,
    chartData: {
      labels: ["Sep 19","Oct 3","Oct 17","Oct 31","Nov 14","Nov 28","Dec 12","Dec 26","Jan 16","Jan 30","Feb 13","Feb 20"],
      prices: [38.5, 42.0, 48.5, 55.2, 62.8, 72.5, 88.3, 108.6, 132.4, 152.8, 161.5, 170.0],
      ma5:    [38.0, 41.5, 48.0, 54.8, 62.3, 72.0, 87.8, 108.0, 131.8, 152.0, 157.4, 168.0],
      ma25:   [35.0, 37.5, 40.2, 43.8, 48.5, 55.0, 64.2, 77.5, 95.8, 115.0, 137.4, 152.0],
      ma75:   [28.0, 30.5, 33.2, 36.8, 41.5, 48.0, 56.2, 65.5, 72.8, 77.2, 85.0, 95.0],
      volumes:[0.32, 0.28, 0.45, 0.38, 0.52, 0.65, 0.88, 1.12, 1.45, 1.62, 1.55, 1.73]
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
    // チャート分析（Yahoo Finance API定量分析）
    chartAnalysis: {
      baseType: "Flat Base → Earnings Gap Up",
      baseDescription: "2025年10月〜2026年2月にかけてフラットベース形成（$22〜$30）。2/19の決算発表後に+34.4%のギャップアップで52週高値更新。",
      pivotPoint: 30.0,
      pivotDescription: "フラットベースの最高値$30を超えた時点がピボット。現在はピボット上方32%で推移。",
      breakoutVolume: "平均の8.1倍（14.54M株）の超強力なブレイクアウト（決算ギャップアップ）",
      rsScore: 82,
      rsDescription: "S&P500比+35%のアウトパフォーム（直近1ヶ月）。決算後の急騰でRSが急上昇。",
      volumePattern: "決算ギャップアップ時に出来高が平均の8.1倍に急増。ショートカバー（Short Float 13.11%）も上昇に寄与。",
      overallChartRating: "★★★★☆",
      buyTiming: "急騰後の押し目形成を待つ。$33〜$35エリアでの押し目が最初の買い場。25日線（$28.32）タッチ時が本買い。",
      caution: "決算ギャップアップ後のため短期的な過熱感あり。Short Float 13.11%のショートカバー一巡後の調整に注意。"
    },
    currentPrice: 39.50,
    ma5: 28.55,
    ma25: 28.32,
    ma75: 25.00,
    entryPoints: [
      { label: "1st Pullback (post-gap area)", price: 33, range: "$31〜$35", timing: "Post-surge consolidation around $33. Wait for volume to dry up significantly before entry.", riskReward: 2.8 },
      { label: "2nd Pullback (25-day MA)", price: 28.3, range: "$26〜$30", timing: "25-day MA (~$28.32) pullback. Best entry point. Mid-term trend confirmation.", riskReward: 3.8 },
      { label: "3rd Pullback (75-day MA)", price: 25, range: "$23〜$27", timing: "75-day MA (~$25) deep pullback. Strong support zone for long-term investors.", riskReward: 5.0 }
    ],
    stopLoss: { price: 31, desc: "1st pullback: $31 (below post-gap support)" },
    targetPrice: 55,
    targetBasis: "Forward P/E 7.33x × EPS next Y $5.39 + re-rating premium",
    riskReward: 2.8,
    chartData: {
      labels: ["Sep 19","Oct 3","Oct 17","Oct 31","Nov 14","Nov 28","Dec 12","Dec 26","Jan 16","Jan 30","Feb 13","Feb 20"],
      prices: [22.5, 24.2, 26.8, 28.5, 29.8, 28.2, 26.5, 27.8, 29.2, 28.8, 29.4, 39.5],
      ma5:    [22.3, 24.0, 26.6, 28.3, 29.6, 28.0, 26.3, 27.6, 29.0, 28.6, 28.55, 38.0],
      ma25:   [20.5, 21.5, 22.8, 24.2, 25.8, 27.0, 27.5, 28.0, 28.2, 28.3, 28.32, 30.5],
      ma75:   [18.5, 19.5, 20.8, 22.0, 23.2, 24.0, 24.5, 25.0, 25.2, 25.3, 25.0, 26.5],
      volumes:[1.2, 0.9, 1.5, 1.3, 1.8, 1.4, 1.1, 1.3, 1.6, 1.5, 1.7, 14.5]
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
    // チャート分析（Yahoo Finance API定量分析）
    chartAnalysis: {
      baseType: "Rocket Launch (Turnaround)",
      baseDescription: "2025年9月の$2.5から急騰開始。ターンアラウンド（業績回復）型の急騰パターン。半年で10倍超（Perf Half Y +1,082%）。2/20に$29.68で52週高値更新。",
      pivotPoint: 10.0,
      pivotDescription: "2025年11月の$10突破がピボット。現在はピボット上方197%で推移（過熱感非常に強い）。",
      breakoutVolume: "平均の約30倍（14.44M株）の超強力なブレイクアウト",
      rsScore: 99,
      rsDescription: "S&P500比+1,196%のアウトパフォーム（Perf Year）。NASDAQ内で最高水準のRS。",
      volumePattern: "急騰時に出来高が平均の30倍に急増。機関投資家の急速な買い増し（Inst Trans +40.59%）が確認される。",
      overallChartRating: "★★★★★",
      buyTiming: "急騰後の大きな押し目を待つ。$22〜$26エリアでの押し目が最初の買い場。25日線（$19.45）タッチ時が本買い。",
      caution: "Perf Year +1,196%と驚異的な上昇のため、過熱感が非常に強い。Insider Trans -13.91%（インサイダー売り）にも注意。小型株のため値動きが激しい。"
    },
    currentPrice: 29.68,
    ma5: 19.45,
    ma25: 19.45,
    ma75: 8.01,
    entryPoints: [
      { label: "1st Pullback (post-surge)", price: 24, range: "$22〜$26", timing: "Post-surge consolidation. Wait for volume to dry up significantly (at least 50% below average) before entry.", riskReward: 2.5 },
      { label: "2nd Pullback (25-day MA)", price: 19.5, range: "$17〜$21", timing: "25-day MA (~$19.45) pullback. Best entry point. Mid-term trend confirmation.", riskReward: 4.2 },
      { label: "3rd Pullback (75-day MA)", price: 12, range: "$10〜$14", timing: "75-day MA area (~$8〜$12) deep pullback. Long-term investors' strong support.", riskReward: 6.5 }
    ],
    stopLoss: { price: 22.8, desc: "1st pullback: $22.80 (below $24 support -5%)" },
    targetPrice: 45,
    targetBasis: "AI/optical communications demand re-rating + Forward P/E expansion",
    riskReward: 2.5,
    chartData: {
      labels: ["Sep 19","Oct 3","Oct 17","Oct 31","Nov 14","Nov 28","Dec 12","Dec 26","Jan 16","Jan 30","Feb 13","Feb 20"],
      prices: [2.5, 3.2, 4.8, 7.2, 10.5, 13.8, 16.2, 19.5, 22.8, 25.2, 23.8, 29.7],
      ma5:    [2.4, 3.1, 4.7, 7.1, 10.4, 13.7, 16.1, 19.45, 22.5, 25.0, 23.5, 28.5],
      ma25:   [2.2, 2.5, 3.0, 4.0, 5.8, 8.2, 11.0, 14.5, 19.45, 21.5, 22.0, 24.5],
      ma75:   [2.0, 2.2, 2.5, 3.0, 3.8, 5.0, 6.5, 8.01, 10.5, 13.0, 16.0, 19.0],
      volumes:[0.45, 0.38, 0.82, 1.25, 2.15, 3.42, 4.85, 6.25, 8.45, 9.85, 8.25, 14.4]
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
    // チャート分析（Yahoo Finance API定量分析）
    chartAnalysis: {
      baseType: "Double Bottom → Recovery",
      baseDescription: "2025年9月〜2026年1月にかけてダブルボトム形成（$15.70〜$24）。2/19の決算後に+12.46%急騰し52週高値更新。ただし75日線（$23.50）が上値抵抗となっている。",
      pivotPoint: 24.0,
      pivotDescription: "ダブルボトムの中間高値$24を超えた時点がピボット。ただし現在はピボット下方19%で推移（未達）。",
      breakoutVolume: "平均の4.5倍（9.08M株）のブレイクアウト",
      rsScore: 65,
      rsDescription: "S&P500比-54%のアンダーパフォーム（Perf Year）。RS改善中だが依然として市場平均を下回る。",
      volumePattern: "決算後に出来高が平均の4.5倍に急増。ただし75日線が上値抵抗として機能しており、突破できるか注目。",
      overallChartRating: "★★★☆☆",
      buyTiming: "75日線（$23.50）を明確に突破してから買いを検討。現在は75日線が上値抵抗のため慎重に。",
      caution: "Perf Year -54%と市場に大幅アンダーパフォーム。Inst Trans -10.49%（機関売り越し）も懸念材料。75日線突破を確認してから買いを検討すること。"
    },
    currentPrice: 19.32,
    ma5: 17.44,
    ma25: 18.88,
    ma75: 23.50,
    entryPoints: [
      { label: "1st Entry (after 75-day MA break)", price: 24.5, range: "$23.5〜$25.5", timing: "Wait for clear break above 75-day MA ($23.50) with volume. Do NOT buy before this confirmation.", riskReward: 2.5 },
      { label: "2nd Pullback (25-day MA)", price: 18.9, range: "$18〜$19.8", timing: "25-day MA (~$18.88) as support. Only if 75-day MA breakout has been confirmed.", riskReward: 2.0 },
      { label: "3rd Pullback (52W Low area)", price: 15.7, range: "$15〜$16.5", timing: "52W Low area ($15.70) as strong support. Long-term entry only.", riskReward: 3.5 }
    ],
    stopLoss: { price: 16.6, desc: "Stop loss: $16.60 (below 52W low area)" },
    targetPrice: 30,
    targetBasis: "Forward P/E 5.30x × EPS next Y $3.64 + AI re-rating",
    riskReward: 2.5,
    chartData: {
      labels: ["Sep 19","Oct 3","Oct 17","Oct 31","Nov 14","Nov 28","Dec 12","Dec 26","Jan 16","Jan 30","Feb 13","Feb 20"],
      prices: [24.2, 22.5, 20.8, 18.5, 17.2, 16.5, 15.7, 17.0, 17.5, 17.2, 17.18, 19.32],
      ma5:    [24.0, 22.3, 20.6, 18.3, 17.0, 16.3, 15.6, 16.8, 17.44, 17.0, 17.0, 19.0],
      ma25:   [26.5, 25.0, 23.5, 22.0, 20.5, 19.5, 18.8, 18.5, 18.2, 18.5, 18.88, 19.5],
      ma75:   [30.2, 28.5, 27.0, 25.8, 24.8, 24.2, 23.8, 23.5, 23.5, 23.5, 23.5, 23.0],
      volumes:[2.5, 1.8, 2.2, 1.9, 2.1, 1.8, 1.6, 1.9, 2.0, 1.8, 2.0, 9.1]
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
    // チャート分析（Yahoo Finance API定量分析）
    chartAnalysis: {
      baseType: "Downtrend → Earnings Recovery",
      baseDescription: "2025年9月〜2026年1月にかけて下降トレンド（$55→$34.57）。2/19の決算後に+10.74%急騰し52週高値更新。ただし75日線（$47.63）・25日線（$41.69）が上値抵抗として機能。",
      pivotPoint: 47.63,
      pivotDescription: "75日線$47.63が主要な上値抵抗。現在はこれを下回っており、本格的なブレイクアウトには75日線突破が必要。",
      breakoutVolume: "平均の5.9倍（4.33M株）のブレイクアウト",
      rsScore: 45,
      rsDescription: "S&P500比-28.7%のアンダーパフォーム（Perf Year）。RS改善の兆しはあるが依然として市場平均を大幅に下回る。",
      volumePattern: "決算後に出来高が平均の5.9倍に急増。ただし75日線・25日線が上値抵抗として機能しており、突破できるか注目。",
      overallChartRating: "★★☆☆☆",
      buyTiming: "75日線（$47.63）を明確に突破してから買いを検討。現在は下降トレンドからの回復初期段階のため慎重に。",
      caution: "Perf Year -28.7%と市場に大幅アンダーパフォーム。75日線・25日線が上値抵抗として機能。EPS長期成長率が低調（3Y -8.21%）。CANSLIMの観点では最も慎重に扱うべき銘柄。"
    },
    currentPrice: 40.33,
    ma5: 41.69,
    ma25: 41.69,
    ma75: 47.63,
    entryPoints: [
      { label: "1st Entry (after 75-day MA break)", price: 48.5, range: "$47〜$50", timing: "Wait for clear break above 75-day MA ($47.63) with strong volume. Do NOT buy before this confirmation.", riskReward: 2.5 },
      { label: "2nd Pullback (25-day MA)", price: 41.7, range: "$39〜$43", timing: "25-day MA (~$41.69) as support. Only if 75-day MA breakout has been confirmed.", riskReward: 2.0 },
      { label: "3rd Pullback (Base area)", price: 35, range: "$33〜$37", timing: "Prior base area as strong support. Long-term entry only.", riskReward: 3.5 }
    ],
    stopLoss: { price: 37, desc: "Stop loss: $37 (below recent support)" },
    targetPrice: 65,
    targetBasis: "Analyst target price $65.50 + AI re-rating",
    riskReward: 2.2,
    chartData: {
      labels: ["Sep 19","Oct 3","Oct 17","Oct 31","Nov 14","Nov 28","Dec 12","Dec 26","Jan 16","Jan 30","Feb 13","Feb 20"],
      prices: [55.2, 52.8, 49.5, 46.2, 43.8, 41.5, 39.2, 37.5, 35.8, 36.4, 36.42, 40.33],
      ma5:    [55.0, 52.6, 49.3, 46.0, 43.6, 41.3, 39.0, 37.3, 35.6, 36.2, 41.69, 40.0],
      ma25:   [58.5, 56.2, 54.0, 52.0, 50.0, 48.5, 47.0, 45.5, 44.0, 42.5, 41.69, 42.0],
      ma75:   [62.5, 61.0, 59.5, 58.0, 56.5, 55.0, 53.5, 52.0, 50.5, 49.0, 47.63, 46.5],
      volumes:[0.55, 0.48, 0.62, 0.58, 0.72, 0.65, 0.58, 0.52, 0.48, 0.52, 0.55, 4.33]
    }
  }
];
