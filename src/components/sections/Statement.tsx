"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealLineProps = {
  children: ReactNode;
  className?: string;
  delay: number;
  reducedMotion: boolean;
};

function RevealLine({ children, className, delay, reducedMotion }: RevealLineProps) {
  return (
    <motion.span
      className="block overflow-hidden pb-[0.08em]"
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.75 }}
    >
      <motion.span
        className={`block ${className ?? ""}`}
        variants={{
          hidden: { opacity: 0, y: "105%" },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function Statement() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section className="border-b border-white/10 bg-night py-20 md:py-32">
      <div className="container-shell">
        <motion.div
          className="max-w-6xl"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-orange-300">
            La responsabilité avant le départ
          </p>

          <h2 className="text-balance text-[clamp(2.7rem,6vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-cream">
            <RevealLine delay={0.02} reducedMotion={reducedMotion}>
              Chaque personne à bord
            </RevealLine>
            <RevealLine
              className="text-orange-300"
              delay={0.14}
              reducedMotion={reducedMotion}
            >
              compte sur le conducteur.
            </RevealLine>
          </h2>

          <motion.div
            className="mt-10 flex max-w-xl items-start gap-4 border-l-2 border-orange-400 pl-5 text-base leading-7 text-cream/60"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            La formation prépare des gestes, des décisions et une posture de service.
            L&apos;examen vient valider une partie du chemin.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
