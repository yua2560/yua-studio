import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue-100 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg font-bold text-brand-navy-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy-700 transition-colors hover:text-brand-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy-700 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-navy-900"
          >
            相談する
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
