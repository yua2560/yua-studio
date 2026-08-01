import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CreatorAvatar from "@/components/creators/CreatorAvatar";
import { creators } from "@/data/creators";

type Props = {
  params: Promise<{ slug: string }>;
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

        {creator.sns?.x && (
          <a
            href={creator.sns.x}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
          >
            Xはこちら →
          </a>
        )}

        <Button href="/contact" variant="primary">
          相談する
        </Button>
      </Container>
    </div>
  );
}
