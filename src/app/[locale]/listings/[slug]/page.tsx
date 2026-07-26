import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GlassButton } from "@/components/GlassButton";
import { ListingCard } from "@/components/ListingCard";
import { FavoriteButton } from "@/components/FavoriteButton";
import { CompareButton } from "@/components/CompareButton";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { ViewingCalendar } from "@/components/ViewingCalendar";
import { ShareButton } from "@/components/ShareButton";
import { PriceText } from "@/components/PriceText";
import { PrintButton } from "@/components/PrintButton";
import { ListingJsonLd } from "@/components/JsonLd";
import { MessengerButton, MessengerGlyph } from "@/components/MessengerButton";
import { ListingBadges } from "@/components/ListingBadges";
import { StickyListingCta } from "@/components/StickyListingCta";
import { ListingMiniMap } from "@/components/ListingMiniMap";
import { formatEur } from "@/components/PriceText";
import { getListing, getPublishedListings, listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";
import { pageMeta } from "@/lib/meta";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    listings.map((l) => ({ locale, slug: l.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  const listing = getListing(slug);
  if (!listing) return {};
  const loc = locations.find((l) => l.id === listing.location);
  const place = loc?.label[locale] ?? "";
  return pageMeta(locale, {
    title: `${listing.title[locale]}${place ? ` · ${place}` : ""}`,
    description: listing.description[locale],
    path: `listings/${slug}`,
  });
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
  const pageUrl = `${SITE_URL}/${locale}/listings/${listing.slug}`;
  const similar = getPublishedListings()
    .filter((l) => l.id !== listing.id && l.deal === listing.deal)
    .slice(0, 3);

  const wa = whatsappUrl(
    `[VIEW] ${listing.title.en}\n${listing.priceEur} EUR\n${pageUrl}`,
  );

  const priceLabel = `${formatEur(listing.priceEur, locale)}${
    listing.deal === "rent" ? dict.listing.month : ""
  }`;

  return (
    <div className="listing-print mx-auto max-w-6xl px-4 py-8 pb-28 md:px-6 md:py-12 md:pb-12">
      <ListingJsonLd
        name={listing.title[locale]}
        description={listing.description[locale]}
        image={listing.cover}
        priceEur={listing.priceEur}
        url={pageUrl}
      />

      <GalleryLightbox images={listing.gallery} alt={listing.title[locale]} />

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <ListingBadges
            deal={listing.deal}
            video={listing.video}
            status={listing.status === "published" ? undefined : listing.status}
            dict={dict}
            beachMinutes={listing.beachMinutes}
          />
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {listing.title[locale]}
          </h1>
          <p className="mt-2 text-ink-muted">
            {listing.addressPublic?.[locale] ?? loc?.label[locale]}
          </p>
          <p className="mt-4 text-2xl font-semibold tabular-nums">
            <PriceText listing={listing} dict={dict} locale={locale} />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <FavoriteButton id={listing.id} />
          <CompareButton id={listing.id} dict={dict} />
          <ShareButton dict={dict} title={listing.title[locale]} url={pageUrl} />
          <PrintButton dict={dict} />
        </div>
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

      <ListingMiniMap
        lat={listing.lat}
        lng={listing.lng}
        label={listing.addressPublic?.[locale] ?? loc?.label[locale] ?? ""}
      />

      {(listing.video || listing.videoUrl) && (
        <div className="mt-6 print:hidden">
          {listing.videoUrl ? (
            <GlassButton href={listing.videoUrl} external variant="glass">
              {dict.listing.watchVideo}
            </GlassButton>
          ) : (
            <span className="glass inline-flex rounded-full px-3 py-1.5 text-xs font-semibold">
              {dict.listing.video}
            </span>
          )}
        </div>
      )}

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

      <div className="mt-10 grid gap-6 lg:grid-cols-2 print:hidden">
        <ViewingCalendar
          dict={dict}
          listingTitle={listing.title[locale]}
          listingUrl={pageUrl}
        />
        <div className="flex flex-col justify-end gap-3">
          <GlassButton href={wa} external variant="primary">
            <MessengerGlyph kind="whatsapp" className="h-4 w-4" />
            {dict.cta.applyViewing}
          </GlassButton>
          <MessengerButton kind="whatsapp" href={wa} label={dict.cta.whatsapp} />
          <p className="text-xs text-ink-muted">{dict.listing.autoReply}</p>
          <Link
            href={`/${locale}/${listing.deal === "sale" ? "buy" : "rent"}`}
            className="text-sm text-ink-muted"
          >
            ← {listing.deal === "sale" ? dict.nav.buy : dict.nav.rent}
          </Link>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="mt-16 print:hidden">
          <h2 className="font-display text-2xl">{dict.listing.similar}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((l) => (
              <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}

      <StickyListingCta
        href={wa}
        label={dict.cta.whatsapp}
        priceLabel={priceLabel}
      />
    </div>
  );
}
