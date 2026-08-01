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
    title: "複数分野をまとめて相談できる",
    description: "動画、音楽、Web、教材などを一つの窓口で相談できます。",
  },
  {
    title: "目的に合わせて一緒に考える",
    description:
      "単に作業を行うだけではなく、何を伝えたいのか、誰に届けたいのかを確認しながら制作します。",
  },
  {
    title: "個人だからこその柔軟な対応",
    description: "予算や内容に合わせて、対応範囲や制作方法を相談できます。",
  },
];

export const aboutContent = {
  name: "ゆーあ",
  paragraphs: [
    "Yua Studioは、「ゆーあ」として活動する個人クリエイターのスタジオです。数学教育を学びながら、YouTube動画制作、音楽制作、Webサイト制作、教材制作など、複数の分野に取り組んできました。",
    "大学ではアカペラサークルに所属し、既存曲のアレンジや音源編集、パート練習用音源の制作などを経験してきました。この経験を生かし、アカペラ楽譜制作や音源編集にも対応しています。",
    "音楽、映像、教育、Webのいずれか一つだけに絞るのではなく、それぞれを組み合わせながら、依頼してくださる方の活動や表現に合った形を一緒に考えることを大切にしています。",
    "実績はまだ積み上げている途中ですが、だからこそ一件一件のご相談に丁寧に向き合いたいと考えています。分からないことや迷っていることがあれば、遠慮なくご相談ください。",
  ],
};
