import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GlassButton } from "@/components/GlassButton";
import { faqItems } from "@/data/faq";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta, routeTitles } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  return pageMeta(locale, { title: routeTitles(locale).guide, path: "guide" });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        {dict.guide.title}
      </h1>
      <p className="mt-3 text-ink-muted">{dict.guide.subtitle}</p>
      <p className="mt-2 text-sm text-ink-muted">{dict.footer.geo}</p>

      <div className="mt-10 space-y-3">
        {faqItems.map((item, i) => (
          <details key={item.id} className="glass group rounded-2xl px-5 py-4" open={i === 0}>
            <summary className="cursor-pointer list-none font-semibold marker:content-none">
              <span className="step-num mr-3">0{i + 1}</span>
              {item.q[locale]}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.a[locale]}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <GlassButton href={`/${locale}/contacts`} variant="primary">
          {dict.cta.getMatch}
        </GlassButton>
        <Link href={`/${locale}/blog`} className="self-center text-sm text-sea">
          {dict.nav.blog} →
        </Link>
      </div>
    </div>
  );
}
