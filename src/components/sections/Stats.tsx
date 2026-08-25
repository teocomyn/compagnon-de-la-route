import { cn } from "@/lib/utils";

const stats = [
  {
    value: "Qualiopi",
    label: "Certification qualité pour les actions de formation",
  },
  {
    value: "119",
    label: "Stagiaires déclarés au titre de l’activité 2025",
  },
  {
    value: "10",
    label: "Formateurs déclarés au titre de l’activité 2025",
  },
] as const;

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-forest-surface/35 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-0 md:px-8">
        {stats.map((s, idx) => (
          <div
            key={s.label}
            className={cn(
              "flex flex-col items-center justify-center px-4 text-center",
              idx > 0 && "md:border-l md:border-white/10",
            )}
          >
            <div className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.045em] text-orange-500">
              {s.value}
            </div>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white-60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl px-6 text-center text-xs leading-relaxed text-white-60">
        Source : liste publique des organismes de formation, données d&apos;activité 2025
        déclarées par BOAZ. Ces données décrivent l&apos;activité ; elles ne constituent
        ni un taux de réussite ni une garantie d&apos;insertion.
      </p>
    </section>
  );
}
