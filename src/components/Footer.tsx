import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contacts";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#080c14]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">
            Nomore <span className="text-ink-muted">estate</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {dict.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <Link href={`/${locale}/buy`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.buy}
          </Link>
          <Link href={`/${locale}/rent`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.rent}
          </Link>
          <Link href={`/${locale}/sell`} className="text-ink transition hover:text-sea">
            {dict.nav.sell}
          </Link>
          <Link href={`/${locale}/contacts`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.contacts}
          </Link>
        </div>
        <div className="text-sm text-ink-muted">
          <a
            href={whatsappUrl("Hi from footer")}
            className="font-semibold text-ink transition hover:text-sea"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-3 text-xs leading-relaxed">{dict.footer.demo}</p>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-4 py-4 text-center text-[11px] text-ink-muted/80">
        © {new Date().getFullYear()} Nomore Real Estate · {dict.footer.rights}
      </div>
    </footer>
  );
}
