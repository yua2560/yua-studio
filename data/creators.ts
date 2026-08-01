export type Creator = {
  slug: string;
  name: string;
  role: string;
  fields: string[];
  bio: string;
  profile: string[];
  image?: string;
  sns?: {
    x?: string;
    youtube?: string;
  };
};

// 所属クリエイターのデータです。増える際はこの配列にオブジェクトを追加してください。
// image は public/images/creators/ に置き、パスを指定してください。未設定の間はイニシャル表示になります。
export const creators: Creator[] = [
  {
    slug: "yua",
    name: "ゆーあ",
    role: "Founder / Creator",
    fields: ["Music", "Video", "Web", "Education"],
    bio: "音楽・映像・Web・教育など、分野を横断して制作しています。",
    profile: [
      "OneMADE Studioの founder。数学教育を学びながら、YouTube動画制作、音楽制作、Webサイト制作、教材制作など、複数の分野に取り組んできました。",
      "大学ではアカペラサークルに所属し、既存曲のアレンジや音源編集を経験。分野を横断しながら、依頼者の活動や表現に合った形を一緒に考えることを大切にしています。",
    ],
    image: "/images/creators/yua.jpg",
    sns: {
      x: "https://x.com/yua_studio2560",
    },
  },
];
