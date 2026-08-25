import { BadgeCheck, Presentation, Users } from "lucide-react";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "Qualiopi",
    label: "Certification qualité pour les actions de formation",
    category: "Certification",
    icon: BadgeCheck,
  },
  {
    value: "119",
    label: "Stagiaires déclarés au titre de l’activité 2025",
    category: "Activité déclarée",
    icon: Users,
  },
  {
    value: "10",
    label: "Formateurs déclarés au titre de l’activité 2025",
    category: "Équipe déclarée",
    icon: Presentation,
  },
] as const;

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-forest-surface/35 py-16 md:py-24">
      <div className="section-shell">
        <BorderBeamPanel
          beams={2}
          colors={["var(--color-orange-500)", "var(--color-orange-100)"]}
          thickness={2}
          idleSpeed={16}
          hoverSpeed={72}
          radius={24}
          seed={5}
          role="group"
          aria-labelledby="activity-data-title"
          className="overflow-hidden border-white/15 bg-night-deep"
        >
          <div className="flex flex-col gap-4 border-b border-white/15 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
                Repères d&apos;activité
              </p>
              <h2
                id="activity-data-title"
                className="mt-2 text-xl font-bold tracking-[-0.025em] text-white-90"
              >
                Des données déclarées, un cadre lisible.
              </h2>
            </div>
            <span className="w-fit border border-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white-60">
              Exercice 2025
            </span>
          </div>

          <div className="grid md:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={cn(
                    "flex min-h-64 flex-col p-6 md:min-h-72 md:p-8",
                    index > 0 && "border-t border-white/15 md:border-l md:border-t-0",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white-45">
                      0{index + 1} · {stat.category}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-orange-500/35 text-orange-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <p
                    className={cn(
                      "mt-auto font-extrabold leading-none tracking-[-0.055em] text-orange-500",
                      stat.value === "Qualiopi"
                        ? "text-[clamp(2.7rem,5vw,4.6rem)]"
                        : "text-[clamp(4.2rem,7vw,6.4rem)]",
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-white-60">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid border-t border-white/15 bg-white/[0.02] md:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="border-b border-white/15 px-6 py-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-orange-300 md:border-b-0 md:border-r md:px-8">
              Source publique
            </p>
            <p className="px-6 py-5 text-xs leading-6 text-white-60 md:px-8">
              Liste publique des organismes de formation, données d&apos;activité 2025
              déclarées par BOAZ. Ces données décrivent l&apos;activité ; elles ne
              constituent ni un taux de réussite ni une garantie d&apos;insertion.
            </p>
          </div>
        </BorderBeamPanel>
      </div>
    </section>
  );
}
