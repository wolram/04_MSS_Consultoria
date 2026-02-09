import { AboutSection } from "@/components/landing/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a MSS Consultoria - especialistas em transformação digital, IA e dados.",
};

export default function SobrePage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Nossa História</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            A MSS Consultoria nasceu da visão de que toda empresa, independente do tamanho,
            merece acesso às melhores tecnologias e estratégias de transformação digital.
          </p>
          <p className="mt-4">
            Desde nossa fundação, já ajudamos mais de 50 empresas em diversos setores a
            implementar soluções de IA, otimizar seus processos de dados e migrar para
            infraestruturas em nuvem de forma segura e eficiente.
          </p>
          <p className="mt-4">
            Nossa abordagem combina consultoria estratégica com execução técnica, garantindo
            que cada projeto entregue resultados mensuráveis e ROI comprovado.
          </p>
        </div>
      </section>
    </div>
  );
}
