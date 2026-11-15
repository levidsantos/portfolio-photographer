"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax sutil na imagem
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Fade do conteúdo ao scrollar
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-8%"]);

  const handleScrollToPortfolio = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-[92vh] min-h-[600px] overflow-hidden"
      aria-label="Hero — Arthur Valença Fotografia"
    >
      {/* Imagem com parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        style={{ y }}
      >
        <Image
          src="/images/img2.jpg"
          alt="Ensaio fotográfico local aberto, coloração em preto e branco"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-graphite/35" />
      </motion.div>

      {/* Conteúdo centralizado */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity, y: textY }}
      >
        {/* Detalhe tipográfico acima do título */}
        <motion.p
          className="text-white/70 text-xs tracking-[0.3em] uppercase mb-6 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Fotografia Autoral
        </motion.p>

        {/* Título principal */}
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Histórias reais,
          <br />
          <em>momentos únicos</em>
          <br />e memórias eternizadas.
        </motion.h1>

        {/* Linha divisória */}
        <motion.div
          className="w-10 h-px bg-white/50 my-7"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        {/* Descrição */}
        <motion.p
          className="text-white/80 text-sm md:text-base font-light tracking-wide max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Fotografia autoral para pessoas, marcas e histórias que merecem ser vistas.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={handleScrollToPortfolio}
          className="mt-10 text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-label="Ver portfólio"
        >
          Ver Portfólio
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
