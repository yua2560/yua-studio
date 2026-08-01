export type WorkCategory = "Music" | "Video" | "Web" | "Education" | "A Cappella";

export type Work = {
  id: string;
  title: string;
  category: WorkCategory;
  role: string;
  description: string;
  detail: string;
  image?: string;
  isSample: boolean;
};

export const workCategories: WorkCategory[] = [
  "Music",
  "Video",
  "Web",
  "Education",
  "A Cappella",
];

// サンプルデータです。制作実績が増え次第、この配列に追加・差し替えを行ってください。
export const works: Work[] = [
  {
    id: "sample-ballad-mix",
    title: "オリジナルバラード楽曲 ミックス・マスタリング(サンプル)",
    category: "Music",
    role: "ミックス・マスタリング",
    description:
      "ピアノとストリングスを中心としたバラード楽曲のミックス・マスタリングを行ったサンプル制作です。",
    detail:
      "楽器バランスとボーカルの聴きやすさを重視し、曲全体の温かみを損なわないようにマスタリングで音圧を整えました。配信を想定した書き出しを行っています。",
    isSample: true,
  },
  {
    id: "sample-utattemita",
    title: "歌ってみた音源 ピッチ補正・ミックス(サンプル)",
    category: "Music",
    role: "ピッチ補正、ミックス",
    description:
      "歌ってみた音源を想定し、音程補正からミックスまでを行ったサンプル制作です。",
    detail:
      "不自然にならない範囲でのピッチ補正と、原曲のオケに馴染むボーカルミックスを意識して制作しました。",
    isSample: true,
  },
  {
    id: "sample-shorts-edit",
    title: "ショート動画編集(サンプル)",
    category: "Video",
    role: "カット、テロップ、BGM選定",
    description:
      "短尺動画向けに、テンポの良いカットとテロップを意識して編集したサンプル制作です。",
    detail:
      "冒頭数秒で内容が伝わるように構成し、離脱されにくいテンポのカット割りとテロップ配置を行いました。",
    isSample: true,
  },
  {
    id: "sample-music-video",
    title: "ミュージックビデオ風動画編集(サンプル)",
    category: "Video",
    role: "編集、色調補正、サムネイル制作",
    description:
      "楽曲の雰囲気に合わせた色調補正とカット割りを行ったミュージックビデオ風動画のサンプルです。",
    detail:
      "楽曲の世界観に合わせて色味とカットのリズムを調整し、映像と音のイメージが揃うよう仕上げました。",
    isSample: true,
  },
  {
    id: "sample-profile-site",
    title: "個人クリエイター向けプロフィールサイト(サンプル)",
    category: "Web",
    role: "デザイン、実装、公開支援",
    description:
      "個人クリエイターの活動紹介を目的とした、1ページ構成のシンプルなプロフィールサイトのサンプルです。",
    detail:
      "活動内容が一目で伝わるよう情報を整理し、スマートフォンでも読みやすいレイアウトで実装しました。",
    isSample: true,
  },
  {
    id: "sample-circle-site",
    title: "サークル紹介サイト(サンプル)",
    category: "Web",
    role: "デザイン、情報設計、実装",
    description:
      "活動内容やメンバー紹介をまとめた、サークル向け複数ページサイトのサンプルです。",
    detail:
      "活動紹介・メンバー紹介・イベント情報をページごとに整理し、更新しやすい構成で制作しました。",
    isSample: true,
  },
  {
    id: "sample-math-worksheet",
    title: "中学数学 単元別ワークシート(サンプル)",
    category: "Education",
    role: "教材構成、問題作成、レイアウト",
    description:
      "つまずきやすい単元を中心に構成した、復習用ワークシートのサンプルです。",
    detail:
      "基礎から応用への段階を踏めるよう問題を並べ、解き進めやすいレイアウトにまとめました。",
    isSample: true,
  },
  {
    id: "sample-lesson-slide",
    title: "高校数学 授業スライド(サンプル)",
    category: "Education",
    role: "スライド構成、デザイン",
    description:
      "定期テスト対策を目的とした、要点整理型の授業スライドのサンプルです。",
    detail:
      "要点を絞って一枚ごとに情報を整理し、見返したときに理解しやすいスライド構成にしました。",
    isSample: true,
  },
  {
    id: "sample-acappella-score",
    title: "混声アカペラ フルコーラスアレンジ楽譜(サンプル)",
    category: "A Cappella",
    role: "フルコーラスアレンジ、楽譜制作",
    description:
      "既存曲を混声アカペラ向けにフルコーラスでアレンジした楽譜制作のサンプルです。",
    detail:
      "原曲の雰囲気を生かしながら、各パート・ボイスパーカッションの歌いやすさを意識してアレンジ・採譜を行いました。",
    isSample: true,
  },
  {
    id: "sample-acappella-score-2",
    title: "少人数編成 フルコーラスアレンジ楽譜(サンプル)",
    category: "A Cappella",
    role: "フルコーラスアレンジ、楽譜制作",
    description:
      "少人数編成向けに既存曲をフルコーラスでアレンジした楽譜制作のサンプルです。",
    detail:
      "限られた人数でもバランス良く聴こえるよう、パート配置とボイスパーカッションの役割を工夫しました。",
    isSample: true,
  },
];
