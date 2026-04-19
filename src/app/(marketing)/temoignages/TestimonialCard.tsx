"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  t,
  index,
}: {
  t: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8",
        "transition-transform duration-300 hover:scale-[1.02] hover:border-orange-500/40",
        index % 3 === 1 && "bg-orange-500/[0.035]",
      )}
    >
      <blockquote className="text-[18px] font-medium italic leading-relaxed text-white-90">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-6">
        <p className="text-[16px] font-semibold not-italic">{t.name}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300 not-italic">
          {t.role}
        </p>
      </figcaption>
    </motion.figure>
  );
}
