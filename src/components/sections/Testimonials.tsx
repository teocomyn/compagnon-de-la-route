"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const subset = testimonials.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Terrain"
          title="Ce que disent nos compagnons"
          lead="Des parcours différents, une même exigence : la fiabilité."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {subset.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8",
                "transition-transform duration-300 hover:scale-[1.02] hover:border-orange-500/40",
                i % 3 === 1 && "md:bg-orange-500/[0.04]",
              )}
            >
              <blockquote className="text-[18px] font-medium leading-relaxed text-white-90">
                <span className="italic">&ldquo;{t.quote}&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[16px] font-semibold">{t.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/temoignages"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-orange-300 transition-colors hover:text-orange-200"
          >
            Voir tous les témoignages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
