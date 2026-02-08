import { ContactSection } from "@/components/landing/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a MSS Consultoria para sua transformacao digital.",
};

export default function ContatoPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
