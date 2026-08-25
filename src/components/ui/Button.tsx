import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,border-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-orange-500 bg-orange-500 text-night-deep hover:border-orange-300 hover:bg-orange-300",
        secondary:
          "border border-white/20 bg-transparent text-white-90 hover:border-orange-400 hover:text-orange-200",
        ghost:
          "bg-transparent text-white-75 hover:text-orange-300 hover:bg-white/[0.04]",
        link: "bg-transparent p-0 text-orange-300 underline-offset-4 hover:underline hover:text-orange-400",
      },
      size: {
        sm: "rounded-md px-5 py-2.5 text-sm",
        md: "rounded-md px-7 py-3.5 text-[15px]",
        lg: "rounded-md px-9 py-4 text-base",
        xl: "rounded-md px-10 py-4 text-lg",
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
