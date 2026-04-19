import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 shadow-none transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_20px_60px_-24px_rgba(242,107,42,0.25)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
