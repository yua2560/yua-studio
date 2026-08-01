import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue-100 bg-brand-blue-50">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo />
          <p className="text-sm leading-relaxed text-foreground/70">
            {siteConfig.description}
          </p>
          <div className="flex gap-4 pt-1">
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900"
            >
              X
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-navy-700 hover:text-brand-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-brand-blue-100 py-5">
        <Container>
          <p className="text-center text-xs text-foreground/60">
            {siteConfig.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
