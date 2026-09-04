"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Listing } from "@/data/listings";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatEur } from "@/components/PriceText";

type Props = {
  items: Listing[];
  locale: Locale;
  dict: Dictionary;
};

export function CatalogMap({ items, locale, dict }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !containerRef.current) return;

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const map = L.map(containerRef.current, {
        scrollWheelZoom: true,
        zoomControl: true,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 18,
      }).addTo(map);

      const pin = L.divIcon({
        className: "nomore-map-pin",
        html: `<span class="nomore-map-pin__dot"></span>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -12],
      });

      const bounds: import("leaflet").LatLngExpression[] = [];

      for (const l of items) {
        const marker = L.marker([l.lat, l.lng], { icon: pin }).addTo(map);
        bounds.push([l.lat, l.lng]);
        const price = formatEur(l.priceEur, locale) + (l.deal === "rent" ? dict.listing.month : "");
        const href = `/${locale}/listings/${l.slug}`;
        const place = l.addressPublic?.[locale] ?? "";
        marker.bindPopup(
          `<div class="nomore-map-popup">
            <p class="nomore-map-popup__price">${price}</p>
            <p class="nomore-map-popup__title">${escapeHtml(l.title[locale])}</p>
            ${place ? `<p class="nomore-map-popup__place">${escapeHtml(place)}</p>` : ""}
            <a class="nomore-map-popup__link" href="${href}">${escapeHtml(dict.catalog.openListing)}</a>
          </div>`,
          { maxWidth: 240, className: "nomore-map-popup-wrap" },
        );
      }

      if (bounds.length === 1) {
        map.setView(bounds[0], 13);
      } else if (bounds.length > 1) {
        map.fitBounds(L.latLngBounds(bounds), { padding: [40, 40], maxZoom: 13 });
      } else {
        map.setView([42.62, 27.65], 9);
      }

      // Leaflet needs a tick after layout
      requestAnimationFrame(() => map.invalidateSize());
    }

    void init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [items, locale, dict.listing.month, dict.catalog.openListing]);

  if (items.length === 0) return null;

  return (
    <div className="nomore-map relative mt-8 overflow-hidden rounded-3xl border border-white/10">
      <div ref={containerRef} className="h-[min(70vh,560px)] w-full" />
      {/* SSR-friendly fallback list for no-JS is the grid; map is progressive */}
      <noscript>
        <ul className="space-y-2 p-4 text-sm">
          {items.map((l) => (
            <li key={l.id}>
              <Link href={`/${locale}/listings/${l.slug}`}>{l.title[locale]}</Link>
            </li>
          ))}
        </ul>
      </noscript>
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
