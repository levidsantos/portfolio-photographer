"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PHOTOGRAPHER } from "@/lib/config";

const navLinks = [
  { label: "Especialidades", href: "#specialties" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(248,246,241,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(199,187,169,0.3)" : "none",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop: nav esquerda */}
            <nav className="hidden lg:flex items-center gap-10 w-1/3">
              {navLinks.slice(0, 2).map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-graphite hover:text-olive"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Logo centralizado */}
            <div className="flex-1 flex justify-center lg:flex-none lg:w-1/3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`font-serif text-lg md:text-xl tracking-[0.08em] font-light transition-colors duration-300 ${
                  scrolled ? "text-graphite" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
                aria-label="Voltar ao topo"
              >
                {PHOTOGRAPHER.name}
              </button>
            </div>

            {/* Desktop: nav direita */}
            <nav className="hidden lg:flex items-center justify-end gap-10 w-1/3">
              {navLinks.slice(2).map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-graphite hover:text-olive"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile: menu hambúrguer */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-graphite" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-off-white flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-graphite text-2xl font-serif tracking-wide hover:text-olive transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.p
              className="absolute bottom-10 text-xs text-taupe tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {PHOTOGRAPHER.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
