import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-navy-700 px-6 py-16 text-center text-white sm:px-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            依頼するかどうか決まっていない段階でも大丈夫です。内容や予算感だけでも、お気軽にお問い合わせください。ご依頼・お見積もりはStart
            With Studioが窓口です。
          </p>
          <Button href="/contact" variant="secondary" className="bg-white">
            問い合わせフォームへ
          </Button>
        </div>
      </Container>
    </section>
  );
}
