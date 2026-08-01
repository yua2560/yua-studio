import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { categoryInfo, getServiceBySlug, services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">{categoryInfo[service.category].label}</Badge>
          <h1 className="font-display text-2xl font-bold text-brand-navy-900 sm:text-4xl">
            {service.name}
          </h1>
          {service.description.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-brand-navy-900">
              対応内容
            </h2>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="text-brand-purple-500">・</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {service.tools && (
              <div className="flex flex-col gap-2 pt-2">
                <h3 className="text-sm font-semibold text-brand-navy-700">
                  使用ソフト・ツール
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>

          <Card className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-bold text-brand-navy-900">
              料金の目安
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {service.priceItems.map((price) => (
                <li key={price.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-foreground/80">{price.label}</span>
                  <span className="font-display font-bold text-brand-navy-900">
                    {price.price}
                  </span>
                </li>
              ))}
            </ul>
            {service.priceNote && (
              <p className="text-xs leading-relaxed text-foreground/60">
                {service.priceNote}
              </p>
            )}

            <div className="flex flex-col gap-1 border-t border-brand-blue-100 pt-4">
              <h3 className="text-sm font-semibold text-brand-navy-700">
                納品形式
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {service.deliveryFormat}
              </p>
            </div>

            <Button href="/contact" variant="primary" className="mt-2 w-full">
              このサービスについて相談する
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}
