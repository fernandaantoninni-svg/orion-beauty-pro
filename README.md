# ORION — Beleza Profissional
- Site para visualizar  https://orion-beauty-pro.lovable.app
  
Site institucional e catálogo da **ORION**, marca de produtos profissionais de beleza voltada para salões: tintas, máscaras de hidratação, shampoos, condicionadores e perucas premium.

## 🔗 Link de teste

Acesse a versão de preview do site:

👉 **https://id-preview--5dfe16a7-a9be-4e00-a8f5-c0007bc75c6a.lovable.app**

## ✨ Funcionalidades

- **Home** com hero impactante, benefícios e destaques da marca
- **Catálogo de produtos** (tintas, máscara de hidratação, shampoo & condicionador, perucas)
- **Sobre** — história da marca e métricas de confiança
- **Contato** — formulário para parceiros e salões
- **Chat ao vivo** com a atendente fictícia "Bia" (widget flutuante)
- Design responsivo, moderno, em tons de noir, magenta e dourado
- SEO configurado por rota (title, description, Open Graph)

## 🎯 Público-alvo

Profissionais e proprietários de salões de beleza que buscam produtos de alta performance com condições para revenda e uso profissional.

## 📞 Contato (fictício)

- **E-mail:** contato@orionbeleza.com.br
- **Telefone:** (11) 4002-8922
- **Endereço:** Av. Paulista, 1000 — São Paulo/SP

## 🛠️ Stack técnica

- **TanStack Start** (React 19 + Vite 7) com roteamento por arquivos
- **Tailwind CSS v4** com design tokens em OKLCH (`src/styles.css`)
- **shadcn/ui** para componentes base
- **Google Fonts** — Playfair Display (títulos) + Inter (corpo)
- Imagens geradas por IA para hero e categorias

## 📁 Estrutura

```
src/
├── assets/           # Imagens (hero, categorias)
├── components/       # Header, Footer, ChatWidget, SiteLayout
├── data/             # products.ts (catálogo)
├── routes/           # index, produtos, sobre, contato
└── styles.css        # Design system (cores, tipografia)
```

## 🚀 Desenvolvimento

O projeto é editado e publicado via [Lovable](https://lovable.dev). Alterações no preview entram em produção ao clicar em **Publish**.

---

© ORION Beleza Profissional — projeto demonstrativo.
