"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowDownTrayIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const invoice = {
  numero: "INV-001",
  status: "Paga",
  emissao: "01/01/2026",
  vencimento: "31/01/2026",
  pago: "28/01/2026",
  cliente: { nome: "Banco Digital S.A.", cnpj: "12.345.678/0001-90", endereco: "Av. Faria Lima, 1000 - SP" },
  items: [
    { descricao: "Consultoria em IA - Fase 1", qtd: 1, valor: 45000, total: 45000 },
    { descricao: "Desenvolvimento de Modelo ML", qtd: 1, valor: 30000, total: 30000 },
    { descricao: "Treinamento da Equipe", qtd: 2, valor: 5000, total: 10000 },
  ],
  subtotal: 85000,
  imposto: 0,
  total: 85000,
};

export default function FaturaDetailPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <Link href="/faturas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeftIcon className="w-4 h-4" /> Voltar para Faturas
      </Link>

      <div className="rounded-2xl border border-border bg-card p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">{invoice.numero}</h1>
            <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
              {invoice.status}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors">
              <ArrowDownTrayIcon className="w-4 h-4" /> Baixar PDF
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              <PaperAirplaneIcon className="w-4 h-4" /> Enviar Fatura
            </button>
          </div>
        </div>

        {/* Dates & Client */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground">Emissão</p>
            <p className="font-medium text-foreground">{invoice.emissao}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Vencimento</p>
            <p className="font-medium text-foreground">{invoice.vencimento}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pago em</p>
            <p className="font-medium text-foreground">{invoice.pago}</p>
          </div>
        </div>

        <div className="mb-8 pb-8 border-b border-border">
          <p className="text-sm text-muted-foreground mb-1">Cliente</p>
          <p className="font-medium text-foreground">{invoice.cliente.nome}</p>
          <p className="text-sm text-muted-foreground">{invoice.cliente.cnpj}</p>
          <p className="text-sm text-muted-foreground">{invoice.cliente.endereco}</p>
        </div>

        {/* Line Items */}
        <table className="w-full text-sm mb-8">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-medium text-muted-foreground">Descrição</th>
              <th className="text-center py-3 font-medium text-muted-foreground w-20">Qtd</th>
              <th className="text-right py-3 font-medium text-muted-foreground w-32">Valor Unit.</th>
              <th className="text-right py-3 font-medium text-muted-foreground w-32">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-3 text-foreground">{item.descricao}</td>
                <td className="py-3 text-center text-muted-foreground">{item.qtd}</td>
                <td className="py-3 text-right text-muted-foreground">
                  {item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </td>
                <td className="py-3 text-right font-medium text-foreground">
                  {item.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">{invoice.subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Impostos</span>
              <span className="text-foreground">{invoice.imposto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
              <span className="text-foreground">Total</span>
              <span className="text-primary">{invoice.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
