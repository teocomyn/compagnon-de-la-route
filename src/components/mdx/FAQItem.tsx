import { ChevronDown } from "lucide-react";

export function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group my-0 border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none">
        <span className="text-[15px] font-semibold text-white-90">{question}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-white-45 transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="max-w-3xl pb-5 pr-8 text-[15px] leading-relaxed text-white-60">
        {children}
      </div>
    </details>
  );
}
