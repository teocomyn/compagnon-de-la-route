import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-[rgba(10,42,36,0.6)] backdrop-blur-xl backdrop-saturate-[180%]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
