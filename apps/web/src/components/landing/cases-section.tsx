"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    company: "Banco Digital",
    industry: "Fintech",
    description: "Redução de 60% no tempo de processamento com IA",
    metric: "-60% tempo",
  },
  {
    company: "Rede Varejista",
    industry: "Varejo",
    description: "Aumento de 45% nas vendas com análise preditiva",
    metric: "+45% vendas",
  },
  {
    company: "Hospital São Paulo",
    industry: "Saúde",
    description: "Otimização de 35% na gestão de leitos",
    metric: "+35% eficiência",
  },
  {
    company: "Logística Express",
    industry: "Logística",
    description: "Economia de R$5M/ano com automação de rotas",
    metric: "R$5M economia",
  },
  {
    company: "TechCorp Brasil",
    industry: "Tecnologia",
    description: "Migração cloud com 99.99% de uptime",
    metric: "99.99% uptime",
  },
];

export function CasesSection() {
  return (
    <section id="casos" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Casos de Sucesso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resultados reais para empresas reais
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {item.industry}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {item.company}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-lg font-heading font-bold text-primary">
                  {item.metric}
                </span>
                <Link
                  href="/casos"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ver caso <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
          >
            Ver todos os casos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
