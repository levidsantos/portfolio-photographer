export interface Specialty {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const specialties: Specialty[] = [
  {
    id: "portraits",
    title: "Portraits",
    description: "Retratos individuais, profissionais e editoriais.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85",
    alt: "Retrato editorial com luz natural",
  },
  {
    id: "weddings",
    title: "Weddings & Events",
    description: "Casamentos, celebrações e momentos especiais.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
    alt: "Casal em casamento ao ar livre",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "Pessoas, cotidiano, viagens e experiências.",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=85",
    alt: "Momento de vida cotidiana em luz natural",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Produtos, marcas, campanhas e conteúdo visual.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85",
    alt: "Editorial comercial para marca",
  },
];
