import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { SellForm } from "@/components/SellForm";
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
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lagoon">
          {dict.nav.sell}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {dict.sell.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-muted md:text-lg">{dict.sell.subtitle}</p>
        <p className="mt-4 max-w-2xl rounded-2xl border border-sea/30 bg-sea/10 px-4 py-3 text-sm text-ink">
          {dict.sell.modelB}
        </p>
        <div className="mt-6">
          <GlassButton href={whatsappUrl("[SELL] Want to list my property with shooting")} external variant="glass">
            {dict.cta.whatsapp}
          </GlassButton>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">{dict.sell.includesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {dict.sell.includes.map((item) => (
                <li key={item} className="glass flex gap-3 rounded-2xl px-4 py-3 text-sm">
                  <span className="text-lagoon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-2xl">{dict.sell.stepsTitle}</h2>
            <ol className="mt-5 space-y-3">
              {dict.sell.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-ink-muted">
                  <span className="font-display text-sea">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <SellForm locale={locale} dict={dict} />
        </div>
      </div>
    </div>
  );
}
