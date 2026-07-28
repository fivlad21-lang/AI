"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CatalogFilters } from "@/components/CatalogFilters";
import { CatalogMap } from "@/components/CatalogMap";
import { ListingCard } from "@/components/ListingCard";
import { ListingSkeletonGrid } from "@/components/ListingSkeleton";
import { GlassButton } from "@/components/GlassButton";
import { filterListings, type Deal, type SortKey } from "@/data/listings";
import { getLocation } from "@/data/locations";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { track } from "@/lib/analytics";

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
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const basePath = `/${locale}/${deal === "sale" ? "buy" : "rent"}`;
  const view = sp.get("view") === "map" ? "map" : "list";
  const locationId = sp.get("location") || undefined;
  const locationMeta =
    locationId && locationId !== "all" ? getLocation(locationId) : undefined;
  const features = (sp.get("features") || "").split(",").filter(Boolean);
  const sort = (sp.get("sort") || "new") as SortKey;
  const items = filterListings({
    deal,
    location: locationId,
    type: sp.get("type") || undefined,
    rooms: sp.get("rooms") || undefined,
    priceMin: sp.get("priceMin") ? Number(sp.get("priceMin")) : undefined,
    priceMax: sp.get("priceMax") ? Number(sp.get("priceMax")) : undefined,
    areaMin: sp.get("areaMin") ? Number(sp.get("areaMin")) : undefined,
    areaMax: sp.get("areaMax") ? Number(sp.get("areaMax")) : undefined,
    features: features.length ? features : undefined,
    sort,
  });

  const setView = (next: "list" | "map") => {
    const params = new URLSearchParams(sp.toString());
    if (next === "list") params.delete("view");
    else params.set("view", "map");
    const q = params.toString();
    track("catalog_view", { view: next, deal });
    router.push(q ? `${basePath}?${q}` : basePath, { scroll: false });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0 max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl">
            {deal === "sale" ? dict.catalog.saleTitle : dict.catalog.rentTitle}
            {locationMeta ? ` · ${locationMeta.label[locale]}` : ""}
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            {items.length} {dict.catalog.results}
          </p>
          {locationMeta && (
            <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[15px]">
              {locationMeta.intro[locale]}
            </p>
          )}
        </div>
        <div className="glass flex rounded-full p-1">
          <button
            type="button"
            onClick={() => setView("list")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
              view === "list" ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
            }`}
          >
            {dict.catalog.viewList}
          </button>
          <button
            type="button"
            onClick={() => setView("map")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
              view === "map" ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
            }`}
          >
            {dict.catalog.viewMap}
          </button>
        </div>
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
          <GlassButton href={`/${locale}/contacts`} variant="primary" className="mt-4">
            {dict.cta.getMatch}
          </GlassButton>
        </div>
      ) : view === "map" ? (
        <CatalogMap items={items} locale={locale} dict={dict} />
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
