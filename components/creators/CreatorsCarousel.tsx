"use client";

import CreatorCard from "./CreatorCard";
import { creators } from "@/data/creators";

export default function CreatorsCarousel() {
  // 人数が少ないうちは中央寄せ、増えてきたら左詰めでスクロールしやすくします。
  const justify = creators.length <= 2 ? "justify-center" : "justify-start";

  return (
    <div
      className={`flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-0 ${justify}`}
    >
      {creators.map((creator) => (
        <div key={creator.slug} className="w-72 shrink-0 snap-center sm:w-80">
          <CreatorCard creator={creator} />
        </div>
      ))}
    </div>
  );
}
