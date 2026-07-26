import type { Locale } from "@/i18n/config";

export type FaqItem = {
  id: string;
  q: Record<Locale, string>;
  a: Record<Locale, string>;
};

export const faqItems: FaqItem[] = [
  {
    id: "areas",
    q: {
      en: "Where do you work?",
      bg: "Къде работите?",
      ru: "Где вы работаете?",
      ua: "Де ви працюєте?",
    },
    a: {
      en: "Burgas region and the coast: Sunny Beach, Nesebar, Ravda, Pomorie, Sozopol, Sveti Vlas.",
      bg: "Бургас и крайбрежието: Слънчев бряг, Несебър, Равда, Поморие, Созопол, Свети Влас.",
      ru: "Бургас и побережье: Солнечный Берег, Несебр, Равда, Поморие, Созополь, Святой Влас.",
      ua: "Бургас і узбережжя: Сонячний Берег, Несебр, Равда, Поморіє, Созополь, Святий Влас.",
    },
  },
  {
    id: "shoot",
    q: {
      en: "Do owners pay for photo & video?",
      bg: "Собствениците плащат ли за фото и видео?",
      ru: "Собственники платят за фото и видео?",
      ua: "Власники платять за фото й відео?",
    },
    a: {
      en: "No separate shooting fee. We work on a commission from the deal (model B).",
      bg: "Без отделна такса за заснемане. Работим на комисиона от сделката (модел B).",
      ru: "Без отдельной платы за съёмку. Работаем за комиссию со сделки (модель B).",
      ua: "Без окремої плати за зйомку. Працюємо за комісією з угоди (модель B).",
    },
  },
  {
    id: "demo",
    q: {
      en: "Why are some listings marked Demo?",
      bg: "Защо някои обяви са Demo?",
      ru: "Почему часть объявлений Demo?",
      ua: "Чому частина оголошень Demo?",
    },
    a: {
      en: "They preview the product UX while we onboard real inventory. Real homes won’t have the Demo badge.",
      bg: "Показват UX на продукта, докато добавяме реални имоти. Реалните обяви няма да имат Demo.",
      ru: "Это превью продукта, пока подключаем реальные объекты. У реальных не будет бейджа Demo.",
      ua: "Це прев’ю продукту, поки підключаємо реальні об’єкти. У реальних не буде бейджа Demo.",
    },
  },
  {
    id: "langs",
    q: {
      en: "Which languages?",
      bg: "На кои езици?",
      ru: "На каких языках?",
      ua: "Якими мовами?",
    },
    a: {
      en: "Bulgarian, Russian, Ukrainian, English. Reply in WhatsApp in your language.",
      bg: "Български, руски, украински, английски. Във WhatsApp — на вашия език.",
      ru: "Болгарский, русский, украинский, английский. В WhatsApp — на вашем языке.",
      ua: "Болгарська, російська, українська, англійська. У WhatsApp — вашою мовою.",
    },
  },
  {
    id: "viewing",
    q: {
      en: "How do I book a viewing?",
      bg: "Как да заявя оглед?",
      ru: "Как записаться на показ?",
      ua: "Як записатися на показ?",
    },
    a: {
      en: "Open a listing → Request a viewing → pick a slot → we confirm on WhatsApp.",
      bg: "Отвори обява → Заяви оглед → избери слот → потвърждаваме във WhatsApp.",
      ru: "Откройте объект → Заявка на просмотр → слот → подтвердим в WhatsApp.",
      ua: "Відкрийте об’єкт → Заявка на перегляд → слот → підтвердимо в WhatsApp.",
    },
  },
  {
    id: "currency",
    q: {
      en: "EUR or BGN?",
      bg: "EUR или BGN?",
      ru: "EUR или BGN?",
      ua: "EUR чи BGN?",
    },
    a: {
      en: "Prices are stored in EUR. Toggle BGN with the fixed rate 1 EUR = 1.95583 BGN.",
      bg: "Цените са в EUR. Превключете BGN с фиксиран курс 1 EUR = 1.95583 BGN.",
      ru: "Цены в EUR. Переключатель BGN по курсу 1 EUR = 1.95583 BGN.",
      ua: "Ціни в EUR. Перемикач BGN за курсом 1 EUR = 1.95583 BGN.",
    },
  },
];
