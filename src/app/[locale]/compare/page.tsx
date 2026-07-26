"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { GlassButton } from "@/components/GlassButton";
import { PriceText } from "@/components/PriceText";
import { useApp } from "@/components/providers/AppProviders";
import { listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";
import { SITE_URL } from "@/lib/site";

export default function ComparePage() {
  const params = useParams();
  const raw = String(params.locale || "bg");
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  const dict = getDictionary(locale);
  const { compare, clearCompare, toggleCompare } = useApp();

  const items = useMemo(
    () =>
      compare
        .map((id) => listings.find((l) => l.id === id))
        .filter((l): l is NonNullable<typeof l> => Boolean(l)),
    [compare],
  );

  const shortlist = whatsappUrl(
    [
      "[SHORTLIST] Nomore compare",
      ...items.map(
        (l) =>
          `- ${l.title.en} · ${l.priceEur} EUR · ${SITE_URL}/${locale}/listings/${l.slug}`,
      ),
    ].join("\n"),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-3xl md:text-4xl">{dict.compare.title}</h1>
        {items.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <GlassButton href={shortlist} external variant="primary">
              {dict.cta.shortlist}
            </GlassButton>
            <button
              type="button"
              onClick={clearCompare}
              className="text-sm text-ink-muted hover:text-ink"
            >
              {dict.compare.clear}
            </button>
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="mt-10 glass rounded-3xl p-8 text-center">
          <p className="text-ink-muted">{dict.compare.empty}</p>
          <GlassButton href={`/${locale}/buy`} variant="primary" className="mt-4">
            {dict.cta.viewListings}
          </GlassButton>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="p-3 text-left text-ink-muted" />
                {items.map((l) => (
                  <th key={l.id} className="p-3 text-left align-top">
                    <div className="relative mb-3 aspect-[4/3] w-full max-w-[220px] overflow-hidden rounded-2xl">
                      <Image src={l.cover} alt="" fill className="object-cover" unoptimized />
                    </div>
                    <Link
                      href={`/${locale}/listings/${l.slug}`}
                      className="font-display text-base font-semibold hover:text-sea"
                    >
                      {l.title[locale]}
                    </Link>
                    <button
                      type="button"
                      className="mt-2 block text-xs text-ink-muted hover:text-ink"
                      onClick={() => toggleCompare(l.id)}
                    >
                      ✕
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.catalog.price}</td>
                {items.map((l) => (
                  <td key={`${l.id}-price`} className="p-3">
                    <PriceText listing={l} dict={dict} locale={locale} />
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.catalog.location}</td>
                {items.map((l) => (
                  <td key={`${l.id}-loc`} className="p-3">
                    {locations.find((x) => x.id === l.location)?.label[locale]}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.catalog.type}</td>
                {items.map((l) => (
                  <td key={`${l.id}-type`} className="p-3">
                    {dict.types[l.type]}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.catalog.rooms}</td>
                {items.map((l) => (
                  <td key={`${l.id}-rooms`} className="p-3">
                    {l.rooms === "studio" ? dict.types.studio : l.rooms}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.listing.area}</td>
                {items.map((l) => (
                  <td key={`${l.id}-area`} className="p-3">
                    {l.areaM2} m²
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.listing.beach}</td>
                {items.map((l) => (
                  <td key={`${l.id}-beach`} className="p-3">
                    {l.beachMinutes != null
                      ? `${l.beachMinutes} ${dict.listing.minutes}`
                      : "—"}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3 text-ink-muted">{dict.listing.features}</td>
                {items.map((l) => (
                  <td key={`${l.id}-feat`} className="p-3">
                    {l.features.map((f) => dict.features[f] || f).join(", ")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
