"use client";

import { useEffect, useRef } from "react";

export function ListingMiniMap({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | null = null;

    async function init() {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, {
        scrollWheelZoom: false,
        dragging: true,
        zoomControl: false,
        attributionControl: false,
      }).setView([lat, lng], 13);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
      }).addTo(map);

      const pin = L.divIcon({
        className: "nomore-map-pin",
        html: `<span class="nomore-map-pin__dot"></span>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      L.marker([lat, lng], { icon: pin }).addTo(map).bindTooltip(label, {
        permanent: false,
        direction: "top",
      });

      requestAnimationFrame(() => map?.invalidateSize());
    }

    void init();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, label]);

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 print:hidden">
      <div ref={ref} className="h-56 w-full md:h-64" />
      <p className="border-t border-white/10 bg-bg-elevated/80 px-4 py-2.5 text-xs text-ink-muted">
        {label}
      </p>
    </div>
  );
}
