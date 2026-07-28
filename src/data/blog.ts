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
  {
    slug: "act-16-coast-checklist",
    date: "2026-07-22",
    title: {
      en: "Act 16 on the coast: a buyer checklist",
      bg: "Акт 16 на брега: чеклист за купувача",
      ru: "Акт 16 на побережье: чеклист покупателя",
      ua: "Акт 16 на узбережжі: чекліст покупця",
    },
    excerpt: {
      en: "What Act 14/15/16 usually means in practice — and what to ask before you wire money.",
      bg: "Какво обикновено значат Акт 14/15/16 на практика — и какво да питаш преди превод.",
      ru: "Что обычно значат Акт 14/15/16 на практике — и что спросить до перевода денег.",
      ua: "Що зазвичай означають Акт 14/15/16 на практиці — і що запитати до переказу грошей.",
    },
    body: {
      en: "Act stage is not the only risk, but it is the first filter. Ask for the current act, complex rules, and unpaid fees. Prefer walk-through with a local contact. Nomore tags act on sale listings when known — still verify with your lawyer. WhatsApp us the listing link and we outline next checks.",
      bg: "Актът не е единственият риск, но е първият филтър. Питай за текущия акт, правилата на комплекса и неплатени такси. За предпочитане оглед с местен контакт. Nomore отбелязва акта при продажби, когато знаем — пак провери с адвокат. Изпрати линка във WhatsApp и ще кажем следващите проверки.",
      ru: "Стадия акта — не единственный риск, но первый фильтр. Спросите текущий акт, правила комплекса и долги по взносам. Лучше осмотр с местным контактом. Nomore отмечает акт на продажах, когда знаем — всё равно проверьте с юристом. Пришлите ссылку в WhatsApp — наметим следующие шаги.",
      ua: "Стадія акта — не єдиний ризик, але перший фільтр. Запитайте поточний акт, правила комплексу й борги за внесками. Краще огляд із місцевим контактом. Nomore позначає акт на продажах, коли знаємо — усе одно перевірте з юристом. Надішліть лінк у WhatsApp — окреслимо наступні кроки.",
    },
  },
  {
    slug: "rent-burgas-season",
    date: "2026-07-24",
    title: {
      en: "Renting in Burgas vs the resorts: season logic",
      bg: "Наем в Бургас срещу курортите: логика на сезона",
      ru: "Аренда в Бургасе vs курорты: логика сезона",
      ua: "Оренда в Бургасі vs курорти: логіка сезону",
    },
    excerpt: {
      en: "City flats stay useful year-round; resort stock peaks in summer — match budget to how you will use the home.",
      bg: "Градските апартаменти работят целогодишно; курортните — пик през лятото. Подравни бюджета с начина на ползване.",
      ru: "Городские квартиры полезны круглый год; курортные — пик летом. Сверьте бюджет с тем, как будете жить.",
      ua: "Міські квартири корисні цілий рік; курортні — пік улітку. Звірте бюджет із тим, як будете жити.",
    },
    body: {
      en: "If you need school, work, or winter stays — start in Burgas. If you want beach weeks and rental upside — look at Sunny Beach, Ravda, Pomorie with clear beach minutes. Nomore filters buy vs rent separately; write your months of stay on WhatsApp and we shortlist.",
      bg: "Ако трябва училище, работа или зима — започни от Бургас. Ако искаш плажни седмици и наемен потенциал — гледай Слънчев бряг, Равда, Поморие с ясни минути до плажа. Nomore разделя покупка и наем; напиши месеците на престой във WhatsApp — правим подборка.",
      ru: "Если нужны школа, работа или зима — начните с Бургаса. Если пляжные недели и арендный потенциал — смотрите Солнечный Берег, Равду, Поморие с понятными минутами до пляжа. Nomore разделяет покупку и аренду; напишите месяцы проживания в WhatsApp — сделаем подборку.",
      ua: "Якщо потрібні школа, робота чи зима — почніть з Бургаса. Якщо пляжні тижні й орендний потенціал — дивіться Сонячний Берег, Равду, Поморіє з зрозумілими хвилинами до пляжу. Nomore розділяє купівлю й оренду; напишіть місяці проживання в WhatsApp — зробимо підбірку.",
    },
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
