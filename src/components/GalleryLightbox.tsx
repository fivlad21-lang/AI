"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function GalleryLightbox({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid gap-3 md:grid-cols-2 print:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            className={`relative overflow-hidden rounded-3xl text-left ${
              i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
            }`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image src={src} alt={alt} fill className="object-cover" unoptimized sizes="100vw" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 print:hidden"
          role="dialog"
          aria-modal
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
            if (dx > 50) prev();
            if (dx < -50) next();
            touchX.current = null;
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 glass rounded-full px-3 py-2 text-sm"
            onClick={close}
          >
            ✕
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full px-3 py-3"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <div
            className="relative h-[70dvh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full px-3 py-3"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/70">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
