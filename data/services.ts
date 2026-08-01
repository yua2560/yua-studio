export type ServiceCategory = "Music" | "Video & Design" | "Education";

export type PriceItem = {
  label: string;
  price: string;
};

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  summary: string;
  description: string[];
  details: string[];
  tools?: string[];
  priceItems: PriceItem[];
  priceNote?: string;
  deliveryFormat: string;
};

export const categoryInfo: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  Music: {
    label: "Music",
    description: "ミックス・マスタリング、作詞作曲、アカペラ楽譜制作など、音にまつわる制作を行います。",
  },
  "Video & Design": {
    label: "Video & Design",
    description: "動画編集、サムネイル制作、Webサイト制作など、映像・ビジュアル面の制作を行います。",
  },
  Education: {
    label: "Education",
    description: "数学の個別指導や教材制作など、学びを支えるサポートを行います。",
  },
};

export const services: Service[] = [
  {
    slug: "mix-mastering",
    name: "ミックス・マスタリング",
    category: "Music",
    summary:
      "歌ってみた、オリジナル楽曲、アカペラ音源などを対象に、音程補正からマスタリングまで対応します。",
    description: [
      "歌ってみた、オリジナル楽曲、アカペラ音源などを対象に、音程補正、タイミング補正、ミックス、マスタリングを行います。",
      "楽曲の雰囲気やイメージに合わせて、聴きやすく、かつ表現が伝わる音作りを心がけています。",
    ],
    details: [
      "音程・タイミング補正(Melodyneなどを使用)",
      "トラックごとのミックスバランス調整",
      "マスタリングによる音圧・音質の仕上げ",
      "音源の用途(配信用、練習用など)に応じた書き出し",
    ],
    tools: ["Melodyne", "iZotope Ozone", "各種DAW、プラグイン"],
    priceItems: [
      { label: "ミックス", price: "5,000円〜" },
      { label: "ピッチ補正込み", price: "8,000円〜" },
      { label: "マスタリング", price: "3,000円〜" },
      { label: "エンコード", price: "500円〜" },
    ],
    priceNote: "曲の長さやトラック数、修正回数により変動します。価格はすべて税込です。",
    deliveryFormat: "WAV(ご要望に応じてMP3などにも対応します)",
  },
  {
    slug: "video-editing",
    name: "動画編集",
    category: "Video & Design",
    summary:
      "YouTube動画、ショート動画、ミュージックビデオ風動画、教育動画などに対応します。",
    description: [
      "YouTube動画、ショート動画、ミュージックビデオ風動画、教育動画などの編集を行います。",
      "内容が伝わりやすく、最後まで見てもらいやすい構成・テンポを意識して編集します。",
    ],
    details: [
      "カット編集",
      "テロップ挿入",
      "BGM・効果音の選定、挿入",
      "色調補正",
      "サムネイル制作",
      "ショート動画への再編集",
    ],
    priceItems: [
      { label: "ショート動画", price: "3,000円〜" },
      { label: "通常動画", price: "8,000円〜" },
      { label: "サムネイル", price: "2,000円〜" },
    ],
    priceNote: "動画の長さや編集量(テロップ量、素材数など)によって料金が変わります。価格はすべて税込です。",
    deliveryFormat: "MP4",
  },
  {
    slug: "lyrics-composition",
    name: "オリジナル楽曲作成",
    category: "Music",
    summary:
      "バラード系の楽曲を中心に、作詞、作曲、編曲を行います。",
    description: [
      "バラード系の楽曲を中心に、作詞、作曲、編曲を行います。",
      "切なさや温かさを大切にしながら、伝えたい気持ちを歌詞やメロディに落とし込みます。",
    ],
    details: [
      "切ないバラード",
      "感動的な楽曲",
      "卒業、別れ、応援をテーマにした楽曲",
      "ピアノやストリングスを生かした楽曲",
    ],
    priceItems: [
      { label: "作詞", price: "5,000円〜" },
      { label: "作曲", price: "10,000円〜" },
      { label: "作詞作曲", price: "15,000円〜" },
    ],
    priceNote: "編曲の規模や希望構成により変動します。価格はすべて税込です。",
    deliveryFormat: "歌詞データ(PDF)、デモ音源(WAV)",
  },
  {
    slug: "a-cappella-arrangement",
    name: "アカペラ楽譜制作",
    category: "Music",
    summary:
      "アカペラアレンジを得意とするクリエイターが、既存曲やオリジナル曲のフルコーラスアレンジ・楽譜制作を行います。",
    description: [
      "アカペラサークルでの活動経験を持つクリエイターが、既存曲やオリジナル曲のアカペラアレンジ、楽譜制作を行います。",
      "混声・少人数編成など、編成に合わせたアレンジに対応します。",
    ],
    details: ["混声アカペラ", "少人数編成", "フルコーラスアレンジ"],
    priceItems: [
      {
        label: "フルコーラスアレンジ",
        price: "バンド人数 × 1,000円〜(ボイスパーカッション含む)",
      },
      {
        label: "過去に制作した楽譜を使用する場合",
        price: "3,000円〜",
      },
    ],
    priceNote:
      "既存楽曲を使用する場合、著作権・利用許諾の確認は依頼者様側で行っていただく必要があります。内容によってはご依頼をお受けできない場合があります。価格はすべて税込です。",
    deliveryFormat: "MuseScoreファイル、MIDI、PDF(楽譜データ)",
  },
  {
    slug: "math-tutoring",
    name: "数学指導",
    category: "Education",
    summary:
      "小学生から高校生までを中心に、算数・数学の個別指導を行います。",
    description: [
      "小学生から高校生までを中心に、算数・数学の個別指導を行います。",
      "「分からない原因を一緒に見つけ、つまずいた場所から丁寧に学び直す」ことを大切にしています。",
    ],
    details: [
      "学校の授業の予習、復習",
      "定期テスト対策",
      "高校受験対策",
      "大学受験の基礎固め",
      "つまずいた単元からの学び直し",
      "教材や学習計画の相談",
    ],
    priceItems: [
      { label: "オンライン指導60分", price: "3,000円〜" },
      { label: "教材添削・質問対応", price: "内容に応じて見積もり" },
    ],
    priceNote: "価格はすべて税込です。",
    deliveryFormat: "オンライン通話(Zoomなど)、資料はPDF",
  },
  {
    slug: "teaching-materials",
    name: "教材制作・教材研究サポート",
    category: "Education",
    summary:
      "授業プリント、スライド、問題集、解説資料などの制作を支援します。",
    description: [
      "数学教育や教材制作の経験を持つクリエイターが、授業プリント、スライド、問題集、解説資料などの制作をサポートします。",
      "分かりやすさと使いやすさを重視した教材づくりを心がけています。",
    ],
    details: [
      "ワークシート制作",
      "授業スライド制作",
      "問題・解説作成",
      "教材のレイアウト改善",
      "学習動画の構成相談",
    ],
    priceItems: [{ label: "内容に応じて見積もり", price: "要相談" }],
    priceNote: "分量や納期により料金が変動します。まずはご相談ください。価格はすべて税込です。",
    deliveryFormat: "PDF、PowerPoint(ご希望の形式をご相談ください)",
  },
  {
    slug: "web-design",
    name: "Webサイト制作",
    category: "Video & Design",
    summary:
      "個人、サークル、小規模な活動向けのWebサイトを、デザインと情報整理を重視して制作します。",
    description: [
      "個人、サークル、小規模な活動向けのWebサイトを制作します。",
      "大規模なシステム開発ではなく、デザインと情報整理を重視した小規模サイト制作として対応しています。",
    ],
    details: [
      "プロフィールサイト",
      "ポートフォリオサイト",
      "イベントサイト",
      "サークル、団体サイト",
      "簡単なサービス紹介サイト",
      "スマートフォン対応",
      "Vercelなどを使用した公開支援",
    ],
    priceItems: [
      { label: "1ページの簡易サイト", price: "20,000円〜" },
      { label: "複数ページサイト", price: "50,000円〜" },
      { label: "更新・修正", price: "内容に応じて見積もり" },
    ],
    priceNote: "ページ数や機能により変動します。価格はすべて税込です。",
    deliveryFormat: "公開URL納品(Vercelなど)、ご要望に応じてソースコード納品",
  },
];

export const servicesByCategory: Record<ServiceCategory, Service[]> = {
  Music: services.filter((s) => s.category === "Music"),
  "Video & Design": services.filter((s) => s.category === "Video & Design"),
  Education: services.filter((s) => s.category === "Education"),
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
