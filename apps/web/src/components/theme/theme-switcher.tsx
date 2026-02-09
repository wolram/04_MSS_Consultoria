"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { themes } from "@/config/themes";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 bg-card border border-border rounded-xl shadow-xl p-4 min-w-[200px]"
          >
            <p className="text-sm font-medium text-foreground mb-3">Escolha o tema</p>
            <div className="space-y-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors hover:bg-accent ${
                    theme === t.id ? "bg-accent" : ""
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0"
                    style={{
                      background:
                        t.id === "gradient"
                          ? `linear-gradient(135deg, ${t.previewColors[0]}, ${t.previewColors[1]})`
                          : t.previewColors[0],
                    }}
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                  </div>
                  {theme === t.id && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label="Trocar tema"
      >
        {open ? <XMarkIcon className="w-5 h-5" /> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
      </motion.button>
    </div>
  );
}
