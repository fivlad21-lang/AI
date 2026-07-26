"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { locations } from "@/data/locations";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

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

  const selectClass =
    "glass w-full rounded-xl px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-sea/50";

  return (
    <div className="glass grid gap-3 rounded-3xl p-4 md:grid-cols-4">
      <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {dict.catalog.location}
        <select
          className={`${selectClass} mt-1.5`}
          value={sp.get("location") || "all"}
          onChange={(e) => set("location", e.target.value)}
        >
          <option value="all">{dict.catalog.all}</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label[locale]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {dict.catalog.type}
        <select
          className={`${selectClass} mt-1.5`}
          value={sp.get("type") || "all"}
          onChange={(e) => set("type", e.target.value)}
        >
          <option value="all">{dict.catalog.all}</option>
          {Object.entries(dict.types).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {dict.catalog.rooms}
        <select
          className={`${selectClass} mt-1.5`}
          value={sp.get("rooms") || "all"}
          onChange={(e) => set("rooms", e.target.value)}
        >
          <option value="all">{dict.catalog.all}</option>
          <option value="studio">{dict.types.studio}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4plus">4+</option>
        </select>
      </label>
      <button
        type="button"
        className="self-end rounded-xl px-3 py-2.5 text-sm text-ink-muted hover:text-ink"
        onClick={() => router.push(basePath)}
      >
        {dict.cta.reset}
      </button>
    </div>
  );
}
