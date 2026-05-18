import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-widest">
          <span className="text-gradient">ORION</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Início</Link>
          <Link to="/produtos" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Produtos</Link>
          <Link to="/sobre" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Sobre</Link>
          <Link to="/contato" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Contato</Link>
        </nav>
        <Link
          to="/contato"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Seja parceiro
        </Link>
      </div>
    </header>
  );
}
