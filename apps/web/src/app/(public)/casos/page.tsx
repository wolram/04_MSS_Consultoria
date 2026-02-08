import { CasesSection } from "@/components/landing/cases-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Sucesso",
  description: "Veja como a MSS Consultoria transformou negocios com IA, dados e nuvem.",
};

export default function CasosPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Casos de Sucesso
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubra como ajudamos empresas de diversos setores a alcancarem resultados extraordinarios.
        </p>
      </div>
      <CasesSection />
    </div>
  );
}
