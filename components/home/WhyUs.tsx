import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { reasons } from "@/data/content";

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Why OneMADE Studio" title="選ばれる理由" />

        <div className="grid gap-6 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={reason.title} className="flex flex-col gap-3">
              <span className="font-display text-2xl font-bold text-brand-purple-500">
                0{index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-brand-navy-900">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
