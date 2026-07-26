"use client";

import { useApp } from "@/components/providers/AppProviders";
import { formatMoney } from "@/lib/currency";
import type { Listing } from "@/data/listings";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

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
  const { currency } = useApp();
  const text = formatMoney(listing.priceEur, currency, locale);
  return (
    <span className={className}>
      {text}
      {listing.deal === "rent" ? dict.listing.month : ""}
    </span>
  );
}
