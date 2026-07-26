import type { Locale } from "@/i18n/config";

export type BlogPost = {
  slug: string;
  date: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "buy-near-sunny-beach",
    date: "2026-07-15",
    title: {
      en: "Buying near Sunny Beach: what to check first",
      bg: "Покупка край Слънчев бряг: какво да провериш първо",
      ru: "Покупка у Солнечного Берега: что проверить первым",
      ua: "Купівля біля Сонячного Берега: що перевірити першим",
    },
    excerpt: {
      en: "Act, complex fees, seasonality, and distance to the beach — a short checklist.",
      bg: "Акт, такси на комплекса, сезонност и минути до плажа — кратък чеклист.",
      ru: "Акт, взносы комплекса, сезонность и минуты до пляжа — короткий чеклист.",
      ua: "Акт, внески комплексу, сезонність і хвилини до пляжу — короткий чекліст.",
    },
    body: {
      en: "Start with documents (act), then living costs of the complex, then real walking time to the sea — not marketing “sea view”. Nomore listings show beach minutes when known. Write us on WhatsApp with your budget and we filter noise.",
      bg: "Започни с документи (акт), после разходите на комплекса, после реалното време пеша до морето — не маркетингов „морски изглед“. В обявите Nomore показваме минути до плажа, когато знаем. Пиши във WhatsApp с бюджет — филтрираме шума.",
      ru: "Начните с документов (акт), затем взносы комплекса, затем реальное время до моря пешком — не маркетинговый «вид на море». В объявлениях Nomore указываем минуты до пляжа. Напишите в WhatsApp бюджет — отсеем шум.",
      ua: "Почніть із документів (акт), потім внески комплексу, потім реальний час пішки до моря — не маркетинговий «вид на море». В оголошеннях Nomore показуємо хвилини до пляжу. Напишіть у WhatsApp бюджет — відсіємо шум.",
    },
  },
  {
    slug: "sell-with-media",
    date: "2026-07-18",
    title: {
      en: "Why media-first selling works on the coast",
      bg: "Защо продажбата с добро медио работи на брега",
      ru: "Почему продажа с нормальным медиа работает на побережье",
      ua: "Чому продаж із нормальним медіа працює на узбережжі",
    },
    excerpt: {
      en: "Buyers decide from the phone. Clean photo + short video beats long text tables.",
      bg: "Купувачите решават от телефона. Чисто фото + кратко видео бие дълги таблици.",
      ru: "Покупатели решают с телефона. Чистое фото + короткое видео бьёт длинные таблицы.",
      ua: "Покупці вирішують з телефона. Чисте фото + коротке відео б’є довгі таблиці.",
    },
    body: {
      en: "On the coast, many buyers are remote. First impression is the gallery. Nomore shoots for free under model B and pushes to social — then handles WhatsApp leads. See /sell.",
      bg: "На брега много купувачи са отдалечени. Първото впечатление е галерията. Nomore заснема без отделна такса (модел B) и пуска в социалните мрежи — после обработва лидове във WhatsApp. Виж /sell.",
      ru: "На побережье многие покупатели удалённые. Первое впечатление — галерея. Nomore снимает без отдельной платы (модель B) и публикует в соцсетях — затем обрабатывает лиды в WhatsApp. Смотрите /sell.",
      ua: "На узбережжі багато покупців віддалені. Перше враження — галерея. Nomore знімає без окремої плати (модель B) і публікує в соцмережах — далі обробляє ліди в WhatsApp. Дивіться /sell.",
    },
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
