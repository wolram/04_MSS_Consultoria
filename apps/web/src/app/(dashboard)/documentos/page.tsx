"use client";

import { useState } from "react";
import { DocumentTextIcon, DocumentIcon, ArrowUpTrayIcon, Squares2X2Icon, ListBulletIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const documents = [
  { name: "Proposta Banco Digital.pdf", type: "pdf", size: "2.4 MB", date: "05/02/2026" },
  { name: "Relatório Mensal Jan.xlsx", type: "xlsx", size: "1.8 MB", date: "01/02/2026" },
  { name: "Contrato MSS-Varejo.pdf", type: "pdf", size: "540 KB", date: "28/01/2026" },
  { name: "Especificação Técnica IA.docx", type: "docx", size: "3.1 MB", date: "25/01/2026" },
  { name: "Dashboard Métricas.xlsx", type: "xlsx", size: "890 KB", date: "20/01/2026" },
  { name: "Apresentação Cloud.pdf", type: "pdf", size: "5.2 MB", date: "15/01/2026" },
  { name: "Plano de Migração.docx", type: "docx", size: "1.2 MB", date: "10/01/2026" },
  { name: "Orçamento Q1 2026.xlsx", type: "xlsx", size: "420 KB", date: "05/01/2026" },
];

const typeIcons: Record<string, typeof DocumentTextIcon> = {
  pdf: DocumentTextIcon,
  xlsx: TableCellsIcon,
  docx: DocumentIcon,
};

const typeColors: Record<string, string> = {
  pdf: "bg-red-100 text-red-600",
  xlsx: "bg-green-100 text-green-600",
  docx: "bg-blue-100 text-blue-600",
};

export default function DocumentosPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={cn("p-2 rounded-lg transition-colors", view === "grid" ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent")}
          >
            <Squares2X2Icon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={cn("p-2 rounded-lg transition-colors", view === "list" ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent")}
          >
            <ListBulletIcon className="w-4 h-4" />
          </button>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          <ArrowUpTrayIcon className="w-4 h-4" />
          Upload
        </button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {documents.map((doc, i) => {
            const Icon = typeIcons[doc.type] || File;
            return (
              <div key={i} className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", typeColors[doc.type] || "bg-muted")}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground truncate">{doc.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{doc.size} &middot; {doc.date}</p>
                <button className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  <ArrowDownTrayIcon className="w-3 h-3" /> Baixar
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Nome</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Tipo</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Tamanho</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Data</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, i) => {
                const Icon = typeIcons[doc.type] || File;
                return (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{doc.name}</span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground uppercase">{doc.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{doc.size}</td>
                    <td className="px-4 py-3 text-muted-foreground">{doc.date}</td>
                    <td className="px-4 py-3">
                      <button className="text-primary hover:underline text-xs">Baixar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
