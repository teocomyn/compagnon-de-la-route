import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, error, ...props }, ref) => {
    const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();
    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="mb-2 block text-[13px] font-semibold text-white-90"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "w-full rounded-md border border-white/10 bg-white/[0.05] px-[18px] py-[14px] text-[15px] text-white-90 placeholder:text-white-45",
            "transition-colors duration-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20",
            error && "border-danger focus:border-danger focus:ring-danger/20",
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-danger">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";
