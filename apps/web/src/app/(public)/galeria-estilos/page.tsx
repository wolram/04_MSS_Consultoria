"use client";

import { themes } from "@/config/themes";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import type { ThemeId } from "@/config/themes";

function ThemePreview({ themeId, active, onSelect }: { themeId: ThemeId; active: boolean; onSelect: () => void }) {
  const t = themes.find((x) => x.id === themeId)!;

  return (
    <button onClick={onSelect} className={cn("text-left rounded-2xl border-2 overflow-hidden transition-all", active ? "border-primary shadow-lg" : "border-border hover:border-primary/30")}>
      <div data-theme={themeId} className="bg-background p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-primary" />
            <span className="font-heading font-bold text-sm text-foreground">MSS</span>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-2 rounded bg-muted" />
            <div className="w-12 h-2 rounded bg-muted" />
          </div>
        </div>

        {/* Hero */}
        <div className="py-4">
          <div className="w-3/4 h-3 rounded bg-foreground/80 mb-2" />
          <div className="w-1/2 h-3 rounded bg-primary mb-4" />
          <div className="w-full h-2 rounded bg-muted-foreground/20 mb-1" />
          <div className="w-2/3 h-2 rounded bg-muted-foreground/20" />
          <div className="mt-4 flex gap-2">
            <div className="px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-medium">Botao</div>
            <div className="px-3 py-1.5 rounded border border-border text-foreground text-xs font-medium">Outline</div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-2 rounded-lg border border-border bg-card">
              <div className="w-full h-1.5 rounded bg-primary/30 mb-1" />
              <div className="w-2/3 h-1 rounded bg-muted" />
            </div>
          ))}
        </div>

        {/* Colors */}
        <div className="flex gap-1.5">
          {t.previewColors.map((color, i) => (
            <div key={i} className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>

      <div className="p-4 bg-card border-t border-border">
        <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
        <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
        {active && <span className="inline-block mt-2 text-xs font-medium text-primary">Tema ativo</span>}
      </div>
    </button>
  );
}

export default function GaleriaEstilosPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-center">
          Galeria de Estilos
        </h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Explore os diferentes temas visuais disponiveis. Clique em um tema para aplica-lo ao site.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {themes.map((t) => (
            <ThemePreview
              key={t.id}
              themeId={t.id}
              active={theme === t.id}
              onSelect={() => setTheme(t.id)}
            />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Componentes de Exemplo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button Samples */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Botoes</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Primario</button>
                <button className="px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium">Outline</button>
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">Secundario</button>
              </div>
            </div>

            {/* Badge Samples */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">Default</span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">Secundario</span>
                <span className="px-2.5 py-0.5 rounded-full border border-border text-foreground text-xs font-medium">Outline</span>
              </div>
            </div>

            {/* Input Samples */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Inputs</h3>
              <input
                placeholder="Placeholder..."
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 rounded-full bg-primary relative">
                  <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5" />
                </div>
                <span className="text-sm text-foreground">Toggle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
