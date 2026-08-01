import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { aboutContent } from "@/data/content";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading eyebrow="About" title="Yua Studioについて" />

        <ImageWithFallback
          src="/images/about/about.png"
          alt="Yua Studioについて"
          wrapperClassName="aspect-[4/3] w-full max-w-xl rounded-3xl shadow-soft"
        />

        <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          {aboutContent.paragraphs[0]}
        </p>
        <Button href="/about" variant="ghost">
          プロフィールを見る →
        </Button>
      </Container>
    </section>
  );
}
