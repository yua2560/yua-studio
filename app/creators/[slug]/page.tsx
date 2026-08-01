import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CreatorAvatar from "@/components/creators/CreatorAvatar";
import { creators } from "@/data/creators";

type Props = {
  params: Promise<{ slug: string }>;
};

const snsLabels: Record<string, string> = {
  x: "X",
  instagram: "Instagram",
  youtube: "YouTube",
  portfolio: "Portfolio",
};

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const creator = creators.find((c) => c.slug === slug);
  if (!creator) return {};

  return {
    title: `${creator.name}｜Creator`,
    description: creator.bio,
  };
}

export default async function CreatorProfilePage({ params }: Props) {
  const { slug } = await params;
  const creator = creators.find((c) => c.slug === slug);

  if (!creator) {
    notFound();
  }

  const snsEntries = creator.sns
    ? (Object.entries(creator.sns).filter(([, url]) => url) as [string, string][])
    : [];

  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <CreatorAvatar name={creator.name} image={creator.image} className="h-28 w-28" />

        <div className="flex flex-col gap-2">
          <h1 className="font-display text-2xl font-bold text-brand-navy-900 sm:text-3xl">
            {creator.name}
          </h1>
          <p className="text-sm font-medium text-brand-navy-500">{creator.role}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {creator.fields.map((field) => (
            <Badge key={field}>{field}</Badge>
          ))}
        </div>

        <div className="flex w-full max-w-2xl flex-col gap-5">
          {creator.profile.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-foreground/80 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {snsEntries.length > 0 && (
          <Card className="flex w-full max-w-sm flex-col gap-3">
            <h2 className="text-xs font-semibold tracking-widest text-brand-navy-500 uppercase">
              SNS / Links
            </h2>
            <div className="flex flex-col gap-2">
              {snsEntries.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
                >
                  {snsLabels[key] ?? key}
                </a>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-foreground/60">
              こちらは{creator.name}の活動・作品を見るためのリンクです。
            </p>
          </Card>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-sm text-foreground/70">
            制作のご依頼はStart With Studioよりお問い合わせください。
          </p>
          <Button href={`/contact?creator=${creator.slug}`} variant="primary">
            このクリエイターに依頼する
          </Button>
        </div>
      </Container>
    </div>
  );
}
