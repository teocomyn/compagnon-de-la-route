"use client";

import { type ReactNode, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotionPreference() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

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
      initial="hidden"
      animate={reducedMotion ? "visible" : undefined}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.75 }}
    >
      <motion.span
        className={`block ${className ?? ""}`}
        variants={{
          hidden: { opacity: 0, y: "105%" },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.8,
          delay: reducedMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function Statement() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="bg-night pb-12 pt-20 md:pb-16 md:pt-28">
      <div className="section-shell">
        <motion.div
          className="grid gap-8 lg:grid-cols-12 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={reducedMotion ? { opacity: 1 } : undefined}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: reducedMotion ? 0 : 0.45 }}
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-orange-300 lg:col-span-3 lg:pt-3">
            La responsabilité avant le départ
          </p>

          <div className="lg:col-span-9">
            <h2 className="max-w-5xl text-balance text-[clamp(2.65rem,5vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-cream">
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

            <p
              className="mt-8 max-w-2xl border-l-2 border-orange-400 pl-5 text-base leading-7 text-cream/60"
            >
              La formation prépare des gestes, des décisions et une posture de service.
              L&apos;examen vient valider une partie du chemin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
