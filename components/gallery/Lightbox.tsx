"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/data/portfolio";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const photo = currentIndex !== null ? photos[currentIndex] : null;

  // Bloquear rolagem do fundo
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => document.body.classList.remove("lightbox-open");
  }, [isOpen]);

  // Navegação por teclado
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Suporte a swipe no mobile
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${(currentIndex ?? 0) + 1} de ${photos.length}: ${photo.alt}`}
        >
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-graphite/92" />

          {/* Imagem */}
          <motion.div
            className="relative z-10 max-w-5xl max-h-[85vh] w-full mx-6"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full" style={{ maxHeight: "85vh" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] w-full h-auto"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Caption */}
            {photo.title && (
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase mt-4 text-center">
                {photo.title}
                <span className="mx-3 text-white/30">·</span>
                {photo.category}
              </p>
            )}
          </motion.div>

          {/* Botão fechar */}
          <button
            className="absolute top-5 right-5 z-20 text-white/70 hover:text-white p-2 transition-colors"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>

          {/* Anterior */}
          <button
            className="absolute left-4 md:left-8 z-20 text-white/60 hover:text-white p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Próximo */}
          <button
            className="absolute right-4 md:right-8 z-20 text-white/60 hover:text-white p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Próxima foto"
          >
            <ChevronRight size={32} />
          </button>

          {/* Contador */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
            <span className="text-white/40 text-xs tracking-[0.2em]">
              {(currentIndex ?? 0) + 1} / {photos.length}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
