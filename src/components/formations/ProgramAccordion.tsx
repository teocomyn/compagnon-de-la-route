"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const modules = [
  {
    tag: "Véhicule",
    title: "Prendre en main son outil de travail",
    text: "Contrôles, sécurité mécanique, ergonomie et conduite sont abordés selon le parcours retenu et la fiche programme remise avant l’inscription.",
  },
  {
    tag: "Sécurité",
    title: "Anticiper, prévenir et agir",
    text: "Le parcours développe la gestion des risques, l’application des procédures et la culture de la sécurité attendue dans le transport de voyageurs.",
  },
  {
    tag: "Voyageurs",
    title: "Accueillir tous les publics",
    text: "Posture professionnelle, inclusion, information des voyageurs, qualité de service et gestion des situations sensibles structurent ce module.",
  },
  {
    tag: "Cadre métier",
    title: "Comprendre ses responsabilités",
    text: "Réglementation applicable, documents, organisation de l’exploitation et contrôles sont précisés en fonction de la formation effectivement proposée.",
  },
  {
    tag: "Pratique",
    title: "Se confronter aux situations professionnelles",
    text: "Les exercices pratiques, mises en situation et évaluations sont détaillés dans la fiche programme contractuelle communiquée avant tout engagement.",
  },
];

export function ProgramAccordion() {
  const baseId = useId();
  const reducedMotion = Boolean(useReducedMotion());
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-white/10">
      {modules.map((module, index) => {
        const isOpen = open === index;
        const id = `${baseId}-module-${index}`;

        return (
          <div key={module.title} className="border-b border-white/10">
            <button
              type="button"
              className="group grid min-h-24 w-full grid-cols-[2.75rem_1fr_auto] items-center gap-3 py-5 text-left sm:grid-cols-[3.5rem_7rem_1fr_auto] sm:gap-5"
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              id={`${id}-button`}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-mono text-xs font-semibold text-orange-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-white-45 sm:block">
                {module.tag}
              </span>
              <span className="text-base font-semibold leading-snug text-white-90 transition-colors group-hover:text-orange-200 sm:text-lg">
                {module.title}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-white-60 transition-transform duration-300",
                    isOpen && "rotate-180 text-orange-300",
                  )}
                  aria-hidden="true"
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-button`}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.38, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pl-[3.5rem] pr-14 text-sm leading-7 text-white-60 sm:pl-[11.75rem] sm:text-[15px]">
                    {module.text}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
