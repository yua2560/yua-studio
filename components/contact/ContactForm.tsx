"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { creators } from "@/data/creators";
import { siteConfig } from "@/data/site";

const serviceOptions = services.map((s) => s.name);
const publicationOptions = ["公開してもよい", "公開しないでほしい", "内容によって相談したい"];
const OMAKASE = "おまかせ";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedCreator = creators.find((c) => c.slug === searchParams.get("creator"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [creatorPreference, setCreatorPreference] = useState(
    requestedCreator ? requestedCreator.slug : ""
  );
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");
  const [otherNotes, setOtherNotes] = useState("");
  const [publication, setPublication] = useState(publicationOptions[0]);
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const creatorPreferenceLabel = () => {
    if (!creatorPreference) return OMAKASE;
    return creators.find((c) => c.slug === creatorPreference)?.name ?? OMAKASE;
  };

  const buildMailBody = () =>
    [
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `依頼したいサービス: ${selectedServices.length ? selectedServices.join("、") : "未選択"}`,
      `希望クリエイター: ${creatorPreferenceLabel()}`,
      `予算: ${budget || "未入力"}`,
      `希望納期: ${deadline || "未入力"}`,
      `実績公開の可否: ${publication}`,
      "",
      "依頼内容:",
      message,
      "",
      "その他相談事項:",
      otherNotes || "特になし",
    ].join("\n");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `【${siteConfig.name} お問い合わせ】${name || "お名前未入力"}様より`;
    const body = buildMailBody();

    const url = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setMailtoUrl(url);
    setCopied(false);

    // window.location.href だと反応しない環境があるため、リンク要素を直接クリックさせる
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
      <p className="rounded-2xl bg-brand-blue-50 p-4 text-xs leading-relaxed text-foreground/70 sm:text-sm">
        ご依頼・お見積もりはStart With Studioが窓口となって承ります。内容を確認したうえで、ご希望や制作内容に合ったクリエイターをご提案します。
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          お名前
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
          依頼したいサービス(複数選択可)
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 rounded-xl border border-brand-blue-100 bg-white px-4 py-2.5 text-sm text-foreground/80"
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 accent-brand-navy-700"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        希望クリエイター(任意)
        <select
          value={creatorPreference}
          onChange={(e) => setCreatorPreference(e.target.value)}
          className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
        >
          <option value="">{OMAKASE}(Start With Studioにおまかせ)</option>
          {creators.map((creator) => (
            <option key={creator.slug} value={creator.slug}>
              {creator.name}
            </option>
          ))}
        </select>
        <span className="text-xs font-normal text-foreground/60">
          特にご希望がなければ、内容に合わせてStart With Studioが担当クリエイターをご提案します。
        </span>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          予算の目安
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="例：10,000円程度"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
          希望納期
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
            placeholder="例：1ヶ月以内、〇月〇日まで"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        依頼内容
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="resize-none rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="ご依頼内容やご相談したいことをご記入ください。"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-navy-900">
        その他相談事項(任意)
        <textarea
          value={otherNotes}
          onChange={(e) => setOtherNotes(e.target.value)}
          rows={3}
          className="resize-none rounded-xl border border-brand-blue-200 bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-brand-navy-500"
          placeholder="その他、伝えておきたいことがあればご記入ください。"
        />
      </label>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-brand-navy-900">
          実績としての公開可否
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row">
          {publicationOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-xl border border-brand-blue-100 bg-white px-4 py-2.5 text-sm text-foreground/80"
            >
              <input
                type="radio"
                name="publication"
                checked={publication === option}
                onChange={() => setPublication(option)}
                className="h-4 w-4 accent-brand-navy-700"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-navy-700 px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-navy-900 sm:text-base"
      >
        メールで送信する
      </button>

      <p className="text-xs leading-relaxed text-foreground/60">
        送信ボタンを押すと、入力内容を差出人メールアプリで開きます。内容をご確認のうえ、送信してください。
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
