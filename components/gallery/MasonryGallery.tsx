"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioPhotos, type Category } from "@/data/portfolio";
import Lightbox from "./Lightbox";

type FilterValue = "all" | Category;

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Portraits", value: "portraits" },
  { label: "Weddings", value: "weddings" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Commercial", value: "commercial" },
];

function getAspectClass(ratio: string) {
  if (ratio === "portrait") return "aspect-[3/4]";
  if (ratio === "landscape") return "aspect-[4/3]";
  return "aspect-square";
}

export default function MasonryGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? portfolioPhotos
        : portfolioPhotos.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const handleOpen = useCallback((index: number) => setLightboxIndex(index), []);
  const handleClose = useCallback(() => setLightboxIndex(null), []);
  const handlePrev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)),
    [filtered.length]
  );
  const handleNext = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null)),
    [filtered.length]
  );

  return (
    <div>
      {/* Filtros */}
      <div
        className="flex items-center gap-6 md:gap-8 mb-12 overflow-x-auto pb-2 scrollbar-hide"
        role="tablist"
        aria-label="Filtrar por categoria"
      >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={activeFilter === f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`text-xs tracking-[0.2em] uppercase font-medium font-sans whitespace-nowrap transition-all duration-300 pb-1 border-b ${
              activeFilter === f.value
                ? "text-graphite border-graphite"
                : "text-taupe border-transparent hover:text-olive hover:border-taupe"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Galeria masonry — 3 colunas */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5"
        role="list"
        aria-label="Portfólio fotográfico"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="break-inside-avoid mb-4 md:mb-5"
              role="listitem"
            >
              <button
                className="relative w-full overflow-hidden group block"
                onClick={() => handleOpen(index)}
                aria-label={`Abrir foto: ${photo.alt}`}
              >
                {/* Aspecto variado */}
                <div className={`relative w-full ${getAspectClass(photo.aspectRatio)}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-600 ease-editorial group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    loading="lazy"
                  />

                  {/* Overlay e caption no hover */}
                  <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/30 transition-all duration-400" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {photo.title && (
                      <p className="text-white text-sm font-serif italic leading-tight">
                        {photo.title}
                      </p>
                    )}
                    <p className="text-white/70 text-xs tracking-[0.15em] uppercase mt-1">
                      {photo.category}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Lightbox
        photos={filtered}
        currentIndex={lightboxIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
