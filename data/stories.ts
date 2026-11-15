export interface StoryPhoto {
  src: string;
  alt: string;
  size: "large" | "medium" | "small";
}

export interface Story {
  id: string;
  title: string;
  category: string;
  description: string;
  photos: StoryPhoto[];
}

// Conteúdo demonstrativo — projetos fictícios para fins de portfólio
export const featuredStories: Story[] = [
  {
    id: "between-two-souls",
    title: "Between Two Souls",
    category: "Weddings",
    description:
      "Um casamento intimista, registrado de maneira espontânea. Dois dias, uma fazenda, e uma história que merecia ser contada em cada detalhe.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
        alt: "Casal em momento íntimo",
        size: "large",
      },
      
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
        alt: "Noiva com buquê",
        size: "medium",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
        alt: "Casamento ao ar livre",
        size: "small",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
        alt: "Detalhe do casamento",
        size: "small",
      },
    ],
  },
  {
    id: "the-quiet-self",
    title: "The Quiet Self",
    category: "Portraits",
    description:
      "Uma série de retratos com luz natural e composição minimalista. A quietude como estética. O rosto humano como narrativa.",
    photos: [
      {
        src: "/images/img9.jpg",
        alt: "Retrato com luz suave",
        size: "medium",
      },
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85",
        alt: "Retrato editorial feminino",
        size: "large",
      },
      {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
        alt: "Retrato masculino",
        size: "medium",
      },
    ],
  },
  {
    id: "everyday-rituals",
    title: "Everyday Rituals",
    category: "Lifestyle",
    description:
      "Pequenos momentos do cotidiano transformados em histórias visuais. O café da manhã, a luz que entra pela janela, o silêncio antes do dia começar.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=85",
        alt: "Ritual matinal em café",
        size: "small",
      },
      {
        src: "/images/img5.jpg",
        alt: "Ensaio fotográfico com coloração em preto e branco",
        size: "small",
      },
      {
        src: "/images/img2.jpg",
        alt: "Lifestyle — viagem e cotidiano",
        size: "large",
      },
    ],
  },
];
