import { TeamSection } from "@/components/landing/team-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheca os especialistas da MSS Consultoria em transformacao digital.",
};

export default function EquipePage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Nossa Equipe
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Profissionais apaixonados por tecnologia e comprometidos com o sucesso dos nossos clientes.
        </p>
      </div>
      <TeamSection />
    </div>
  );
}
