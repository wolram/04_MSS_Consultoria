import { NextResponse } from "next/server";

const posts = [
  { slug: "ia-generativa-empresas", title: "Como a IA Generativa esta Transformando Empresas em 2026", category: "Inteligencia Artificial", date: "2026-02-05", published: true },
  { slug: "dados-cultura-data-driven", title: "Construindo uma Cultura Data-Driven: Guia Pratico", category: "Dados", date: "2026-01-28", published: true },
  { slug: "migracao-cloud-sem-downtime", title: "Migracao para Cloud sem Downtime: Estrategias Comprovadas", category: "Cloud", date: "2026-01-20", published: true },
  { slug: "automacao-rpa-roi", title: "RPA: Calculando o ROI Real da Automacao de Processos", category: "Automacao", date: "2026-01-15", published: true },
  { slug: "lgpd-ia-compliance", title: "LGPD e IA: Como Manter Compliance em Projetos de ML", category: "Seguranca", date: "2026-01-10", published: true },
];

export async function GET() {
  return NextResponse.json({ posts });
}
