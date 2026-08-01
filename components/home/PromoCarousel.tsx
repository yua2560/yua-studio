"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { promotions } from "@/data/promotions";

export default function PromoCarousel() {
  const slides = useMemo(() => promotions.filter((p) => p.active), []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [brokenIds, setBrokenIds] = useState<string[]>([]);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, paused]);

  if (slides.length === 0) return null;

  return (
    <div
      className="w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl shadow-soft">
        {slides.map((promo, i) => (
          <Link
            key={promo.id}
            href={promo.href}
            aria-label={promo.title}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {brokenIds.includes(promo.id) ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue-100 via-brand-purple-100 to-brand-aqua-100 px-6 text-center">
                <span className="font-display text-sm font-semibold text-brand-navy-700 sm:text-base">
                  {promo.title}
                </span>
              </div>
            ) : (
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                sizes="(min-width: 640px) 576px, 100vw"
                className="object-cover"
                priority={i === 0}
                onError={() =>
                  setBrokenIds((prev) =>
                    prev.includes(promo.id) ? prev : [...prev, promo.id]
                  )
                }
              />
            )}
          </Link>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {slides.map((promo, i) => (
            <button
              key={promo.id}
              type="button"
              aria-label={`${i + 1}枚目のバナーを表示`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-navy-700" : "w-2 bg-brand-blue-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
