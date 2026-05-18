import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { products } from "@/data/products";
import hero from "@/assets/hero.jpg";
import { ArrowRight, Sparkles, Truck, Award, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORION — Cosméticos Profissionais para Salões de Beleza" },
      { name: "description", content: "Tintas, máscaras de hidratação, shampoos, condicionadores e perucas premium para salões de beleza. Condições exclusivas para profissionais." },
      { property: "og:title", content: "ORION — Cosméticos Profissionais" },
      { property: "og:description", content: "Linha completa para salões parceiros." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={hero} alt="" width={1600} height={1100} className="w-full h-full object-cover object-right" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 text-accent text-xs uppercase tracking-widest mb-6">
              <Sparkles className="size-3.5" /> Exclusivo para profissionais
            </div>
            <h1 className="text-5xl md:text-7xl font-display leading-[1.05] mb-6">
              Beleza que <span className="text-gradient">eleva</span> seu salão.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              ORION é a linha profissional pensada para salões que querem entregar resultados extraordinários — com fórmulas premium e preço justo de revenda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/produtos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]">
                Ver catálogo <ArrowRight className="size-4" />
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-accent transition">
                Falar com consultor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: "Qualidade Salão", text: "Fórmulas testadas por mais de 3.000 cabeleireiros pelo Brasil." },
          { icon: Truck, title: "Entrega Express", text: "Despachamos em até 24h para todo o território nacional." },
          { icon: Users, title: "Programa Parceiro", text: "Descontos progressivos e materiais de marketing gratuitos." },
        ].map((b) => (
          <div key={b.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition group">
            <b.icon className="size-8 text-accent mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-sm uppercase tracking-widest mb-2">Coleção</p>
            <h2 className="text-4xl md:text-5xl">Produtos em destaque</h2>
          </div>
          <Link to="/produtos" className="hidden md:inline-flex items-center gap-2 text-sm hover:text-accent">
            Ver tudo <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link key={p.slug} to="/produtos" className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.tagline}</p>
                <p className="text-sm text-accent">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-br from-primary via-primary/80 to-accent/60 text-primary-foreground">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Torne-se um salão parceiro ORION</h2>
            <p className="text-lg opacity-90 mb-8">
              Acesse condições exclusivas, treinamentos com nossos especialistas e materiais para divulgar sua marca.
            </p>
            <Link to="/contato" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition">
              Quero ser parceiro <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
