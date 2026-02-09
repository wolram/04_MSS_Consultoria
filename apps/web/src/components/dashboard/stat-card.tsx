import { type ComponentType } from "react";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: ComponentType<{ className?: string }>;
  trend?: { value: string; direction: "up" | "down" | "neutral" };
}

export function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {trend && (
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full",
              trend.direction === "up" && "bg-green-100 text-green-700",
              trend.direction === "down" && "bg-red-100 text-red-700",
              trend.direction === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {trend.direction === "up" && <ArrowTrendingUpIcon className="w-3 h-3" />}
            {trend.direction === "down" && <ArrowTrendingDownIcon className="w-3 h-3" />}
            {trend.value}
          </span>
        )}
      </div>
      <p className="mt-4 font-heading text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{title}</p>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
