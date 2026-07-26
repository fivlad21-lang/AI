import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CatalogView } from "@/components/CatalogView";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta, routeTitles } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  return pageMeta(locale, { title: routeTitles(locale).buy, path: "buy" });
}

export default async function BuyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-20 text-ink-muted">…</div>}>
      <CatalogView locale={locale} dict={dict} deal="sale" />
    </Suspense>
  );
}
