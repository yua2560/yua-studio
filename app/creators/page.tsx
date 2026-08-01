import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CreatorsCarousel from "@/components/creators/CreatorsCarousel";

export const metadata: Metadata = {
  title: "Creators",
  description:
    "Start With Studioに所属するクリエイターを紹介しています。学生・若手クリエイターを中心に、それぞれの得意分野を活かして制作しています。",
};

export default function CreatorsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Creators"
          title="所属クリエイター"
          description="学生・若手クリエイターを中心に、それぞれの得意分野を活かして制作しています。横にスクロールして、他のクリエイターもご覧いただけます。"
        />

        <CreatorsCarousel />

        <div className="text-center">
          <Button href="/creator" variant="ghost">
            クリエイター募集について見る →
          </Button>
        </div>
      </Container>
    </div>
  );
}
