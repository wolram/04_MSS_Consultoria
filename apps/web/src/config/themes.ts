export type ThemeId = "charcoal" | "soft-blue" | "warm-gold" | "gradient";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  accentColor: string;
  previewColors: string[];
}

export const themes: ThemeConfig[] = [
  {
    id: "charcoal",
    name: "Preto & Carvao",
    description: "Elegancia minimalista com tons de carvao",
    accentColor: "hsl(0 0% 15%)",
    previewColors: ["#262626", "#404040", "#737373", "#d4d4d4"],
  },
  {
    id: "soft-blue",
    name: "Azul Suave",
    description: "Profissional e confiavel com azul corporativo",
    accentColor: "hsl(214 82% 51%)",
    previewColors: ["#2563eb", "#3b82f6", "#93c5fd", "#dbeafe"],
  },
  {
    id: "warm-gold",
    name: "Dourado Quente",
    description: "Sofisticado e acolhedor com tons dourados",
    accentColor: "hsl(38 92% 50%)",
    previewColors: ["#d97706", "#f59e0b", "#fcd34d", "#fef3c7"],
  },
  {
    id: "gradient",
    name: "Gradiente",
    description: "Moderno e vibrante com gradiente azul-roxo",
    accentColor: "linear-gradient(135deg, hsl(214 82% 51%), hsl(280 75% 55%))",
    previewColors: ["#2563eb", "#7c3aed", "#a78bfa", "#e0e7ff"],
  },
];

export const defaultTheme: ThemeId = "charcoal";
