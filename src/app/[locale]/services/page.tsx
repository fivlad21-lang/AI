import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { services } from "@/data/services";
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
  const dict = getDictionary(locale);
  return pageMeta(locale, {
    title: routeTitles(locale).services,
    description: dict.services.subtitle,
    path: "services",
  });
}

export default async function ServicesPage({
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
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {dict.services.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          {dict.services.subtitle}
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {services.map((s) => (
          <ServiceRequestForm key={s.id} locale={locale} dict={dict} service={s} />
        ))}
      </div>
    </div>
  );
}
