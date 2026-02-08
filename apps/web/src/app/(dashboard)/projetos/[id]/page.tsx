"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const projectData: Record<string, { name: string; status: string; description: string; budget: string; start: string; end: string; progress: number }> = {
  "1": { name: "Banco Digital - IA", status: "Em Andamento", description: "Implementação de modelos de IA para detecção de fraude e análise de crédito em tempo real.", budget: "R$ 250.000", start: "01/01/2026", end: "15/03/2026", progress: 65 },
  "2": { name: "Rede Varejista - Analytics", status: "Planejamento", description: "Dashboard de business intelligence e análise preditiva de vendas.", budget: "R$ 180.000", start: "15/02/2026", end: "01/04/2026", progress: 20 },
  "3": { name: "Hospital SP - Gestão de Leitos", status: "Revisão", description: "Sistema inteligente de otimização de leitos hospitalares com IA.", budget: "R$ 320.000", start: "01/10/2025", end: "28/02/2026", progress: 90 },
};

const milestones = [
  { name: "Descoberta e Requisitos", done: true },
  { name: "Arquitetura da Solução", done: true },
  { name: "Desenvolvimento do MVP", done: true },
  { name: "Testes e Validação", done: false },
  { name: "Deploy e Go-Live", done: false },
];

const deliverables = [
  { name: "Documento de Requisitos", status: "Concluído" },
  { name: "Protótipo de Alta Fidelidade", status: "Concluído" },
  { name: "API de Integração", status: "Em Andamento" },
  { name: "Dashboard Analítico", status: "Pendente" },
];

const kpis = [
  { name: "Acurácia do Modelo", value: "94.5%", target: "95%" },
  { name: "Tempo de Resposta", value: "120ms", target: "200ms" },
  { name: "Cobertura de Testes", value: "82%", target: "80%" },
];

const tabList = ["Visão Geral", "Marcos", "Entregas", "KPIs"];

export default function ProjetoDetailPage() {
  const [activeTab, setActiveTab] = useState("Visão Geral");
  const project = projectData["1"];

  return (
    <div className="space-y-6">
      <Link href="/projetos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar para Projetos
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">{project.name}</h1>
          <p className="mt-1 text-muted-foreground">{project.description}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
          {project.status}
        </span>
      </div>

      {/* Tabs */}
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

      {/* Tab Content */}
      {activeTab === "Visão Geral" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Orçamento</p>
            <p className="text-lg font-bold text-foreground mt-1">{project.budget}</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Início</p>
            <p className="text-lg font-bold text-foreground mt-1">{project.start}</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Prazo</p>
            <p className="text-lg font-bold text-foreground mt-1">{project.end}</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Progresso</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
              </div>
              <span className="text-sm font-bold text-foreground">{project.progress}%</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Marcos" && (
        <div className="space-y-3">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              {m.done ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              )}
              <span className={cn("text-sm", m.done ? "text-foreground" : "text-muted-foreground")}>
                {m.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Entregas" && (
        <div className="space-y-3">
          {deliverables.map((d, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card">
              <span className="text-sm text-foreground">{d.name}</span>
              <span className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-medium",
                d.status === "Concluído" && "bg-green-100 text-green-700",
                d.status === "Em Andamento" && "bg-blue-100 text-blue-700",
                d.status === "Pendente" && "bg-gray-100 text-gray-700",
              )}>
                {d.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "KPIs" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {kpis.map((kpi, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card">
              <p className="text-sm text-muted-foreground">{kpi.name}</p>
              <p className="text-2xl font-bold text-foreground mt-1">{kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-1">Meta: {kpi.target}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
