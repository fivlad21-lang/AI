import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const featured = listings.slice(0, 3);

  return (
    <>
      <section className="hero-grid relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/80 to-bg" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-lagoon">
            Burgas · Sunny Beach · Coast
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            {dict.tagline}
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {dict.taglineSub}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <GlassButton href={`/${locale}/buy`} variant="primary">
              {dict.cta.viewListings}
            </GlassButton>
            <GlassButton href={`/${locale}/sell`} variant="glass">
              {dict.cta.sellWithUs}
            </GlassButton>
            <GlassButton href={whatsappUrl("Hi! I want help finding a home")} external variant="ghost">
              {dict.cta.whatsapp}
            </GlassButton>
          </div>
          <p className="mt-8 text-xs text-ink-muted">{dict.home.demoNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl md:text-3xl">{dict.home.featured}</h2>
          <Link href={`/${locale}/buy`} className="text-sm font-semibold text-sea hover:text-lagoon">
            {dict.cta.viewListings} →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-bg-elevated/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl">{dict.home.howTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {dict.home.howSteps.map((step, i) => (
              <li key={step} className="glass rounded-3xl p-5">
                <span className="text-xs font-bold text-sea">0{i + 1}</span>
                <p className="mt-3 text-sm leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl md:text-3xl">{dict.home.areasTitle}</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {locations.map((l) => (
            <Link
              key={l.id}
              href={`/${locale}/buy?location=${l.id}`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition hover:text-ink hover:bg-white/10"
            >
              {l.label[locale]}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="glass-strong overflow-hidden rounded-[2rem] p-6 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl">{dict.home.ownersTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
              {dict.home.ownersText}
            </p>
          </div>
          <GlassButton href={`/${locale}/sell`} variant="primary" className="mt-6 md:mt-0">
            {dict.cta.sellWithUs}
          </GlassButton>
        </div>
      </section>
    </>
  );
}
