import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import WorkCard from "@/components/works/WorkCard";
import { sortedWorks } from "@/data/works";

export default function WorksPreview() {
  const preview = sortedWorks.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Works"
          title="制作実績"
          description="実績とあわせて、サンプル作品も掲載しています。今後、実際の制作実績を随時追加していきます。"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/works" variant="ghost">
            制作実績をすべて見る →
          </Button>
        </div>
      </Container>
    </section>
  );
}
