"use client";

import { FormEvent, useState } from "react";
import { creatorFields } from "@/data/creator";
import { siteConfig } from "@/data/site";

const statusOptions = ["学生", "社会人", "フリーランス", "その他"];

export default function CreatorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [intro, setIntro] = useState("");
  const [status, setStatus] = useState("");
  const [desiredWork, setDesiredWork] = useState("");
  const [rate, setRate] = useState("");
  const [otherUrl, setOtherUrl] = useState("");
  const [note, setNote] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleField = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  const buildMailBody = () =>
    [
      `名前・活動名: ${name}`,
      `メールアドレス: ${email}`,
      `得意分野: ${selectedFields.length ? selectedFields.join("、") : "未選択"}`,
      `ポートフォリオURL・SNS: ${portfolioUrl}`,
      "",
      "自己紹介:",
      intro,
      "",
      `働き方: ${status || "未入力"}`,
      `希望する案件: ${desiredWork || "未入力"}`,
      `料金目安・希望単価: ${rate || "未入力"}`,
      `その他URL: ${otherUrl || "未入力"}`,
      `備考: ${note || "未入力"}`,
    ].join("\n");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `【${siteConfig.name} クリエイター応募】${name || "お名前未入力"}様より`;
    const body = buildMailBody();

    const url = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setMailtoUrl(url);
    setCopied(false);

    const link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    const text = `宛先: ${siteConfig.contactEmail}\n\n${buildMailBody()}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          名前 / 活動名
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="山田 太郎"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          メールアドレス
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="example@mail.com"
          />
        </label>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-brand-navy-900">
          得意分野(複数選択可)
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {creatorFields.map((field) => (
            <label
              key={field}
              className="flex items-center gap-2 rounded-xl border border-brand-blue-100 bg-white px-4 py-2.5 text-sm text-foreground/80"
            >
              <input
                type="checkbox"
                checked={selectedFields.includes(field)}
                onChange={() => toggleField(field)}
                className="h-4 w-4 accent-brand-navy-700"
              />
              {field}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        ポートフォリオURL / SNS
        <input
          type="text"
          required
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
          className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="https://..."
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        自己紹介
        <textarea
          required
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rows={5}
          className="resize-none rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="得意なこと、これまでの制作経験などをご記入ください。"
        />
      </label>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-brand-navy-900">
          働き方(任意)
        </legend>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-xl border border-brand-blue-100 bg-white px-4 py-2.5 text-sm text-foreground/80"
            >
              <input
                type="radio"
                name="status"
                checked={status === option}
                onChange={() => setStatus(option)}
                className="h-4 w-4 accent-brand-navy-700"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          希望する案件(任意)
          <input
            type="text"
            value={desiredWork}
            onChange={(e) => setDesiredWork(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="例：動画編集案件を中心に"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          料金目安 / 希望単価(任意)
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="例：動画編集1本5,000円〜"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        その他URL(任意)
        <input
          type="text"
          value={otherUrl}
          onChange={(e) => setOtherUrl(e.target.value)}
          className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="https://..."
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        備考(任意)
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          className="resize-none rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="その他伝えておきたいことがあればご記入ください。"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-navy-700 px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-navy-900 sm:text-base"
      >
        メールで応募する
      </button>

      <p className="text-xs leading-relaxed text-foreground/60">
        応募ボタンを押すと、入力内容を差出人メールアプリで開きます。内容をご確認のうえ、送信してください。
      </p>

      {mailtoUrl && (
        <div className="flex flex-col gap-2 rounded-2xl bg-brand-blue-50 p-4 text-sm text-foreground/80">
          <p>メールアプリが自動的に開かなかった場合は、以下をお試しください。</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailtoUrl}
              className="font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
            >
              こちらをクリックしてメールを開く →
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
            >
              {copied ? "コピーしました" : "入力内容をコピーする →"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
