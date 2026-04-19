"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const modules = [
  { title: "Module 1 : Connaissance du véhicule", hours: "40h", text: "Prise en main, contrôles, sécurité mécanique, ergonomie de conduite." },
  { title: "Module 2 : Sécurité et prévention", hours: "40h", text: "Anticipation, gestion des risques, procédures, culture de la sécurité." },
  { title: "Module 3 : Relation client et inclusion", hours: "30h", text: "Accueil, posture professionnelle, situations sensibles, qualité de service." },
  { title: "Module 4 : Réglementation transport", hours: "30h", text: "Cadre légal, documents, responsabilités, exploitation et contrôles." },
  { title: "Module 5 : Pratique sur route", hours: "70h", text: "Mise en situation réelle, itinéraires, conduite encadrée, évaluation continue." },
];

export function ProgramAccordion() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {modules.map((m, idx) => {
        const isOpen = open === idx;
        const id = `${baseId}-mod-${idx}`;
        return (
          <div key={m.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              id={`${id}-button`}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="text-[16px] font-semibold text-white-90">{m.title}</span>
              <span className="flex items-center gap-3">
                <span className="font-mono text-[12px] text-white-45">{m.hours}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-white-45 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </span>
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
                  <p className="pb-6 text-[15px] leading-relaxed text-white-60">{m.text}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
