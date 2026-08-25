import { ArrowRight, BusFront, FileText, Route } from "lucide-react";
import Link from "next/link";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";

const routeSteps = ["Situation", "Cadre écrit", "Évaluation", "Candidature"];
const trainingTopics = ["Sécurité", "Conduite", "Voyageurs"];
const writtenConditions = ["Durée et calendrier", "Objectifs et évaluations", "Prix et financement"];

export function CdrBentoSection() {
  return (
    <section
      className="border-b border-white/10 bg-night pb-20 md:pb-28"
      aria-labelledby="bento-title"
    >
      <div className="section-shell">
        <h2 id="bento-title" className="sr-only">
          Le parcours conducteur en trois repères
        </h2>

        <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
          <article className="overflow-hidden rounded-2xl border border-orange-100/40 bg-orange-100 text-night-deep">
            <div className="m-3 mb-0 min-h-80 rounded-xl border border-orange-900/10 bg-white/55 p-6 md:min-h-96 md:p-8">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-orange-700">
                <span>Votre trajectoire</span>
                <span>01</span>
              </div>

              <div className="mt-14">
                <div className="relative">
                  <div
                    className="absolute left-3 right-3 top-3 h-px bg-orange-700/25"
                    aria-hidden="true"
                  />
                  <ol className="relative grid grid-cols-4 gap-2">
                    {routeSteps.map((step, index) => (
                      <li key={step} className="min-w-0">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-700/30 bg-orange-100 font-mono text-[9px] font-semibold text-orange-900">
                          {index + 1}
                        </span>
                        <span className="mt-4 block text-[10px] font-semibold leading-4 text-night-deep/70 sm:text-[11px]">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-12 border-t border-orange-900/15 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange-700">
                  Point de départ
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">
                  Votre situation détermine la suite du parcours.
                </p>
              </div>
            </div>

            <div className="relative min-h-48 p-7 pr-20 md:p-8 md:pr-24">
              <h3 className="text-[clamp(1.65rem,2.4vw,2.35rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Un parcours visible dès le premier échange.
              </h3>
              <p className="mt-4 text-sm leading-6 text-night-deep/65">
                Chaque étape est nommée avant de vous engager.
              </p>
              <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-night-deep md:bottom-8 md:right-8">
                <Route className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </article>

          <BorderBeamPanel
            role="article"
            aria-labelledby="bento-poste-title"
            beams={2}
            colors={["var(--color-orange-100)", "var(--color-orange-300)"]}
            thickness={2}
            idleSpeed={18}
            hoverSpeed={90}
            radius={32}
            seed={2}
            className="overflow-hidden border-orange-500 bg-orange-500 text-night-deep lg:-translate-y-5"
          >
            <div className="m-3 mb-0 min-h-80 rounded-xl border border-white/15 bg-night-deep p-6 text-white-90 md:min-h-96 md:p-8">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-orange-300">
                <span>Au poste</span>
                <span>02</span>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-orange-300/50">
                  <div className="absolute inset-4 rounded-full border border-white/15" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-night-deep">
                    <BusFront className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <span className="absolute -bottom-3 bg-night-deep px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-orange-300">
                    Mise en situation
                  </span>
                </div>
              </div>

              <ul className="mt-12 grid grid-cols-3 border-y border-white/15">
                {trainingTopics.map((topic, index) => (
                  <li
                    key={topic}
                    className={`py-4 text-center ${index > 0 ? "border-l border-white/15" : ""}`}
                  >
                    <span className="font-mono text-[9px] text-orange-300">0{index + 1}</span>
                    <span className="mt-1 block text-[11px] font-semibold sm:text-xs">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-48 p-7 pr-20 md:p-8 md:pr-24">
              <h3
                id="bento-poste-title"
                className="text-[clamp(1.65rem,2.4vw,2.35rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
              >
                Le métier s&apos;entraîne avant le premier service.
              </h3>
              <p className="mt-4 text-sm leading-6 text-night-deep/70">
                Les gestes et décisions se travaillent en situation.
              </p>
              <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-night-deep text-orange-300 md:bottom-8 md:right-8">
                <BusFront className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </BorderBeamPanel>

          <article className="overflow-hidden rounded-2xl border border-orange-100/40 bg-orange-100 text-night-deep">
            <div className="m-3 mb-0 min-h-80 rounded-xl border border-orange-900/10 bg-white/55 p-6 md:min-h-96 md:p-8">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-orange-700">
                <span>Avant inscription</span>
                <span>03</span>
              </div>

              <div className="mt-10 border border-orange-900/15 bg-white/45 p-5">
                <div className="flex items-center justify-between border-b border-orange-900/15 pb-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-orange-700">
                      Fiche programme
                    </p>
                    <p className="mt-1 text-sm font-semibold">Éléments à confirmer</p>
                  </div>
                  <FileText className="h-6 w-6 text-orange-700" aria-hidden="true" />
                </div>

                <ul>
                  {writtenConditions.map((condition, index) => (
                    <li
                      key={condition}
                      className="flex items-center justify-between gap-4 border-b border-orange-900/10 py-4 text-xs font-semibold last:border-b-0"
                    >
                      <span>{condition}</span>
                      <span className="font-mono text-[9px] uppercase text-orange-700">
                        À vérifier {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative min-h-48 p-7 pr-20 md:p-8 md:pr-24">
              <h3 className="text-[clamp(1.65rem,2.4vw,2.35rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Les conditions sont écrites avant l&apos;inscription.
              </h3>
              <p className="mt-4 text-sm leading-6 text-night-deep/65">
                Le financeur reste seul décisionnaire de la prise en charge.
              </p>
              <Link
                href="/formations/conducteur-voyageurs"
                aria-label="Voir la formation conducteur de voyageurs"
                className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-night-deep transition-colors hover:bg-orange-700 hover:text-white md:bottom-8 md:right-8"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
