"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/dashboard/data-table";

const statusColors: Record<string, string> = {
  DISCOVERY: "bg-blue-100 text-blue-700",
  PLANNING: "bg-yellow-100 text-yellow-700",
  IN_PROGRESS: "bg-green-100 text-green-700",
  REVIEW: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-gray-100 text-gray-700",
};

const statusLabels: Record<string, string> = {
  DISCOVERY: "Descoberta",
  PLANNING: "Planejamento",
  IN_PROGRESS: "Em Andamento",
  REVIEW: "Revisão",
  COMPLETED: "Concluído",
};

const projects = [
  { id: "1", nome: "Banco Digital - IA", status: "IN_PROGRESS", progresso: 65, prazo: "15/03/2026", orcamento: "R$ 250.000" },
  { id: "2", nome: "Rede Varejista - Analytics", status: "PLANNING", progresso: 20, prazo: "01/04/2026", orcamento: "R$ 180.000" },
  { id: "3", nome: "Hospital SP - Gestão de Leitos", status: "REVIEW", progresso: 90, prazo: "28/02/2026", orcamento: "R$ 320.000" },
  { id: "4", nome: "Logística Express - Automação", status: "DISCOVERY", progresso: 5, prazo: "30/05/2026", orcamento: "R$ 150.000" },
  { id: "5", nome: "TechCorp - Migração Cloud", status: "COMPLETED", progresso: 100, prazo: "15/01/2026", orcamento: "R$ 420.000" },
];

const tabs = [
  { label: "Todos", filter: "all" },
  { label: "Em Andamento", filter: "active" },
  { label: "Concluídos", filter: "completed" },
];

export default function ProjetosPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeTab === "active") return p.status !== "COMPLETED";
      if (activeTab === "completed") return p.status === "COMPLETED";
      return true;
    });
  }, [activeTab]);

  const columns = useMemo(() => [
    { key: "nome", label: "Nome" },
    {
      key: "status",
      label: "Status",
      render: (row: (typeof projects)[0]) => (
        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", statusColors[row.status])}>
          {statusLabels[row.status]}
        </span>
      ),
    },
    {
      key: "progresso",
      label: "Progresso",
      render: (row: (typeof projects)[0]) => (
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${row.progresso}%` }} />
          </div>
          <span className="text-xs text-muted-foreground">{row.progresso}%</span>
        </div>
      ),
    },
    { key: "prazo", label: "Prazo" },
    { key: "orcamento", label: "Orçamento" },
  ], []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.filter}
              onClick={() => setActiveTab(tab.filter)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeTab === tab.filter
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          <PlusIcon className="w-4 h-4" />
          Novo Projeto
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={(row) => router.push(`/projetos/${row.id}`)}
      />
    </div>
  );
}
