export type Currency = "EUR" | "BGN";

/** Fixed EUR→BGN rate (Bulgarian lev peg). */
export const EUR_TO_BGN = 1.95583;

export function toDisplayAmount(eur: number, currency: Currency) {
  return currency === "BGN" ? eur * EUR_TO_BGN : eur;
}

export function formatMoney(eur: number, currency: Currency, locale = "en") {
  const amount = toDisplayAmount(eur, currency);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
