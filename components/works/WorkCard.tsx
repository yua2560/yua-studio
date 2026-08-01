"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Work } from "@/data/works";

export default function WorkCard({ work }: { work: Work }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex flex-col gap-4 overflow-hidden p-0">
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-blue-100 via-brand-purple-100 to-brand-aqua-100">
        <span className="font-display text-sm font-semibold text-brand-navy-700/70">
          {work.category}
        </span>
      </div>

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
        <p className="text-xs font-medium text-brand-navy-500">{work.role}</p>
        <p className="text-sm leading-relaxed text-foreground/80">
          {work.description}
        </p>

        {open && (
          <p className="rounded-2xl bg-brand-blue-50 p-4 text-sm leading-relaxed text-foreground/80">
            {work.detail}
          </p>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1 self-start text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
        >
          {open ? "閉じる" : "詳細を見る →"}
        </button>
      </div>
    </Card>
  );
}
