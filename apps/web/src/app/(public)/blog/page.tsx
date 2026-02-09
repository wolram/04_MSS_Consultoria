import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre transformacao digital, IA, dados e tecnologia.",
};

const posts = [
  {
    slug: "ia-generativa-empresas",
    title: "Como a IA Generativa esta Transformando Empresas em 2026",
    excerpt: "Descubra como empresas brasileiras estao usando IA generativa para inovar processos, criar conteudo e melhorar a experiencia do cliente.",
    category: "Inteligencia Artificial",
    date: "05 Fev 2026",
    readTime: "8 min",
  },
  {
    slug: "dados-cultura-data-driven",
    title: "Construindo uma Cultura Data-Driven: Guia Pratico",
    excerpt: "Passo a passo para implementar uma cultura orientada a dados na sua organizacao, desde a governanca ate a democratizacao de insights.",
    category: "Dados",
    date: "28 Jan 2026",
    readTime: "6 min",
  },
  {
    slug: "migracao-cloud-sem-downtime",
    title: "Migracao para Cloud sem Downtime: Estrategias Comprovadas",
    excerpt: "Aprenda as melhores praticas para migrar sua infraestrutura para a nuvem mantendo 99.99% de disponibilidade.",
    category: "Cloud",
    date: "20 Jan 2026",
    readTime: "10 min",
  },
  {
    slug: "automacao-rpa-roi",
    title: "RPA: Calculando o ROI Real da Automacao de Processos",
    excerpt: "Framework pratico para calcular o retorno sobre investimento de projetos de automacao robotica de processos.",
    category: "Automacao",
    date: "15 Jan 2026",
    readTime: "7 min",
  },
  {
    slug: "lgpd-ia-compliance",
    title: "LGPD e IA: Como Manter Compliance em Projetos de Machine Learning",
    excerpt: "Guia completo sobre como garantir conformidade com a LGPD ao implementar solucoes de inteligencia artificial.",
    category: "Seguranca",
    date: "10 Jan 2026",
    readTime: "9 min",
  },
];

const categories = ["Todos", "Inteligencia Artificial", "Dados", "Cloud", "Automacao", "Seguranca"];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-center">Blog</h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Insights, tutoriais e tendencias sobre transformacao digital
        </p>

        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:bg-accent cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Imagem do artigo</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler mais <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
