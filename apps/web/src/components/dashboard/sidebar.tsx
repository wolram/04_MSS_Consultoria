"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightOnRectangleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { dashboardNavItems } from "@/config/navigation";

interface SidebarProps {
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string;
    image?: string | null;
  };
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    if (stored) setCollapsed(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  const isDemo = user?.role === "DEMO";

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 border-r border-border bg-card flex flex-col transition-all duration-300",
        collapsed ? "w-[72px]" : "w-[280px]"
      )}
    >
      <div className="h-16 flex items-center px-4 border-b border-border">
        <Link href="/painel" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <span className="text-white font-heading font-bold text-sm">M</span>
          </div>
          {!collapsed && (
            <span className="font-heading font-bold text-lg text-foreground">MSS</span>
          )}
        </Link>
      </div>

      {isDemo && !collapsed && (
        <div className="mx-3 mt-3 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
          <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 flex-shrink-0" />
          <span className="text-xs text-yellow-700">Modo Demonstracao</span>
        </div>
      )}
      {isDemo && collapsed && (
        <div className="mx-auto mt-3">
          <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />
        </div>
      )}

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {dashboardNavItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.label : undefined}
            >
              {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3 space-y-2">
        {!collapsed && user && (
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-primary">
                {user.name?.charAt(0) || "U"}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
        )}
        <div className={cn("flex gap-2", collapsed ? "flex-col items-center" : "")}>
          <button
            onClick={() => {}}
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors flex-1"
            title="Sair"
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
            {!collapsed && <span>Sair</span>}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center px-2 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
            title={collapsed ? "Expandir" : "Recolher"}
          >
            {collapsed ? <ChevronRightIcon className="w-4 h-4" /> : <ChevronLeftIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
