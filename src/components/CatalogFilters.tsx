"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { locations } from "@/data/locations";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassSelect } from "@/components/GlassSelect";

const FEATURE_KEYS = ["sea-view", "parking", "furnished", "elevator", "pool"] as const;

export function CatalogFilters({
  locale,
  dict,
  basePath,
}: {
  locale: Locale;
  dict: Dictionary;
  basePath: string;
}) {
  const router = useRouter();
  const sp = useSearchParams();

  const set = (key: string, value: string) => {
    const params = new URLSearchParams(sp.toString());
    if (!value || value === "all") params.delete(key);
    else params.set(key, value);
    const q = params.toString();
    router.push(q ? `${basePath}?${q}` : basePath);
  };

  const toggleFeature = (f: string) => {
    const params = new URLSearchParams(sp.toString());
    const cur = (params.get("features") || "").split(",").filter(Boolean);
    const next = cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f];
    if (next.length) params.set("features", next.join(","));
    else params.delete("features");
    const q = params.toString();
    router.push(q ? `${basePath}?${q}` : basePath);
  };

  const selectedFeatures = (sp.get("features") || "").split(",").filter(Boolean);
  const inputClass =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-sea/50";

  return (
    <div className="glass space-y-4 overflow-visible rounded-3xl p-4">
      <div className="relative z-10 grid gap-3 md:grid-cols-4">
        <GlassSelect
          label={dict.catalog.location}
          value={sp.get("location") || "all"}
          onChange={(v) => set("location", v)}
          options={[
            { value: "all", label: dict.catalog.all },
            ...locations.map((l) => ({ value: l.id, label: l.label[locale] })),
          ]}
        />
        <GlassSelect
          label={dict.catalog.type}
          value={sp.get("type") || "all"}
          onChange={(v) => set("type", v)}
          options={[
            { value: "all", label: dict.catalog.all },
            ...Object.entries(dict.types).map(([k, v]) => ({ value: k, label: v })),
          ]}
        />
        <GlassSelect
          label={dict.catalog.rooms}
          value={sp.get("rooms") || "all"}
          onChange={(v) => set("rooms", v)}
          options={[
            { value: "all", label: dict.catalog.all },
            { value: "studio", label: dict.types.studio },
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4plus", label: "4+" },
          ]}
        />
        <GlassSelect
          label={dict.catalog.sort}
          value={sp.get("sort") || "new"}
          onChange={(v) => set("sort", v === "new" ? "all" : v)}
          options={[
            { value: "new", label: dict.catalog.sortNew },
            { value: "price-asc", label: dict.catalog.sortPriceAsc },
            { value: "price-desc", label: dict.catalog.sortPriceDesc },
            { value: "area-desc", label: dict.catalog.sortArea },
          ]}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {dict.catalog.priceMin}
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            placeholder="0"
            value={sp.get("priceMin") || ""}
            onChange={(e) => set("priceMin", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {dict.catalog.priceMax}
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            placeholder="∞"
            value={sp.get("priceMax") || ""}
            onChange={(e) => set("priceMax", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {dict.catalog.areaMin}
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            placeholder="0"
            value={sp.get("areaMin") || ""}
            onChange={(e) => set("areaMin", e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {dict.catalog.areaMax}
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            placeholder="∞"
            value={sp.get("areaMax") || ""}
            onChange={(e) => set("areaMax", e.target.value)}
          />
        </label>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {dict.catalog.features}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {FEATURE_KEYS.map((f) => {
            const on = selectedFeatures.includes(f);
            return (
              <button
                key={f}
                type="button"
                onClick={() => toggleFeature(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  on ? "bg-sea text-white" : "glass text-ink-muted hover:text-ink"
                }`}
              >
                {dict.features[f]}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="text-sm text-ink-muted hover:text-ink"
        onClick={() => router.push(basePath)}
      >
        {dict.cta.reset}
      </button>
    </div>
  );
}
