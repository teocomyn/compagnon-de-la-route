import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    title: "Rendre la mobilité possible",
    text: "Le conducteur relie les habitants à leur travail, à leurs études et aux services du quotidien.",
  },
  {
    title: "Exercer un métier de contact",
    text: "Accueil, information et gestion des imprévus font partie du service autant que la conduite.",
  },
  {
    title: "Travailler près de son territoire",
    text: "Urbain, scolaire, interurbain ou tourisme : les environnements varient selon les opérateurs locaux.",
  },
  {
    title: "Construire une compétence reconnue",
    text: "Le métier demande une qualification, de la rigueur et une pratique entretenue tout au long de la carrière.",
  },
  {
    title: "Gagner en autonomie",
    text: "À bord, le conducteur applique les procédures et prend les premières décisions face aux aléas.",
  },
  {
    title: "Faire évoluer son parcours",
    text: "Les suites possibles dépendent de l’expérience, des qualifications et des besoins de l’entreprise.",
  },
] as const;

export function WhyBecome() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Le métier"
          title="Pourquoi regarder cette voie de près"
          lead="Le transport de voyageurs réunit conduite professionnelle et service public au quotidien. Voici ce que cela change concrètement."
        />

        <ol className="grid border-t border-white/15 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/15 py-7 md:px-6 md:odd:border-r md:odd:pl-0"
            >
              <span className="font-mono text-xs text-orange-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white-90">{reason.title}</h3>
                <p className="mt-2 max-w-lg text-[15px] leading-7 text-white-60">
                  {reason.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
