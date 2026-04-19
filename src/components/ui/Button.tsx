import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-night-deep shadow-[0_4px_16px_rgba(242,107,42,0.35)] hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(242,107,42,0.45)] active:translate-y-0",
        secondary:
          "border border-white/10 bg-white/[0.06] text-white-90 backdrop-blur-md hover:border-orange-500/40 hover:bg-white/[0.09] hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "bg-transparent text-white-75 hover:text-orange-300 hover:bg-white/[0.04]",
        link: "bg-transparent p-0 text-orange-300 underline-offset-4 hover:underline hover:text-orange-400",
      },
      size: {
        sm: "rounded-full px-5 py-2.5 text-sm",
        md: "rounded-full px-7 py-3.5 text-[15px]",
        lg: "rounded-full px-9 py-4 text-base",
        xl: "rounded-full px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
