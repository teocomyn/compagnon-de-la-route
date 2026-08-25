"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const modules = [
  { title: "Connaissance du véhicule", text: "Prise en main, contrôles, sécurité mécanique et ergonomie de conduite selon le parcours retenu." },
  { title: "Sécurité et prévention", text: "Anticipation, gestion des risques, procédures et culture de la sécurité." },
  { title: "Relation voyageurs et inclusion", text: "Accueil, posture professionnelle, situations sensibles et qualité de service." },
  { title: "Réglementation du transport", text: "Cadre applicable, documents, responsabilités, exploitation et contrôles." },
  { title: "Mises en situation", text: "Exercices pratiques, situations professionnelles et évaluations prévus par la fiche programme contractuelle." },
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
