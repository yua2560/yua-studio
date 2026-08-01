import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PromoCarousel from "@/components/home/PromoCarousel";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-purple-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-brand-aqua-100 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <span className="font-display text-sm font-semibold tracking-widest text-brand-navy-500 uppercase">
          {siteConfig.name}
        </span>

        <h1 className="font-display max-w-3xl text-3xl leading-snug font-bold text-brand-navy-900 sm:text-5xl sm:leading-tight">
          {siteConfig.catchCopy}
        </h1>

        <PromoCarousel />

        <p className="max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          {siteConfig.descriptionLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < siteConfig.descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/services" variant="primary">
            サービスを見る
          </Button>
          <Button href="/contact" variant="secondary">
            相談する
          </Button>
        </div>
      </Container>
    </section>
  );
}
