import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getServiceBySlug } from "@/data/services";
import { promotions } from "@/data/promotions";

export const metadata: Metadata = {
  title: "夏休み限定！学生歌い手応援企画｜ミックス・マスタリング無料キャンペーン",
  description:
    "夏休み(8月)限定で、学生の歌い手さんを応援するミックス・マスタリング無料キャンペーンを実施中です。",
};

// キャンペーン内容です。期間や条件は実際の内容に合わせて書き換えてください。
const campaign = {
  period: "2026年8月31日まで(予告なく終了する場合があります)",
  target: "学生の歌い手さん(歌ってみた音源、オリジナル楽曲)",
  conditions: [
    "対象は学生の方に限らせていただきます。お申し込み時に学年や在籍校など、学生であることが分かる情報をお伺いします。",
    "アカペラ音源は今回のキャンペーンの対象外とさせていただきます。",
    "お一人様1回限りとさせていただきます。",
    "制作実績としての掲載にご協力いただける方を優先させていただく場合があります。",
    "内容やご依頼の混み具合により、お受けできない場合があります。",
    "キャンペーンは予告なく変更・終了する場合があります。",
  ],
};

export default function MixMasteringCampaignPage() {
  const service = getServiceBySlug("mix-mastering");
  const banner = promotions.find((p) => p.id === "promo-1");

  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        {banner && (
          <div className="relative mx-auto aspect-[16/7] w-full max-w-2xl overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="(min-width: 640px) 672px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-4 text-center">
          <Badge className="w-fit bg-brand-purple-300 text-brand-navy-900">
            夏休み(8月)限定キャンペーン
          </Badge>
          <h1 className="font-display max-w-2xl text-2xl font-bold text-brand-navy-900 sm:text-4xl">
            学生歌い手応援企画
            <br />
            ミックス・マスタリング無料キャンペーン！！
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            夏休み期間中、学生の歌い手さんを応援するミックス・マスタリング無料キャンペーンを実施しています。この機会にぜひお試しください。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-brand-navy-900">
              キャンペーン内容
            </h2>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2">
                <span className="text-brand-purple-500">・</span>
                <span>対象：{campaign.target}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple-500">・</span>
                <span>期間：{campaign.period}</span>
              </li>
            </ul>

            <div className="flex flex-col gap-2 pt-2">
              <h3 className="text-sm font-semibold text-brand-navy-700">
                ご利用にあたっての注意事項
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
                {campaign.conditions.map((condition) => (
                  <li key={condition} className="flex gap-2">
                    <span className="text-brand-purple-500">・</span>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-bold text-brand-navy-900">
              予算の目安
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-brand-navy-900">
                0円
              </span>
              <span className="text-xs text-foreground/60">
                (キャンペーン適用時)
              </span>
            </div>

            {service && (
              <div className="flex flex-col gap-2 border-t border-brand-blue-100 pt-4">
                <p className="text-xs leading-relaxed text-foreground/60">
                  通常料金の目安(参考)
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {service.priceItems.map((price) => (
                    <li
                      key={price.label}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
                    >
                      <span className="text-foreground/70">{price.label}</span>
                      <span className="text-foreground/70 line-through">
                        {price.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button href="/contact" variant="primary" className="mt-2 w-full">
              キャンペーンに申し込む
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}
