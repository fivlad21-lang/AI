import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AgentCard } from "@/components/AgentCard";
import { LeadForm } from "@/components/LeadForm";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta, routeTitles } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  return pageMeta(locale, {
    title: routeTitles(locale).contacts,
    path: "contacts",
  });
}

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
        <p className="mt-2 text-sm text-ink-muted">{dict.contacts.replyNote}</p>
        <p className="mt-2 text-xs text-ink-muted">{dict.footer.geo}</p>
      </div>

      <div className="glass mt-10 max-w-xl rounded-[1.75rem] p-5 md:p-6">
        <AgentCard locale={locale} dict={dict} size="full" />
        <p className="mt-4 text-xs text-ink-muted/80">{dict.footer.dockHint}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">{dict.contacts.lookingTitle}</h2>
          <p className="mt-2 text-sm text-ink-muted">{dict.listing.autoReply}</p>
        </div>
        <LeadForm locale={locale} dict={dict} prefix="[BUY]" />
      </div>
    </div>
  );
}
