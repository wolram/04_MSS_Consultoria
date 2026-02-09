"use client";

import { FolderOpenIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon, ClockIcon, PlusIcon, PaperAirplaneIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";
import { StatCard } from "@/components/dashboard/stat-card";
import Link from "next/link";

const activities = [
  { text: "Projeto 'Banco Digital - IA' atualizado para Em Andamento", time: "2h atrás" },
  { text: "Nova mensagem de Ana Oliveira", time: "3h atrás" },
  { text: "Fatura #INV-001 marcada como paga", time: "5h atrás" },
  { text: "Documento 'Proposta Varejo' enviado", time: "1 dia atrás" },
  { text: "Reunião agendada para amanhã às 10:00", time: "1 dia atrás" },
];

export default function PainelPage() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Projetos Ativos"
          value="5"
          icon={FolderOpenIcon}
          trend={{ value: "+12%", direction: "up" }}
        />
        <StatCard
          title="Receita Mensal"
          value="R$ 125.000"
          icon={CurrencyDollarIcon}
          trend={{ value: "+8%", direction: "up" }}
        />
        <StatCard
          title="Mensagens"
          value="12"
          description="3 novas"
          icon={ChatBubbleLeftRightIcon}
          trend={{ value: "3 novas", direction: "neutral" }}
        />
        <StatCard
          title="Próxima Entrega"
          value="5 dias"
          icon={ClockIcon}
          description="Projeto Banco Digital"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
            Atividade Recente
          </h2>
          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
            Ações Rápidas
          </h2>
          <div className="space-y-3">
            <Link
              href="/projetos"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <PlusIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Novo Projeto</span>
            </Link>
            <Link
              href="/mensagens"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <PaperAirplaneIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Enviar Mensagem</span>
            </Link>
            <Link
              href="/faturas"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ReceiptPercentIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Ver Faturas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
