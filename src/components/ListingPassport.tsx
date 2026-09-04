import type { ListingPassport as PassportData } from "@/data/listings";
import type { Dictionary } from "@/i18n/dictionaries";

export function ListingPassport({
  passport,
  act,
  dict,
}: {
  passport: PassportData;
  act?: "14" | "15" | "16";
  dict: Dictionary;
}) {
  const p = dict.passport;
  const rows: { label: string; value: string }[] = [];

  if (passport.yearBuilt != null) {
    rows.push({ label: p.yearBuilt, value: String(passport.yearBuilt) });
  }
  if (passport.condition) {
    rows.push({ label: p.condition, value: p.conditionValues[passport.condition] });
  }
  if (passport.heating) {
    rows.push({ label: p.heating, value: p.heatingValues[passport.heating] });
  }
  if (passport.parking) {
    rows.push({ label: p.parking, value: p.parkingValues[passport.parking] });
  }
  if (passport.furniture) {
    rows.push({ label: p.furniture, value: p.furnitureValues[passport.furniture] });
  }
  if (passport.maintenanceEur != null) {
    rows.push({
      label: p.maintenance,
      value:
        passport.maintenanceEur === 0
          ? p.maintenanceNone
          : `€${passport.maintenanceEur}${p.maintenanceMonth}`,
    });
  }
  if (act) {
    rows.push({ label: p.docs, value: `${p.act} ${act}` });
  }

  if (!rows.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {p.title}
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-ink-muted">{p.subtitle}</p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="glass rounded-2xl p-4 text-sm">
            <dt className="text-ink-muted">{row.label}</dt>
            <dd className="mt-1 font-semibold">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
