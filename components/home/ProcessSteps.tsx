import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export default function ProcessSteps() {
  return (
    <section className="bg-brand-blue-50/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Flow"
          title="依頼の流れ"
          description="修正回数や納期は案件ごとにご相談しながら決めていきます。"
        />

        <div className="grid gap-6 sm:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.step} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-lg font-bold text-brand-navy-700 shadow-soft">
                {step.step}
              </div>
              <h3 className="font-display text-sm font-bold text-brand-navy-900">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
