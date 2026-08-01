import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function ContactCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-navy-700 px-6 py-16 text-center text-white sm:px-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            依頼するかどうか決まっていない段階でも大丈夫です。内容や予算感だけでも、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary" className="bg-white">
              問い合わせフォームへ
            </Button>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:text-base"
            >
              Xで相談する
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
