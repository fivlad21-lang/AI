import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

/** Fallback when host ignores next.config redirects (static export). */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
