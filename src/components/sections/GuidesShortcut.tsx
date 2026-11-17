import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { guideDirectoryList } from "@/lib/guide-directory";

const shortcuts = [
  {
    href: "/devenir-conducteur-de-voyageurs",
    label: "Devenir conducteur de bus ou de car",
    description: "Permis D, qualification, aptitude médicale, financement et candidature.",
  },
  {
    href: "/financement-formation-conducteur-voyageurs",
    label: "Financer sa formation",
    description: "CPF, France Travail, employeur et OPCO : ce qu’il faut vérifier.",
  },
  {
    href: "/certification-formation-conducteur-voyageurs",
    label: "Vérifier une certification",
    description: "RNCP, Qualiopi, déclaration d’activité : ce que chaque référence prouve.",
  },
  {
    href: "/faq-conducteur-de-voyageurs",
    label: "Questions fréquentes",
    description: "Permis D, FIMO, titre professionnel, financement et accès à l’emploi.",
  },
] as const;

/** Accès direct aux guides sourcés depuis l'accueil, pour relier la marque au contenu de fond. */
export function GuidesShortcut() {
  return (
    <section
      className="section-shell border-t border-white/10 py-14 md:py-20"
      aria-labelledby="home-guides"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Guides vérifiés</Eyebrow>
            <h2
              id="home-guides"
              className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-[-0.035em] text-white-90 md:text-4xl"
            >
              Des réponses sourcées pour préparer votre projet.
            </h2>
          </div>
          <Link
            href="/guides"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
          >
            Voir les {guideDirectoryList.length} guides
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-9 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((shortcut) => (
            <Link
              key={shortcut.href}
              href={shortcut.href}
              className="group border-b border-r border-white/15 p-6 transition-colors hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              <span className="flex items-start justify-between gap-4 text-base font-semibold text-white-90 group-hover:text-orange-200">
                {shortcut.label}
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              </span>
              <span className="mt-3 block text-sm leading-6 text-white-50">
                {shortcut.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
