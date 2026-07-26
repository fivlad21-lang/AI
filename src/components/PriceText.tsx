import { toDisplayAmount } from "@/lib/currency";
import type { Listing } from "@/data/listings";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function formatEur(eur: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ua" ? "uk" : locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}

function formatLev(eur: number, locale: Locale) {
  const bgn = toDisplayAmount(eur, "BGN");
  const n = new Intl.NumberFormat(locale === "ua" ? "uk" : locale, {
    maximumFractionDigits: 0,
  }).format(bgn);
  return `≈ ${n} лв`;
}

export function PriceText({
  listing,
  dict,
  locale,
  className,
}: {
  listing: Listing;
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const month = listing.deal === "rent" ? dict.listing.month : "";
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5 ${className || ""}`}>
      <span className="tabular-nums">
        {formatEur(listing.priceEur, locale)}
        {month}
      </span>
      <span className="text-xs font-normal tabular-nums text-ink-muted">
        {formatLev(listing.priceEur, locale)}
        {listing.deal === "rent" ? month : ""}
      </span>
    </span>
  );
}
