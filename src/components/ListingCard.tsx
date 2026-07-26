import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Listing } from "@/data/listings";
import { locations } from "@/data/locations";
import { FavoriteButton } from "@/components/FavoriteButton";

function formatPrice(listing: Listing, dict: Dictionary) {
  const n = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(listing.priceEur);
  return listing.deal === "rent" ? `${n}${dict.listing.month}` : n;
}

export function ListingCard({
  listing,
  locale,
  dict,
}: {
  listing: Listing;
  locale: Locale;
  dict: Dictionary;
}) {
  const loc = locations.find((l) => l.id === listing.location);

  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-bg-elevated/80 transition hover:border-white/20">
      <Link href={`/${locale}/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.cover}
            alt={listing.title[locale]}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
            unoptimized
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="glass rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase">
              {listing.deal === "sale" ? dict.listing.sale : dict.listing.rent}
            </span>
            {listing.demo && (
              <span className="rounded-full bg-lagoon/20 px-2.5 py-1 text-[11px] font-semibold uppercase text-lagoon ring-1 ring-lagoon/40">
                {dict.listing.demo}
              </span>
            )}
            {listing.video && (
              <span className="glass rounded-full px-2.5 py-1 text-[11px] font-semibold">
                {dict.listing.video}
              </span>
            )}
          </div>
          <div className="absolute right-3 top-3">
            <FavoriteButton id={listing.id} />
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-lg font-semibold tabular-nums text-ink">{formatPrice(listing, dict)}</p>
          <h3 className="font-display text-base leading-snug tracking-tight">
            {listing.title[locale]}
          </h3>
          <p className="text-sm text-ink-muted">{loc?.label[locale]}</p>
          <p className="text-xs text-ink-muted">
            {listing.rooms === "studio" ? dict.types.studio : `${listing.rooms} ${dict.catalog.rooms.toLowerCase()}`}
            {" · "}
            {listing.areaM2} m²
            {listing.floor != null ? ` · ${dict.listing.floor} ${listing.floor}` : ""}
          </p>
        </div>
      </Link>
    </article>
  );
}
