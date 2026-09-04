"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { locations } from "@/data/locations";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassSelect } from "@/components/GlassSelect";
import { GlassButton } from "@/components/GlassButton";
import { track } from "@/lib/analytics";

export function HeroSearch({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const [deal, setDeal] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("all");
  const [type, setType] = useState("all");
  const [rooms, setRooms] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const inputClass =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-sea/50";

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location !== "all") params.set("location", location);
    if (type !== "all") params.set("type", type);
    if (rooms !== "all") params.set("rooms", rooms);
    if (priceMin) params.set("priceMin", priceMin);
    if (priceMax) params.set("priceMax", priceMax);
    const q = params.toString();
    const base = `/${locale}/${deal === "buy" ? "buy" : "rent"}`;
    track("hero_search", {
      deal,
      has_location: location !== "all",
      has_type: type !== "all",
      has_rooms: rooms !== "all",
      has_price: Boolean(priceMin || priceMax),
    });
    router.push(q ? `${base}?${q}` : base);
  };

  return (
    <form
      onSubmit={submit}
      className="glass-strong animate-rise-delay-2 w-full max-w-md space-y-3 rounded-[1.75rem] p-4 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75)] md:p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {dict.home.searchTitle}
      </p>

      <div className="grid grid-cols-2 gap-1 rounded-full bg-black/25 p-1">
        {(
          [
            { id: "buy" as const, label: dict.nav.buy },
            { id: "rent" as const, label: dict.nav.rent },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setDeal(tab.id)}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
              deal === tab.id ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative z-10 grid gap-3 sm:grid-cols-2">
        <GlassSelect
          label={dict.catalog.location}
          value={location}
          onChange={setLocation}
          options={[
            { value: "all", label: dict.catalog.all },
            ...locations.map((l) => ({ value: l.id, label: l.label[locale] })),
          ]}
        />
        <GlassSelect
          label={dict.catalog.type}
          value={type}
          onChange={setType}
          options={[
            { value: "all", label: dict.catalog.all },
            ...Object.entries(dict.types).map(([k, v]) => ({ value: k, label: v })),
          ]}
        />
        <GlassSelect
          label={dict.catalog.rooms}
          value={rooms}
          onChange={setRooms}
          options={[
            { value: "all", label: dict.catalog.all },
            { value: "studio", label: dict.types.studio },
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4plus", label: "4+" },
          ]}
        />
        <div className="grid grid-cols-2 gap-2">
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
            {dict.catalog.priceMin}
            <input
              className={inputClass}
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
            {dict.catalog.priceMax}
            <input
              className={inputClass}
              type="number"
              inputMode="numeric"
              placeholder="∞"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </label>
        </div>
      </div>

      <GlassButton type="submit" variant="primary" className="w-full">
        {dict.cta.showResults}
      </GlassButton>
    </form>
  );
}
