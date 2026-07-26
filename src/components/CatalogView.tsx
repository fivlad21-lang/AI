"use client";

import { useSearchParams } from "next/navigation";
import { CatalogFilters } from "@/components/CatalogFilters";
import { ListingCard } from "@/components/ListingCard";
import { GlassButton } from "@/components/GlassButton";
import { filterListings, type Deal } from "@/data/listings";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";

export function CatalogView({
  locale,
  dict,
  deal,
}: {
  locale: Locale;
  dict: Dictionary;
  deal: Deal;
}) {
  const sp = useSearchParams();
  const basePath = `/${locale}/${deal === "sale" ? "buy" : "rent"}`;
  const items = filterListings({
    deal,
    location: sp.get("location") || undefined,
    type: sp.get("type") || undefined,
    rooms: sp.get("rooms") || undefined,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="font-display text-3xl md:text-4xl">
        {deal === "sale" ? dict.catalog.saleTitle : dict.catalog.rentTitle}
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        {items.length} {dict.catalog.results}
      </p>
      <div className="mt-6">
        <CatalogFilters locale={locale} dict={dict} basePath={basePath} />
      </div>
      {items.length === 0 ? (
        <div className="mt-10 glass rounded-3xl p-8 text-center">
          <p className="text-ink-muted">{dict.catalog.empty}</p>
          <GlassButton
            className="mt-4"
            variant="primary"
            href={whatsappUrl(`[${deal === "sale" ? "BUY" : "RENT"}] Need help finding a property`)}
            external
          >
            {dict.cta.whatsapp}
          </GlassButton>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l) => (
            <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
