import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

export function localeAlternates(path = "") {
  const suffix = path ? `/${path.replace(/^\//, "")}` : "";
  const languages = Object.fromEntries(
    locales.map((l) => [l === "ua" ? "uk" : l, `${SITE_URL}/${l}${suffix}`]),
  );
  return {
    languages: { ...languages, "x-default": `${SITE_URL}/bg${suffix}` },
  };
}

export function pageMeta(
  locale: Locale,
  opts: {
    title: string;
    description?: string;
    path?: string;
    /** Absolute or site-relative OG image */
    image?: string;
  },
): Metadata {
  const dict = getDictionary(locale);
  const path = opts.path ?? "";
  const url = `${SITE_URL}/${locale}${path ? `/${path.replace(/^\//, "")}` : ""}`;
  const description = opts.description ?? dict.taglineSub;
  const image = opts.image ?? "/brand/og-default.png";

  return {
    title: opts.title,
    description,
    alternates: {
      canonical: url,
      ...localeAlternates(path),
    },
    openGraph: {
      locale: locale === "ua" ? "uk_UA" : locale,
      title: `${opts.title} · Nomore Real Estate`,
      description,
      url,
      images: [{ url: image }],
    },
  };
}

/** Localized SEO titles for main routes */
export function routeTitles(locale: Locale) {
  const map = {
    en: {
      home: "Burgas & Sunny Beach real estate",
      buy: "Buy property in Burgas & on the coast",
      rent: "Rent in Burgas & on the coast",
      sell: "Sell with Nomore",
      about: "About Nomore",
      contacts: "Contacts",
      guide: "Coast guide & FAQ",
      privacy: "Privacy",
      blog: "Journal",
      favorites: "Saved homes",
      compare: "Compare homes",
    },
    bg: {
      home: "Недвижими имоти в Бургас и по крайбрежието",
      buy: "Купи имот в Бургас и по крайбрежието",
      rent: "Наем в Бургас и по крайбрежието",
      sell: "Продай с Nomore",
      about: "За Nomore",
      contacts: "Контакти",
      guide: "Гид и FAQ",
      privacy: "Поверителност",
      blog: "Журнал",
      favorites: "Запазени",
      compare: "Сравнение",
    },
    ru: {
      home: "Недвижимость в Бургасе и на побережье",
      buy: "Купить недвижимость в Бургасе и на побережье",
      rent: "Аренда в Бургасе и на побережье",
      sell: "Продать с Nomore",
      about: "О Nomore",
      contacts: "Контакты",
      guide: "Гид и FAQ",
      privacy: "Конфиденциальность",
      blog: "Журнал",
      favorites: "Избранное",
      compare: "Сравнение",
    },
    ua: {
      home: "Нерухомість у Бургасі та на узбережжі",
      buy: "Купити нерухомість у Бургасі та на узбережжі",
      rent: "Оренда в Бургасі та на узбережжі",
      sell: "Продати з Nomore",
      about: "Про Nomore",
      contacts: "Контакти",
      guide: "Гід і FAQ",
      privacy: "Конфіденційність",
      blog: "Журнал",
      favorites: "Збережене",
      compare: "Порівняння",
    },
  } as const;
  return map[locale];
}
