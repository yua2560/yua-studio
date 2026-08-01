export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "お問い合わせ",
    description: "お問い合わせフォームまたはXから、ご相談内容をお送りください。",
  },
  {
    step: 2,
    title: "ヒアリング",
    description: "内容、目的、希望のイメージなどを詳しく伺います。",
  },
  {
    step: 3,
    title: "見積もり",
    description: "内容に応じた料金と、おおよそのスケジュールをご提示します。",
  },
  {
    step: 4,
    title: "制作、確認",
    description: "制作を進めながら、必要に応じて内容をご確認いただきます。",
  },
  {
    step: 5,
    title: "納品",
    description: "完成したデータや成果物をお渡しして完了です。",
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
    title: "若いクリエイターだからできる価格と距離感",
    description:
      "学生や個人の方にも頼みやすい価格で、予算や内容に合わせて柔軟に制作します。",
  },
];

export const aboutContent = {
  paragraphs: [
    "OneMADE Studioは、学生・若手クリエイターを中心とした小さなクリエイティブスタジオです。",
    "音楽、映像、Web、デザイン、教育など、それぞれの得意分野を活かして制作します。",
    "「制作会社に頼むほどではないけれど、自分だけで作るのは難しい。」そんな時に気軽に頼れる存在を目指しています。",
  ],
};
