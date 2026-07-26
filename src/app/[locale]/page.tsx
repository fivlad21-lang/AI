import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { ListingCard } from "@/components/ListingCard";
import { Testimonials } from "@/components/Testimonials";
import { Logo } from "@/components/Logo";
import { MessengerButton } from "@/components/MessengerButton";
import { getPublishedListings } from "@/data/listings";
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
  const featured = getPublishedListings().slice(0, 3);

  return (
    <>
      <section className="relative min-h-[88dvh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80"
            alt="Black Sea coast near Burgas"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/75 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 md:justify-center md:px-6 md:pb-24 md:pt-20">
          <div className="animate-rise">
            <Logo locale={locale} size="lg" />
          </div>
          <p className="animate-rise mt-3 max-w-xl text-sm leading-relaxed text-ink-muted md:text-[15px]">
            {dict.microcopy}
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-3xl font-display text-[2.35rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">{dict.taglineLine1}</span>
            <span className="block">{dict.taglineLine2}</span>
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            {dict.taglineSub}
          </p>
          <div className="animate-rise-delay-2 mt-9 flex flex-wrap gap-3">
            <GlassButton href={`/${locale}/buy`} variant="primary">
              {dict.cta.viewListings}
            </GlassButton>
            <GlassButton href={`/${locale}/sell`} variant="glass">
              {dict.cta.sellWithUs}
            </GlassButton>
            <MessengerButton
              kind="whatsapp"
              href={whatsappUrl("Hi! I want help finding a home")}
              label={dict.cta.whatsapp}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {dict.home.featured}
          </h2>
          <Link
            href={`/${locale}/buy`}
            className="text-sm font-semibold text-sea transition hover:text-ink"
          >
            {dict.cta.viewListings} →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-bg-elevated/50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {dict.home.howTitle}
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {dict.home.howSteps.map((step, i) => (
              <li
                key={step}
                className="glass group rounded-3xl p-6 transition hover:bg-white/[0.08]"
              >
                <span className="step-num">0{i + 1}</span>
                <p className="mt-4 text-[15px] leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials locale={locale} dict={dict} />

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {dict.home.areasTitle}
        </h2>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {locations.map((l) => (
            <Link
              key={l.id}
              href={`/${locale}/buy?location=${l.id}`}
              className="glass rounded-full px-4 py-2.5 text-sm font-medium text-ink-muted transition hover:bg-white/10 hover:text-ink"
            >
              {l.label[locale]}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href={`/${locale}/guide`} className="text-sea hover:text-ink">
            {dict.nav.guide} →
          </Link>
          <span className="mx-3 text-ink-muted">·</span>
          <Link href={`/${locale}/blog`} className="text-sea hover:text-ink">
            {dict.nav.blog} →
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-[#121a28] to-[#0a101a] p-7 md:flex md:items-center md:justify-between md:gap-12 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sea/20 blur-3xl"
          />
          <div className="relative max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {dict.home.ownersTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted md:text-base">
              {dict.home.ownersText}
            </p>
          </div>
          <GlassButton
            href={`/${locale}/sell`}
            variant="primary"
            className="relative mt-8 shrink-0 md:mt-0"
          >
            {dict.cta.sellWithUs}
          </GlassButton>
        </div>
      </section>
    </>
  );
}
