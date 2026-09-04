import type { Locale } from "@/i18n/config";
import type { Listing } from "@/data/listings";
import { SITE_URL } from "@/lib/site";

const hi: Record<Locale, string> = {
  en: "Hi! Nomore Real Estate",
  bg: "Здравейте! Nomore Real Estate",
  ru: "Здравствуйте! Nomore Real Estate",
  ua: "Вітаю! Nomore Real Estate",
};

export function waGeneric(locale: Locale) {
  return hi[locale];
}

export function waDock(locale: Locale) {
  const map: Record<Locale, string> = {
    en: "Hi! I'm writing from the Nomore site",
    bg: "Здравейте! Пиша от сайта Nomore",
    ru: "Здравствуйте! Пишу с сайта Nomore",
    ua: "Вітаю! Пишу з сайту Nomore",
  };
  return map[locale];
}

export function waFooter(locale: Locale) {
  const map: Record<Locale, string> = {
    en: "Hi from the Nomore footer",
    bg: "Здравейте — пиша от футъра на Nomore",
    ru: "Здравствуйте — пишу из подвала Nomore",
    ua: "Вітаю — пишу з футера Nomore",
  };
  return map[locale];
}

export function waContacts(locale: Locale) {
  const map: Record<Locale, string> = {
    en: "Hi! Contacts page — Nomore",
    bg: "Здравейте! Страница Контакти — Nomore",
    ru: "Здравствуйте! Страница Контакты — Nomore",
    ua: "Вітаю! Сторінка Контакти — Nomore",
  };
  return map[locale];
}

export function waGuide(locale: Locale) {
  const map: Record<Locale, string> = {
    en: "[FAQ] Question from the guide page",
    bg: "[FAQ] Въпрос от страницата Гид",
    ru: "[FAQ] Вопрос со страницы Гида",
    ua: "[FAQ] Питання зі сторінки Гіда",
  };
  return map[locale];
}

export function waCatalogHelp(locale: Locale, deal: "sale" | "rent") {
  const map: Record<Locale, string> = {
    en: `[${deal === "sale" ? "BUY" : "RENT"}] Need help finding a property`,
    bg: `[${deal === "sale" ? "BUY" : "RENT"}] Търся помощ с избор на имот`,
    ru: `[${deal === "sale" ? "BUY" : "RENT"}] Нужна помощь с подбором`,
    ua: `[${deal === "sale" ? "BUY" : "RENT"}] Потрібна допомога з підбором`,
  };
  return map[locale];
}

export function waSellInterest(locale: Locale) {
  const map: Record<Locale, string> = {
    en: "[SELL] Want to list my property with shooting",
    bg: "[SELL] Искам да пусна имот със заснемане",
    ru: "[SELL] Хочу сдать объект со съёмкой",
    ua: "[SELL] Хочу виставити об’єкт зі зйомкою",
  };
  return map[locale];
}

export function waListingView(locale: Locale, listing: Listing, pageUrl: string) {
  return `[VIEW] ${listing.title[locale]}\n${listing.priceEur} EUR\n${pageUrl}`;
}

export function waShortlist(
  locale: Locale,
  items: Listing[],
  kind: "favorites" | "compare",
) {
  const head =
    kind === "favorites"
      ? {
          en: "[SHORTLIST] Nomore favorites",
          bg: "[SHORTLIST] Запазени — Nomore",
          ru: "[SHORTLIST] Избранное — Nomore",
          ua: "[SHORTLIST] Збережене — Nomore",
        }
      : {
          en: "[COMPARE] Nomore shortlist",
          bg: "[COMPARE] Сравнение — Nomore",
          ru: "[COMPARE] Сравнение — Nomore",
          ua: "[COMPARE] Порівняння — Nomore",
        };
  return [
    head[locale],
    ...items.map(
      (l) =>
        `- ${l.title[locale]} · ${l.priceEur} EUR · ${SITE_URL}/${locale}/listings/${l.slug}`,
    ),
    items.length ? "" : "(empty)",
  ].join("\n");
}
