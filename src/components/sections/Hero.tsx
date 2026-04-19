"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Play, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/magicui/MagneticButton";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const glassItems = [
  { label: "L'exigence" },
  { label: "L'excellence" },
  { label: "L'engagement" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-[120px] md:pb-24">
      <OrangeGlow className="right-[-10%] top-[-8%] md:right-[5%]" />

      <div className="section-shell relative z-10 grid max-w-[1440px] grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <motion.div
          className="max-w-2xl space-y-8 text-center md:text-left"
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
        >
          <motion.div variants={reduce ? undefined : item}>
            <Eyebrow className="flex items-center gap-2 text-orange-300">
              <span
                className="inline-flex h-2 w-2 animate-pulse rounded-full bg-orange-400"
                aria-hidden
              />
              Formation certifiante · 210h · 30 jours
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={reduce ? undefined : item}
            className="text-[clamp(2.75rem,6vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white-90"
          >
            Formation Conducteur de voyageurs
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="text-lg leading-relaxed text-white-60 md:text-[18px]"
          >
            Compagnon de la Route propose une formation certifiante et financée
            pour devenir conducteur de voyageurs. En 30 jours, accédez à un emploi
            stable dans un secteur qui recrute. Pratique, accompagnement
            personnalisé, débouchés garantis.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Link
                href="/formations/conducteur-voyageurs"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "group relative overflow-hidden",
                )}
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -inset-10 rounded-full bg-white/10 blur-2xl" />
                </span>
                <Play className="h-5 w-5" aria-hidden />
                Je m&apos;inscris
              </Link>
            </MagneticButton>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "justify-center",
              )}
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          ref={imgRef}
          className="relative mx-auto w-full max-w-xl md:max-w-none"
          style={{ y }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[4/5]">
            <Image
              src="/images/hero-bus.jpg"
              alt="Conductrice au volant d’un car, souriante, gilet haute visibilité"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-night/20" />

            <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
              <span className="text-sm font-semibold text-mint-300" aria-hidden>
                :)
              </span>
            </div>

            <div className="absolute bottom-6 left-4 right-4 space-y-3 md:left-6">
              {glassItems.map((g, i) => (
                <motion.div
                  key={g.label}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <GlassCard className="flex items-center gap-3 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-mint-400/25 bg-mint-500/10">
                      <Trophy className="h-5 w-5 text-mint-400" aria-hidden />
                    </span>
                    <span className="text-[15px] font-medium text-white-90">
                      {g.label}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
