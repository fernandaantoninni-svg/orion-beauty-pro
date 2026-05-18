import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { products } from "@/data/products";
import { Check } from "lucide-react";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — ORION Beauty Professional" },
      { name: "description", content: "Catálogo completo: tintas, máscaras de hidratação, shampoos, condicionadores e perucas premium." },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-accent text-sm uppercase tracking-widest mb-3">Catálogo profissional</p>
        <h1 className="text-5xl md:text-6xl mb-4">Nossos produtos</h1>
        <p className="text-muted-foreground max-w-2xl">
          Linha completa pensada para o dia a dia do salão. Solicite a tabela com preços de revenda diretamente com nosso consultor.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-10">
        {products.map((p, i) => (
          <article
            key={p.slug}
            className={`grid md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="aspect-square md:aspect-auto bg-muted">
              <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-accent text-xs uppercase tracking-widest mb-3">{p.tagline}</p>
              <h2 className="text-3xl md:text-4xl mb-4">{p.name}</h2>
              <p className="text-muted-foreground mb-6">{p.description}</p>
              <ul className="space-y-2 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-xl text-gradient font-display">{p.price}</span>
                <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat"]')?.click(); }}
                   className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition">
                  Solicitar tabela
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
