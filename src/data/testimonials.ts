import type { Locale } from "@/i18n/config";

export type Testimonial = {
  id: string;
  name: string;
  role: Record<Locale, string>;
  quote: Record<Locale, string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Olena K.",
    role: {
      en: "Buyer · Sunny Beach",
      bg: "Купувач · Слънчев бряг",
      ru: "Покупатель · Солнечный Берег",
      ua: "Покупець · Сонячний Берег",
    },
    quote: {
      en: "Clear photos, fast WhatsApp replies, no pressure. Felt modern — not like old classifieds.",
      bg: "Ясни снимки, бърз WhatsApp, без натиск. Модерно — не като стари обяви.",
      ru: "Понятные фото, быстрый WhatsApp, без давления. Современно — не как старые доски объявлений.",
      ua: "Зрозумілі фото, швидкий WhatsApp, без тиску. Сучасно — не як старі дошки оголошень.",
    },
  },
  {
    id: "2",
    name: "Ivan M.",
    role: {
      en: "Owner · Burgas",
      bg: "Собственик · Бургас",
      ru: "Собственник · Бургас",
      ua: "Власник · Бургас",
    },
    quote: {
      en: "They shot the apartment properly and posted it. I didn’t pay for media up front — commission on the deal.",
      bg: "Заснеха апартамента както трябва и го пуснаха. Не платих медио предварително — комисиона от сделката.",
      ru: "Сняли квартиру нормально и опубликовали. За медиа заранее не платил — комиссия со сделки.",
      ua: "Зняли квартиру нормально і опублікували. За медіа наперед не платив — комісія з угоди.",
    },
  },
  {
    id: "3",
    name: "Maria S.",
    role: {
      en: "Long-term rent · Nesebar",
      bg: "Дългосрочен наем · Несебър",
      ru: "Долгосрочная аренда · Несебр",
      ua: "Довгострокова оренда · Несебр",
    },
    quote: {
      en: "Found a furnished place in a week. Viewing was booked in chat — simple.",
      bg: "Намерих обзаведен имот за седмица. Огледът се уговори в чат — просто.",
      ru: "Нашла меблированное за неделю. Показ согласовали в чате — просто.",
      ua: "Знайшла мебльоване за тиждень. Показ узгодили в чаті — просто.",
    },
  },
];
