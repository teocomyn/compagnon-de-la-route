"use client";

import { motion, useReducedMotion } from "framer-motion";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";

export function Statement() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <OrangeGlow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="md" />
      <div className="relative z-10 mx-auto max-w-[980px] px-6 text-center md:px-8">
        <motion.p
          className="text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-[1.3] text-white-75"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Chez{" "}
          <motion.span
            className="text-orange-300"
            initial={reduce ? false : { opacity: 0.2 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 0.15, duration: 0.6 }}
          >
            Compagnon de la Route
          </motion.span>
          , nous créons un impact concret grâce à des{" "}
          <span className="text-orange-300">parcours humains</span>, conçus pour
          faciliter la mobilité, connecter les territoires et offrir{" "}
          <span className="text-orange-300">un vrai tremplin professionnel</span>{" "}
          à chacun.
        </motion.p>
      </div>
    </section>
  );
}
