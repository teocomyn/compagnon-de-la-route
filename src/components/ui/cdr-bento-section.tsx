import { ArrowRight } from "lucide-react";
import Link from "next/link";

const routeSteps = ["Positionnement", "Parcours écrit", "Évaluation", "Candidature"];
const trainingTopics = [
  "Sécurité et réglementation",
  "Conduite et contrôles",
  "Accueil des voyageurs",
  "Gestion des incidents",
];

export function CdrBentoSection() {
  return (
    <section className="border-y border-white/10 bg-night-deep py-20 md:py-28">
      <div className="container-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
            Le parcours en clair
          </p>
          <div>
            <h2 className="text-balance text-[clamp(2.5rem,5vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-cream">
              Décider avec des faits.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/60">
              Votre situation, les conditions de la formation et les étapes suivantes
              doivent tenir dans un cadre lisible.
            </p>
          </div>
        </div>

        <div className="grid border-l border-t border-white/15 lg:grid-cols-12">
          <article className="border-b border-r border-white/15 p-7 md:p-10 lg:col-span-7 lg:row-span-2">
            <p className="font-mono text-xs text-orange-300">01 / PARCOURS</p>
            <h3 className="mt-7 max-w-xl text-[clamp(2rem,3.7vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-cream">
              De l&apos;idée de reconversion à un plan vérifiable.
            </h3>
            <ol className="mt-12 border-t border-white/15 sm:grid sm:grid-cols-4">
              {routeSteps.map((step, index) => (
                <li
                  key={step}
                  className="border-b border-white/15 py-5 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="font-mono text-[10px] text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-medium text-cream">{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="border-b border-r border-white/15 p-7 md:p-10 lg:col-span-5">
            <p className="font-mono text-xs text-orange-300">02 / ÉCRIT</p>
            <h3 className="mt-5 text-2xl font-semibold text-cream">
              Les éléments à obtenir avant de commencer
            </h3>
            <p className="mt-4 text-sm leading-7 text-cream/60">
              Objectifs, durée, calendrier, évaluations et prix figurent dans les
              documents transmis avant l&apos;inscription.
            </p>
          </article>

          <article className="border-b border-r border-white/15 bg-orange-100 p-7 text-night-deep md:p-10 lg:col-span-5">
            <p className="font-mono text-xs text-orange-700">03 / MÉTIER</p>
            <h3 className="mt-5 text-2xl font-semibold">
              La conduite ne résume pas le poste.
            </h3>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {trainingTopics.map((topic) => (
                <li key={topic} className="border-t border-night-deep/20 pt-3 text-sm">
                  {topic}
                </li>
              ))}
            </ul>
          </article>

          <article className="border-b border-r border-white/15 p-7 md:p-10 lg:col-span-4">
            <p className="font-mono text-xs text-orange-300">04 / FINANCEMENT</p>
            <h3 className="mt-5 text-xl font-semibold text-cream">Une décision au cas par cas</h3>
            <p className="mt-3 text-sm leading-7 text-cream/60">
              CPF, France Travail, employeur ou OPCO peuvent être étudiés. Le financeur
              reste seul décisionnaire.
            </p>
          </article>

          <article className="border-b border-r border-white/15 p-7 md:p-10 lg:col-span-4">
            <p className="font-mono text-xs text-orange-300">05 / REPÈRES</p>
            <h3 className="mt-5 text-xl font-semibold text-cream">Une identité vérifiable</h3>
            <p className="mt-3 text-sm leading-7 text-cream/60">
              BOAZ est certifié Qualiopi pour les actions de formation.
              <br />
              SIRET 929 379 758 00022
              <br />
              NDA 94 20 21469 20
            </p>
          </article>

          <article className="border-b border-r border-white/15 bg-orange-500 p-7 text-night-deep md:p-10 lg:col-span-4">
            <p className="font-mono text-xs">06 / VOTRE PROJET</p>
            <h3 className="mt-5 text-2xl font-semibold">Demandez des réponses précises.</h3>
            <Link
              href="/formations/conducteur-voyageurs"
              className="mt-8 inline-flex items-center gap-2 border-b border-night-deep pb-1 font-semibold"
            >
              Voir le parcours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
