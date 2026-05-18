export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl tracking-widest text-gradient">ORION</div>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            Cosméticos profissionais para salões que buscam excelência.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <h4 className="text-accent font-medium mb-3">Contato</h4>
          <p className="text-muted-foreground">contato@orionbeauty.com.br</p>
          <p className="text-muted-foreground">+55 (11) 4002-8922</p>
          <p className="text-muted-foreground">Av. Paulista, 1000 — São Paulo, SP</p>
        </div>
        <div className="text-sm space-y-2">
          <h4 className="text-accent font-medium mb-3">Atendimento</h4>
          <p className="text-muted-foreground">Seg – Sex: 9h às 18h</p>
          <p className="text-muted-foreground">Sáb: 9h às 13h</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ORION Beauty Professional. Todos os direitos reservados.
      </div>
    </footer>
  );
}
