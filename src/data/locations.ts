export const locations = [
  {
    id: "burgas",
    lat: 42.5048,
    lng: 27.4626,
    label: { bg: "Бургас", ru: "Бургас", ua: "Бургас", en: "Burgas" },
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
  },
  {
    id: "nesebar",
    lat: 42.659,
    lng: 27.735,
    label: { bg: "Несебър", ru: "Несебр", ua: "Несебр", en: "Nesebar" },
  },
  {
    id: "ravda",
    lat: 42.648,
    lng: 27.675,
    label: { bg: "Равда", ru: "Равда", ua: "Равда", en: "Ravda" },
  },
  {
    id: "pomorie",
    lat: 42.558,
    lng: 27.641,
    label: { bg: "Поморие", ru: "Поморие", ua: "Поморіє", en: "Pomorie" },
  },
  {
    id: "sozopol",
    lat: 42.417,
    lng: 27.695,
    label: { bg: "Созопол", ru: "Созополь", ua: "Созополь", en: "Sozopol" },
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
  },
] as const;

export type LocationId = (typeof locations)[number]["id"];

export function getLocation(id: LocationId) {
  return locations.find((l) => l.id === id);
}
