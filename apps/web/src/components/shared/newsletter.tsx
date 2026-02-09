"use client";

import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Inscricao realizada com sucesso!", {
      description: "Voce recebera nossas novidades por email.",
    });
    setEmail("");
    setLoading(false);
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="font-heading text-2xl font-bold text-foreground">
        Fique por dentro das novidades
      </h3>
      <p className="mt-2 text-muted-foreground">
        Receba insights sobre transformacao digital, IA e inovacao diretamente no seu email.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 inline-flex items-center gap-2"
        >
          <PaperAirplaneIcon className="w-4 h-4" />
          {loading ? "Enviando..." : "Inscrever"}
        </button>
      </form>
    </div>
  );
}
