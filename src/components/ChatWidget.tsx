import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "agent"; text: string; time: string };

const AUTO_REPLIES = [
  "Olá! Sou a Bia, consultora ORION. Como posso ajudar seu salão hoje?",
  "Temos condições especiais para salões parceiros. Quer conhecer nossa tabela profissional?",
  "Posso te enviar amostras das nossas tintas e máscara de hidratação. Qual sua cidade?",
  "Perfeito! Vou anotar e nossa equipe entra em contato em até 1 hora útil.",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "agent", text: AUTO_REPLIES[0], time: now() },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text, time: now() }]);
    setInput("");
    setTyping(true);
    const reply = AUTO_REPLIES[Math.min(messages.filter((m) => m.role === "user").length + 1, AUTO_REPLIES.length - 1)];
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "agent", text: reply, time: now() }]);
    }, 1100);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] flex items-center justify-center hover:scale-105 transition"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="px-4 py-3 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold">B</div>
              <div>
                <div className="font-medium">Bia • Atendimento ORION</div>
                <div className="text-xs opacity-80 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-green-400 inline-block" /> Online agora
                </div>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}>
                  {m.text}
                  <div className="text-[10px] opacity-60 mt-1">{m.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.15s]" />
                  <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escreva sua mensagem..."
              maxLength={500}
              className="flex-1 bg-muted px-3 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={send}
              aria-label="Enviar"
              className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function now() {
  return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
