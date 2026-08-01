import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CreatorForm from "@/components/creator/CreatorForm";
import {
  creatorFields,
  involvementItems,
  creatorSteps,
  welcomeItems,
  benefitItems,
} from "@/data/creator";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Creator",
  description:
    "Start With Studioでは、案件ごとに一緒に制作していただけるクリエイターを募集しています。学生、副業、フリーランスなど、働き方は問いません。",
};

export default function CreatorPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50 via-white to-white py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-purple-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-brand-aqua-100 blur-3xl"
        />

        <Container className="relative flex flex-col items-center gap-6 text-center">
          <span className="font-display text-sm font-semibold tracking-widest text-brand-navy-500 uppercase">
            Creator
          </span>
          <Badge className="w-fit">クリエイター募集</Badge>

          <h1 className="font-display max-w-2xl text-3xl leading-snug font-bold text-brand-navy-900 sm:text-5xl sm:leading-tight">
            あなたの“できる”を、
            <br />
            誰かの“つくりたい”へ。
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            {siteConfig.name}
            では、案件ごとに一緒に制作していただけるクリエイターを募集しています。学生、副業、フリーランスなど、現在の働き方や肩書きは問いません。あなたの得意なことを活かして、誰かの「つくりたい」を一緒に形にしませんか。
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#apply-form" variant="primary">
              クリエイターに応募する
            </Button>
            <Button href="/creators" variant="secondary">
              所属クリエイターを見る →
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Fields"
            title="募集分野"
            description="以下の分野を中心に募集していますが、これに限りません。"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {creatorFields.map((field) => (
              <Card
                key={field}
                className="flex items-center justify-center p-4 text-center sm:p-6"
              >
                <span className="text-sm font-medium text-brand-navy-900 sm:text-base">
                  {field}
                </span>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-foreground/70">
            ここにない分野でも、{siteConfig.name}
            で活かせそうなスキルがあればぜひご応募ください。
          </p>
        </Container>
      </section>

      <section className="bg-brand-blue-50/60 py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Welcome"
            title="こんな人を歓迎します"
            description="実務経験は必須ではありません。経験よりも、つくることが好きな人を歓迎します。"
          />

          <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
            {welcomeItems.map((item) => (
              <Card key={item} className="flex items-center gap-3 py-4">
                <span className="text-brand-purple-500">・</span>
                <span className="text-sm font-medium text-brand-navy-900 sm:text-base">
                  {item}
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Benefits"
            title={`${siteConfig.name}で活動するメリット`}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitItems.map((item) => (
              <Card key={item} className="flex items-center gap-3">
                <span className="text-brand-purple-500">・</span>
                <span className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-50/60 py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="How it works"
            title={`${siteConfig.name}での関わり方`}
            description="会社への就職やアルバイト募集ではなく、案件が発生した際に登録クリエイターへ相談する形式です。"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {involvementItems.map((item) => (
              <Card key={item.title} className="flex flex-col gap-2">
                <h3 className="font-display text-base font-bold text-brand-navy-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Flow"
            title="クリエイター登録から制作まで"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creatorSteps.map((step) => (
              <Card key={step.step} className="flex flex-col gap-3">
                <span className="font-display text-sm font-semibold tracking-widest text-brand-purple-500">
                  STEP {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-navy-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mx-auto flex max-w-xl flex-col gap-1 text-center text-xs leading-relaxed text-foreground/60">
            <p>クリエイター登録によって案件の依頼を保証するものではありません。</p>
            <p>案件ごとに参加するかどうかを選択できます。</p>
          </div>
        </Container>
      </section>

      <section id="apply-form" className="scroll-mt-20 bg-brand-blue-50/60 py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Apply" title="クリエイターに応募する" />

          <Card className="mx-auto w-full max-w-3xl">
            <CreatorForm />
          </Card>

          <ul className="mx-auto flex max-w-2xl flex-col gap-1 text-xs leading-relaxed text-foreground/60">
            <li>・応募およびクリエイター登録によって案件の依頼を保証するものではありません。</li>
            <li>・案件ごとに制作内容、納期、報酬等をご相談します。</li>
            <li>・双方の合意後に制作を開始します。</li>
            <li>・案件への参加はその都度選択できます。</li>
            <li>・応募情報はクリエイターへの連絡および案件相談の目的で使用します。</li>
          </ul>
        </Container>
      </section>
    </div>
  );
}
