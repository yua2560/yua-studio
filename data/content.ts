export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "お問い合わせ",
    description:
      "まずはOneMADE Studioのフォームから、制作内容やご予算、納期などをお聞かせください。",
  },
  {
    step: 2,
    title: "ヒアリング・お見積もり",
    description: "ご希望を確認し、制作内容・料金・スケジュールをご提案します。",
  },
  {
    step: 3,
    title: "担当クリエイター決定",
    description:
      "ご依頼内容に合わせて、OneMADE Studioから最適なクリエイターをアサインします。希望するクリエイターがいる場合は、ご相談いただけます。",
  },
  {
    step: 4,
    title: "制作",
    description:
      "担当クリエイターが制作を進めます。案件の窓口はOneMADE Studioが担当します。",
  },
  {
    step: 5,
    title: "納品",
    description: "確認・修正を経て、完成した制作物を納品します。",
  },
];

export type Reason = {
  title: string;
  description: string;
};

export const reasons: Reason[] = [
  {
    title: "相談しやすい価格から",
    description:
      "学生や個人の活動でも相談しやすいように、内容や予算に合わせた制作方法を一緒に考えます。",
  },
  {
    title: "得意なクリエイターが担当",
    description:
      "動画、音楽、Web、デザインなど、案件に合わせてその分野を得意とするクリエイターが制作を担当します。",
  },
  {
    title: "クリエイターと一緒につくれる",
    description:
      "ただ制作を請け負うだけではなく、やりたいことやイメージを相談しながら、一緒に形にしていきます。",
  },
];

export const aboutContent = {
  paragraphs: [
    "OneMADE Studioは、学生・若手クリエイターを中心とした小さなクリエイティブスタジオです。",
    "音楽、映像、Web、デザイン、教育など、それぞれの得意分野を活かして制作します。",
    "「制作会社に頼むほどではないけれど、自分だけで作るのは難しい。」そんな時に気軽に頼れる存在を目指しています。",
    "ご依頼の受付からヒアリング、担当クリエイターのアサイン、制作の進行、納品まで、OneMADE Studioが窓口として一貫してサポートします。",
  ],
};
