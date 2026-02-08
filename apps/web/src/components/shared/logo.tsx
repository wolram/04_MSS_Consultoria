import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className || ""}`}>
      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
        <span className="text-white font-heading font-bold text-sm">M</span>
      </div>
      <span className="font-heading font-bold text-xl text-foreground">
        MSS<span className="text-primary/70 ml-0.5">Consultoria</span>
      </span>
    </Link>
  );
}
