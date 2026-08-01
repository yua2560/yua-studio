import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CreatorAvatar from "./CreatorAvatar";
import { Creator } from "@/data/creators";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Card className="flex flex-col items-center gap-4 text-center">
      <CreatorAvatar name={creator.name} image={creator.image} className="h-20 w-20" />

      <div className="flex flex-col gap-1">
        <h3 className="font-display text-lg font-bold text-brand-navy-900">
          {creator.name}
        </h3>
        <p className="text-xs font-medium text-brand-navy-500">{creator.role}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {creator.fields.map((field) => (
          <Badge key={field}>{field}</Badge>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-foreground/80">{creator.bio}</p>

      <Button href={`/creators/${creator.slug}`} variant="ghost">
        プロフィールを見る →
      </Button>
    </Card>
  );
}
