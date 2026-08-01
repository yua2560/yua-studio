import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "OneMADE Studioへのお問い合わせはこちらから。ご相談だけでも歓迎しています。",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          description="依頼するかどうか決まっていない段階でのご相談も歓迎です。フォームにご入力のうえ送信すると、メールアプリが立ち上がります。お急ぎの場合はXのDMからもご連絡いただけます。"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <ContactForm />
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="flex flex-col gap-3">
              <h3 className="font-display text-base font-bold text-brand-navy-900">
                その他の連絡方法
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                メール：
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-brand-navy-700 hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-brand-navy-700 hover:text-brand-navy-900 hover:underline"
              >
                Xはこちら →
              </a>
            </Card>

            <Card className="flex flex-col gap-3">
              <h3 className="font-display text-base font-bold text-brand-navy-900">
                ご依頼前にご確認ください
              </h3>
              <ul className="flex flex-col gap-2 text-xs leading-relaxed text-foreground/70">
                <li>
                  ・内容によっては、ご依頼をお受けできない場合がございます。あらかじめご了承ください。
                </li>
                <li>
                  ・料金はすべて税込表示です。内容により見積もりが変動する場合があります。
                </li>
                <li>
                  ・既存楽曲を使用するご依頼(アカペラアレンジ等)は、著作権・利用許諾の確認を依頼者様側で行っていただく必要があります。
                </li>
                <li>
                  ・制作開始後のキャンセルについては、進行状況に応じて対応が異なります。詳細はお問い合わせ時にご確認ください。
                </li>
                <li>
                  ・実際には存在しない実績やレビューを事実として掲載することはありません。
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
