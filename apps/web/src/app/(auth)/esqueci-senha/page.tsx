"use client";

import { useState } from "react";
import Link from "next/link";

export default function EsqueciSenhaPage() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem("Se o email existir, enviaremos um link de recuperação.");
    setEnviado(true);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-xl shadow-lg border p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-xl mb-4">
            M
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Recuperar Senha
          </h1>
          <p className="text-muted-foreground mt-1">
            Informe seu email para receber o link de recuperação
          </p>
        </div>

        {/* Message */}
        {mensagem && (
          <div className="bg-primary/10 text-primary text-sm rounded-lg p-3 mb-6">
            {mensagem}
          </div>
        )}

        {/* Form */}
        {!enviado ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com.br"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Enviar Link de Recuperação
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Verifique sua caixa de entrada e siga as instruções.
            </p>
            <button
              onClick={() => {
                setEnviado(false);
                setMensagem("");
                setEmail("");
              }}
              className="text-sm text-primary font-medium hover:underline"
            >
              Enviar novamente
            </button>
          </div>
        )}

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Lembrou a senha?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
}
