import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";

const rows = [
  {
    other: "Formations théoriques",
    us: "Parcours pratique, immersion et coaching",
  },
  {
    other: "Accompagnement générique",
    us: "Suivi personnalisé humain",
  },
  {
    other: "Peu de suivi après",
    us: "Accompagnement jusqu'à l'embauche",
  },
  {
    other: "Manque d'accès à l'emploi",
    us: "Mise en relation directe employeurs locaux",
  },
  {
    other: "Sens peu valorisé",
    us: "Communauté engagée et solidaire",
  },
];

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <ScrollReveal>
          <h2 className="mb-10 text-center text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold tracking-[-0.025em]">
            Autres formations vs nous
          </h2>
        </ScrollReveal>

        <div className="overflow-x-auto rounded-xl border border-white/10 [-webkit-overflow-scrolling:touch]">
          <div className="grid min-w-[640px] grid-cols-1 md:min-w-0 md:grid-cols-2">
            <div className="border-b border-white/10 bg-white/[0.02] px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-white-45 md:border-r md:border-white/10">
              Autres formations
            </div>
            <div className="border-b border-white/10 bg-orange-500/10 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-200">
              Compagnon de la Route
            </div>
          </div>

          {rows.map((r) => (
            <div
              key={r.other}
              className="grid grid-cols-1 border-b border-white/5 md:grid-cols-2"
            >
              <div className="flex gap-3 border-b border-white/5 px-6 py-5 text-white-45 md:border-r md:border-white/10 md:border-b-0">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-danger" aria-hidden />
                <p className="text-[15px] leading-relaxed">{r.other}</p>
              </div>
              <div className="flex gap-3 px-6 py-5 text-white-75">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
                <p className="text-[15px] leading-relaxed">{r.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
