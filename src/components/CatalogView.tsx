"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CatalogFilters } from "@/components/CatalogFilters";
import { ListingCard } from "@/components/ListingCard";
import { ListingSkeletonGrid } from "@/components/ListingSkeleton";
import { GlassButton } from "@/components/GlassButton";
import { filterListings, type Deal, type SortKey } from "@/data/listings";
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
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const basePath = `/${locale}/${deal === "sale" ? "buy" : "rent"}`;
  const features = (sp.get("features") || "").split(",").filter(Boolean);
  const sort = (sp.get("sort") || "new") as SortKey;
  const items = filterListings({
    deal,
    location: sp.get("location") || undefined,
    type: sp.get("type") || undefined,
    rooms: sp.get("rooms") || undefined,
    priceMin: sp.get("priceMin") ? Number(sp.get("priceMin")) : undefined,
    priceMax: sp.get("priceMax") ? Number(sp.get("priceMax")) : undefined,
    areaMin: sp.get("areaMin") ? Number(sp.get("areaMin")) : undefined,
    areaMax: sp.get("areaMax") ? Number(sp.get("areaMax")) : undefined,
    features: features.length ? features : undefined,
    sort,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div>
        <h1 className="font-display text-3xl md:text-4xl">
          {deal === "sale" ? dict.catalog.saleTitle : dict.catalog.rentTitle}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          {items.length} {dict.catalog.results}
        </p>
      </div>
      <div className="mt-6">
        <CatalogFilters locale={locale} dict={dict} basePath={basePath} />
      </div>
      {!ready ? (
        <>
          <p className="mt-6 text-sm text-ink-muted">{dict.catalog.loading}</p>
          <ListingSkeletonGrid />
        </>
      ) : items.length === 0 ? (
        <div className="mt-10 glass rounded-3xl p-8 text-center">
          <p className="text-ink">{dict.catalog.empty}</p>
          <p className="mt-2 text-sm text-ink-muted">{dict.catalog.emptyHint}</p>
          <GlassButton
            className="mt-4"
            variant="primary"
            href={whatsappUrl(
              `[${deal === "sale" ? "BUY" : "RENT"}] Need help finding a property`,
            )}
            external
          >
            {dict.cta.whatsapp}
          </GlassButton>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l, i) => (
            <div
              key={l.id}
              className="animate-rise"
              style={{ animationDelay: `${Math.min(i, 6) * 0.05}s` }}
            >
              <ListingCard listing={l} locale={locale} dict={dict} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
