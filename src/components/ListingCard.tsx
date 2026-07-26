import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Listing } from "@/data/listings";
import { locations } from "@/data/locations";
import { FavoriteButton } from "@/components/FavoriteButton";
import { CompareButton } from "@/components/CompareButton";
import { PriceText } from "@/components/PriceText";

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
      <div className="relative">
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
              {listing.video && (
                <span className="glass rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                  {dict.listing.video}
                </span>
              )}
              {listing.status === "reserved" && (
                <span className="glass rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                  {dict.listing.reserved}
                </span>
              )}
            </div>
          </div>
        </Link>
        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
          <FavoriteButton id={listing.id} />
          <CompareButton id={listing.id} dict={dict} />
        </div>
      </div>
      <Link href={`/${locale}/listings/${listing.slug}`} className="block space-y-1.5 p-4 md:p-5">
        <p className="text-lg font-semibold tabular-nums tracking-tight text-ink">
          <PriceText listing={listing} dict={dict} locale={locale} />
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
            listing.beachMinutes != null
              ? `${dict.listing.beach} ${listing.beachMinutes} ${dict.listing.minutes}`
              : null,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </Link>
    </article>
  );
}
