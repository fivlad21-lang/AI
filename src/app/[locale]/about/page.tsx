import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { Testimonials } from "@/components/Testimonials";
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
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {dict.about.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">{dict.about.p1}</p>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{dict.about.p2}</p>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{dict.about.p3}</p>
        <p className="mt-4 text-sm text-ink-muted">{dict.footer.geo}</p>

        <h2 className="mt-12 font-display text-2xl font-semibold">{dict.about.valuesTitle}</h2>
        <ol className="mt-6 space-y-3">
          {dict.about.values.map((v, i) => (
            <li key={v} className="glass flex gap-3 rounded-2xl px-4 py-3.5 text-sm">
              <span className="step-num">0{i + 1}</span>
              <span>{v}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <GlassButton href={`/${locale}/buy`} variant="primary">
            {dict.cta.viewListings}
          </GlassButton>
          <GlassButton href={`/${locale}/sell`} variant="glass">
            {dict.cta.sellWithUs}
          </GlassButton>
          <GlassButton href={`/${locale}/guide`} variant="ghost">
            {dict.nav.guide}
          </GlassButton>
        </div>
      </div>
      <Testimonials locale={locale} dict={dict} />
    </>
  );
}
