"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Utilizamos as tecnologias mais avançadas para criar soluções que transformam negócios.",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description:
      "Focamos em métricas e ROI mensurável para garantir o sucesso de cada projeto.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Trabalhamos lado a lado com nossos clientes em cada etapa da jornada digital.",
  },
];


export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Sobre a MSS Consultoria
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Somos uma consultoria especializada em transformação digital, combinando
            inteligência artificial, análise de dados e computação em nuvem para
            impulsionar o crescimento dos nossos clientes.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
