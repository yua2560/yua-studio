import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { aboutContent } from "@/data/content";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading eyebrow="About" title="Start With Studioについて" />

        <ImageWithFallback
          src="/images/about/about.png"
          alt="Start With Studioについて"
          wrapperClassName="aspect-[16/7] w-full max-w-xl rounded-3xl shadow-soft"
        />

        <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          {aboutContent.paragraphs[0]} {aboutContent.paragraphs[1]}
        </p>
        <Button href="/about" variant="ghost">
          詳しく見る →
        </Button>
      </Container>
    </section>
  );
}
