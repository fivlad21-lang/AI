import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    title: routeTitles(locale).privacy,
    path: "privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        {dict.privacy.title}
      </h1>
      <p className="mt-2 text-sm text-ink-muted">{dict.privacy.updated}</p>
      <ol className="mt-8 space-y-4">
        {dict.privacy.body.map((p, i) => (
          <li key={i} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
            <span className="step-num shrink-0">0{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
