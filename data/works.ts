export type WorkCategory = "Music" | "Video" | "Web" | "Education" | "A Cappella";

export type Work = {
  id: string;
  title: string;
  category: WorkCategory;
  role: string;
  description: string;
  detail: string;
  date: string;
  image: string;
  youtubeUrl?: string;
  linkUrl?: string;
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
// サムネイル画像は public/images/works/ に、各作品の id と同じファイル名で配置してください(例: original-ballad.jpg)。
// YouTube動画がある作品は youtubeUrl に動画のURLを入れてください。ない場合は空文字のままでOKです。
export const works: Work[] = [
  {
    id: "original-koibitotowakaretaima",
    title: "オリジナルバラード楽曲「恋人と別れた、今。」",
    category: "Music",
    role: "作詞・作曲",
    description:
      "ピアノとストリングスを生かした、オリジナルバラード楽曲です。",
    detail:
      "別れをテーマに、切なさと温かさを大切にしながらメロディと歌詞を制作しました。",
    date: "2026/8/1",
    image: "/images/works/original-koibitotowakaretaima.png",
    youtubeUrl: "https://youtu.be/rUIDs1ve5hQ",
    isSample: false,
  },
  {
    id: "original-ballad-mix-mastering",
    title: "オリジナルバラード楽曲 ミックス・マスタリング(サンプル)",
    category: "Music",
    role: "ミックス・マスタリング",
    description:
      "ピアノとストリングスを中心としたバラード楽曲のミックス・マスタリングを行ったサンプル制作です。",
    detail:
      "楽器バランスとボーカルの聴きやすさを重視し、曲全体の温かみを損なわないようにマスタリングで音圧を整えました。配信を想定した書き出しを行っています。",
    date: "2026/8/1",
    image: "/images/works/original-ballad-mix-mastering.jpg",
    youtubeUrl: "",
    isSample: true,
  },
  {
    id: "utattemita-pitch-mix-mastering-encode",
    title: "歌ってみた音源 ピッチ補正・ミックス・マスタリング・エンコード(サンプル)",
    category: "Music",
    role: "ピッチ補正、ミックス、マスタリング、エンコード",
    description:
      "歌ってみた音源を想定し、音程補正からミックス・マスタリング・エンコードまでを行ったサンプル制作です。",
    detail:
      "不自然にならない範囲でのピッチ補正と、原曲のオケに馴染むミックス・マスタリングを行い、配信用にエンコードして書き出しました。",
    date: "2026/8/1",
    image: "/images/works/utattemita-pitch-mix-mastering-encode.png",
    youtubeUrl: "https://youtu.be/iqa4Q-pMLH0",
    isSample: true,
  },
  {
    id: "shorts-edit",
    title: "ショート動画編集(サンプル)",
    category: "Video",
    role: "カット、テロップ、BGM選定",
    description:
      "短尺動画向けに、テンポの良いカットとテロップを意識して編集したサンプル制作です。",
    detail:
      "冒頭数秒で内容が伝わるように構成し、離脱されにくいテンポのカット割りとテロップ配置を行いました。",
    date: "2026/8/1",
    image: "/images/works/shorts-edit.jpg",
    youtubeUrl: "",
    isSample: true,
  },
  {
    id: "site-sansu-sugaku-atelier",
    title: "個人クリエーター向けサイト「算数・数学のアトリエ」",
    category: "Web",
    role: "デザイン、実装、公開支援",
    description:
      "小学校から大学数学までの単元をわかりやすく解説する、学習コンテンツサイトです。",
    detail:
      "学年別・単元別に検索できるページ構成にし、単元ごとの解説動画とオリジナルプリントのPDF無料ダウンロード機能を実装しました。登録不要で、つまずいた単元から学び直せる作りにしています。",
    date: "2026/8/1",
    image: "/images/works/site-sansu-sugaku-atelier.png",
    linkUrl: "https://www.sansu-sugaku-atelier.com/",
    isSample: false,
  },
  {
    id: "acappella-tenbyonouta",
    title: "アカペラ楽譜「点描の唄」",
    category: "A Cappella",
    role: "フルコーラスアレンジ、楽譜制作",
    description:
      "「点描の唄」を6〜7人編成の混声アカペラ向けにフルコーラスでアレンジした楽譜制作です。",
    detail:
      "限られた人数でもバランス良く聴こえるよう、パート配置とボイスパーカッションの役割を工夫しました。",
    date: "2026/8/1",
    image: "/images/works/acappella_Tenbyonouta.png",
    youtubeUrl: "https://youtu.be/WuZ66AZrZFc",
    isSample: false,
  },
];

// 実績(isSample: false)を新しい日付順で先頭に、サンプル(isSample: true)は末尾にまとめて表示するための並び替え済み配列です。
export const sortedWorks: Work[] = [...works].sort((a, b) => {
  if (a.isSample !== b.isSample) return a.isSample ? 1 : -1;
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
