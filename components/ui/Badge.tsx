import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "new" | "expiring" | "bestseller" | "default";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  new: "bg-brand-500 text-white",
  expiring: "bg-amber-600 text-white",
  bestseller: "bg-emerald-600 text-white",
  default: "bg-gray-200 text-gray-700",
};

export function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-sm uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}