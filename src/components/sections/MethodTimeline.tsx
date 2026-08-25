"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Faire le point",
    text: "Un échange et un positionnement permettent de clarifier votre projet et le parcours adapté.",
  },
  {
    title: "Apprendre le métier",
    text: "Les apports théoriques et pratiques développent les compétences précisées au programme.",
  },
  {
    title: "Se mettre en situation",
    text: "Les exercices et évaluations vérifient la progression dans le cadre annoncé avant l’inscription.",
  },
  {
    title: "Préparer la suite",
    text: "Le bilan relie les acquis au projet professionnel, sans promettre une embauche automatique.",
  },
];

export function MethodTimeline() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <div className="relative">
      <div
        className="absolute bottom-5 left-[1.4rem] top-5 w-px bg-gradient-to-b from-orange-400 via-orange-400/35 to-white/10 md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-[1.4rem] md:h-px md:w-auto"
        aria-hidden="true"
      />

      <ol className="grid gap-9 md:grid-cols-4 md:gap-5">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            className="relative grid grid-cols-[2.8rem_1fr] gap-4 md:block"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/45 bg-night-deep font-mono text-xs font-bold text-orange-300 md:mx-auto">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-1 md:pt-7 md:text-center">
              <h3 className="text-lg font-semibold text-white-90">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white-60">{step.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
