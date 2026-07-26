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
      en: "The photos matched what I saw in person. I wrote on WhatsApp — they replied quickly, no pressure.",
      bg: "Снимките съвпадаха с това, което видях на място. Писах във WhatsApp — отговориха бързо, без натиск.",
      ru: "Фото реальные, без сюрпризов при просмотре. Написала в WhatsApp — ответили быстро, без давления.",
      ua: "Фото справжні, без сюрпризів на перегляді. Написала в WhatsApp — відповіли швидко, без тиску.",
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
      en: "They did the photos and a short video themselves — I didn’t pay for shooting separately. Then they handled the chat with people who were interested.",
      bg: "Направиха снимките и кратко видео сами — не платих отделно за заснемане. После водеха чата с интересуващите се.",
      ru: "Сделали фото и короткое видео сами, я за съёмку отдельно не платил. Потом вели переписку с интересующимися.",
      ua: "Зробили фото й коротке відео самі — за зйомку окремо не платив. Потім вели переписку з тими, хто цікавився.",
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
      en: "I needed a furnished place long-term — within a week we found an option and booked the viewing right in chat.",
      bg: "Търсех обзаведен имот за дълго — за седмица намерихме вариант и уговорихме оглед направо в чата.",
      ru: "Искала надолго с мебелью — за неделю нашли вариант и согласовали показ прямо в чате.",
      ua: "Шукала надовго з меблями — за тиждень знайшли варіант і узгодили показ прямо в чаті.",
    },
  },
];
