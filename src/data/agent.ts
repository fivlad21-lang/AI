import type { Locale } from "@/i18n/config";

/** Lead agent shown on contacts + listing pages. */
export const leadAgent = {
  photo: "/team/1ef19504-c28a-42dd-8cdd-6e1c3e93d20a.png",
  name: {
    en: "Vladyslav Furman",
    bg: "Фурман Владислав",
    ru: "Фурман Владислав",
    ua: "Фурман Владислав",
  } satisfies Record<Locale, string>,
} as const;
