"use client";

import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";

const pathLabels: Record<string, string> = {
  "/painel": "Painel de Controle",
  "/projetos": "Projetos",
  "/analiticos": "Analiticos",
  "/mensagens": "Mensagens",
  "/documentos": "Documentos",
  "/faturas": "Faturas",
  "/configuracoes": "Configuracoes",
};

export function TopBar() {
  const pathname = usePathname();
  const basePath = "/" + (pathname.split("/")[1] || "");
  const title = pathLabels[basePath] || "Dashboard";

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div>
        <h1 className="font-heading text-lg font-semibold text-foreground">{title}</h1>
        <p className="text-xs text-muted-foreground">
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-64 pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button className="relative w-9 h-9 rounded-lg hover:bg-accent flex items-center justify-center transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}
