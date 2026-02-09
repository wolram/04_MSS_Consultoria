import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

const services: Record<string, { title: string; description: string; features: string[]; benefits: string[] }> = {
  "inteligencia-artificial": {
    title: "Inteligencia Artificial",
    description: "Implementamos solucoes de IA que transformam dados em decisoes inteligentes. Desde modelos de machine learning ate automacao cognitiva, ajudamos sua empresa a aproveitar o poder da inteligencia artificial.",
    features: ["Machine Learning & Deep Learning", "Processamento de Linguagem Natural (NLP)", "Visao Computacional", "IA Generativa e Chatbots", "Sistemas de Recomendacao", "Deteccao de Anomalias"],
    benefits: ["Reducao de 60% em processos manuais", "Decisoes baseadas em dados em tempo real", "Aumento de 40% na eficiencia operacional", "ROI mensuravel em 90 dias"],
  },
  "analise-de-dados": {
    title: "Analise de Dados",
    description: "Transformamos dados brutos em insights acionaveis. Criamos dashboards, pipelines de dados e modelos preditivos que permitem tomadas de decisao embasadas.",
    features: ["Business Intelligence (BI)", "Data Warehousing", "Dashboards Interativos", "Analise Preditiva", "Data Governance", "ETL & Pipelines de Dados"],
    benefits: ["Visibilidade 360 do negocio", "Previsoes com 90%+ de acuracia", "Reducao de custos com dados centralizados", "Cultura data-driven implementada"],
  },
  "transformacao-em-nuvem": {
    title: "Transformacao em Nuvem",
    description: "Migramos sua infraestrutura para a nuvem com seguranca e eficiencia. Projetamos arquiteturas cloud-native que escalam com seu negocio.",
    features: ["Migracao para Cloud (AWS, Azure, GCP)", "Arquitetura Cloud-Native", "Kubernetes & Containers", "DevOps & CI/CD", "Otimizacao de Custos", "Disaster Recovery"],
    benefits: ["99.99% de disponibilidade", "Reducao de 40% em custos de infra", "Escalabilidade automatica", "Deploy 10x mais rapido"],
  },
  "automacao-de-processos": {
    title: "Automacao de Processos",
    description: "Automatizamos processos repetitivos com RPA e workflows inteligentes, liberando sua equipe para focar no que realmente importa.",
    features: ["Robotic Process Automation (RPA)", "Workflows Automatizados", "Integracao de Sistemas", "Automacao de Documentos", "Chatbots de Atendimento", "Monitoramento Inteligente"],
    benefits: ["80% de reducao em tarefas manuais", "Erros operacionais proximos a zero", "ROI em 60 dias", "Satisfacao da equipe aumentada"],
  },
  "estrategia-digital": {
    title: "Estrategia Digital",
    description: "Definimos o roadmap da sua transformacao digital, alinhando tecnologia com objetivos de negocio para maximizar resultados.",
    features: ["Roadmap de Transformacao", "Governanca de Dados", "Change Management", "Assessment de Maturidade Digital", "Design Thinking", "OKRs e Metricas"],
    benefits: ["Visao clara de 3-5 anos", "Alinhamento entre TI e negocio", "Priorizacao baseada em impacto", "Cultura de inovacao instalada"],
  },
  "seguranca-compliance": {
    title: "Seguranca & Compliance",
    description: "Protegemos seus dados e garantimos conformidade regulatoria. Implementamos frameworks de seguranca robustos e processos de compliance.",
    features: ["LGPD & GDPR Compliance", "Auditoria de Seguranca", "Pentest & Vulnerability Assessment", "SOC 2 & ISO 27001", "Data Loss Prevention", "Identity & Access Management"],
    benefits: ["100% de conformidade regulatoria", "Reducao de riscos ciberneticos", "Confianca dos clientes aumentada", "Multas e sancoes evitadas"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  return { title: service?.title || "Servico", description: service?.description };
}

export default async function ServicoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug] || services["inteligencia-artificial"];

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/servicos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeftIcon className="w-4 h-4" /> Voltar para Servicos
        </Link>

        <h1 className="font-heading text-4xl font-bold text-foreground">{service.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{service.description}</p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">O que oferecemos</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Beneficios</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-accent/50 border border-border text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            Pronto para comecar?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Agende uma consultoria gratuita e descubra como podemos ajudar.
          </p>
          <Link
            href="/agendamento"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Agendar Consultoria
          </Link>
        </div>
      </div>
    </div>
  );
}
