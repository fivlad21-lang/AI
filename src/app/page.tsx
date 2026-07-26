import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LOCALE_COOKIE, resolveLocale } from "@/lib/locale-detect";

/** Fallback if Proxy is skipped — same cookie / Accept-Language rules. */
export default async function RootPage() {
  const jar = await cookies();
  const h = await headers();
  const locale = resolveLocale({
    cookie: jar.get(LOCALE_COOKIE)?.value,
    acceptLanguage: h.get("accept-language"),
  });
  redirect(`/${locale}`);
}
