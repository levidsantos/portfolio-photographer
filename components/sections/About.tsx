"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PHOTOGRAPHER } from "@/lib/config";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-sand"
      aria-labelledby="about-heading"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center"
        >
          {/* Fotografia do artista — composição assimétrica */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-5 gap-4">
              {/* Retrato principal */}
              <div className="col-span-4 relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/img7.jpg"
                  alt="Arthur Valença — fotógrafo"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>

              {/* Detalhe vertical direito */}
              <div className="col-span-1 flex flex-col justify-end">
                <div className="relative aspect-[2/5] overflow-hidden">
                  <Image
                    src="/images/img5.jpg"
                    alt="Momento de trabalho — fotógrafo em campo"
                    fill
                    className="object-cover"
                    sizes="10vw"
                  />
                </div>
              </div>
            </div>

            {/* Detalhe tipográfico flutuante */}
            <div className="absolute -bottom-6 left-4 bg-off-white px-5 py-4 max-w-[180px]">
              <p
                className="text-olive text-sm italic leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;A imagem que permanece.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-6">
              Sobre
            </span>

            <h2
              id="about-heading"
              className="text-graphite text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {PHOTOGRAPHER.name}
            </h2>

            <div className="w-8 h-px bg-olive mb-8" aria-hidden="true" />

            <p className="text-graphite/70 text-base font-light leading-relaxed tracking-wide mb-8">
              {PHOTOGRAPHER.bio}
            </p>

            <p className="text-graphite/60 text-sm font-light leading-relaxed tracking-wide mb-10">
              Com uma abordagem documental e artística, cada projeto é uma
              colaboração — uma conversa entre o fotógrafo e o momento. O
              resultado são imagens que contam mais do que mostram.
            </p>

            {/* Dados resumidos */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-taupe/40">
              {[
                { number: "8+", label: "Anos de experiência" },
                { number: "200+", label: "Projetos realizados" },
                { number: "4", label: "Especialidades" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-graphite text-2xl md:text-3xl font-light mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-graphite/50 text-xs tracking-wide font-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
