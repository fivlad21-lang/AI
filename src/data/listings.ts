import type { Locale } from "@/i18n/config";
import type { LocationId } from "@/data/locations";

export type Deal = "sale" | "rent";
export type PropertyType = "apartment" | "house" | "villa" | "studio";
export type ListingStatus = "published" | "reserved" | "sold" | "draft";

export type Listing = {
  id: string;
  slug: string;
  demo: boolean;
  status: ListingStatus;
  deal: Deal;
  type: PropertyType;
  location: LocationId;
  /** Approximate public pin (area/complex), not exact entrance */
  lat: number;
  lng: number;
  addressPublic?: Record<Locale, string>;
  priceEur: number;
  pricePeriod?: "month";
  rooms: number | "studio";
  areaM2: number;
  floor?: number;
  floorsTotal?: number;
  act?: "14" | "15" | "16";
  features: string[];
  beachMinutes?: number;
  cover: string;
  gallery: string[];
  video?: boolean;
  videoUrl?: string;
  publishedAt: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const img = {
  sea1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  sea2: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  apt1: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  apt2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  apt3: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
  villa1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  villa2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  studio1: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  coast1: "https://images.unsplash.com/photo-1559592413-7e76a261ccc4?w=1200&q=80",
  coast2: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
};

export const listings: Listing[] = [
  {
    id: "1",
    slug: "sea-view-apartment-sunny-beach",
    demo: true,
    status: "published",
    deal: "sale",
    type: "apartment",
    location: "sunny-beach",
    lat: 42.6962,
    lng: 27.7145,
    addressPublic: {
      en: "Sunny Beach, sea-view complex",
      bg: "Слънчев бряг, комплекс с морски изглед",
      ru: "Солнечный Берег, комплекс с видом на море",
      ua: "Сонячний Берег, комплекс з видом на море",
    },
    priceEur: 118000,
    rooms: 2,
    areaM2: 78,
    floor: 5,
    floorsTotal: 8,
    act: "16",
    features: ["sea-view", "parking", "furnished", "elevator"],
    beachMinutes: 7,
    cover: img.apt1,
    gallery: [img.apt1, img.coast1, img.apt2, img.sea2],
    video: false,
    publishedAt: "2026-07-01",
    title: {
      en: "2-bed apartment with sea view",
      bg: "Двустаен апартамент с морски изглед",
      ru: "Двухкомнатная квартира с видом на море",
      ua: "Двокімнатна квартира з видом на море",
    },
    description: {
      en: "Bright apartment near the beach — ready to view with Nomore.",
      bg: "Светъл апартамент близо до плажа — готов за оглед с Nomore.",
      ru: "Светлая квартира у пляжа — готова к просмотру с Nomore.",
      ua: "Світла квартира біля пляжу — готова до огляду з Nomore.",
    },
  },
  {
    id: "2",
    slug: "modern-studio-burgas-center",
    demo: true,
    status: "published",
    deal: "sale",
    type: "studio",
    location: "burgas",
    lat: 42.5061,
    lng: 27.4672,
    addressPublic: {
      en: "Burgas center",
      bg: "Център на Бургас",
      ru: "Центр Бургаса",
      ua: "Центр Бургаса",
    },
    priceEur: 69000,
    rooms: "studio",
    areaM2: 42,
    floor: 3,
    floorsTotal: 6,
    act: "16",
    features: ["furnished", "elevator"],
    beachMinutes: 18,
    cover: img.studio1,
    gallery: [img.studio1, img.apt3, img.apt2],
    publishedAt: "2026-07-05",
    title: {
      en: "Modern studio in Burgas center",
      bg: "Модерно студио в центъра на Бургас",
      ru: "Современная студия в центре Бургаса",
      ua: "Сучасна студія в центрі Бургаса",
    },
    description: {
      en: "Compact city living in a walkable center.",
      bg: "Компактен градски живот в пешеходен център.",
      ru: "Компактная городская жизнь в пешей доступности центра.",
      ua: "Компактне міське життя в пішій доступності центру.",
    },
  },
  {
    id: "3",
    slug: "villa-garden-sozopol",
    demo: true,
    status: "published",
    deal: "sale",
    type: "villa",
    location: "sozopol",
    lat: 42.4195,
    lng: 27.698,
    addressPublic: {
      en: "Near Sozopol old town",
      bg: "Край стария Созопол",
      ru: "Рядом со старым Созополем",
      ua: "Поруч зі старим Созополем",
    },
    priceEur: 265000,
    rooms: 4,
    areaM2: 186,
    act: "16",
    features: ["sea-view", "parking", "pool"],
    beachMinutes: 12,
    cover: img.villa1,
    gallery: [img.villa1, img.villa2, img.coast2, img.sea1],
    video: true,
    publishedAt: "2026-06-20",
    title: {
      en: "Family villa with garden near Sozopol",
      bg: "Семейна вила с градина край Созопол",
      ru: "Семейная вилла с садом у Созополя",
      ua: "Сімейна вілла з садом біля Созополя",
    },
    description: {
      en: "Quiet street, outdoor space, short drive to the old town.",
      bg: "Тиха улица, двор, близо до стария град.",
      ru: "Тихая улица, двор, рядом со старым городом.",
      ua: "Тиха вулиця, подвір’я, поруч зі старим містом.",
    },
  },
  {
    id: "4",
    slug: "rent-apartment-nesebar",
    demo: true,
    status: "published",
    deal: "rent",
    type: "apartment",
    location: "nesebar",
    lat: 42.6578,
    lng: 27.7285,
    addressPublic: {
      en: "Nesebar, residential area",
      bg: "Несебър, жилищен район",
      ru: "Несебр, жилой район",
      ua: "Несебр, житловий район",
    },
    priceEur: 650,
    pricePeriod: "month",
    rooms: 2,
    areaM2: 70,
    floor: 2,
    floorsTotal: 5,
    features: ["furnished", "parking"],
    beachMinutes: 9,
    cover: img.apt2,
    gallery: [img.apt2, img.apt1, img.coast1],
    publishedAt: "2026-07-10",
    title: {
      en: "Furnished 2-bed for long-term rent",
      bg: "Обзаведен двустаен под дългосрочен наем",
      ru: "Меблированная двушка в долгосрочную аренду",
      ua: "Мебльована двушка в довгострокову оренду",
    },
    description: {
      en: "Ready to move in for long-term living.",
      bg: "Готов за нанасяне за дългосрочен живот.",
      ru: "Готово к заселению для долгосрочного проживания.",
      ua: "Готово до заселення для довгострокового проживання.",
    },
  },
  {
    id: "5",
    slug: "penthouse-sveti-vlas",
    demo: true,
    status: "published",
    deal: "sale",
    type: "apartment",
    location: "sveti-vlas",
    lat: 42.7138,
    lng: 27.761,
    addressPublic: {
      en: "Sveti Vlas, hillside complex",
      bg: "Свети Влас, комплекс на хълма",
      ru: "Святой Влас, комплекс на склоне",
      ua: "Святий Влас, комплекс на схилі",
    },
    priceEur: 189000,
    rooms: 3,
    areaM2: 112,
    floor: 7,
    floorsTotal: 7,
    act: "16",
    features: ["sea-view", "parking", "elevator", "furnished"],
    beachMinutes: 5,
    cover: img.sea1,
    gallery: [img.sea1, img.apt3, img.coast2, img.villa2],
    video: true,
    publishedAt: "2026-06-28",
    title: {
      en: "Top-floor apartment in Sveti Vlas",
      bg: "Апартамент на последен етаж в Свети Влас",
      ru: "Квартира на последнем этаже в Святом Власе",
      ua: "Квартира на останньому поверсі у Святому Власі",
    },
    description: {
      en: "Open view in a calm coastal complex.",
      bg: "Отворена гледка в спокоен крайбрежен комплекс.",
      ru: "Открытый вид в спокойном прибрежном комплексе.",
      ua: "Відкритий вид у спокійному прибережному комплексі.",
    },
  },
  {
    id: "6",
    slug: "rent-studio-pomorie",
    demo: true,
    status: "published",
    deal: "rent",
    type: "studio",
    location: "pomorie",
    lat: 42.5595,
    lng: 27.6435,
    addressPublic: {
      en: "Pomorie, near the seafront",
      bg: "Поморие, близо до крайбрежието",
      ru: "Поморие, рядом с набережной",
      ua: "Поморіє, біля набережної",
    },
    priceEur: 420,
    pricePeriod: "month",
    rooms: "studio",
    areaM2: 38,
    floor: 1,
    floorsTotal: 4,
    features: ["furnished"],
    beachMinutes: 6,
    cover: img.apt3,
    gallery: [img.apt3, img.studio1, img.coast1],
    publishedAt: "2026-07-12",
    title: {
      en: "Cozy studio for rent in Pomorie",
      bg: "Уютно студио под наем в Поморие",
      ru: "Уютная студия в аренду в Поморие",
      ua: "Затишна студія в оренду в Поморіє",
    },
    description: {
      en: "Simple, clean, close to the seafront.",
      bg: "Просто, чисто, близо до морето.",
      ru: "Просто, чисто, рядом с набережной.",
      ua: "Просто, чисто, біля набережної.",
    },
  },
  {
    id: "7",
    slug: "draft-reserved-example",
    demo: true,
    status: "reserved",
    deal: "sale",
    type: "apartment",
    location: "ravda",
    lat: 42.6492,
    lng: 27.678,
    addressPublic: {
      en: "Ravda",
      bg: "Равда",
      ru: "Равда",
      ua: "Равда",
    },
    priceEur: 99000,
    rooms: 2,
    areaM2: 68,
    features: ["parking"],
    beachMinutes: 4,
    cover: img.apt2,
    gallery: [img.apt2],
    publishedAt: "2026-05-01",
    title: {
      en: "Apartment in Ravda (reserved)",
      bg: "Апартамент в Равда (резервиран)",
      ru: "Квартира в Равде (резерв)",
      ua: "Квартира в Равді (резерв)",
    },
    description: {
      en: "Currently reserved — not shown in the public catalog.",
      bg: "В момента е резервиран — не се показва в каталога.",
      ru: "Сейчас в резерве — не показывается в каталоге.",
      ua: "Зараз у резерві — не показується в каталозі.",
    },
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function getPublishedListings() {
  return listings.filter((l) => l.status === "published");
}

export type SortKey = "new" | "price-asc" | "price-desc" | "area-desc";

export function filterListings(opts: {
  deal?: Deal;
  location?: string;
  type?: string;
  rooms?: string;
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  features?: string[];
  sort?: SortKey;
  includeUnpublished?: boolean;
}) {
  let items = (opts.includeUnpublished ? listings : getPublishedListings()).filter(
    (l) => {
      if (opts.deal && l.deal !== opts.deal) return false;
      if (opts.location && opts.location !== "all" && l.location !== opts.location)
        return false;
      if (opts.type && opts.type !== "all" && l.type !== opts.type) return false;
      if (opts.rooms && opts.rooms !== "all") {
        if (opts.rooms === "studio" && l.rooms !== "studio") return false;
        if (opts.rooms === "4plus") {
          if (typeof l.rooms !== "number" || l.rooms < 4) return false;
        } else if (opts.rooms !== "studio") {
          if (String(l.rooms) !== opts.rooms) return false;
        }
      }
      if (opts.priceMin != null && l.priceEur < opts.priceMin) return false;
      if (opts.priceMax != null && l.priceEur > opts.priceMax) return false;
      if (opts.areaMin != null && l.areaM2 < opts.areaMin) return false;
      if (opts.areaMax != null && l.areaM2 > opts.areaMax) return false;
      if (opts.features?.length) {
        if (!opts.features.every((f) => l.features.includes(f))) return false;
      }
      return true;
    },
  );

  const sort = opts.sort || "new";
  items = [...items].sort((a, b) => {
    if (sort === "price-asc") return a.priceEur - b.priceEur;
    if (sort === "price-desc") return b.priceEur - a.priceEur;
    if (sort === "area-desc") return b.areaM2 - a.areaM2;
    return b.publishedAt.localeCompare(a.publishedAt);
  });

  return items;
}
