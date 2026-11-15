"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-8xl mx-auto">
        {/* Cabeçalho */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.span
            className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Depoimentos
          </motion.span>

          <motion.h2
            id="testimonials-heading"
            className="text-graphite text-3xl md:text-5xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Histórias que também
            <br />
            <em>merecem ser contadas.</em>
          </motion.h2>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
              aria-label={`Depoimento de ${t.author}`}
            >
              {/* Aspas decorativas */}
              <span
                className="text-taupe/50 text-6xl font-serif leading-none block mb-4 -ml-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="text-graphite text-lg md:text-xl font-light leading-relaxed italic mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t.quote}
              </p>

              <footer>
                <div className="w-6 h-px bg-taupe mb-4" aria-hidden="true" />
                <cite className="not-italic">
                  <p className="text-graphite text-sm font-medium font-sans">
                    {t.author}
                  </p>
                  <p className="text-olive/70 text-xs tracking-[0.15em] uppercase font-sans mt-1">
                    {t.role}
                  </p>
                </cite>
                {/* Indicação clara de conteúdo demonstrativo */}
                <p className="text-taupe/60 text-xs mt-2 italic font-sans">
                  Conteúdo demonstrativo
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
