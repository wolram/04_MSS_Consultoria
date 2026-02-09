"use client";

import { ChartBarIcon, ArrowTrendingUpIcon, UsersIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { StatCard } from "@/components/dashboard/stat-card";

const monthlyData = [
  { month: "Set", value: 85 },
  { month: "Out", value: 92 },
  { month: "Nov", value: 78 },
  { month: "Dez", value: 110 },
  { month: "Jan", value: 125 },
  { month: "Fev", value: 98 },
];

export default function AnaliticosPage() {
  const maxValue = Math.max(...monthlyData.map((d) => d.value));

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Receita Total" value="R$ 1.2M" icon={CurrencyDollarIcon} trend={{ value: "+15%", direction: "up" }} />
        <StatCard title="Projetos Concluídos" value="12" icon={ChartBarIcon} trend={{ value: "+3", direction: "up" }} />
        <StatCard title="Clientes Ativos" value="28" icon={UsersIcon} trend={{ value: "+5", direction: "up" }} />
        <StatCard title="Taxa de Sucesso" value="98%" icon={ArrowTrendingUpIcon} trend={{ value: "+2%", direction: "up" }} />
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">Receita Mensal (R$ mil)</h2>
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-accent transition-colors">
            Exportar CSV
          </button>
        </div>
        <div className="flex items-end gap-4 h-48">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-foreground">{d.value}</span>
              <div
                className="w-full rounded-t-lg bg-primary/80 hover:bg-primary transition-colors"
                style={{ height: `${(d.value / maxValue) * 100}%` }}
              />
              <span className="text-xs text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Projetos por Setor</h3>
          <div className="space-y-3">
            {[
              { label: "Financeiro", value: 35 },
              { label: "Varejo", value: 25 },
              { label: "Saúde", value: 20 },
              { label: "Logística", value: 12 },
              { label: "Tecnologia", value: 8 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-24">{item.label}</span>
                <div className="flex-1 h-2 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.value}%` }} />
                </div>
                <span className="text-sm font-medium text-foreground w-8">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Satisfação do Cliente</h3>
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <p className="font-heading text-5xl font-bold text-primary">98%</p>
              <p className="mt-2 text-sm text-muted-foreground">Índice de satisfação geral</p>
              <p className="text-xs text-muted-foreground mt-1">Baseado em 150+ avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
