"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 98,
    suffix: "%",
    label: "Taux de réussite à l'examen",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Stagiaires formés depuis 2020",
  },
  {
    value: 30,
    suffix: " jours",
    label: "Pour retrouver un emploi après la formation",
  },
] as const;

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-forest-surface/35 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-0 md:px-8">
        {stats.map((s, idx) => (
          <ScrollReveal
            key={s.label}
            className={cn(
              "flex flex-col items-center justify-center px-4 text-center",
              idx > 0 && "md:border-l md:border-white/10",
            )}
          >
            <div className="text-[clamp(3.5rem,8vw,6rem)] font-extrabold tracking-[-0.045em] text-orange-500">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white-60">
              {s.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
