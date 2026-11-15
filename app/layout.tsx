import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Valença — Fotografia",
  description:
    "Fotógrafo independente e visual storyteller especializado em retratos, casamentos, lifestyle e fotografia comercial. Um olhar sensível sobre pessoas, lugares e histórias.",
  openGraph: {
    title: "Arthur Valença — Fotografia",
    description:
      "Fotógrafo independente e visual storyteller. Retratos, casamentos, lifestyle e fotografia comercial.",
    type: "website",
    locale: "pt_BR",
  },
  keywords: [
    "fotógrafo",
    "fotografia",
    "retratos",
    "casamentos",
    "lifestyle",
    "editorial",
    "Arthur Valença",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
