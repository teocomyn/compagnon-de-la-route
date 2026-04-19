"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { teamMembers } from "@/lib/team";

export function Team() {
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section className="section-y">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Humain"
          title="Découvrez notre équipe passionnée"
          lead="Nous sommes une équipe de formateurs, d'accompagnants et de professionnels de la mobilité engagés"
        />

        <div
          ref={scroller}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible"
        >
          {teamMembers.map((m, i) => (
            <motion.article
              key={m.name}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="w-[260px] shrink-0 md:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={m.image}
                  alt={`Portrait de ${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 768px) 260px, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4">
                <p className="text-[18px] font-semibold">{m.name}</p>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-orange-300">
                  {m.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
