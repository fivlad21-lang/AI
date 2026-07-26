const langs = [
  { code: "BG", label: "Български" },
  { code: "RU", label: "Русский" },
  { code: "UA", label: "Українська" },
  { code: "EN", label: "English" },
] as const;

export default function Home() {
  return (
    <div className="hero-wash relative min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,36,48,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,36,48,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <p className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Nomore Real Estate
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
          Burgas · Coast
        </p>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sea">
          Coming soon
        </p>
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Property in Burgas,
          <span className="block text-sea">done properly.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
          Buy, sell, and rent across Burgas region and Sunny Beach. A calm,
          modern agency — clear listings, fast replies, no noise.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:hello@nomore.estate"
            className="inline-flex items-center justify-center rounded-full bg-sea px-6 py-3 text-sm font-semibold text-foam transition hover:bg-sea-deep"
          >
            Get in touch
          </a>
          <a
            href="#owners"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-foam/70 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
          >
            Sell or rent with us
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap gap-2" aria-label="Languages">
          {langs.map((lang) => (
            <li
              key={lang.code}
              className="rounded-full border border-ink/10 bg-foam/60 px-3 py-1.5 text-xs font-medium text-ink-soft"
              title={lang.label}
            >
              {lang.code}
            </li>
          ))}
        </ul>

        <section
          id="owners"
          className="mt-16 max-w-2xl border-t border-ink/10 pt-10"
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink md:text-3xl">
            For owners
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Planning to sell or rent in Burgas, Sunny Beach, Nesebar, Sozopol,
            Sveti Vlas and nearby? Leave a message — we’ll reply personally.
            Full site and catalog are on the way.
          </p>
        </section>
      </main>

      <footer className="relative mx-auto w-full max-w-6xl px-6 pb-8 text-sm text-ink-soft md:px-10">
        © {new Date().getFullYear()} Nomore Real Estate
      </footer>
    </div>
  );
}
