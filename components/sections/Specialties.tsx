"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { specialties } from "@/data/specialties";

function SpecialtyItem({
  specialty,
  index,
}: {
  specialty: (typeof specialties)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      aria-label={`Especialidade: ${specialty.title}`}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden">
        <div
          className={`relative ${
            isEven ? "aspect-[4/5]" : "aspect-[3/4]"
          } w-full`}
        >
          <Image
            src={specialty.image}
            alt={specialty.alt}
            fill
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />

          {/* Overlay que surge no hover */}
          <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/40 transition-all duration-500" />

          {/* Conteúdo que aparece no hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white/90 text-sm font-light leading-relaxed">
              {specialty.description}
            </p>
          </div>
        </div>
      </div>

      {/* Título abaixo */}
      <div className="pt-4 pb-2">
        <h3
          className="text-graphite text-xl md:text-2xl font-light tracking-wide"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {specialty.title}
        </h3>
        <p className="text-olive/70 text-xs tracking-[0.2em] uppercase font-sans mt-1 font-medium">
          {specialty.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Specialties() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="specialties"
      className="py-24 md:py-32 bg-sand"
      aria-labelledby="specialties-heading"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Cabeçalho da seção */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.span
            className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Especialidades
          </motion.span>

          <motion.h2
            id="specialties-heading"
            className="text-graphite text-3xl md:text-5xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            O que eu fotografo
          </motion.h2>
        </div>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-end">
          {specialties.map((specialty, index) => (
            <SpecialtyItem key={specialty.id} specialty={specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
