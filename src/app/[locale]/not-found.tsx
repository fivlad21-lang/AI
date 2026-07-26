import Link from "next/link";
import { GlassButton } from "@/components/GlassButton";

export default function NotFound() {
  return (
    <div className="hero-grid flex min-h-[70dvh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-2xl font-semibold tracking-tight">Nomore</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">Lost on the coast</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        This page isn’t here. Back to homes — or write us on WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <GlassButton href="/bg" variant="primary">
          Home
        </GlassButton>
        <Link href="/bg/contacts" className="text-sm text-ink-muted self-center">
          Contacts →
        </Link>
      </div>
    </div>
  );
}
