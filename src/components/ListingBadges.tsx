import type { Dictionary } from "@/i18n/dictionaries";
import type { Deal, ListingStatus } from "@/data/listings";

const chipBase =
  "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)]";

export function ListingBadges({
  deal,
  video,
  status,
  dict,
  beachMinutes,
}: {
  deal: Deal;
  video?: boolean;
  status?: ListingStatus;
  dict: Dictionary;
  beachMinutes?: number;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <span
        className={`${chipBase} ${
          deal === "sale" ? "bg-sea" : "bg-ok"
        }`}
      >
        {deal === "sale" ? dict.listing.sale : dict.listing.rent}
      </span>
      {video && (
        <span className={`${chipBase} bg-black/65 backdrop-blur-sm`}>
          ▶ {dict.listing.video}
        </span>
      )}
      {status === "reserved" && (
        <span className={`${chipBase} bg-amber-600/90`}>{dict.listing.reserved}</span>
      )}
      {status === "sold" && (
        <span className={`${chipBase} bg-black/70`}>{dict.listing.sold}</span>
      )}
      {beachMinutes != null && (
        <span className={`${chipBase} bg-black/65 backdrop-blur-sm`}>
          {dict.listing.beach} {beachMinutes} {dict.listing.minutes}
        </span>
      )}
    </div>
  );
}
