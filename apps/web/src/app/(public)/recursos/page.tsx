import Link from "next/link";
import { Download, FileText, BarChart3, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos",
  description: "E-books, whitepapers e ferramentas gratuitas para transformacao digital.",
};

const resources = [
  { title: "Guia: Transformacao Digital 2026", description: "E-book completo com roadmap e melhores praticas", type: "E-book", icon: BookOpen },
  { title: "Template: Business Case para IA", description: "Planilha pronta para justificar investimentos em IA", type: "Template", icon: FileText },
  { title: "Whitepaper: ROI da Automacao", description: "Estudo detalhado com dados de 50+ empresas brasileiras", type: "Whitepaper", icon: BarChart3 },
  { title: "Checklist: Migracao para Cloud", description: "Lista completa de verificacao para migracao segura", type: "Checklist", icon: FileText },
  { title: "Infografico: LGPD e IA", description: "Resumo visual das obrigacoes de compliance", type: "Infografico", icon: BarChart3 },
  { title: "Guia: Data Governance", description: "Framework pratico para governanca de dados", type: "E-book", icon: BookOpen },
];

export default function RecursosPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-center">Recursos</h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Materiais gratuitos para ajudar na sua jornada de transformacao digital
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block mt-4 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                {resource.type}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{resource.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <Download className="w-4 h-4" /> Baixar gratuitamente
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Ferramentas Interativas</h2>
          <p className="mt-2 text-muted-foreground">Experimente nossas ferramentas online</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/calculadora-roi" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Calculadora de ROI
            </Link>
            <Link href="/demos-ia" className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors">
              Demos de IA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
