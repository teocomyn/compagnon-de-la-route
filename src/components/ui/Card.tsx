import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md border border-white/10 bg-white/[0.025] p-8 transition-colors duration-200 hover:border-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
