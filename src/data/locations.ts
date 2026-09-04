import type { Locale } from "@/i18n/config";

export type LocationId =
  | "burgas"
  | "sunny-beach"
  | "nesebar"
  | "ravda"
  | "pomorie"
  | "sozopol"
  | "sveti-vlas";

export type Location = {
  id: LocationId;
  lat: number;
  lng: number;
  label: Record<Locale, string>;
  /** Short SEO/UX intro under catalog title when filtered */
  intro: Record<Locale, string>;
};

export const locations: Location[] = [
  {
    id: "burgas",
    lat: 42.5048,
    lng: 27.4626,
    label: { bg: "Бургас", ru: "Бургас", ua: "Бургас", en: "Burgas" },
    intro: {
      en: "City living by the Black Sea — apartments and houses with year-round services, airport access, and calm winter demand.",
      bg: "Градски живот край Черно море — апартаменти и къщи с целогодишни услуги, близост до летището и стабилно търсене през зимата.",
      ru: "Городская жизнь у Чёрного моря — квартиры и дома с круглогодичной инфраструктурой, аэропортом и спокойным зимним спросом.",
      ua: "Міське життя біля Чорного моря — квартири й будинки з цілорічною інфраструктурою, аеропортом і спокійним зимовим попитом.",
    },
  },
  {
    id: "sunny-beach",
    lat: 42.695,
    lng: 27.712,
    label: {
      bg: "Слънчев бряг",
      ru: "Солнечный Берег",
      ua: "Сонячний Берег",
      en: "Sunny Beach",
    },
    intro: {
      en: "Resort complexes, sea-view stock, and strong summer rental interest — check act, fees, and real beach minutes.",
      bg: "Курортни комплекси, морски изглед и силен летен интерес за наем — проверявай акт, такси и реални минути до плажа.",
      ru: "Курортные комплексы, вид на море и сильный летний спрос на аренду — проверяйте акт, взносы и реальные минуты до пляжа.",
      ua: "Курортні комплекси, вид на море і сильний літній попит на оренду — перевіряйте акт, внески й реальні хвилини до пляжу.",
    },
  },
  {
    id: "nesebar",
    lat: 42.659,
    lng: 27.735,
    label: { bg: "Несебър", ru: "Несебр", ua: "Несебр", en: "Nesebar" },
    intro: {
      en: "Old town charm plus newer complexes nearby — popular with buyers who want sea walks without pure party-resort noise.",
      bg: "Обаянието на стария град плюс по-нови комплекси наблизо — за купувачи, които искат море без чистия курортен шум.",
      ru: "Обаяние старого города плюс новые комплексы рядом — для тех, кто хочет море без чистого курортного шума.",
      ua: "Чарівність старого міста плюс новіші комплекси поруч — для тих, хто хоче море без суто курортного шуму.",
    },
  },
  {
    id: "ravda",
    lat: 42.648,
    lng: 27.675,
    label: { bg: "Равда", ru: "Равда", ua: "Равда", en: "Ravda" },
    intro: {
      en: "Quieter neighbour of Sunny Beach — often better value per m² with short drives to bigger beaches and shops.",
      bg: "По-тихото съседство на Слънчев бряг — често по-добра цена на m² с кратък път до големите плажове и магазини.",
      ru: "Более тихое соседство Солнечного Берега — часто лучше цена за m² и близко до больших пляжей и магазинов.",
      ua: "Тихіший сусід Сонячного Берега — часто краща ціна за m² і близько до великих пляжів і магазинів.",
    },
  },
  {
    id: "pomorie",
    lat: 42.558,
    lng: 27.641,
    label: { bg: "Поморие", ru: "Поморие", ua: "Поморіє", en: "Pomorie" },
    intro: {
      en: "Salt lakes, spa vibe, and a mix of town flats and coastal stock — solid for longer stays and rentals.",
      bg: "Солени езера, спа усещане и микс от градски апартаменти и крайбрежни имоти — добре за по-дълъг престой и наем.",
      ru: "Солёные озёра, спа-настроение и микс городских квартир и береговых объектов — удобно для долгого проживания и аренды.",
      ua: "Солоні озера, спа-настрій і мікс міських квартир та берегових об’єктів — зручно для довшого проживання й оренди.",
    },
  },
  {
    id: "sozopol",
    lat: 42.417,
    lng: 27.695,
    label: { bg: "Созопол", ru: "Созополь", ua: "Созополь", en: "Sozopol" },
    intro: {
      en: "Historic peninsula and calmer new builds inland — villas and apartments for buyers who prioritise character.",
      bg: "Исторически полуостров и по-спокойни нови строежи навътре — вили и апартаменти за купувачи, които търсят характер.",
      ru: "Исторический полуостров и более спокойные новостройки вглубь — виллы и квартиры для тех, кто ценит характер места.",
      ua: "Історичний півострів і спокійніші новобудови вглиб — вілли й квартири для тих, хто цінує характер місця.",
    },
  },
  {
    id: "sveti-vlas",
    lat: 42.712,
    lng: 27.758,
    label: {
      bg: "Свети Влас",
      ru: "Святой Влас",
      ua: "Святий Влас",
      en: "Sveti Vlas",
    },
    intro: {
      en: "Hillside sea views and marina lifestyle — often pricier, with strong appeal for seasonal and lifestyle buyers.",
      bg: "Морски изгледи от хълма и живот около марината — често по-скъпо, силен интерес от сезонни и lifestyle купувачи.",
      ru: "Вид на море с холма и жизнь у марины — часто дороже, сильный интерес сезонных и lifestyle-покупателей.",
      ua: "Вид на море з пагорба і життя біля марини — часто дорожче, сильний інтерес сезонних і lifestyle-покупців.",
    },
  },
];

export function getLocation(id: string) {
  return locations.find((l) => l.id === id);
}
