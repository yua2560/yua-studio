export type Promotion = {
  id: string;
  title: string;
  image: string;
  href: string;
  active: boolean;
};

// キャンペーンバナーのデータです。
// 画像は public/images/promotions/ に配置し、image に "/images/promotions/ファイル名" を指定してください。
// active を false にすると、削除せずに一時的に非表示にできます。
// 表示順はこの配列の順番どおりになります。
export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "夏休み限定！学生歌い手応援企画 ミックス・マスタリング無料キャンペーン",
    image: "/images/promotions/promo-1.png",
    href: "/campaign/mix-mastering-free",
    active: true,
  },
  {
    id: "promo-2",
    title: "サンプル広告2",
    image: "/images/promotions/promo-2.jpg",
    href: "/services",
    active: false,
  },
  {
    id: "promo-3",
    title: "サンプル広告3",
    image: "/images/promotions/promo-3.jpg",
    href: "/services",
    active: false,
  },
  {
    id: "promo-4",
    title: "サンプル広告4",
    image: "/images/promotions/promo-4.jpg",
    href: "/services",
    active: false,
  },
  {
    id: "promo-5",
    title: "サンプル広告5",
    image: "/images/promotions/promo-5.jpg",
    href: "/services",
    active: false,
  },
];
