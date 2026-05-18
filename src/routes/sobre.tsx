import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — ORION Beauty Professional" },
      { name: "description", content: "Conheça a história da ORION e nossa missão de impulsionar salões de beleza pelo Brasil." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <SiteLayout>
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-accent text-sm uppercase tracking-widest mb-3">Nossa história</p>
        <h1 className="text-5xl md:text-6xl mb-8">Beleza profissional<br/><span className="text-gradient">desde 2015</span>.</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-lg">
          <p>
            A ORION nasceu nos bastidores de salões de beleza brasileiros. Fundada por uma cabeleireira e um químico cosmético, a marca veio responder a um pedido recorrente: produtos de alta performance, com preço justo e foco real no profissional.
          </p>
          <p>
            Hoje atendemos mais de <span className="text-accent">3.000 salões parceiros</span> em todo o país, com uma linha completa que inclui coloração, tratamento e perucas premium. Nosso laboratório próprio garante consistência em cada lote.
          </p>
          <p>
            Mais do que vender cosméticos, somos parte da rotina de quem transforma a autoestima de outras pessoas todos os dias.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {[
            { n: "3.000+", l: "Salões parceiros" },
            { n: "72", l: "Tonalidades de tinta" },
            { n: "9", l: "Anos de mercado" },
          ].map((s) => (
            <div key={s.l} className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-display text-gradient">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
