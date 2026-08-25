import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "min-h-[120px] w-full resize-y rounded-md border border-white/10 bg-white/[0.05] px-[18px] py-[14px] text-[15px] text-white-90 placeholder:text-white-45",
            "transition-colors duration-200 focus-visible:border-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
            error && "border-danger focus-visible:border-danger focus-visible:outline-danger",
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
Textarea.displayName = "Textarea";
