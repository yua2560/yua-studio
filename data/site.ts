export const siteConfig = {
  name: "OneMADE Studio",
  catchCopy: "あなたの表現を、形にする。",
  description:
    "OneMADE Studioは、音楽・映像・Web・デザイン・教育など、それぞれの得意分野を持つクリエイターとともに、一人ひとりの“つくりたい”を形にするクリエイティブスタジオです。",
  descriptionLines: [
    "OneMADE Studioは、音楽・映像・Web・デザイン・教育など、",
    "それぞれの得意分野を持つクリエイターとともに、一人ひとりの“つくりたい”を形にするクリエイティブスタジオです。",
  ],
  seoTitle: "OneMADE Studio｜音楽・映像・教育・Web制作のクリエイティブスタジオ",
  seoDescription:
    "OneMADE Studioは、動画編集、ミックス・マスタリング、オリジナル楽曲制作、数学指導、教材制作、Webサイト制作、アカペラ楽譜制作など、それぞれの得意分野を持つクリエイターとともに制作を行うクリエイティブスタジオです。",
  url: "https://yua-studio.vercel.app",
  contactEmail: "yua.office2560@gmail.com",
  copyright: "© 2026 OneMADE Studio. All rights reserved.",
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
  { label: "Creator", href: "/creator" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Creator", href: "/creator" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
