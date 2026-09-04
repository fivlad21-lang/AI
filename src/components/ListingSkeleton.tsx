export function ListingSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-bg-elevated/70"
        >
          <div className="aspect-[4/3] animate-pulse bg-white/5" />
          <div className="space-y-2 p-5">
            <div className="h-5 w-1/3 animate-pulse rounded bg-white/5" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-white/5" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
