"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Marlow Silva",
    role: "CEO & Founder",
    bio: "Especialista em estratégia digital com 15+ anos de experiência em transformação de negócios.",
    initials: "MS",
  },
  {
    name: "Ana Oliveira",
    role: "CTO",
    bio: "PhD em IA, líder técnica com foco em machine learning e soluções de dados em escala.",
    initials: "AO",
  },
  {
    name: "Carlos Santos",
    role: "Head of Data",
    bio: "Engenheiro de dados sênior com experiência em Big Data, pipelines e arquiteturas analíticas.",
    initials: "CS",
  },
  {
    name: "Julia Costa",
    role: "Head of Cloud",
    bio: "Arquiteta cloud certificada AWS e Azure com foco em migrações e infraestrutura escalável.",
    initials: "JC",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Nossa Equipe
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Especialistas em transformação digital
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="font-heading text-2xl font-bold text-primary">
                  {member.initials}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`LinkedIn de ${member.name}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
