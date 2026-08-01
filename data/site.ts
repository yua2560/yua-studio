export const siteConfig = {
  name: "Yua Studio",
  activityName: "ゆーあ",
  catchCopy: "あなたの表現を、形にする。",
  description:
    "Yua Studioは、音楽・映像・教育・Web制作を通して、一人ひとりの活動や表現を支える個人クリエイティブスタジオです。",
  descriptionLines: [
    "Yua Studioは、音楽・映像・教育・Web制作を通して、",
    "一人ひとりの活動や表現を支える個人クリエイティブスタジオです。",
  ],
  seoTitle: "Yua Studio｜音楽・映像・教育・Web制作",
  seoDescription:
    "Yua Studioは、動画編集、ミックス・マスタリング、作詞作曲、数学指導、教材制作、Webサイト制作、アカペラ楽譜制作を行う個人クリエイティブスタジオです。",
  url: "https://yua-studio.vercel.app",
  contactEmail: "yua.office2560@gmail.com",
  social: {
    x: "https://x.com/yua_studio2560",
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
