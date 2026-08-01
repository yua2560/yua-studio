"use client";

import { useState } from "react";
import Image from "next/image";

type CreatorAvatarProps = {
  name: string;
  image?: string;
  className?: string;
};

export default function CreatorAvatar({ name, image, className = "" }: CreatorAvatarProps) {
  const [broken, setBroken] = useState(false);
  const showFallback = !image || broken;

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-gradient-to-br from-brand-blue-100 via-brand-purple-100 to-brand-aqua-100 ${className}`}
    >
      {showFallback ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-2xl font-bold text-brand-navy-700">
            {name.charAt(0)}
          </span>
        </div>
      ) : (
        <Image
          src={image}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
          onError={() => setBroken(true)}
        />
      )}
    </div>
  );
}
