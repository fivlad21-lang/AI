import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { SellForm } from "@/components/SellForm";
import { ShootGallery } from "@/components/ShootGallery";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";

export default async function SellPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="hero-grid">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="section-label">{dict.nav.sell}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {dict.sell.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          {dict.sell.subtitle}
        </p>
        <p className="mt-5 max-w-2xl rounded-2xl border border-sea/25 bg-sea/[0.08] px-4 py-3.5 text-sm leading-relaxed text-ink">
          {dict.sell.modelB}
        </p>
        <div className="mt-7">
          <GlassButton
            href={whatsappUrl("[SELL] Want to list my property with shooting")}
            external
            variant="glass"
          >
            {dict.cta.whatsapp}
          </GlassButton>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="section-label">Includes</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">
              {dict.sell.includesTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {dict.sell.includes.map((item, i) => (
                <li
                  key={item}
                  className="glass flex items-start gap-3 rounded-2xl px-4 py-3.5 text-sm leading-relaxed"
                >
                  <span className="step-num shrink-0">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="section-label mt-12">Process</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">
              {dict.sell.stepsTitle}
            </h2>
            <ol className="mt-6 space-y-3">
              {dict.sell.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 border-l border-white/10 pl-4 text-sm text-ink-muted"
                >
                  <span className="step-num shrink-0">0{i + 1}</span>
                  <span className="text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <SellForm locale={locale} dict={dict} />
        </div>

        <ShootGallery dict={dict} />
      </div>
    </div>
  );
}
