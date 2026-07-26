"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ListingCard } from "@/components/ListingCard";
import { GlassButton } from "@/components/GlassButton";
import { MessengerButton } from "@/components/MessengerButton";
import { useApp } from "@/components/providers/AppProviders";
import { listings } from "@/data/listings";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";
import { SITE_URL } from "@/lib/site";

export default function FavoritesPage() {
  const params = useParams();
  const raw = String(params.locale || "bg");
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  const dict = getDictionary(locale);
  const { favorites } = useApp();

  const items = useMemo(
    () => listings.filter((l) => favorites.includes(l.id) && l.status === "published"),
    [favorites],
  );

  const shortlist = whatsappUrl(
    [
      "[SHORTLIST] Nomore favorites",
      ...items.map(
        (l) =>
          `- ${l.title.en} · ${l.priceEur} EUR · ${SITE_URL}/${locale}/listings/${l.slug}`,
      ),
      items.length ? "" : "(empty)",
    ].join("\n"),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="font-display text-3xl md:text-4xl">{dict.favorites.title}</h1>
      {items.length === 0 ? (
        <div className="mt-10 glass rounded-3xl p-8 text-center">
          <p className="text-ink-muted">{dict.favorites.empty}</p>
          <GlassButton href={`/${locale}/buy`} variant="primary" className="mt-4">
            {dict.cta.viewListings}
          </GlassButton>
        </div>
      ) : (
        <>
          <div className="mt-6">
            <MessengerButton
              kind="whatsapp"
              href={shortlist}
              label={dict.favorites.sendShortlist}
            />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((l) => (
              <ListingCard key={l.id} listing={l} locale={locale} dict={dict} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
