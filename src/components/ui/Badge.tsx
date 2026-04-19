import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-pill border px-[14px] py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.12em]",
  {
    variants: {
      variant: {
        success:
          "border-mint-400/30 bg-mint-500/10 text-mint-300",
        orange:
          "border-orange-500/35 bg-orange-500/10 text-orange-300",
        neutral:
          "border-white/10 bg-white/[0.04] text-white-60",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({
  className,
  variant,
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot ? (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current opacity-90"
          aria-hidden
        />
      ) : null}
      {children}
    </span>
  );
}
