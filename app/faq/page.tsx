import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/home/FaqAccordion";
import Button from "@/components/ui/Button";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "OneMADE Studioへのご依頼に関するよくある質問をまとめています。",
};

export default function FaqPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />

        <div className="w-full max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>

        <p className="text-sm text-foreground/70">
          この他にご不明な点がございましたら、お気軽にお問い合わせください。
        </p>
        <Button href="/contact" variant="primary">
          問い合わせる
        </Button>
      </Container>
    </div>
  );
}
