"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { testimonialsColumnsHome, type Testimonial } from "@/lib/content/testimonials-columns";
import { cn } from "@/lib/utils";

export type { Testimonial };

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-xs rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8",
        "backdrop-blur-sm transition-all duration-500",
        "hover:border-orange-500/40 hover:bg-gradient-to-b hover:from-orange-500/[0.04] hover:to-transparent",
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/0 to-orange-500/0 transition-all duration-500 group-hover:from-orange-500/5 group-hover:to-transparent" />

      <div className="relative mb-4">
        <Quote className="h-7 w-7 text-orange-500/80" strokeWidth={2} fill="currentColor" aria-hidden />
      </div>

      {testimonial.tag ? (
        <div className="relative mb-4 inline-flex items-center gap-1.5 rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1">
          <span className="h-1 w-1 rounded-full bg-orange-400" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-orange-300">
            {testimonial.tag}
          </span>
        </div>
      ) : null}

      <p className="relative text-sm font-normal italic leading-relaxed text-white/85 md:text-[15px]">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="relative shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- URLs externes Unsplash sans domaine configuré */}
          <img
            width={44}
            height={44}
            src={testimonial.image}
            alt={testimonial.name}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-500/20"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-mint-400 ring-2 ring-night" aria-hidden />
        </div>
        <div className="flex min-w-0 flex-col">
          <div className="text-sm font-semibold leading-tight tracking-tight text-white">{testimonial.name}</div>
          <div className="mt-0.5 text-[12px] leading-tight tracking-tight text-white/55">{testimonial.role}</div>
          {testimonial.location ? (
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-orange-300/70">
              {testimonial.location}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  const reduceMotion = useReducedMotion() === true;
  const duration = props.duration ?? 15;
  const loops = reduceMotion ? 1 : 2;

  const columns = (
    <>
      {Array.from({ length: loops }, (_, dupIndex) => (
        <React.Fragment key={dupIndex}>
          {props.testimonials.map((testimonial, i) => (
            <TestimonialCard key={`${dupIndex}-${i}-${testimonial.name}`} testimonial={testimonial} />
          ))}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={props.className}>
      {reduceMotion ? (
        <div className="flex flex-col gap-6 pb-6">{columns}</div>
      ) : (
        <motion.div
          animate={{ translateY: "-50%" }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col gap-6 pb-6"
        >
          {columns}
        </motion.div>
      )}
    </div>
  );
}

const firstColumn = testimonialsColumnsHome.slice(0, 3);
const secondColumn = testimonialsColumnsHome.slice(3, 6);
const thirdColumn = testimonialsColumnsHome.slice(6, 9);

export default function CdrTestimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-night py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,107,42,0.08) 0%, rgba(242,107,42,0.02) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
            <span className="cdr-pulse-dot h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Témoignages vérifiés
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="mb-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
          >
            Ils ont choisi <span className="font-medium italic text-orange-300">la route</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Des parcours différents, une même exigence : la fiabilité. Voici ce qu&apos;en disent nos anciens stagiaires,
            aujourd&apos;hui en poste.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-wider md:gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mint-400" />
              <span className="text-white/70">
                <span className="font-bold text-white">98%</span> de réussite
              </span>
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mint-400" />
              <span className="text-white/70">
                <span className="font-bold text-white">2000+</span> stagiaires formés
              </span>
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mint-400" />
              <span className="text-white/70">
                <span className="font-bold text-white">90%</span> en CDI à 6 mois
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <p className="mb-4 text-sm text-white/50">
            Envie de rejoindre celles et ceux qui ont déjà pris la route ?
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-night shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/50"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="/temoignages"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-orange-300 transition-colors hover:text-orange-200"
            >
              Voir tous les témoignages
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
