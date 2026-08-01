import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "./FaqAccordion";
import { faqs } from "@/data/faq";

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />
        <div className="mx-auto w-full max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
