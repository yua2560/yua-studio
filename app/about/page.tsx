import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { aboutContent } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yua Studioとして活動する「ゆーあ」のプロフィールです。音楽、映像、教育、Webを組み合わせた活動について紹介しています。",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="About" title={`${aboutContent.name}について`} />

        <ImageWithFallback
          src="/images/about/about-2.png"
          alt={`${aboutContent.name}について`}
          wrapperClassName="aspect-[16/7] w-full max-w-2xl rounded-3xl shadow-soft"
        />

        <div className="flex w-full max-w-2xl flex-col gap-5">
          {aboutContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-foreground/80 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Button href="/contact" variant="primary">
          相談する
        </Button>
      </Container>
    </div>
  );
}
