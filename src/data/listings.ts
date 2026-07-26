import type { Locale } from "@/i18n/config";
import type { LocationId } from "@/data/locations";

export type Deal = "sale" | "rent";
export type PropertyType = "apartment" | "house" | "villa" | "studio";

export type Listing = {
  id: string;
  slug: string;
  demo: true;
  deal: Deal;
  type: PropertyType;
  location: LocationId;
  priceEur: number;
  pricePeriod?: "month";
  rooms: number | "studio";
  areaM2: number;
  floor?: number;
  floorsTotal?: number;
  act?: "14" | "15" | "16";
  features: string[];
  cover: string;
  gallery: string[];
  video?: boolean;
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
    deal: "sale",
    type: "apartment",
    location: "sunny-beach",
    priceEur: 118000,
    rooms: 2,
    areaM2: 78,
    floor: 5,
    floorsTotal: 8,
    act: "16",
    features: ["sea-view", "parking", "furnished", "elevator"],
    cover: img.apt1,
    gallery: [img.apt1, img.coast1, img.apt2, img.sea2],
    video: true,
    title: {
      en: "2-bed apartment with sea view",
      bg: "Двустаен апартамент с морски изглед",
      ru: "Двухкомнатная квартира с видом на море",
      ua: "Двокімнатна квартира з видом на море",
    },
    description: {
      en: "Bright apartment near the beach. Demo listing for Nomore catalog preview.",
      bg: "Светъл апартамент близо до плажа. Демо обява за преглед на каталога Nomore.",
      ru: "Светлая квартира у пляжа. Демо-объявление для превью каталога Nomore.",
      ua: "Світла квартира біля пляжу. Демо-оголошення для прев’ю каталогу Nomore.",
    },
  },
  {
    id: "2",
    slug: "modern-studio-burgas-center",
    demo: true,
    deal: "sale",
    type: "studio",
    location: "burgas",
    priceEur: 69000,
    rooms: "studio",
    areaM2: 42,
    floor: 3,
    floorsTotal: 6,
    act: "16",
    features: ["furnished", "elevator"],
    cover: img.studio1,
    gallery: [img.studio1, img.apt3, img.apt2],
    title: {
      en: "Modern studio in Burgas center",
      bg: "Модерно студио в центъра на Бургас",
      ru: "Современная студия в центре Бургаса",
      ua: "Сучасна студія в центрі Бургаса",
    },
    description: {
      en: "Compact city living, walkable center. Demo listing.",
      bg: "Компактен градски живот, пешеходен център. Демо обява.",
      ru: "Компактная городская жизнь, центр пешком. Демо.",
      ua: "Компактне міське життя, центр пішки. Демо.",
    },
  },
  {
    id: "3",
    slug: "villa-garden-sozopol",
    demo: true,
    deal: "sale",
    type: "villa",
    location: "sozopol",
    priceEur: 265000,
    rooms: 4,
    areaM2: 186,
    act: "16",
    features: ["sea-view", "parking", "pool"],
    cover: img.villa1,
    gallery: [img.villa1, img.villa2, img.coast2, img.sea1],
    video: true,
    title: {
      en: "Family villa with garden near Sozopol",
      bg: "Семейна вила с градина край Созопол",
      ru: "Семейная вилла с садом у Созополя",
      ua: "Сімейна вілла з садом біля Созополя",
    },
    description: {
      en: "Quiet street, outdoor space, short drive to the old town. Demo listing.",
      bg: "Тиха улица, двор, близо до стария град. Демо обява.",
      ru: "Тихая улица, двор, рядом со старым городом. Демо.",
      ua: "Тиха вулиця, подвір’я, поруч зі старим містом. Демо.",
    },
  },
  {
    id: "4",
    slug: "rent-apartment-nesebar",
    demo: true,
    deal: "rent",
    type: "apartment",
    location: "nesebar",
    priceEur: 650,
    pricePeriod: "month",
    rooms: 2,
    areaM2: 70,
    floor: 2,
    floorsTotal: 5,
    features: ["furnished", "parking"],
    cover: img.apt2,
    gallery: [img.apt2, img.apt1, img.coast1],
    title: {
      en: "Furnished 2-bed for long-term rent",
      bg: "Обзаведен двустаен под дългосрочен наем",
      ru: "Меблированная двушка в долгосрочную аренду",
      ua: "Мебльована двушка в довгострокову оренду",
    },
    description: {
      en: "Ready to move in. Demo rental listing.",
      bg: "Готов за нанасяне. Демо наем.",
      ru: "Готово к заселению. Демо аренда.",
      ua: "Готово до заселення. Демо оренда.",
    },
  },
  {
    id: "5",
    slug: "penthouse-sveti-vlas",
    demo: true,
    deal: "sale",
    type: "apartment",
    location: "sveti-vlas",
    priceEur: 189000,
    rooms: 3,
    areaM2: 112,
    floor: 7,
    floorsTotal: 7,
    act: "16",
    features: ["sea-view", "parking", "elevator", "furnished"],
    cover: img.sea1,
    gallery: [img.sea1, img.apt3, img.coast2, img.villa2],
    video: true,
    title: {
      en: "Top-floor apartment in Sveti Vlas",
      bg: "Апартамент на последен етаж в Свети Влас",
      ru: "Квартира на последнем этаже в Святом Власе",
      ua: "Квартира на останньому поверсі у Святому Власі",
    },
    description: {
      en: "Open view, calm complex. Demo listing for Nomore.",
      bg: "Отворена гледка, спокоен комплекс. Демо обява Nomore.",
      ru: "Открытый вид, спокойный комплекс. Демо Nomore.",
      ua: "Відкритий вид, спокійний комплекс. Демо Nomore.",
    },
  },
  {
    id: "6",
    slug: "rent-studio-pomorie",
    demo: true,
    deal: "rent",
    type: "studio",
    location: "pomorie",
    priceEur: 420,
    pricePeriod: "month",
    rooms: "studio",
    areaM2: 38,
    floor: 1,
    floorsTotal: 4,
    features: ["furnished"],
    cover: img.apt3,
    gallery: [img.apt3, img.studio1, img.coast1],
    title: {
      en: "Cozy studio for rent in Pomorie",
      bg: "Уютно студио под наем в Поморие",
      ru: "Уютная студия в аренду в Поморие",
      ua: "Затишна студія в оренду в Поморіє",
    },
    description: {
      en: "Simple, clean, close to the seafront. Demo listing.",
      bg: "Просто, чисто, близо до морето. Демо обява.",
      ru: "Просто, чисто, рядом с набережной. Демо.",
      ua: "Просто, чисто, біля набережної. Демо.",
    },
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function filterListings(opts: {
  deal?: Deal;
  location?: string;
  type?: string;
  rooms?: string;
  q?: string;
}) {
  return listings.filter((l) => {
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
    return true;
  });
}
