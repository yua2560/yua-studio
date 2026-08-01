import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { aboutContent } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "OneMADE Studioが目指している「つくりたい人」と「つくれる人」をつなぐクリエイティブスタジオのあり方について紹介しています。",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="About" title="OneMADE Studioについて" />

        <ImageWithFallback
          src="/images/about/about.png"
          alt="OneMADE Studioについて"
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
