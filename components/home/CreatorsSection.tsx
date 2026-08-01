import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CreatorCard from "@/components/creators/CreatorCard";
import { creators } from "@/data/creators";

export default function CreatorsSection() {
  return (
    <section className="bg-brand-blue-50/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Creators"
          title="所属クリエイター"
          description="学生・若手クリエイターを中心に、それぞれの得意分野を活かして制作しています。"
        />

        <div className="mx-auto flex max-w-2xl flex-col gap-2 text-center">
          <h3 className="font-display text-lg font-bold text-brand-navy-900 sm:text-xl">
            あなたの依頼に、ちょうどいいクリエイターを。
          </h3>
          <p className="text-sm leading-relaxed text-foreground/80">
            OneMADE Studioには、それぞれ異なる得意分野を持つクリエイターが参加しています。ご相談内容に合わせて、ぴったりの担当者をご提案します。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
        </div>
      </Container>
    </section>
  );
}
