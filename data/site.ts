export const siteConfig = {
  name: "OneMADE Studio",
  catchCopy: "一人でつくる、から。一緒につくる、へ。",
  catchCopyLines: ["一人でつくる、から。", "一緒につくる、へ。"],
  description:
    "音楽・映像・Web・デザイン・教育。学生や個人の方にも頼みやすい、小さなクリエイティブスタジオです。",
  descriptionLines: [
    "音楽・映像・Web・デザイン・教育。",
    "学生や個人の方にも頼みやすい、小さなクリエイティブスタジオです。",
  ],
  seoTitle: "OneMADE Studio｜学生・若手クリエイターによる音楽・映像・Web制作スタジオ",
  seoDescription:
    "OneMADE Studioは、学生・若手クリエイターを中心とした小さなクリエイティブスタジオです。動画編集、ミックス・マスタリング、オリジナル楽曲制作、数学指導、教材制作、Webサイト制作、アカペラ楽譜制作など、それぞれの得意分野を持つクリエイターが制作を行います。",
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
