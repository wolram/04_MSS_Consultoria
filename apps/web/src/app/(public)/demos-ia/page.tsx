"use client";

import { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, CpuChipIcon, UserIcon, PlayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

// ---- Chatbot Demo ----
const botResponses: Record<string, string> = {
  servicos: "Oferecemos: Inteligência Artificial, Análise de Dados, Transformação em Nuvem, Automação de Processos, Estratégia Digital e Segurança & Compliance. Qual te interessa mais?",
  preco: "Nossos projetos variam de R$50.000 a R$500.000 dependendo do escopo. Que tal agendar uma consultoria gratuita para receber um orçamento personalizado?",
  ia: "Trabalhamos com Machine Learning, NLP, Visão Computacional e IA Generativa. Já implementamos modelos que atingiram 94%+ de acurácia. Quer saber mais sobre alguma área específica?",
  cloud: "Realizamos migrações para AWS, Azure e GCP com 99.99% de uptime. Nosso último projeto de migração economizou R$5M/ano para o cliente.",
  dados: "Criamos dashboards interativos, pipelines de dados e modelos preditivos. Uma cultura data-driven começa com a governança correta dos dados.",
};
const defaultResponse = "Interessante! Posso conectar você com um dos nossos especialistas. Gostaria de agendar uma consultoria gratuita?";

function ChatbotDemo() {
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Olá! Sou o assistente virtual da MSS. Como posso ajudar?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      const key = Object.keys(botResponses).find((k) => lower.includes(k));
      setMessages((m) => [...m, { role: "bot", text: key ? botResponses[key] : defaultResponse }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden max-w-lg mx-auto">
      <div className="p-4 border-b border-border bg-primary/5 flex items-center gap-2">
        <CpuChipIcon className="w-5 h-5 text-primary" />
        <span className="font-medium text-foreground text-sm">Assistente MSS</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-green-500" />
      </div>
      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={cn("flex gap-2", msg.role === "user" ? "justify-end" : "justify-start")}>
            {msg.role === "bot" && <CpuChipIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />}
            <div className={cn("max-w-[75%] px-3 py-2 rounded-xl text-sm", msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-foreground")}>
              {msg.text}
            </div>
            {msg.role === "user" && <UserIcon className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />}
          </div>
        ))}
        {typing && (
          <div className="flex gap-2">
            <CpuChipIcon className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="px-3 py-2 rounded-xl bg-accent text-foreground text-sm">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.4s]" />
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div className="p-3 border-t border-border flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite sua pergunta..."
          className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button onClick={handleSend} className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
          <PaperAirplaneIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ---- Workflow Builder ----
const workflows = [
  { name: "Automação de Atendimento", nodes: ["Ticket Recebido", "Classificação IA", "Roteamento", "Resposta Automática"] },
  { name: "Pipeline de Dados", nodes: ["Coleta de Dados", "Limpeza & ETL", "Análise", "Dashboard"] },
  { name: "Onboarding", nodes: ["Cadastro", "Verificação", "Treinamento", "Ativação"] },
  { name: "Aprovação de Documentos", nodes: ["Upload", "OCR & Extração", "Validação", "Aprovação"] },
];

function WorkflowBuilder() {
  const [active, setActive] = useState(0);
  const [animatedNode, setAnimatedNode] = useState(0);

  useEffect(() => {
    setAnimatedNode(0);
    const interval = setInterval(() => {
      setAnimatedNode((n) => (n + 1) % workflows[active].nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {workflows.map((w, i) => (
          <button key={i} onClick={() => setActive(i)} className={cn("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", active === i ? "bg-primary text-primary-foreground" : "bg-accent text-foreground hover:bg-accent/80")}>
            {w.name}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {workflows[active].nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={cn("px-4 py-3 rounded-xl border-2 text-sm font-medium text-center min-w-[120px] transition-all duration-500", animatedNode >= i ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground")}>
              {node}
            </div>
            {i < workflows[active].nodes.length - 1 && (
              <ArrowRightIcon className={cn("w-4 h-4 transition-colors duration-500", animatedNode > i ? "text-primary" : "text-muted-foreground/30")} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Before/After ----
const scenarios = [
  {
    name: "Atendimento",
    before: ["Tempo de espera: 15+ minutos", "Resolução: apenas horário comercial", "Satisfação: 65%", "Custo: R$50/atendimento"],
    after: ["Tempo de espera: <30 segundos", "Resolução: 24/7 automatizada", "Satisfação: 92%", "Custo: R$5/atendimento"],
  },
  {
    name: "Relatórios",
    before: ["Criação manual: 8 horas", "Frequência: mensal", "Erros: 15%+", "Formato: planilhas estáticas"],
    after: ["Geração automática: 5 minutos", "Frequência: tempo real", "Erros: <1%", "Formato: dashboards interativos"],
  },
  {
    name: "Processos",
    before: ["80% tarefas manuais", "Tempo de ciclo: 5 dias", "Gargalos frequentes", "Sem visibilidade"],
    after: ["80% tarefas automatizadas", "Tempo de ciclo: 4 horas", "Fluxo contínuo", "Monitoramento em tempo real"],
  },
];

function BeforeAfter() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex gap-2 mb-6 justify-center">
        {scenarios.map((s, i) => (
          <button key={i} onClick={() => setActiveScenario(i)} className={cn("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", activeScenario === i ? "bg-primary text-primary-foreground" : "bg-accent text-foreground hover:bg-accent/80")}>
            {s.name}
          </button>
        ))}
      </div>
      <div className="relative rounded-2xl border border-border overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-6 bg-red-50/50 border-r border-border">
            <h4 className="font-heading font-semibold text-red-700 mb-4">Antes</h4>
            <ul className="space-y-2">
              {scenarios[activeScenario].before.map((item, i) => (
                <li key={i} className="text-sm text-red-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-green-50/50">
            <h4 className="font-heading font-semibold text-green-700 mb-4">Depois</h4>
            <ul className="space-y-2">
              {scenarios[activeScenario].after.map((item, i) => (
                <li key={i} className="text-sm text-green-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Main Page ----
export default function DemosIAPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-center">
          Demos de Inteligência Artificial
        </h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Experimente nossas soluções de IA em ação
        </p>

        <div className="mt-20 space-y-24">
          {/* Chatbot */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-2">Assistente Virtual Inteligente</h2>
            <p className="text-muted-foreground text-center mb-8">Converse com nosso chatbot e veja como a IA pode melhorar o atendimento</p>
            <ChatbotDemo />
          </section>

          {/* Workflow */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-2">Construtor de Workflows</h2>
            <p className="text-muted-foreground text-center mb-8">Visualize como automatizamos processos empresariais</p>
            <WorkflowBuilder />
          </section>

          {/* Before/After */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-2">Antes & Depois da Transformação</h2>
            <p className="text-muted-foreground text-center mb-8">Compare os resultados antes e depois da implementação</p>
            <BeforeAfter />
          </section>
        </div>
      </div>
    </div>
  );
}
