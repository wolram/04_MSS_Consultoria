import { ServicesSection } from "@/components/landing/services-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicos",
  description: "Nossos servicos de consultoria em IA, dados, nuvem e transformacao digital.",
};

export default function ServicosPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Nossos Servicos
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Solucoes completas para sua jornada de transformacao digital, da estrategia a execucao.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}
