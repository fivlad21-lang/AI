import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { leadAgent } from "@/data/agent";

type Props = {
  locale: Locale;
  dict: Dictionary;
  /** Larger layout for contacts page */
  size?: "compact" | "full";
};

export function AgentCard({ locale, dict, size = "compact" }: Props) {
  const photoClass =
    size === "full"
      ? "h-28 w-28 md:h-32 md:w-32"
      : "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]";

  return (
    <aside
      className={`flex gap-4 ${
        size === "full" ? "items-start sm:items-center" : "items-center"
      }`}
    >
      <Image
        src={leadAgent.photo}
        alt={leadAgent.name[locale]}
        width={size === "full" ? 128 : 72}
        height={size === "full" ? 128 : 72}
        className={`${photoClass} shrink-0 rounded-2xl object-cover ring-1 ring-white/15`}
        priority={size === "full"}
      />
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
          {leadAgent.name[locale]}
        </p>
        <p className="mt-0.5 text-sm text-sea">{dict.agent.role}</p>
        <p
          className={`mt-2 leading-relaxed text-ink-muted ${
            size === "full" ? "text-sm md:text-base" : "text-xs md:text-sm"
          }`}
        >
          {dict.agent.bio}
        </p>
      </div>
    </aside>
  );
}
