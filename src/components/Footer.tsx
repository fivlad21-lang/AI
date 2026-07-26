import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contacts";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-line bg-bg-elevated/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-xl font-semibold">Nomore estate</p>
          <p className="mt-2 max-w-xs text-sm text-ink-muted">{dict.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href={`/${locale}/buy`} className="text-ink-muted hover:text-ink">
            {dict.nav.buy}
          </Link>
          <Link href={`/${locale}/rent`} className="text-ink-muted hover:text-ink">
            {dict.nav.rent}
          </Link>
          <Link href={`/${locale}/sell`} className="text-lagoon hover:text-ink">
            {dict.nav.sell}
          </Link>
          <Link href={`/${locale}/contacts`} className="text-ink-muted hover:text-ink">
            {dict.nav.contacts}
          </Link>
        </div>
        <div className="text-sm text-ink-muted">
          <a
            href={whatsappUrl("Hi from footer")}
            className="font-semibold text-ink hover:text-sea"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-3">{dict.footer.demo}</p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Nomore Real Estate · {dict.footer.rights}
      </div>
    </footer>
  );
}
