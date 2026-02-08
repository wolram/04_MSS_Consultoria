"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { themes, type ThemeId } from "@/config/themes";
import { useTheme } from "@/components/theme/theme-provider";
import { toast } from "sonner";

const tabList = ["Perfil", "Aparência", "Notificações"];

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState("Perfil");
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    digest: true,
  });

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-1 border-b border-border">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px",
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Perfil" && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-primary">D</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Demo User</p>
              <p className="text-sm text-muted-foreground">demo@mss.com.br</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
              <input defaultValue="Demo User" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input defaultValue="demo@mss.com.br" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
              <input defaultValue="(11) 99999-9999" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Cargo</label>
              <input defaultValue="Gerente de Projetos" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <button onClick={handleSave} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Salvar Perfil
          </button>
        </div>
      )}

      {activeTab === "Aparência" && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Escolha o Tema</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all text-left",
                    theme === t.id ? "border-primary shadow-md" : "border-border hover:border-primary/30"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex gap-1">
                      {t.previewColors.map((color, i) => (
                        <div key={i} className="w-5 h-5 rounded-full border border-border" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    {theme === t.id && (
                      <span className="text-xs font-medium text-primary ml-auto">Ativo</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Notificações" && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
          {[
            { key: "email" as const, label: "Notificações por Email", desc: "Receba atualizações de projetos por email" },
            { key: "push" as const, label: "Notificações Push", desc: "Receba notificações em tempo real no navegador" },
            { key: "digest" as const, label: "Resumo Semanal", desc: "Receba um resumo semanal das atividades" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={cn(
                  "w-11 h-6 rounded-full transition-colors relative",
                  notifications[item.key] ? "bg-primary" : "bg-muted"
                )}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full bg-white shadow absolute top-0.5 transition-transform",
                    notifications[item.key] ? "translate-x-5" : "translate-x-0.5"
                  )}
                />
              </button>
            </div>
          ))}
          <button onClick={handleSave} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Salvar Notificações
          </button>
        </div>
      )}
    </div>
  );
}
