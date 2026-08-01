import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WorksFilter from "@/components/works/WorksFilter";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Start With Studioの制作実績・サンプル作品一覧です。Music、Video、Web、Education、A Cappellaのカテゴリで絞り込みができます。",
};

export default function WorksPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Works"
          title="制作実績"
          description="Client Worksに加えて、まだ実績が少ない分野についてはSample Worksとして制作イメージを掲載しています。カテゴリで絞り込みが可能です。"
        />
        <WorksFilter />
      </Container>
    </div>
  );
}
