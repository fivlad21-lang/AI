import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/Logo";
import { MessengerButton } from "@/components/MessengerButton";
import { telegramUrl, viberUrl, whatsappUrl } from "@/lib/contacts";
import { waFooter } from "@/lib/wa-messages";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const tg = telegramUrl(waFooter(locale));

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#080c14] print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Logo locale={locale} />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {dict.tagline}
          </p>
          <p className="mt-2 text-xs text-ink-muted/80">{dict.microcopy}</p>
          <p className="mt-2 text-xs text-ink-muted">{dict.footer.geo}</p>
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
          <Link href={`/${locale}/favorites`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.favorites}
          </Link>
          <Link href={`/${locale}/compare`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.compare}
          </Link>
          <Link href={`/${locale}/guide`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.guide}
          </Link>
          <Link href={`/${locale}/blog`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.blog}
          </Link>
          <Link href={`/${locale}/contacts`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.contacts}
          </Link>
          <Link href={`/${locale}/privacy`} className="text-ink-muted transition hover:text-ink">
            {dict.nav.privacy}
          </Link>
        </div>
        <div className="text-sm text-ink-muted">
          <div className="flex flex-wrap gap-2">
            <MessengerButton
              kind="whatsapp"
              place="footer"
              href={whatsappUrl(waFooter(locale))}
              label={dict.cta.whatsapp}
              className="!px-4 !py-2"
            />
            {tg && (
              <MessengerButton
                kind="telegram"
                place="footer"
                href={tg}
                label={dict.cta.telegram}
                className="!px-4 !py-2"
              />
            )}
            <MessengerButton
              kind="viber"
              place="footer"
              href={viberUrl()}
              label={dict.cta.viber}
              className="!px-4 !py-2"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed">{dict.footer.demo}</p>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-4 py-4 text-center text-[11px] text-ink-muted/80">
        © {new Date().getFullYear()} Nomore Real Estate · {dict.footer.rights}
      </div>
    </footer>
  );
}
