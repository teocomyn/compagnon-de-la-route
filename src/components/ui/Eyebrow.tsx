import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
