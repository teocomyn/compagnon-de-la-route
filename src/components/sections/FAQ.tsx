"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 md:px-8">
        <SectionHeader
          align="center"
          eyebrow="Questions fréquentes"
          title="FAQ"
        />

        <div className="space-y-3">
          {faqItems.map((f, idx) => {
            const id = `${baseId}-faq-${idx}`;
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <button
                  type="button"
                  id={`${id}-button`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span className="text-[16px] font-semibold text-white-90">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white-45 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`${id}-panel`}
                      role="region"
                      aria-labelledby={`${id}-button`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6"
                    >
                      <p className="pb-6 text-[15px] leading-relaxed text-white-60">
                        {f.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
