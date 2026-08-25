import Link from "next/link";
import { ArrowRight, BusFront, RadioTower } from "lucide-react";

const pathways = [
  {
    index: "01",
    context: "À bord",
    title: "Conducteur de voyageurs",
    verbs: "Conduire · accueillir · protéger",
    status: "Parcours présenté",
    href: "/formations/conducteur-voyageurs",
    action: "Voir le parcours",
    icon: BusFront,
    inverted: false,
  },
  {
    index: "02",
    context: "À l’exploitation",
    title: "Exploitant-régulateur",
    verbs: "Planifier · coordonner · réagir",
    status: "Programme en préparation",
    href: "/formations/exploitant-regulateur",
    action: "Comprendre le métier",
    icon: RadioTower,
    inverted: true,
  },
] as const;

export function Pathways() {
  return (
    <section aria-labelledby="pathways-title" className="border-b border-white/10">
      <div className="section-shell max-w-screen-2xl py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              Le label / deux points d’action
            </p>
            <h2
              id="pathways-title"
              className="mt-5 text-balance text-[clamp(2.8rem,5.6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white-90"
            >
              Le voyage se joue
              <span className="block text-orange-300">à bord et en coulisses.</span>
            </h2>
          </div>
          <p className="max-w-xl border-l border-orange-400 pl-6 text-base leading-8 text-white-60 lg:col-span-4">
            Compagnon de la Route relie les métiers qui réalisent le trajet et ceux qui
            organisent sa continuité. Les responsabilités diffèrent ; le niveau
            d’attention au service reste commun.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl border-t border-white/10">
        {pathways.map((pathway) => {
          const Icon = pathway.icon;

          return (
            <Link
              key={pathway.href}
              href={pathway.href}
              className={`group grid min-h-52 gap-8 border-b border-white/10 px-5 py-8 last:border-b-0 sm:px-8 lg:grid-cols-[4rem_4rem_minmax(15rem,0.85fr)_minmax(14rem,0.7fr)_minmax(11rem,0.55fr)_auto] lg:items-center lg:px-12 lg:py-10 ${
                pathway.inverted
                  ? "bg-orange-100 text-night-deep"
                  : "bg-night-deep text-white-90"
              }`}
            >
              <span
                className={`font-mono text-[10px] ${
                  pathway.inverted ? "text-orange-700" : "text-orange-300"
                }`}
              >
                {pathway.index}
              </span>

              <span
                className={`flex h-12 w-12 items-center justify-center border ${
                  pathway.inverted
                    ? "border-night-deep/25 text-orange-700"
                    : "border-white/15 text-orange-300"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>

              <div>
                <p
                  className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
                    pathway.inverted ? "text-orange-700" : "text-orange-300"
                  }`}
                >
                  {pathway.context}
                </p>
                <h3 className="mt-3 text-[clamp(1.8rem,3vw,3.4rem)] font-semibold leading-none tracking-[-0.045em]">
                  {pathway.title}
                </h3>
              </div>

              <p
                className={`text-base font-semibold tracking-[-0.02em] ${
                  pathway.inverted ? "text-night-deep/80" : "text-white-75"
                }`}
              >
                {pathway.verbs}
              </p>

              <p
                className={`font-mono text-[9px] uppercase tracking-[0.14em] ${
                  pathway.inverted ? "text-night-deep/55" : "text-white-45"
                }`}
              >
                {pathway.status}
              </p>

              <span className="flex items-center justify-between gap-5 font-semibold lg:justify-end">
                {pathway.action}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
