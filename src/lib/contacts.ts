export const WHATSAPP_E164 = "380933851804";
export const WHATSAPP_DISPLAY = "+380 93 385 18 04";
export const BRAND = "Nomore Real Estate";
export const DOMAIN = "nomore.estate";

/** Public Telegram username (without @) */
export const TELEGRAM_USERNAME: string | null = "notany";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export function telegramUrl(text?: string) {
  if (!TELEGRAM_USERNAME) return null;
  const base = `https://t.me/${TELEGRAM_USERNAME}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
