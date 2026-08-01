"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Work } from "@/data/works";

export default function WorkCard({ work }: { work: Work }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex flex-col gap-4 overflow-hidden p-0">
      <ImageWithFallback
        src={work.image}
        alt={work.title}
        wrapperClassName="h-40 w-full"
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
      />

      <div className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{work.category}</Badge>
          {work.isSample && (
            <span className="text-xs font-medium text-foreground/50">サンプル</span>
          )}
        </div>

        <h3 className="font-display text-base font-bold text-brand-navy-900">
          {work.title}
        </h3>
        <p className="text-xs text-foreground/50">{work.date}</p>
        <p className="text-xs font-medium text-brand-navy-500">{work.role}</p>
        <p className="text-sm leading-relaxed text-foreground/80">
          {work.description}
        </p>

        {open && (
          <p className="rounded-2xl bg-brand-blue-50 p-4 text-sm leading-relaxed text-foreground/80">
            {work.detail}
          </p>
        )}

        <div className="mt-1 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="self-start text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
          >
            {open ? "閉じる" : "詳細を見る →"}
          </button>

          {work.youtubeUrl && (
            <a
              href={work.youtubeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="self-start text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
            >
              YouTubeで見る →
            </a>
          )}

          {work.linkUrl && (
            <a
              href={work.linkUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="self-start text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
            >
              サイトを見る →
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
