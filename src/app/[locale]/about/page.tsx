import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">{dict.about.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink">{dict.about.p1}</p>
      <p className="mt-4 text-base leading-relaxed text-ink-muted">{dict.about.p2}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <GlassButton href={`/${locale}/buy`} variant="primary">
          {dict.cta.viewListings}
        </GlassButton>
        <GlassButton href={`/${locale}/sell`} variant="glass">
          {dict.cta.sellWithUs}
        </GlassButton>
      </div>
    </div>
  );
}
