"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="py-24 md:py-36 px-6 md:px-10 lg:px-16 max-w-8xl mx-auto"
      aria-labelledby="intro-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">
        {/* Texto — 40% da largura */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <RevealOnScroll delay={0.1}>
            <span className="text-olive text-xs tracking-[0.3em] uppercase font-sans font-medium block mb-8">
              Filosofia
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h2
              id="intro-heading"
              className="text-graphite text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Por trás de cada imagem,{" "}
              <em>existe uma história.</em>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="w-8 h-px bg-olive mb-8" aria-hidden="true" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p className="text-graphite/70 text-base font-light leading-relaxed tracking-wide">
              Cada história tem seu próprio ritmo. Meu trabalho é observar,
              encontrar beleza nos detalhes e transformar momentos em imagens
              que permanecem.
            </p>
          </RevealOnScroll>
        </div>

        {/* Composição fotográfica — 60% */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <RevealOnScroll delay={0.1} direction="right">
            <div className="grid grid-cols-5 gap-3 md:gap-4">
              {/* Imagem principal vertical */}
              <div className="col-span-3 relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/img8.jpg"
                  alt="Retrato com luz natural — composição editorial"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>

              {/* Coluna direita: duas imagens */}
              <div className="col-span-2 flex flex-col gap-3 md:gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/img4.jpg"
                    alt="Momento de casamento documentado"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 40vw, 30vw"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/img3.jpg"
                    alt="Lifestyle — ritual cotidiano em luz natural"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 40vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
