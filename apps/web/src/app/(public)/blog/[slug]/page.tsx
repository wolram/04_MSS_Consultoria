import Link from "next/link";
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";

const post = {
  title: "Como a IA Generativa esta Transformando Empresas em 2026",
  category: "Inteligencia Artificial",
  date: "05 Fev 2026",
  readTime: "8 min",
  author: "Ana Oliveira",
  content: `
A inteligencia artificial generativa esta revolucionando a forma como as empresas operam no Brasil e no mundo. Neste artigo, exploramos as principais tendencias e casos de uso que estao transformando negocios em 2026.

## O Cenario Atual

Com o avanco dos modelos de linguagem e geracao de conteudo, empresas de todos os tamanhos estao encontrando formas inovadoras de aplicar IA generativa em seus processos. Desde a automacao de atendimento ao cliente ate a geracao de relatorios analiticos, as possibilidades sao vastas.

## Casos de Uso Principais

### 1. Atendimento ao Cliente
Chatbots inteligentes agora conseguem resolver 80% das solicitacoes sem intervencao humana, oferecendo respostas personalizadas e contextualizadas.

### 2. Geracao de Conteudo
Equipes de marketing estao usando IA para criar rascunhos de campanhas, posts para redes sociais e ate relatorios tecnicos, aumentando a produtividade em 3x.

### 3. Analise de Documentos
Sistemas de IA processam contratos, propostas e documentos legais em minutos, extraindo informacoes relevantes e identificando riscos.

### 4. Desenvolvimento de Software
Assistentes de codigo alimentados por IA estao acelerando o desenvolvimento de software em 40%, permitindo que equipes entreguem mais com menos.

## Como Implementar

A implementacao bem-sucedida de IA generativa requer uma abordagem estruturada:

1. **Identificar casos de uso** com maior impacto no negocio
2. **Avaliar dados disponiveis** e qualidade dos mesmos
3. **Escolher a tecnologia adequada** para cada caso
4. **Pilotar em escala pequena** antes de expandir
5. **Medir resultados** continuamente e iterar

## Conclusao

A IA generativa nao e mais uma promessa futura - e uma realidade presente que esta gerando resultados mensuravies para empresas que a adotam de forma estrategica.
  `,
};

export default function BlogPostPage() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeftIcon className="w-4 h-4" /> Voltar para o Blog
        </Link>

        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          {post.category}
        </span>

        <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Por {post.author}</span>
          <span className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><ClockIcon className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>

        <div className="mt-8 h-64 rounded-2xl bg-muted border border-border flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Imagem de capa</span>
        </div>

        <div className="mt-12 prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">{paragraph.replace("### ", "")}</h3>;
            }
            if (paragraph.match(/^\d\./)) {
              return <p key={i} className="text-muted-foreground leading-relaxed my-2">{paragraph}</p>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed my-4">{paragraph}</p>;
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-accent/50 border border-border text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Quer implementar IA na sua empresa?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Fale com nossos especialistas e descubra como podemos ajudar.
          </p>
          <Link
            href="/agendamento"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Agendar Consultoria
          </Link>
        </div>
      </article>
    </div>
  );
}
