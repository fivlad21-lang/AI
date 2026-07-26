import type { ReactNode } from "react";
import { TelegramIcon, ViberIcon, WhatsAppIcon } from "@/components/MessengerIcons";

export type MessengerKind = "whatsapp" | "telegram" | "viber";

const styles: Record<
  MessengerKind,
  { icon: typeof WhatsAppIcon; bg: string; label?: string }
> = {
  whatsapp: { icon: WhatsAppIcon, bg: "bg-[#25D366]" },
  telegram: { icon: TelegramIcon, bg: "bg-[#2AABEE]" },
  viber: { icon: ViberIcon, bg: "bg-[#7360F2]" },
};

type Props = {
  kind: MessengerKind;
  href: string;
  label: string;
  /** Dock-style pill with colored circle icon */
  variant?: "dock" | "inline" | "icon";
  className?: string;
  children?: ReactNode;
};

export function MessengerButton({
  kind,
  href,
  label,
  variant = "inline",
  className = "",
  children,
}: Props) {
  const { icon: Icon, bg } = styles[kind];

  if (variant === "dock") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`glass-strong flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 text-sm font-semibold text-ink shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)] ${className}`}
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${bg}`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="hidden sm:inline">{children ?? label}</span>
      </a>
    );
  }

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${bg} ${className}`}
      >
        <Icon className="h-5 w-5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98] ${bg} ${className}`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span>{children ?? label}</span>
    </a>
  );
}

/** Small brand icon for use inside existing GlassButtons */
export function MessengerGlyph({
  kind,
  className = "h-4 w-4",
}: {
  kind: MessengerKind;
  className?: string;
}) {
  const Icon = styles[kind].icon;
  return <Icon className={className} />;
}
