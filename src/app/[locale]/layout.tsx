import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessengerDock } from "@/components/MessengerDock";
import { CookieBanner } from "@/components/CookieBanner";
import { CompareBar } from "@/components/CompareBar";
import { Analytics } from "@/components/Analytics";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { AppProviders } from "@/components/providers/AppProviders";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "bg";
  const dict = getDictionary(locale as Locale);
  const languages = Object.fromEntries(
    locales.map((l) => [l === "ua" ? "uk" : l, `${SITE_URL}/${l}`]),
  );

  return {
    title: { absolute: dict.brand },
    description: dict.taglineSub,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { ...languages, "x-default": `${SITE_URL}/bg` },
    },
    openGraph: {
      locale: locale === "ua" ? "uk_UA" : locale,
      title: dict.brand,
      description: dict.tagline,
      url: `${SITE_URL}/${locale}`,
      images: [{ url: "/brand/og-default.png" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <AppProviders>
      <OrganizationJsonLd />
      <Analytics />
      <div className="flex min-h-dvh flex-col" lang={locale === "ua" ? "uk" : locale}>
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <MessengerDock dict={dict} />
        <CompareBar locale={locale} dict={dict} />
        <CookieBanner locale={locale} dict={dict} />
      </div>
    </AppProviders>
  );
}
