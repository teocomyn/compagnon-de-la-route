import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articleGraph, type FaqEntry } from "@/lib/schema";
import { verifiedGuidesReviewedAtIso, type VerifiedGuide } from "@/lib/verified-guides";
import { cn } from "@/lib/utils";

type RelatedLink = NonNullable<VerifiedGuide["relatedLinks"]>[number];

const guideRelations: Record<string, readonly RelatedLink[]> = {
  "financement-formation-conducteur-voyageurs": [
    { href: "/aif-france-travail-formation-conducteur", label: "AIF France Travail", description: "Le parcours précis du projet, du devis et de la décision." },
    { href: "/financement-opco-mobilites-formation-transport", label: "OPCO Mobilités", description: "Les démarches lorsqu’une entreprise porte le projet." },
    { href: "/devenir-conducteur-de-voyageurs", label: "Parcours complet", description: "Replacer le financement parmi toutes les étapes du métier." },
  ],
  "metier-conducteur-de-car-debouches": [
    { href: "/devenir-conducteur-de-voyageurs", label: "Devenir conducteur", description: "Passer de la découverte du métier à un parcours vérifié." },
    { href: "/reconversion-conducteur-voyageurs", label: "Préparer une reconversion", description: "Tester les conditions réelles avant de choisir une formation." },
    { href: "/reussir-embauche-conducteur-car", label: "Préparer le recrutement", description: "Construire une candidature et vérifier le poste proposé." },
    { href: "/formation-conducteur-autocar-tourisme", label: "Conduire en tourisme", description: "Services occasionnels, groupes et déplacements à l’extérieur." },
    { href: "/formation-transport-scolaire-conducteur", label: "Conduire en transport scolaire", description: "Sécurité, prise en charge des élèves et rythme du service." },
    { href: "/faq-conducteur-de-voyageurs", label: "Questions fréquentes", description: "Les réponses vérifiées avant de se lancer." },
  ],
  "permis-d-conducteur-professionnel": [
    { href: "/examen-permis-d-conditions-epreuves", label: "Préparer l’examen", description: "Dossier, code, plateau et circulation étape par étape." },
    { href: "/fimo-passage-a-la-route", label: "Comprendre la FIMO", description: "Distinguer permis et qualification professionnelle." },
    { href: "/devenir-conducteur-de-voyageurs", label: "Voir tout le parcours", description: "Qualification, financement, formation et candidature." },
  ],
  "fimo-passage-a-la-route": [
    { href: "/fco-voyageurs-renouvellement", label: "Renouveler sa FCO", description: "Échéance, justificatifs et programme des 35 heures." },
    { href: "/permis-d-conducteur-professionnel", label: "Vérifier le permis D", description: "Le droit de conduire reste une condition distincte." },
    { href: "/devenir-conducteur-de-voyageurs", label: "Voir tout le parcours", description: "Les étapes complètes jusqu’à la candidature." },
  ],
  "faq-conducteur-de-voyageurs": [
    { href: "/devenir-conducteur-de-voyageurs", label: "Guide complet", description: "Le parcours détaillé pour exercer le métier." },
    { href: "/financement-formation-conducteur-voyageurs", label: "Financer la formation", description: "Les dispositifs à vérifier selon votre statut." },
    { href: "/contact", label: "Poser une question", description: "Présenter votre situation à l’équipe BOAZ." },
  ],
  "formation-conducteur-autocar-tourisme": [
    { href: "/metier-conducteur-de-car-debouches", label: "Comparer les environnements", description: "Urbain, interurbain, scolaire, navette ou tourisme." },
    { href: "/formation-transport-scolaire-conducteur", label: "Comparer avec le scolaire", description: "Un autre service, d’autres horaires et d’autres responsabilités." },
    { href: "/reussir-embauche-conducteur-car", label: "Préparer l’embauche", description: "Questions à poser sur les débouchés et les services." },
  ],
  "formation-transport-scolaire-conducteur": [
    { href: "/metier-conducteur-de-car-debouches", label: "Comprendre le métier", description: "Comparer les services et leurs conditions d’exercice." },
    { href: "/formation-conducteur-autocar-tourisme", label: "Comparer avec le tourisme", description: "Services occasionnels, groupes et déplacements." },
    { href: "/reussir-embauche-conducteur-car", label: "Préparer l’embauche", description: "Contrat, volume horaire et lieu de prise de service." },
  ],
  "reussir-embauche-conducteur-car": [
    { href: "/journal/reussir-entretien", label: "Réussir l’entretien", description: "Préparer des exemples concrets sur la sécurité et le service." },
    { href: "/reconversion-conducteur-voyageurs", label: "Valoriser sa reconversion", description: "Transformer son expérience antérieure en compétences utiles." },
    { href: "/metier-conducteur-de-car-debouches", label: "Vérifier le poste", description: "Horaires, services et contraintes selon l’employeur." },
  ],
  "certification-formation-conducteur-voyageurs": [
    { href: "/journal/choisir-formation-conducteur-voyageurs", label: "Choisir une formation", description: "Dix contrôles avant de signer ou payer." },
    { href: "/devenir-conducteur-de-voyageurs", label: "Voir le parcours complet", description: "Permis, qualification, financement et candidature." },
    { href: "/formations/conducteur-voyageurs", label: "Demander le programme", description: "Obtenir les modalités écrites correspondant à votre situation." },
  ],
};

