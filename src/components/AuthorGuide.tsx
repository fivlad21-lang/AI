import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { leadAgent } from "@/data/agent";
import { GlassButton } from "@/components/GlassButton";
import { instagramUrl } from "@/lib/contacts";

export function AuthorGuide({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ig = instagramUrl();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {dict.home.guideTitle}
      </h2>
      <div className="glass mt-8 grid gap-8 rounded-[1.75rem] p-5 md:grid-cols-[minmax(0,220px)_1fr] md:items-center md:gap-10 md:p-8">
        <div className="mx-auto w-full max-w-[220px] md:mx-0">
          <Image
            src={leadAgent.photo}
            alt={leadAgent.name[locale]}
            width={440}
            height={352}
            className="aspect-[5/4] w-full rounded-2xl object-cover object-top ring-1 ring-white/15"
          />
        </div>
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {leadAgent.name[locale]}
          </p>
          <p className="mt-1 text-sm text-sea">{dict.agent.role}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
            {dict.home.guideText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {ig && (
              <GlassButton href={ig} external variant="glass">
                {dict.home.guideInstagram}
              </GlassButton>
            )}
            <GlassButton href={`/${locale}/contacts`} variant="primary">
              {dict.home.guideWrite}
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
