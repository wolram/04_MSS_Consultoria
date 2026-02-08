import Link from "next/link";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { Newsletter } from "./newsletter";

const footerLinks = {
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Equipe", href: "/equipe" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
  servicos: [
    { label: "Inteligência Artificial", href: "/servicos/inteligencia-artificial" },
    { label: "Análise de Dados", href: "/servicos/analise-de-dados" },
    { label: "Transformação em Nuvem", href: "/servicos/transformacao-em-nuvem" },
    { label: "Automação de Processos", href: "/servicos/automacao-de-processos" },
    { label: "Estratégia Digital", href: "/servicos/estrategia-digital" },
    { label: "Segurança & Compliance", href: "/servicos/seguranca-compliance" },
  ],
  recursos: [
    { label: "Casos de Sucesso", href: "/casos" },
    { label: "Calculadora ROI", href: "/calculadora-roi" },
    { label: "Demos de IA", href: "/demos-ia" },
    { label: "Agendamento", href: "/agendamento" },
    { label: "Galeria de Estilos", href: "/galeria-estilos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
        <Newsletter />
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.state}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{siteConfig.links.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{siteConfig.links.email}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicos */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2.5">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2.5">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
