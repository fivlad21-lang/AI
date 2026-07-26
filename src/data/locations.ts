export const locations = [
  { id: "burgas", label: { bg: "Бургас", ru: "Бургас", ua: "Бургас", en: "Burgas" } },
  {
    id: "sunny-beach",
    label: {
      bg: "Слънчев бряг",
      ru: "Солнечный Берег",
      ua: "Сонячний Берег",
      en: "Sunny Beach",
    },
  },
  { id: "nesebar", label: { bg: "Несебър", ru: "Несебр", ua: "Несебр", en: "Nesebar" } },
  { id: "ravda", label: { bg: "Равда", ru: "Равда", ua: "Равда", en: "Ravda" } },
  { id: "pomorie", label: { bg: "Поморие", ru: "Поморие", ua: "Поморіє", en: "Pomorie" } },
  { id: "sozopol", label: { bg: "Созопол", ru: "Созополь", ua: "Созополь", en: "Sozopol" } },
  {
    id: "sveti-vlas",
    label: {
      bg: "Свети Влас",
      ru: "Святой Влас",
      ua: "Святий Влас",
      en: "Sveti Vlas",
    },
  },
] as const;

export type LocationId = (typeof locations)[number]["id"];
