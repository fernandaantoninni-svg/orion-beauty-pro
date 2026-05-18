import tintas from "@/assets/tintas.jpg";
import mascara from "@/assets/mascara.jpg";
import shampoo from "@/assets/shampoo.jpg";
import perucas from "@/assets/perucas.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "tintas",
    name: "Tintas Profissionais",
    tagline: "Coloração de alta performance",
    description: "Linha completa de coloração com pigmentos puros, cobertura 100% dos brancos e fixação intensa que dura até 8 semanas.",
    price: "A partir de R$ 29,90",
    image: tintas,
    features: ["72 tonalidades", "Cobertura 100%", "Sem amônia opcional", "Vegano"],
  },
  {
    slug: "mascara",
    name: "Máscara de Hidratação",
    tagline: "Reconstrução profunda",
    description: "Fórmula concentrada com queratina hidrolisada e óleo de argan. Resultado profissional em 5 minutos.",
    price: "A partir de R$ 89,00",
    image: mascara,
    features: ["500g uso profissional", "pH balanceado", "Sem sal", "Resultado imediato"],
  },
  {
    slug: "shampoo",
    name: "Shampoo & Condicionador",
    tagline: "Limpeza inteligente",
    description: "Dupla profissional que limpa sem agredir e prepara o fio para qualquer procedimento químico.",
    price: "A partir de R$ 59,00",
    image: shampoo,
    features: ["Linha 1L profissional", "Low poo", "Selagem da cutícula", "Brilho intenso"],
  },
  {
    slug: "perucas",
    name: "Perucas Premium",
    tagline: "Cabelo humano selecionado",
    description: "Perucas e apliques de cabelo humano, com curvatura natural e diversas tonalidades. Pronto para colorir.",
    price: "A partir de R$ 690,00",
    image: perucas,
    features: ["100% humano", "Lace front", "Densidade 180%", "Pode tingir"],
  },
];
