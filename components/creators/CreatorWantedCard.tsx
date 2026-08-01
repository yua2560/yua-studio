import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CreatorWantedCard() {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 border-dashed bg-brand-purple-100/30 text-center">
      <span className="font-display text-sm font-semibold tracking-widest text-brand-purple-500 uppercase">
        Creator Wanted
      </span>

      <h3 className="font-display text-lg font-bold text-brand-navy-900">
        一緒に活動するクリエイターを
        <br />
        募集しています。
      </h3>

      <p className="text-sm leading-relaxed text-foreground/80">
        音楽、映像、デザイン、Webなど、あなたの「つくれる」をOneMADE Studioで活かしてみませんか？
      </p>

      <Button href="/creator" variant="secondary">
        クリエイター募集を見る →
      </Button>
    </Card>
  );
}
