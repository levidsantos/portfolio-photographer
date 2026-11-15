"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MasonryGallery from "@/components/gallery/MasonryGallery";

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6 md:px-10 lg:px-16 max-w-8xl mx-auto"
      aria-labelledby="portfolio-heading"
    >
      {/* Cabeçalho */}
      <div ref={ref} className="mb-16">
        <motion.span
          className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Portfólio
        </motion.span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            id="portfolio-heading"
            className="text-graphite text-3xl md:text-5xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trabalhos recentes
          </motion.h2>

          <motion.p
            className="text-graphite/50 text-sm font-light max-w-xs"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Uma seleção de imagens das diferentes especialidades.
          </motion.p>
        </div>
      </div>

      {/* Galeria */}
      <MasonryGallery />
    </section>
  );
}
