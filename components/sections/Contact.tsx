"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
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

type ServiceType =
  | ""
  | "Retratos"
  | "Casamentos & Eventos"
  | "Lifestyle"
  | "Comercial"
  | "Outro";

interface FormData {
  name: string;
  email: string;
  service: ServiceType;
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "E-mail inválido.";
    if (!form.message.trim()) newErrors.message = "Mensagem é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Sem backend configurado — redireciona para WhatsApp com os dados
    const msg = encodeURIComponent(
      `Olá, Arthur! Meu nome é ${form.name}.\n\nServiço de interesse: ${form.service || "Não especificado"}\n\n${form.message}`
    );
    window.open(
      `https://wa.me/${PHOTOGRAPHER.contact.whatsapp}?text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full bg-transparent border-b border-taupe/50 focus:border-graphite outline-none py-3 text-graphite placeholder:text-taupe/60 text-sm font-light tracking-wide transition-colors duration-200";

  return (
    <section
      id="contact"
      className="relative py-0 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Bloco superior com imagem */}
      <div className="relative h-[50vh] min-h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600&q=85"
          alt="Momento de casamento — contate o fotógrafo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-graphite/55" />

        <div
          ref={ref}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h2
            id="contact-heading"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Sua história merece
            <br />
            <em>ser registrada.</em>
          </motion.h2>

          <motion.p
            className="text-white/70 text-sm md:text-base font-light max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Toda história começa com um primeiro encontro. Vamos conversar
            sobre a sua?
          </motion.p>
        </div>
      </div>

      {/* Bloco inferior com contato e formulário */}
      <div className="bg-off-white py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Links de contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="text-graphite text-2xl md:text-3xl font-light mb-10"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Entre em contato
            </h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${PHOTOGRAPHER.contact.whatsapp}?text=${encodeURIComponent(
                  PHOTOGRAPHER.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Enviar mensagem pelo WhatsApp"
              >
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center group-hover:bg-taupe/30 transition-colors">
                  <MessageCircle size={18} className="text-olive" />
                </span>
                <div>
                  <p className="text-graphite text-sm font-medium">WhatsApp</p>
                  <p className="text-graphite/50 text-xs mt-0.5 group-hover:text-olive transition-colors">
                    Iniciar conversa
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${PHOTOGRAPHER.contact.email}`}
                className="flex items-center gap-4 group"
                aria-label={`Enviar e-mail para ${PHOTOGRAPHER.contact.email}`}
              >
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center group-hover:bg-taupe/30 transition-colors">
                  <Mail size={18} className="text-olive" />
                </span>
                <div>
                  <p className="text-graphite text-sm font-medium">E-mail</p>
                  <p className="text-graphite/50 text-xs mt-0.5 group-hover:text-olive transition-colors">
                    {PHOTOGRAPHER.contact.email}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={PHOTOGRAPHER.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Ver perfil no Instagram"
              >
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center group-hover:bg-taupe/30 transition-colors">
                  <InstagramIcon size={18} />
                </span>
                <div>
                  <p className="text-graphite text-sm font-medium">Instagram</p>
                  <p className="text-graphite/50 text-xs mt-0.5 group-hover:text-olive transition-colors">
                    @{PHOTOGRAPHER.contact.instagram}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-graphite/50 text-xs tracking-wide mb-8 font-sans">
              Ou envie uma mensagem diretamente. O formulário abre uma conversa
              pelo WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-7"
              aria-label="Formulário de contato"
            >
              {/* Nome */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-500/80 mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-500/80 mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Tipo de serviço */}
              <div>
                <label htmlFor="service" className="sr-only">
                  Tipo de serviço
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Tipo de serviço
                  </option>
                  <option value="Retratos">Retratos</option>
                  <option value="Casamentos & Eventos">Casamentos &amp; Eventos</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre o que você tem em mente..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-500/80 mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-graphite text-off-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-olive transition-colors duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
