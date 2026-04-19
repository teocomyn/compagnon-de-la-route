import { cn } from "@/lib/utils";

type OrangeGlowProps = {
  className?: string;
  size?: "md" | "lg";
};

export function OrangeGlow({ className, size = "lg" }: OrangeGlowProps) {
  const dim = size === "lg" ? "min-h-[720px] min-w-[720px]" : "min-h-[560px] min-w-[560px]";
  return (
    <div
      className={cn("pointer-events-none absolute -z-10", className)}
      aria-hidden
    >
      <div
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 rounded-full opacity-90 blur-[60px]",
          dim,
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(242,107,42,0.12) 0%, rgba(242,107,42,0.04) 35%, transparent 65%)",
        }}
      />
    </div>
  );
}
