// Fotografias do portfólio principal — imagens de alta qualidade do Unsplash (licença livre)
// Substitua pelas fotografias reais do fotógrafo antes de publicar

export type Category = "portraits" | "weddings" | "lifestyle" | "commercial";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: Category;
  title?: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export const portfolioPhotos: Photo[] = [
  {
    id: "p01",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Retrato feminino com luz natural suave",
    category: "portraits",
    title: "Luz natural",
    aspectRatio: "portrait",
  },
  {
    id: "p02",
    src: "/images/img3.jpg",
    alt: "Casal em momento íntimo no casamento",
    category: "weddings",
    title: "Momento íntimo",
    aspectRatio: "landscape",
  },
  {
    id: "p03",
    src: "/images/img2.jpg",
    alt: "Retrato feminino em ambiente rural",
    category: "portraits",
    title: "Urban portrait",
    aspectRatio: "portrait",
  },
  {
    id: "p04",
    src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80",
    alt: "Lifestyle — pessoa em café com luz natural",
    category: "lifestyle",
    title: "Morning ritual",
    aspectRatio: "landscape",
  },
  {
    id: "p05",
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    alt: "Editorial comercial — moda e estilo",
    category: "commercial",
    title: "Editorial",
    aspectRatio: "portrait",
  },
  {
    id: "p06",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Casamento ao ar livre com luz dourada",
    category: "weddings",
    title: "Golden hour",
    aspectRatio: "landscape",
  },
  {
    id: "p07",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    alt: "Retrato editorial feminino em estúdio",
    category: "portraits",
    title: "Studio portrait",
    aspectRatio: "portrait",
  },
  {
    id: "p08",
    src: "/images/img4.jpg",
    alt: "Lifestyle — viagem e cotidiano",
    category: "lifestyle",
    title: "On the road",
    aspectRatio: "landscape",
  },
  {
    id: "p09",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Fotografia comercial de produto artesanal",
    category: "commercial",
    title: "Handcraft",
    aspectRatio: "square",
  },
  {
    id: "p10",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    alt: "Noiva com buquê em luz natural",
    category: "weddings",
    title: "Bride",
    aspectRatio: "portrait",
  },
  {
    id: "p11",
    src: "/images/img6.jpg",
    alt: "Fotógrafo em trabalho documental",
    category: "lifestyle",
    title: "Behind the lens",
    aspectRatio: "landscape",
  },
  {
    id: "p12",
    src: "/images/img1.jpg",
    alt: "Campanha comercial para marca de lifestyle",
    category: "commercial",
    title: "Brand story",
    aspectRatio: "portrait",
  },
];
