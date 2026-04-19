"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      <button
        type="button"
        id={`${id}-btn`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[15px] font-semibold text-white-90">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-white-45 transition-transform duration-300",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 px-5 pb-4 pt-0 text-[15px] leading-relaxed text-white-60">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
