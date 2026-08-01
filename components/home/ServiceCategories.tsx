import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { categoryInfo, servicesByCategory, ServiceCategory } from "@/data/services";

const categoryOrder: ServiceCategory[] = ["Music", "Video & Design", "Education"];

const categoryAccent: Record<ServiceCategory, string> = {
  Music: "bg-brand-purple-100 text-brand-navy-700",
  "Video & Design": "bg-brand-aqua-100 text-brand-navy-700",
  Education: "bg-brand-blue-100 text-brand-navy-700",
};

export default function ServiceCategories() {
  return (
    <section className="bg-brand-blue-50/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Services"
          title="サービス一覧"
          description="音楽・映像・教育・Webを横断しながら、一人ひとりの表現や活動に合わせて制作します。"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {categoryOrder.map((category) => (
            <Card key={category} className="flex flex-col gap-4">
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryAccent[category]}`}
              >
                {categoryInfo[category].label}
              </span>
              <p className="text-sm leading-relaxed text-foreground/80">
                {categoryInfo[category].description}
              </p>
              <ul className="flex flex-col gap-2 text-sm text-brand-navy-700">
                {servicesByCategory[category].map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-brand-navy-900 hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
          >
            サービス詳細をすべて見る →
          </Link>
        </div>
      </Container>
    </section>
  );
}
