"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

type LogoProps = {
  className?: string;
};

// ロゴ画像を public/images/brand/logo.png に置くと、そちらが自動的に優先表示されます。
// 画像がない間は、タイポグラフィベースの仮ロゴ(Start With / Studio)を表示します。
export default function Logo({ className = "" }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!imageFailed) {
    return (
      <span className={`relative inline-block h-8 w-32 ${className}`}>
        <Image
          src="/images/brand/logo.png"
          alt={siteConfig.name}
          fill
          sizes="160px"
          className="object-contain object-left"
          onError={() => setImageFailed(true)}
        />
      </span>
    );
  }

  return (
    <span className={`font-display leading-none font-bold text-brand-navy-900 ${className}`}>
      <span className="block text-lg sm:text-xl">Start With</span>
      <span className="-mt-0.5 block text-xs font-medium tracking-[0.2em] text-brand-navy-500 sm:text-sm">
        STUDIO
      </span>
    </span>
  );
}
