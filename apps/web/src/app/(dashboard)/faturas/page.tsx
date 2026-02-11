"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/dashboard/data-table";

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-100 text-gray-700",
  SENT: "bg-blue-100 text-blue-700",
  PAID: "bg-green-100 text-green-700",
  OVERDUE: "bg-red-100 text-red-700",
};

const statusLabels: Record<string, string> = {
  DRAFT: "Rascunho",
  SENT: "Enviada",
  PAID: "Paga",
  OVERDUE: "Vencida",
};

const invoices = [
  { id: "1", numero: "INV-001", cliente: "Banco Digital S.A.", valor: "R$ 85.000", status: "PAID", emissao: "01/01/2026", vencimento: "31/01/2026" },
  { id: "2", numero: "INV-002", cliente: "Rede Varejista Ltda.", valor: "R$ 62.000", status: "SENT", emissao: "15/01/2026", vencimento: "14/02/2026" },
  { id: "3", numero: "INV-003", cliente: "Hospital São Paulo", valor: "R$ 120.000", status: "OVERDUE", emissao: "01/12/2025", vencimento: "31/12/2025" },
  { id: "4", numero: "INV-004", cliente: "Logística Express", valor: "R$ 45.000", status: "DRAFT", emissao: "05/02/2026", vencimento: "05/03/2026" },
  { id: "5", numero: "INV-005", cliente: "TechCorp Brasil", valor: "R$ 180.000", status: "PAID", emissao: "10/01/2026", vencimento: "09/02/2026" },
];

const tabs = [
  { label: "Todas", filter: "all" },
  { label: "Pendentes", filter: "pending" },
  { label: "Pagas", filter: "paid" },
  { label: "Vencidas", filter: "overdue" },
];

export default function FaturasPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    return invoices.filter((inv) => {
      if (activeTab === "pending") return inv.status === "SENT" || inv.status === "DRAFT";
      if (activeTab === "paid") return inv.status === "PAID";
      if (activeTab === "overdue") return inv.status === "OVERDUE";
      return true;
    });
  }, [activeTab]);

  const columns = useMemo(() => [
    { key: "numero", label: "Número" },
    { key: "cliente", label: "Cliente" },
    { key: "valor", label: "Valor" },
    {
      key: "status",
      label: "Status",
      render: (row: (typeof invoices)[0]) => (
        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", statusColors[row.status])}>
          {statusLabels[row.status]}
        </span>
      ),
    },
    { key: "emissao", label: "Emissão" },
    { key: "vencimento", label: "Vencimento" },
  ], []);

  return (
    <div className="space-y-6">
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

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={(row) => router.push(`/faturas/${row.id}`)}
      />
    </div>
  );
}
