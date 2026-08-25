"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";

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
    <section className="relative overflow-hidden border-y border-white/[0.06] py-16 md:py-24">
      <OrangeGlow className="left-1/2 top-1/2 h-[360px] w-[min(620px,100vw)] -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="container-shell relative z-10">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-mint/70">
            Notre conviction
          </p>

          <h2 className="text-balance text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-cream">
            <RevealLine delay={0.02} reducedMotion={reducedMotion}>
              Former un conducteur, c’est préparer bien plus qu’un examen.
            </RevealLine>
            <RevealLine
              className="mt-2 text-orange-300 md:mt-3"
              delay={0.14}
              reducedMotion={reducedMotion}
            >
              Un métier. Une responsabilité. Un projet de vie.
            </RevealLine>
          </h2>

          <motion.div
            className="mx-auto mt-8 flex w-fit items-center gap-3 text-sm text-cream/60"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <span className="h-px w-8 bg-orange-400" aria-hidden="true" />
            Compagnon de la Route, porté par BOAZ
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
