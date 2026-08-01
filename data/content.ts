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
    title: "まとめて相談できる",
    description:
      "「動画編集+MIX」「Webサイト+デザイン」など、複数の制作をOneMADE Studioにまとめて相談できます。",
  },
];

export const aboutContent = {
  paragraphs: [
    "何かをつくりたい。でも、制作会社に頼むほどの予算はない。",
    "動画を作りたい。歌ってみたを投稿したい。Webサイトを作りたい。自分の活動を少しだけ本格的にしたい。そんな個人の“つくりたい”を、もっと気軽に形にできる場所を目指してOneMADE Studioを運営しています。",
    "そして、制作する側にとっても、自分の得意なことを活かして誰かの活動に関われる場所を目指します。",
    "依頼する人と、つくる人。その間にOneMADE Studioが入り、案件に合わせて必要なクリエイターと一緒に制作します。",
  ],
};
