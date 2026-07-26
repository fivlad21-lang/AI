export const locales = ["bg", "ru", "ua", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "bg";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
