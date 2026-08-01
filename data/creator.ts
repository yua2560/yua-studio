export type CreatorField = string;

export const creatorFields: CreatorField[] = [
  "動画編集",
  "MIX・マスタリング",
  "Web制作",
  "Webデザイン",
  "グラフィックデザイン",
  "サムネイル制作",
  "イラスト",
  "作詞",
  "作曲",
  "編曲",
  "アカペラ譜面制作",
  "その他",
];

export type InvolvementItem = {
  title: string;
  description: string;
};

export const involvementItems: InvolvementItem[] = [
  {
    title: "案件ごとに参加",
    description: "案件が発生した際に、内容・納期・報酬などをご相談します。",
  },
  {
    title: "学生・副業OK",
    description: "学校や仕事と両立しながら、自分のできる範囲で参加できます。",
  },
  {
    title: "得意なことだけでOK",
    description: "すべての制作ができる必要はありません。自分の得意な分野を担当してください。",
  },
  {
    title: "基本オンライン",
    description: "連絡やデータのやり取りは、基本的にオンラインで行います。",
  },
];

export type CreatorStep = {
  step: number;
  title: string;
  description: string;
};

export const creatorSteps: CreatorStep[] = [
  {
    step: 1,
    title: "応募",
    description: "応募フォームからプロフィールや作品を送信してください。",
  },
  {
    step: 2,
    title: "確認",
    description: "OneMADE Studioでポートフォリオなどを確認します。",
  },
  {
    step: 3,
    title: "クリエイター登録",
    description: "今後お願いできそうな方をクリエイターとして登録します。",
  },
  {
    step: 4,
    title: "案件の相談",
    description: "条件に合いそうな案件が発生した際にOneMADE Studioから連絡します。",
  },
  {
    step: 5,
    title: "条件確認",
    description: "制作内容・納期・報酬などを確認します。",
  },
  {
    step: 6,
    title: "制作開始",
    description: "双方が条件に合意した場合のみ制作を開始します。",
  },
];
