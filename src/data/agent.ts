import type { Locale } from "@/i18n/config";

/** Lead agent shown on contacts + listing pages. */
export const leadAgent = {
  photo: "/team/vladyslav-furman.png",
  name: {
    en: "Vladyslav Furman",
    bg: "Фурман Владислав",
    ru: "Фурман Владислав",
    ua: "Фурман Владислав",
  } satisfies Record<Locale, string>,
} as const;
