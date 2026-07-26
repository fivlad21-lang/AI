import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMeta, routeTitles } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  return pageMeta(locale, {
    title: routeTitles(locale).favorites,
    path: "favorites",
  });
}

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
