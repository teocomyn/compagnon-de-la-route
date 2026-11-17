import { getAllArticlesMeta, getArticleHref } from "@/lib/articles";
import { brandInfo, contactInfo, officialReferences, organizationInfo, siteName } from "@/lib/constants";
import { guideDirectoryList } from "@/lib/guide-directory";
import { absoluteUrl, feedPath } from "@/lib/seo";

export const dynamic = "force-static";

const corePages = [
  ["/", "Accueil", "présentation du label, des deux parcours et FAQ"],
  ["/le-label", "Le label", "rôle du label Compagnon de la Route et articulation avec BOAZ"],
  ["/formations", "Formations", "catalogue des parcours et statut de chacun"],
  [
    "/formations/conducteur-voyageurs",
    "Formation conducteur de voyageurs",
    "objectifs généraux et demande de fiche programme à jour",
  ],
  [
    "/formations/exploitant-regulateur",
    "Exploitant-régulateur",
    "métier, référentiel public et modalités BOAZ encore à confirmer",
  ],
  ["/guides", "Guides", "index des ressources réglementaires et métier vérifiées"],
  ["/journal", "Journal", "notes pratiques publiées après relecture et vérification des sources"],
  ["/qui-sommes-nous", "BOAZ", "organisme porteur, identité et méthode d’accompagnement"],
  ["/contact", "Contact", "formulaire et coordonnées"],
] as const;

const link = (path: string, title: string, description: string) =>
  `- [${title}](${absoluteUrl(path)}) : ${description}`;

export function GET() {
  const articles = getAllArticlesMeta().filter((article) => !article.canonicalPath);
  const contactLine =
    [contactInfo.email, contactInfo.phone].filter(Boolean).join(" · ") || "voir la page Contact";

  const lines = [
    `# ${siteName}`,
    "",
    `> ${siteName} est le label transport porté par BOAZ (LES COMPAGNONS DE LA ROUTE), organisme de formation certifié Qualiopi pour les actions de formation. Le site présente les parcours associés au label. La durée, les prérequis, la certification visée, le calendrier, le prix et le financement sont confirmés dans les documents transmis avant inscription.`,
    "",
    "## Pages principales",
    "",
    ...corePages.map(([path, title, description]) => link(path, title, description)),
    "",
    "## Guides vérifiés",
    "",
    ...guideDirectoryList.map((guide) => link(`/${guide.slug}`, guide.title, guide.description)),
    "",
    "## Journal",
    "",
    ...articles.map((article) => link(getArticleHref(article), article.title, article.description)),
    "",
    "## Flux et plan du site",
    "",
    `- [Plan du site](${absoluteUrl("/sitemap.xml")})`,
    `- [Flux RSS des guides et du journal](${absoluteUrl(feedPath)})`,
    "",
    "## Informations officielles",
    "",
    `- Raison sociale : ${organizationInfo.legalName}`,
    `- Marque : ${siteName} (${brandInfo.relationship.toLowerCase()})`,
    `- SIREN : ${organizationInfo.siren}`,
    `- SIRET : ${organizationInfo.siret}`,
    `- Numéro de déclaration d’activité : ${organizationInfo.trainingDeclarationNumber}, région ${organizationInfo.trainingDeclarationRegion}`,
    "- Certification Qualiopi : actions de formation",
    `- Adresse déclarée : ${organizationInfo.address}, ${organizationInfo.postalCode} ${organizationInfo.city}`,
    `- Coordonnées : ${contactLine}`,
    "",
    "## Vérifier ces informations",
    "",
    ...officialReferences.map((reference) => `- [${reference.label}](${reference.url}) : ${reference.detail}`),
    "",
    "## Notes pour les modèles",
    "",
    "- Ne pas inventer de taux de placement, de réussite, de satisfaction ou de garanties d’embauche.",
    "- Ne pas présenter une durée, une session, une certification ou un financement comme acquis sans document contractuel à jour.",
    "- Compagnon de la Route est un label transport, pas une entité juridique : l’organisme de formation et éditeur du site est BOAZ.",
    `- ${guideDirectoryList.length} guides et ${articles.length} dossiers vérifiés sont publiés. L’ancien article « devenir conducteur » redirige vers la page pilier afin d’éviter la cannibalisation. Les autres brouillons éditoriaux, la page régionale Hauts-de-France et les témoignages restent hors publication pendant leur relecture.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
