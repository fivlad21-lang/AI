export const WHATSAPP_E164 = "380933851804";
export const WHATSAPP_DISPLAY = "+380 93 385 18 04";

export const VIBER_E164 = "4915140166765";
export const VIBER_DISPLAY = "+49 151 40166765";

export const BRAND = "Nomore Real Estate";
export const DOMAIN = "nomore.estate";

/** Public Telegram username (without @) */
export const TELEGRAM_USERNAME: string | null = "notany";

/**
 * Public Instagram profile URL. Set when ready, e.g. https://www.instagram.com/yourhandle/
 * When null, the home author block hides the Instagram button.
 */
export const INSTAGRAM_URL: string | null = null;

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export function telegramUrl(text?: string) {
  if (!TELEGRAM_USERNAME) return null;
  const base = `https://t.me/${TELEGRAM_USERNAME}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function instagramUrl() {
  return INSTAGRAM_URL;
}

/** Opens Viber chat with the business number (mobile / Viber desktop). */
export function viberUrl() {
  return `viber://chat?number=%2B${VIBER_E164}`;
}
