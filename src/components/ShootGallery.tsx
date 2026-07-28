import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

const shots = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
];

export function ShootGallery({ dict }: { dict: Dictionary }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold">{dict.sell.shootTitle}</h2>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">{dict.sell.shootText}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {shots.map((src) => (
          <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={dict.sell.shootTitle}
              fill
              className="object-cover"
              unoptimized
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
