import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { ListingCard } from "@/components/ListingCard";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getListing, listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    listings.map((l) => ({ locale, slug: l.slug })),
  );
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const listing = getListing(slug);
  if (!listing) notFound();
  const dict = getDictionary(locale);
  const loc = locations.find((l) => l.id === listing.location);
  const price = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(listing.priceEur);
  const similar = listings
    .filter((l) => l.id !== listing.id && l.deal === listing.deal)
    .slice(0, 3);

  const wa = whatsappUrl(
    `[VIEW] ${listing.title.en}\n${price}\nhttps://nomore.estate/${locale}/listings/${listing.slug}`,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-3 md:grid-cols-2">
        {listing.gallery.map((src, i) => (
          <div
            key={src + i}
            className={`relative overflow-hidden rounded-3xl ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
          >
            <Image src={src} alt="" fill className="object-cover" unoptimized sizes="100vw" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="glass rounded-full px-3 py-1 text-xs font-semibold uppercase">
              {listing.deal === "sale" ? dict.listing.sale : dict.listing.rent}
            </span>
            {listing.demo && (
              <span className="rounded-full bg-lagoon/15 px-3 py-1 text-xs font-semibold uppercase text-lagoon ring-1 ring-lagoon/30">
                {dict.listing.demo}
              </span>
            )}
          </div>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {listing.title[locale]}
          </h1>
          <p className="mt-2 text-ink-muted">{loc?.label[locale]}</p>
          <p className="mt-4 text-2xl font-semibold tabular-nums">
            {price}
            {listing.deal === "rent" ? dict.listing.month : ""}
          </p>
        </div>
        <FavoriteButton id={listing.id} />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        <div className="glass rounded-2xl p-4 text-sm">
          <p className="text-ink-muted">{dict.listing.area}</p>
          <p className="mt-1 font-semibold">{listing.areaM2} m²</p>
        </div>
        <div className="glass rounded-2xl p-4 text-sm">
          <p className="text-ink-muted">{dict.catalog.rooms}</p>
          <p className="mt-1 font-semibold">
            {listing.rooms === "studio" ? dict.types.studio : listing.rooms}
          </p>
        </div>
        {listing.floor != null && (
          <div className="glass rounded-2xl p-4 text-sm">
            <p className="text-ink-muted">{dict.listing.floor}</p>
            <p className="mt-1 font-semibold">
              {listing.floor}
              {listing.floorsTotal ? ` / ${listing.floorsTotal}` : ""}
            </p>
          </div>
        )}
        {listing.act && (
          <div className="glass rounded-2xl p-4 text-sm">
            <p className="text-ink-muted">{dict.listing.act}</p>
            <p className="mt-1 font-semibold">{listing.act}</p>
          </div>
        )}
      </div>

      <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-muted">
        {listing.description[locale]}
      </p>

      <div className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          {dict.listing.features}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {listing.features.map((f) => (
            <span key={f} className="glass rounded-full px-3 py-1.5 text-xs font-medium">
              {dict.features[f] || f}
            </span>
          ))}
        </div>
      </div>

      <div className="sticky bottom-4 z-30 mt-10 flex flex-wrap gap-3 md:static">
        <GlassButton href={wa} external variant="primary" className="flex-1 md:flex-none">
          {dict.cta.applyViewing}
        </GlassButton>
        <GlassButton href={wa} external variant="glass">
          {dict.cta.whatsapp}
        </GlassButton>
        <Link href={`/${locale}/${listing.deal === "sale" ? "buy" : "rent"}`} className="text-sm text-ink-muted self-center px-2">
          ← {listing.deal === "sale" ? dict.nav.buy : dict.nav.rent}
        </Link>
      </div>

      {similar.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl">{dict.listing.similar}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((l) => (
              <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
