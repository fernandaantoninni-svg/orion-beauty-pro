import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — ORION Beauty Professional" },
      { name: "description", content: "Fale com nossos consultores. Atendimento exclusivo para salões de beleza e profissionais." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Atendimento</p>
          <h1 className="text-5xl md:text-6xl mb-6">Vamos <span className="text-gradient">conversar</span>.</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Nossa equipe está pronta para apresentar a linha ORION e montar uma proposta sob medida para seu salão.
          </p>

          <div className="space-y-5">
            {[
              { icon: Mail, label: "E-mail", value: "contato@orionbeauty.com.br" },
              { icon: Phone, label: "Telefone / WhatsApp", value: "+55 (11) 4002-8922" },
              { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 — São Paulo, SP" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                <c.icon className="size-5 text-accent mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat"]')?.click()}
            className="mt-8 inline-flex items-center gap-2 text-accent hover:underline"
          >
            <MessageCircle className="size-4" /> Ou inicie um chat agora mesmo
          </button>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="p-8 rounded-3xl bg-card border border-border space-y-5 h-fit"
        >
          <h2 className="text-2xl">Envie sua mensagem</h2>
          {sent ? (
            <div className="p-6 rounded-2xl bg-primary/15 border border-primary text-sm">
              Recebemos sua mensagem! Em breve um consultor entrará em contato.
            </div>
          ) : (
            <>
              <Field label="Nome do salão" name="salao" />
              <Field label="Seu nome" name="nome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="WhatsApp" name="tel" />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
                <textarea
                  required maxLength={1000} rows={4}
                  className="mt-1 w-full px-4 py-3 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Enviar mensagem
              </button>
            </>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required maxLength={150}
        className="mt-1 w-full px-4 py-3 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}
