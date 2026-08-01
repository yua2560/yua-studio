import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CreatorCard from "@/components/creators/CreatorCard";
import CreatorWantedCard from "@/components/creators/CreatorWantedCard";
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
          <CreatorWantedCard />
        </div>
      </Container>
    </section>
  );
}
