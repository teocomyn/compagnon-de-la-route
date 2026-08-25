import { BriefcaseBusiness, Crosshair, Eye, Repeat2 } from "lucide-react";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Comprendre avant d’exécuter",
    text: "Chaque geste est relié à une règle de sécurité, une situation de circulation ou un besoin voyageur.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Répéter en situation",
    text: "Les exercices servent à installer des repères utilisables au volant et pendant le service.",
    icon: Repeat2,
  },
  {
    number: "03",
    title: "Corriger avec précision",
    text: "Le suivi porte sur les points observés, les progrès réalisés et le travail encore nécessaire.",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Préparer la prise de poste",
    text: "La posture professionnelle et la candidature sont travaillées à partir des réalités du métier.",
    icon: BriefcaseBusiness,
  },
] as const;

export function Pedagogy() {
  return (
    <section className="border-b border-white/10 bg-night">
      <div className="section-shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
              La méthode
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-[clamp(2.8rem,5vw,5.35rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white-90">
              Faire,
              <span className="block">observer,</span>
              <span className="block text-orange-400">recommencer.</span>
            </h2>

            <figure className="relative mt-10 aspect-[3/2] overflow-hidden border border-white/15">
              <Image
                src="/images/journal/conductrice-autocar.webp"
                alt="Conductrice installée au poste de conduite d’un autocar"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-5 border-t border-white/20 bg-night-deep/90 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white-60">
                <span>Mise en situation</span>
                <span className="text-orange-300">Au poste</span>
              </figcaption>
              <span
                className="absolute left-0 top-0 h-20 w-1.5 bg-orange-500"
                aria-hidden="true"
              />
            </figure>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <div className="flex items-center justify-between gap-6 border-y border-white/15 px-1 py-4 font-mono text-[9px] uppercase tracking-[0.16em]">
              <span className="text-orange-300">Cycle pédagogique</span>
              <span className="text-white-45">04 temps</span>
            </div>

            <ol>
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.number}
                    className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-5 border-b border-white/15 py-7 sm:grid-cols-[3.5rem_minmax(12rem,0.78fr)_minmax(0,1fr)] sm:gap-7"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-orange-500/40 font-mono text-[10px] font-semibold text-orange-300">
                      {item.number}
                    </span>
                    <div className="flex min-w-0 items-start justify-between gap-4">
                      <h3 className="pt-2 text-base font-semibold leading-6 text-white-90">
                        {item.title}
                      </h3>
                      <Icon
                        className="mt-2 hidden h-4 w-4 shrink-0 text-orange-300/70 xl:block"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="col-start-2 text-sm leading-7 text-white-60 sm:col-start-3 sm:pt-1">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
