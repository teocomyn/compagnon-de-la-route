"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    text: "Être titulaire du permis B actif",
    className: "left-[-2%] top-[8%] md:left-[-4%] md:top-[10%]",
    from: { x: -40, y: -30, opacity: 0 },
  },
  {
    text: "Avoir 21 ans minimum",
    className: "right-[-2%] top-[22%] md:right-[-4%] md:top-[24%]",
    from: { x: 40, y: -20, opacity: 0 },
  },
  {
    text: "Ne pas avoir de casier judiciaire",
    className: "bottom-[14%] left-[6%] md:bottom-[12%] md:left-[4%]",
    from: { x: -30, y: 40, opacity: 0 },
  },
];

export function PrereqImmersive() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <SectionHeader
          align="center"
          eyebrow="Prérequis"
          title="Prérequis pour rejoindre la formation"
          lead="Les conditions nécessaires pour intégrer nos parcours de formation"
        />

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/prerequis-bus.jpg"
              alt="Car sur route de nuit, lumières et paysage montagneux"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-night/10 to-transparent" />

            {cards.map((c) => (
              <motion.div
                key={c.text}
                className={cn("absolute max-w-[min(92%,320px)]", c.className)}
                initial={reduce ? false : c.from}
                whileInView={reduce ? undefined : { x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  reduce
                    ? undefined
                    : {
                        type: "spring",
                        stiffness: 120,
                        damping: 16,
                        mass: 0.8,
                        delay: 0.05,
                      }
                }
              >
                <GlassCard className="flex items-center gap-3 px-4 py-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-mint-400/25 bg-mint-500/10">
                    <Sparkles className="h-5 w-5 text-mint-400" aria-hidden />
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-white-90">
                    {c.text}
                  </span>
                </GlassCard>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2">
              <Link
                href="/formations/conducteur-voyageurs"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "shadow-[0_18px_60px_-24px_rgba(242,107,42,0.55)]",
                )}
              >
                Je m&apos;inscris
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
