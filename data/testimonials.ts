// CONTEÚDO DEMONSTRATIVO
// Estes depoimentos são fictícios e servem apenas como exemplo para apresentação do template.
// Substitua pelos depoimentos reais dos seus clientes antes de publicar.

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  // isDemoContent: identifica este depoimento como conteúdo fictício de demonstração
  isDemoContent: true;
}

export const testimonials: Testimonial[] = [
  {
    id: "t01",
    quote:
      "O Arthur transformou o nosso casamento em algo eterno. Cada fotografia captura exatamente a emoção que sentimos naquele dia. Meses depois, ainda nos emocionamos ao abrir o álbum.",
    author: "Camila & Rafael",
    role: "Fotografia de casamento",
    isDemoContent: true,
  },
  {
    id: "t02",
    quote:
      "Nunca me senti tão à vontade diante de uma câmera. O Arthur tem uma sensibilidade rara — consegue fazer você esquecer que está sendo fotografado. O resultado superou tudo que eu esperava.",
    author: "Fernanda Costa",
    role: "Ensaio de retratos",
    isDemoContent: true,
  },
  {
    id: "t03",
    quote:
      "Contratamos para uma campanha da nossa marca e os resultados foram além do esperado. As imagens têm uma autenticidade que conecta com o nosso público de uma forma que nenhuma outra fotografia conseguiu.",
    author: "Estúdio Mira",
    role: "Fotografia comercial",
    isDemoContent: true,
  },
];
