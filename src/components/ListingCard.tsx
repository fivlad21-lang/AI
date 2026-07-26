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
    <article className="group overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-bg-elevated/70 transition duration-300 hover:border-white/18 hover:bg-bg-elevated">
      <Link href={`/${locale}/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.cover}
            alt={listing.title[locale]}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width:768px) 100vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-80" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="glass rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
              {listing.deal === "sale" ? dict.listing.sale : dict.listing.rent}
            </span>
            {listing.demo && (
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-lagoon ring-1 ring-white/15 backdrop-blur">
                {dict.listing.demo}
              </span>
            )}
            {listing.video && (
              <span className="glass rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                {dict.listing.video}
              </span>
            )}
          </div>
          <div className="absolute right-3 top-3">
            <FavoriteButton id={listing.id} />
          </div>
        </div>
        <div className="space-y-1.5 p-4 md:p-5">
          <p className="text-lg font-semibold tabular-nums tracking-tight text-ink">
            {formatPrice(listing, dict)}
          </p>
          <h3 className="font-display text-[15px] font-medium leading-snug tracking-tight">
            {listing.title[locale]}
          </h3>
          <p className="text-sm text-ink-muted">{loc?.label[locale]}</p>
          <p className="pt-1 text-xs text-ink-muted/90">
            {[
              listing.rooms === "studio" ? dict.types.studio : String(listing.rooms),
              `${listing.areaM2} m²`,
              listing.floor != null ? `${dict.listing.floor} ${listing.floor}` : null,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
