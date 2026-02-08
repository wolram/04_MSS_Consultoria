"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, BarChart3, Cloud, Cog, Target, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Implementação de modelos de IA, machine learning e automação inteligente",
    slug: "inteligencia-artificial",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Business intelligence, dashboards e insights acionáveis para tomada de decisão",
    slug: "analise-de-dados",
  },
  {
    icon: Cloud,
    title: "Transformação em Nuvem",
    description: "Migração, arquitetura cloud-native e otimização de infraestrutura",
    slug: "transformacao-em-nuvem",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description: "RPA, workflows automatizados e integração de sistemas",
    slug: "automacao-de-processos",
  },
  {
    icon: Target,
    title: "Estratégia Digital",
    description: "Roadmap de transformação, governança de dados e change management",
    slug: "estrategia-digital",
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Proteção de dados, LGPD, auditoria e conformidade regulatória",
    slug: "seguranca-compliance",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluções completas para sua transformação digital
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/servicos/${service.slug}`}
                className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
