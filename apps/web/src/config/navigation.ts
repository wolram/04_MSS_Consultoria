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


import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Receipt,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";

export interface DashboardNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Painel", href: "/painel", icon: LayoutDashboard },
  { label: "Projetos", href: "/projetos", icon: FolderOpen },
  { label: "Documentos", href: "/documentos", icon: FileText },
  { label: "Faturas", href: "/faturas", icon: Receipt },
  { label: "Mensagens", href: "/mensagens", icon: MessageSquare },
  { label: "Analíticos", href: "/analiticos", icon: BarChart3 },
  { label: "Configurações", href: "/configuracoes", icon: Settings },
];