/** Questions visibles du guide : bloc FAQ dédié, ou sections formulées en questions. */
function guideFaqEntries(guide: VerifiedGuide): FaqEntry[] {
  if (guide.faqs?.length) {
    return guide.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }));
  }
  if (!guide.faqFromSections) return [];
  return guide.sections
    .filter((section) => section.title.trim().endsWith("?"))
    .map((section) => ({
      question: section.title,
      answer: [...(section.paragraphs ?? []), ...(section.bullets ?? [])].join(" "),
    }))
    .filter((entry) => entry.answer.length > 0);
}

function GuideJsonLd({ guide }: { guide: VerifiedGuide }) {
  const reviewedAt = guide.reviewedAtIso ?? verifiedGuidesReviewedAtIso;
  return (
    <JsonLd
      data={articleGraph({
        path: `/${guide.slug}`,
        headline: guide.title,
        description: guide.description,
        datePublished: reviewedAt,
        dateModified: reviewedAt,
        section: guide.eyebrow,
        citations: guide.sources.map((source) => source.url),
        faqs: guideFaqEntries(guide),
      })}
    />
  );
}

export function VerifiedGuidePage({ guide }: { guide: VerifiedGuide }) {
  const relatedLinks = guide.relatedLinks ?? guideRelations[guide.slug] ?? [];
  return (
    <>
      <GuideJsonLd guide={guide} />
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title, href: `/${guide.slug}` },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <main>
        <section className="section-shell pb-14 pt-5 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>{guide.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.35rem,6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white-90">
              {guide.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white-60 md:text-xl">
              {guide.description}
            </p>
              <p className="mt-5 flex items-center gap-2 text-sm text-white-40">
                <ShieldCheck className="h-4 w-4 text-orange-300" aria-hidden />
                Sources officielles vérifiées le {guide.reviewedAt}
              </p>
              {guide.nextReviewAt ? (
                <p className="mt-2 text-xs text-white-35">
                  Prochaine relecture réglementaire prévue au plus tard le {guide.nextReviewAt}.
                </p>
              ) : null}
          </div>
        </section>

        <section className="section-shell pb-16" aria-labelledby="guide-summary">
          <div className="mx-auto max-w-5xl">
            <h2 id="guide-summary" className="sr-only">
              À retenir
            </h2>
            <div className="grid border-l border-t border-white/15 md:grid-cols-3">
              {guide.summary.map((item, index) => (
                <div key={item} className="border-b border-r border-white/15 p-6">
                  <span className="font-mono text-xs text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-[15px] leading-7 text-white-75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pb-16 md:pb-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <article className="article-prose max-w-none">
              {guide.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.table ? (
                    <div className="overflow-x-auto">
                      <table>
                        <caption className="sr-only">{section.table.caption}</caption>
                        <thead>
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row[0]}>
                              {row.map((cell, index) =>
                                index === 0 ? (
                                  <th key={cell} scope="row">
                                    {cell}
                                  </th>
                                ) : (
                                  <td key={cell}>{cell}</td>
                                ),
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}

              <aside className="mt-12 border-l-2 border-orange-400 bg-white/[0.025] p-6 md:p-8">
                <p className="!mb-0 text-base font-medium leading-relaxed text-white-90">
                  {guide.notice}
                </p>
              </aside>

              {guide.faqs?.length ? (
                <section aria-labelledby="guide-faq">
                  <h2 id="guide-faq">Questions fréquentes</h2>
                  <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                    {guide.faqs.map((faq) => (
                      <details key={faq.question} className="group py-5">
                        <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white-90 marker:hidden">
                          {faq.question}
                        </summary>
                        <p className="!mb-0 mt-4 text-white-60">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>

            <aside className="border-t border-white/15 py-6 lg:sticky lg:top-28">
              <Eyebrow>Sources officielles</Eyebrow>
              <ul className="mt-5 space-y-5">
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                    >
                      <span className="flex items-start gap-2 text-sm font-semibold text-white-90 transition-colors group-hover:text-orange-200">
                        {source.label}
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-white-40">
                        {source.detail}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "mt-7 w-full",
                )}
              >
                Poser une question
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </section>

        {relatedLinks.length ? (
          <section className="section-shell border-t border-white/10 py-14 md:py-20" aria-labelledby="related-guides">
            <div className="mx-auto max-w-5xl">
              <Eyebrow>Continuer le parcours</Eyebrow>
              <h2 id="related-guides" className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white-90 md:text-4xl">
                Les prochaines réponses utiles
              </h2>
              <div className="mt-8 grid border-l border-t border-white/15 md:grid-cols-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group border-b border-r border-white/15 p-6 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                  >
                    <span className="flex items-start justify-between gap-4 text-base font-semibold text-white-90 group-hover:text-orange-200">
                      {link.label}
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-white-50">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <FinalCTA />
    </>
  );
}
