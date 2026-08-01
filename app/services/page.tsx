import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { categoryInfo, servicesByCategory, ServiceCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ミックス・マスタリング、動画編集、オリジナル楽曲制作、数学指導、教材制作、Webサイト制作、アカペラ楽譜制作など、Start With Studioが提供するサービス一覧です。",
};

const categoryOrder: ServiceCategory[] = ["Music", "Video & Design", "Education"];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Services"
          title="サービス一覧"
          description="音楽・映像・教育・Webを横断しながら、一人ひとりの表現や活動に合わせて制作します。まずは気になるサービスの詳細をご覧ください。"
        />

        {categoryOrder.map((category) => (
          <div key={category} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Badge className="w-fit">{categoryInfo[category].label}</Badge>
              <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
                {categoryInfo[category].description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory[category].map((service) => (
                <Card key={service.slug} className="flex flex-col gap-4">
                  <h3 className="font-display text-lg font-bold text-brand-navy-900">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {service.summary}
                  </p>
                  <ul className="flex flex-col gap-1 text-sm text-brand-navy-500">
                    {service.priceItems.slice(0, 2).map((price) => (
                      <li
                        key={price.label}
                        className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2"
                      >
                        <span>{price.label}</span>
                        <span className="font-medium">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
                  >
                    詳細を見る →
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
