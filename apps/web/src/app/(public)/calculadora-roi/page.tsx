"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, CpuChipIcon, ShoppingCartIcon, HeartIcon, TruckIcon, BuildingOfficeIcon, AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cn } from "@/lib/utils";

const industries = [
  { id: "financeiro", label: "Financeiro", icon: BuildingOfficeIcon },
  { id: "varejo", label: "Varejo", icon: ShoppingCartIcon },
  { id: "saude", label: "Saude", icon: HeartIcon },
  { id: "logistica", label: "Logistica", icon: TruckIcon },
  { id: "tecnologia", label: "Tecnologia", icon: CpuChipIcon },
  { id: "manufatura", label: "Manufatura", icon: CubeIcon },
  { id: "educacao", label: "Educacao", icon: AcademicCapIcon },
  { id: "outros", label: "Outros", icon: CpuChipIcon },
];

const painPoints = [
  "Processos manuais ineficientes",
  "Falta de insights de dados",
  "Custos operacionais altos",
  "Baixa satisfacao do cliente",
  "Tempo de resposta lento",
  "Falta de inovacao",
];

const solutions = [
  "Automacao com IA",
  "Analytics avancado",
  "Migracao para nuvem",
  "Chatbots inteligentes",
  "Integracao de dados",
  "Seguranca avancada",
];

const stepLabels = ["Industria", "Desafios", "Solucoes", "Resultado"];

export default function CalculadoraROIPage() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState("");
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const togglePain = (p: string) =>
    setSelectedPains((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

  const toggleSolution = (s: string) =>
    setSelectedSolutions((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const canNext = step === 0 ? !!industry : step === 1 ? selectedPains.length > 0 : step === 2 ? selectedSolutions.length > 0 : false;

  const baseROI = 150000;
  const industryMultiplier: Record<string, number> = { financeiro: 2.5, varejo: 1.8, saude: 2.2, logistica: 1.6, tecnologia: 2.0, manufatura: 1.7, educacao: 1.3, outros: 1.5 };
  const roi = Math.round(baseROI * (industryMultiplier[industry] || 1.5) * (selectedPains.length * 0.3 + 1) * (selectedSolutions.length * 0.25 + 1));
  const savings = Math.round(roi * 0.4);
  const revenue = Math.round(roi * 0.35);
  const costReduction = Math.round(roi * 0.25);

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl font-bold text-foreground text-center">Calculadora de ROI</h1>
        <p className="mt-4 text-muted-foreground text-center">Descubra o retorno potencial da transformacao digital para sua empresa</p>

        {/* Progress */}
        <div className="mt-12 flex items-center justify-between mb-2">
          {stepLabels.map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium", i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
                {i + 1}
              </div>
              <span className="text-xs text-muted-foreground hidden sm:block">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-2 rounded-full bg-muted mb-10">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((step + 1) / 4) * 100}%` }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            {/* Step 0: Industry */}
            {step === 0 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Qual e o setor da sua empresa?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {industries.map((ind) => (
                    <button key={ind.id} onClick={() => setIndustry(ind.id)} className={cn("p-4 rounded-xl border-2 text-center transition-all", industry === ind.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                      <ind.icon className="w-8 h-8 mx-auto text-primary" />
                      <span className="mt-2 block text-sm font-medium text-foreground">{ind.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Pain Points */}
            {step === 1 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Quais sao seus principais desafios?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {painPoints.map((p) => (
                    <button key={p} onClick={() => togglePain(p)} className={cn("p-4 rounded-xl border-2 text-left transition-all", selectedPains.includes(p) ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                      <span className="text-sm font-medium text-foreground">{p}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Solutions */}
            {step === 2 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Quais solucoes te interessam?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutions.map((s) => (
                    <button key={s} onClick={() => toggleSolution(s)} className={cn("p-4 rounded-xl border-2 text-left transition-all", selectedSolutions.includes(s) ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                      <span className="text-sm font-medium text-foreground">{s}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Results */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Seu ROI Estimado</h2>
                  <p className="font-heading text-5xl sm:text-6xl font-bold text-primary mt-4">
                    {roi.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </p>
                  <p className="text-muted-foreground mt-2">por ano</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-6 rounded-xl border border-border bg-card text-center">
                    <p className="text-sm text-muted-foreground">Economia Estimada</p>
                    <p className="font-heading text-2xl font-bold text-foreground mt-1">{savings.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card text-center">
                    <p className="text-sm text-muted-foreground">Aumento de Receita</p>
                    <p className="font-heading text-2xl font-bold text-foreground mt-1">{revenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card text-center">
                    <p className="text-sm text-muted-foreground">Reducao de Custos</p>
                    <p className="font-heading text-2xl font-bold text-foreground mt-1">{costReduction.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Distribuicao do ROI</h3>
                  <div className="space-y-3">
                    {[{ label: "Economia", value: savings, pct: 40 }, { label: "Receita", value: revenue, pct: 35 }, { label: "Custos", value: costReduction, pct: 25 }].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-20">{item.label}</span>
                        <div className="flex-1 h-3 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${item.pct}%` }} />
                        </div>
                        <span className="text-sm font-medium text-foreground w-24 text-right">{item.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors">
                    <ArrowDownTrayIcon className="w-4 h-4" /> Baixar Relatorio
                  </button>
                  <Link href="/agendamento" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    <CalendarIcon className="w-4 h-4" /> Agendar Consultoria
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {step < 3 && (
          <div className="mt-10 flex items-center justify-between">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors">
              <ArrowLeftIcon className="w-4 h-4" /> Anterior
            </button>
            <button onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={!canNext} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors">
              {step === 2 ? "Ver Resultado" : "Proximo"} <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="mt-6 text-center">
            <button onClick={() => { setStep(0); setIndustry(""); setSelectedPains([]); setSelectedSolutions([]); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Recalcular
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
