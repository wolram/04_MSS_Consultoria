export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const publicNavItems: NavItem[] = [
  { title: "Início", href: "/" },
  {
    title: "Serviços",
    href: "/servicos",
    children: [
      {
        title: "Consultoria em IA",
        href: "/servicos/consultoria-ia",
        description: "Estratégias de inteligência artificial para o seu negócio",
      },
      {
        title: "Automação de Processos",
        href: "/servicos/automacao",
        description: "Automatize tarefas repetitivas e ganhe eficiência",
      },
      {
        title: "Análise de Dados",
        href: "/servicos/analise-dados",
        description: "Transforme dados em insights acionáveis",
      },
      {
        title: "Desenvolvimento Web",
        href: "/servicos/desenvolvimento-web",
        description: "Aplicações web modernas e escaláveis",
      },
      {
        title: "Cloud & DevOps",
        href: "/servicos/cloud-devops",
        description: "Infraestrutura na nuvem e práticas DevOps",
      },
      {
        title: "Segurança Digital",
        href: "/servicos/seguranca-digital",
        description: "Proteja seus ativos digitais",
      },
    ],
  },
  { title: "Sobre", href: "/sobre" },
  { title: "Blog", href: "/blog" },
  { title: "Casos", href: "/casos" },
  { title: "Contato", href: "/contato" },
];

export const footerLinks = {
  empresa: [
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Equipe", href: "/equipe" },
    { title: "Blog", href: "/blog" },
    { title: "Contato", href: "/contato" },
  ],
  servicos: [
    { title: "Consultoria em IA", href: "/servicos/consultoria-ia" },
    { title: "Automação de Processos", href: "/servicos/automacao" },
    { title: "Análise de Dados", href: "/servicos/analise-dados" },
    { title: "Desenvolvimento Web", href: "/servicos/desenvolvimento-web" },
    { title: "Cloud & DevOps", href: "/servicos/cloud-devops" },
    { title: "Segurança Digital", href: "/servicos/seguranca-digital" },
  ],
  recursos: [
    { title: "Casos de Sucesso", href: "/casos" },
    { title: "Calculadora ROI", href: "/calculadora-roi" },
    { title: "Demos IA", href: "/demos-ia" },
    { title: "Agendamento", href: "/agendamento" },
  ],
  legal: [
    { title: "Política de Privacidade", href: "/privacidade" },
    { title: "Termos de Uso", href: "/termos" },
    { title: "Política de Cookies", href: "/cookies" },
  ],
} as const;


import type { ComponentType } from "react";
import {
  Squares2X2Icon,
  FolderOpenIcon,
  DocumentTextIcon,
  ReceiptPercentIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export interface DashboardNavItem {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Painel", href: "/painel", icon: Squares2X2Icon },
  { label: "Projetos", href: "/projetos", icon: FolderOpenIcon },
  { label: "Documentos", href: "/documentos", icon: DocumentTextIcon },
  { label: "Faturas", href: "/faturas", icon: ReceiptPercentIcon },
  { label: "Mensagens", href: "/mensagens", icon: ChatBubbleLeftRightIcon },
  { label: "Analíticos", href: "/analiticos", icon: ChartBarIcon },
  { label: "Configurações", href: "/configuracoes", icon: Cog6ToothIcon },
];
