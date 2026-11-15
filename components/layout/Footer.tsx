"use client";

import { Mail } from "lucide-react";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { PHOTOGRAPHER } from "@/lib/config";

const footerLinks = [
  { label: "Especialidades", href: "#specialties" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-off-white py-16 md:py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-8xl mx-auto">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-off-white/10">
          {/* Nome e tagline */}
          <div>
            <p
              className="text-off-white text-xl md:text-2xl font-light tracking-wide mb-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {PHOTOGRAPHER.name}
            </p>
            <p className="text-off-white/40 text-xs tracking-wide font-light leading-relaxed max-w-[200px]">
              {PHOTOGRAPHER.tagline}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <p className="text-off-white/40 text-xs tracking-[0.2em] uppercase mb-5 font-sans">
              Navegação
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-off-white/70 text-sm hover:text-off-white transition-colors duration-200 font-light"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociais e contato */}
          <div>
            <p className="text-off-white/40 text-xs tracking-[0.2em] uppercase mb-5 font-sans">
              Contato
            </p>
            <div className="space-y-3">
              <a
                href={PHOTOGRAPHER.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-off-white/70 hover:text-off-white transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
                <span className="text-sm font-light">
                  @{PHOTOGRAPHER.contact.instagram}
                </span>
              </a>

              <a
                href={`mailto:${PHOTOGRAPHER.contact.email}`}
                className="flex items-center gap-3 text-off-white/70 hover:text-off-white transition-colors duration-200 group"
                aria-label={`E-mail: ${PHOTOGRAPHER.contact.email}`}
              >
                <Mail size={15} className="text-olive/70 group-hover:text-olive" />
                <span className="text-sm font-light">
                  {PHOTOGRAPHER.contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-off-white/30 text-xs font-sans">
            &copy; {new Date().getFullYear()} {PHOTOGRAPHER.name}. Todos os
            direitos reservados.
          </p>

          <p
            className="text-off-white/20 text-xs italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Um olhar sensível sobre pessoas, lugares e histórias.
          </p>
        </div>
      </div>
    </footer>
  );
}
