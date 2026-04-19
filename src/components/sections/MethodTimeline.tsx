"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  "Positionnement et entretien",
  "Formation théorique et pratique",
  "Immersion terrain avec nos partenaires",
  "Placement et suivi post-formation",
];

export function MethodTimeline() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[1100px]">
      <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />
      <div className="grid gap-10 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-mono text-[12px] font-semibold text-orange-200">
              {i + 1}
            </div>
            <p className="text-[15px] font-semibold leading-snug text-white-90">{s}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
