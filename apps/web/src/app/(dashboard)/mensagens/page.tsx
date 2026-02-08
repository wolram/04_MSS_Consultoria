"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  { id: "1", name: "Ana Oliveira", role: "CTO", lastMessage: "O modelo de IA ficou excelente!", time: "10:30", unread: 2 },
  { id: "2", name: "Carlos Santos", role: "Head of Data", lastMessage: "Preciso dos dados do dashboard", time: "09:15", unread: 0 },
  { id: "3", name: "Julia Costa", role: "Head of Cloud", lastMessage: "Migração concluída com sucesso", time: "Ontem", unread: 1 },
  { id: "4", name: "Pedro Lima", role: "Cliente - Banco Digital", lastMessage: "Quando temos a próxima reunião?", time: "Ontem", unread: 0 },
  { id: "5", name: "Maria Silva", role: "Cliente - Varejo", lastMessage: "Os relatórios estão ótimos", time: "2 dias", unread: 0 },
];

const messages: Record<string, { sender: string; text: string; time: string; mine: boolean }[]> = {
  "1": [
    { sender: "Ana Oliveira", text: "Oi! Terminei a revisão do modelo de classificação.", time: "10:15", mine: false },
    { sender: "Você", text: "Ótimo! Qual foi a acurácia final?", time: "10:20", mine: true },
    { sender: "Ana Oliveira", text: "Chegamos a 94.5%, muito acima da meta.", time: "10:25", mine: false },
    { sender: "Ana Oliveira", text: "O modelo de IA ficou excelente!", time: "10:30", mine: false },
  ],
  "2": [
    { sender: "Carlos Santos", text: "Preciso dos dados do dashboard para o relatório mensal.", time: "09:15", mine: false },
  ],
  "3": [
    { sender: "Julia Costa", text: "A migração do ambiente de produção foi concluída!", time: "Ontem", mine: false },
    { sender: "Você", text: "Perfeito! Algum downtime registrado?", time: "Ontem", mine: true },
    { sender: "Julia Costa", text: "Migração concluída com sucesso, zero downtime!", time: "Ontem", mine: false },
  ],
};

export default function MensagensPage() {
  const [selected, setSelected] = useState("1");
  const [input, setInput] = useState("");
  const currentMessages = messages[selected] || [];

  return (
    <div className="flex h-[calc(100vh-10rem)] rounded-2xl border border-border bg-card overflow-hidden">
      {/* Conversation List */}
      <div className="w-80 border-r border-border flex-shrink-0 overflow-y-auto">
        <div className="p-4 border-b border-border">
          <h2 className="font-heading font-semibold text-foreground">Mensagens</h2>
        </div>
        {conversations.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={cn(
              "w-full text-left p-4 border-b border-border hover:bg-accent/50 transition-colors",
              selected === c.id && "bg-accent"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-primary">{c.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{c.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{c.lastMessage}</p>
              </div>
              {c.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                  {c.unread}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border">
          <p className="font-medium text-foreground">
            {conversations.find((c) => c.id === selected)?.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {conversations.find((c) => c.id === selected)?.role}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentMessages.map((msg, i) => (
            <div key={i} className={cn("flex", msg.mine ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[70%] px-4 py-2.5 rounded-2xl text-sm",
                  msg.mine
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-accent text-foreground rounded-bl-md"
                )}
              >
                <p>{msg.text}</p>
                <p className={cn("text-[10px] mt-1", msg.mine ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
