"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredStories } from "@/data/stories";

// Layout 1: texto à esquerda, colagem à direita (Between Two Souls)
function StoryLayoutA({ story }: { story: (typeof featuredStories)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <article ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-28 border-t border-taupe/30">
      {/* Texto */}
      <motion.div
        className="order-2 lg:order-1"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5">
          {story.category}
        </span>
        <h3
          className="text-graphite text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {story.title}
        </h3>
        <div className="w-8 h-px bg-olive mb-6" aria-hidden="true" />
        <p className="text-graphite/65 font-light leading-relaxed text-base tracking-wide max-w-sm">
          {story.description}
        </p>
      </motion.div>

      {/* Colagem 4 fotos */}
      <motion.div
        className="order-1 lg:order-2 grid grid-cols-5 gap-3"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Grande à esquerda */}
        <div className="col-span-3 relative aspect-[2/3] overflow-hidden">
          <Image src={story.photos[0].src} alt={story.photos[0].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="50vw" />
        </div>
        {/* 3 menores à direita */}
        <div className="col-span-2 flex flex-col gap-3">
          {story.photos.slice(1).map((photo, i) => (
            <div key={i} className="relative overflow-hidden" style={{ aspectRatio: i === 0 ? "1/1" : "3/3" }}>
              <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="35vw" />
            </div>
          ))}
        </div>
      </motion.div>
    </article>
  );
}

// Layout 2: imagens à esquerda, texto à direita (The Quiet Self)
function StoryLayoutB({ story }: { story: (typeof featuredStories)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <article ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-28 border-t border-taupe/30">
      {/* Colagem 3 fotos — layout assimétrico */}
      <motion.div
        className="grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="col-span-1 relative aspect-[2/4] overflow-hidden mt-8">
          <Image src={story.photos[0].src} alt={story.photos[0].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="35vw" />
        </div>
        <div className="col-span-2 relative aspect-[4/5] overflow-hidden">
          <Image src={story.photos[1].src} alt={story.photos[1].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="45vw" />
        </div>
        <div className="col-span-2 relative aspect-[3/3] overflow-hidden mt-1">
          <Image src={story.photos[2].src} alt={story.photos[2].alt} fill className="object-cover object-top hover:scale-[1.03] transition-transform duration-700" sizes="40vw" />
        </div>
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <span className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5">
          {story.category}
        </span>
        <h3
          className="text-graphite text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {story.title}
        </h3>
        <div className="w-8 h-px bg-olive mb-6" aria-hidden="true" />
        <p className="text-graphite/65 font-light leading-relaxed tracking-wide max-w-sm">
          {story.description}
        </p>
      </motion.div>
    </article>
  );
}

// Layout 3: imagem grande com texto sobreposto + duas menores (Everyday Rituals)
function StoryLayoutC({ story }: { story: (typeof featuredStories)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <article ref={ref} className="py-20 md:py-28 border-t border-taupe/30">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Duas pequenas */}
        <div className="flex flex-col gap-6 justify-end">
          <div>
            <span className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-4">
              {story.category}
            </span>
            <h3
              className="text-graphite text-3xl md:text-4xl font-light leading-tight mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {story.title}
            </h3>
            <div className="w-8 h-px bg-olive mb-4" aria-hidden="true" />
            <p className="text-graphite/65 font-light leading-relaxed tracking-wide text-sm">
              {story.description}
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image src={story.photos[0].src} alt={story.photos[0].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="25vw" />
          </div>
        </div>

        {/* Grande central */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image src={story.photos[2].src} alt={story.photos[2].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="35vw" />
        </div>

        {/* Menor direita */}
        <div className="relative overflow-hidden mt-0 lg:mt-16 aspect-[3/4]">
          <Image src={story.photos[1].src} alt={story.photos[1].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="35vw" />
        </div>
      </motion.div>
    </article>
  );
}

export default function FeaturedStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="stories"
      className="py-16 md:py-24 px-6 md:px-10 lg:px-16 max-w-8xl mx-auto"
      aria-labelledby="stories-heading"
    >
      {/* Cabeçalho */}
      <div ref={ref} className="mb-4">
        <motion.span
          className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Histórias em destaque
        </motion.span>
        <motion.h2
          id="stories-heading"
          className="text-graphite text-3xl md:text-5xl font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Projetos selecionados
        </motion.h2>
      </div>

      {/* Histórias */}
      <StoryLayoutA story={featuredStories[0]} />
      <StoryLayoutB story={featuredStories[1]} />
      <StoryLayoutC story={featuredStories[2]} />
    </section>
  );
}
