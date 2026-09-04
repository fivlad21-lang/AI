import type { Locale } from "@/i18n/config";

export type ServiceId = "consult" | "audit";

export type ServiceDef = {
  id: ServiceId;
  kind: "CONSULT" | "AUDIT";
  priceFromEur: number;
  /** Needs listing/complex URL field */
  needsLink: boolean;
};

export const services: ServiceDef[] = [
  { id: "consult", kind: "CONSULT", priceFromEur: 49, needsLink: false },
  { id: "audit", kind: "AUDIT", priceFromEur: 79, needsLink: true },
];

export function formatFromPrice(locale: Locale, eur: number) {
  const n = eur.toLocaleString(locale === "ua" ? "uk" : locale);
  switch (locale) {
    case "bg":
      return `от €${n}`;
    case "ru":
      return `от €${n}`;
    case "ua":
      return `від €${n}`;
    default:
      return `from €${n}`;
  }
}
