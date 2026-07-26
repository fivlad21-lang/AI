import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

/** Defense-in-depth if a host skips next.config / vercel.json redirects. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
