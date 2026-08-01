"use client";

import { useState } from "react";
import Image from "next/image";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ImageWithFallback({
  src,
  alt,
  wrapperClassName = "",
  sizes = "100vw",
  priority = false,
}: ImageWithFallbackProps) {
  const [broken, setBroken] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {broken ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue-100 via-brand-purple-100 to-brand-aqua-100 px-4 text-center">
          <span className="font-display text-sm font-semibold text-brand-navy-700">
            {alt}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setBroken(true)}
        />
      )}
    </div>
  );
}
