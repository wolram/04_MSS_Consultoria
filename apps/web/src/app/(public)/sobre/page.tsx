import { AboutSection } from "@/components/landing/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheca a MSS Consultoria - especialistas em transformacao digital, IA e dados.",
};

export default function SobrePage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-center">
          Sobre a MSS Consultoria
        </h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          Fundada com a missao de democratizar a transformacao digital, a MSS Consultoria
          combina expertise em inteligencia artificial, ciencia de dados e computacao em nuvem
          para entregar resultados excepcionais aos nossos clientes.
        </p>
      </div>
      <AboutSection />
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Nossa Historia</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            A MSS Consultoria nasceu da visao de que toda empresa, independente do tamanho,
            merece acesso as melhores tecnologias e estrategias de transformacao digital.
          </p>
          <p className="mt-4">
            Desde nossa fundacao, ja ajudamos mais de 50 empresas em diversos setores a
            implementar solucoes de IA, otimizar seus processos de dados e migrar para
            infraestruturas em nuvem de forma segura e eficiente.
          </p>
          <p className="mt-4">
            Nossa abordagem combina consultoria estrategica com execucao tecnica, garantindo
            que cada projeto entregue resultados mensuravies e ROI comprovado.
          </p>
        </div>
      </section>
    </div>
  );
}
