import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { GlassButton } from "@/components/GlassButton";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contacts";

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-xl">
        <h1 className="font-display text-4xl font-semibold">{dict.contacts.title}</h1>
        <p className="mt-3 text-ink-muted">{dict.contacts.subtitle}</p>
        <GlassButton
          className="mt-6"
          variant="primary"
          href={whatsappUrl("Hi! Contacts page")}
          external
        >
          WhatsApp {WHATSAPP_DISPLAY}
        </GlassButton>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">{dict.contacts.lookingTitle}</h2>
          <p className="mt-2 text-sm text-ink-muted">{dict.home.demoNote}</p>
        </div>
        <LeadForm locale={locale} dict={dict} prefix="[BUY]" />
      </div>
    </div>
  );
}
