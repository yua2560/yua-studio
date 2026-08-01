"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-brand-blue-200 bg-white"
      >
        <span
          className={`h-0.5 w-5 bg-brand-navy-700 transition-transform duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-brand-navy-700 transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-brand-navy-700 transition-transform duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-brand-blue-100 bg-white px-5 py-4 shadow-soft">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-brand-navy-700 hover:bg-brand-blue-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-navy-700 px-4 py-3 text-center text-sm font-medium text-white"
            >
              相談する
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
