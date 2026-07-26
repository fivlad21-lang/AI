export const WHATSAPP_E164 = "380933851804";
export const WHATSAPP_DISPLAY = "+380 93 385 18 04";
export const BRAND = "Nomore Real Estate";
export const DOMAIN = "nomore.estate";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
