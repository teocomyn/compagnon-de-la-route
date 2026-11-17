export const siteName = "Compagnon de la Route";

export const brandInfo = {
  name: siteName,
  type: "Label transport",
  ownerName: "BOAZ",
  relationship: "Label transport porté par BOAZ",
  description:
    "Un repère commun pour préparer les responsabilités des métiers du transport de voyageurs.",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://compagnondelaroute.com";

export const socialShareImage = {
  url: "/images/og/compagnon-route-share-v1.jpg",
  width: 1200,
  height: 630,
  alt: "Compagnon de la Route — plus qu’un métier, une mission",
} as const;

export const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/le-label", label: "Le label" },
  { href: "/guides", label: "Guides" },
  { href: "/journal", label: "Journal" },
  { href: "/qui-sommes-nous", label: "BOAZ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerFormations = [
  { href: "/formations/conducteur-voyageurs", label: "Conducteur de voyageurs" },
  { href: "/formations/exploitant-regulateur", label: "Exploitant-régulateur" },
  { href: "/formations", label: "Toutes les formations" },
] as const;

export const footerAbout = [
  { href: "/le-label", label: "Le label" },
  { href: "/qui-sommes-nous", label: "BOAZ, organisme porteur" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/rgpd", label: "RGPD" },
] as const;

/** Guides SEO (pages piliers) */
export const footerGuides = [
  { href: "/guides", label: "Tous les guides" },
  { href: "/devenir-conducteur-de-voyageurs", label: "Devenir conducteur" },
  { href: "/permis-d-conducteur-professionnel", label: "Permis D" },
  { href: "/financement-formation-conducteur-voyageurs", label: "Financement formation" },
  { href: "/certification-formation-conducteur-voyageurs", label: "Vérifier une certification" },
  { href: "/faq-conducteur-de-voyageurs", label: "Questions fréquentes" },
] as const;

export const contactInfo = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? null,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  serviceArea: "France",
};

function parseHttpsUrls(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => {
      try {
        return new URL(entry).protocol === "https:";
      } catch {
        return false;
      }
    });
}

/**
 * Profils officiels de la marque (LinkedIn, Facebook, YouTube…), séparés par des
 * virgules dans NEXT_PUBLIC_SAME_AS. Vide tant qu'aucun profil n'est créé : rien
 * n'est publié par défaut, ni dans le pied de page ni dans les données structurées.
 */
export const socialProfiles = parseHttpsUrls(process.env.NEXT_PUBLIC_SAME_AS);

/** Codes de vérification Search Console et Bing, publiés en balises meta si renseignés. */
export const siteVerification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined,
} as const;

/** Registres publics permettant de vérifier l'organisme sans passer par ce site. */
export const officialReferences = [
  {
    label: "Liste publique des organismes de formation",
    url: "https://www.data.gouv.fr/datasets/liste-publique-des-organismes-de-formation-l-6351-7-1-du-code-du-travail/",
    detail: "Source de la déclaration d’activité de BOAZ : rechercher le SIREN ou le numéro de déclaration.",
  },
  {
    label: "Ministère du Travail : formalités des organismes de formation",
    url: "https://travail-emploi.gouv.fr/les-organismes-de-formation-formalites-administratives",
    detail: "Ce que recouvre la déclaration d’activité et ce qu’elle ne garantit pas.",
  },
  {
    label: "Ministère du Travail : marque Qualiopi",
    url: "https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation",
    detail: "Portée de la certification qualité, limitée aux actions de formation.",
  },
] as const;

/** Informations issues de la liste publique des organismes de formation. */
export const organizationInfo = {
  legalName: "BOAZ (LES COMPAGNONS DE LA ROUTE)",
  siren: "929 379 758",
  siret: "929 379 758 00022",
  trainingDeclarationNumber: "94 20 21469 20",
  trainingDeclarationRegion: "Corse",
  qualiopiScope: "Actions de formation",
  address: "Tiuccia, Strada di u Melu",
  postalCode: "20111",
  city: "Casaglione",
  country: "France",
} as const;

export const orgPostalAddress = {
  streetAddress: organizationInfo.address,
  postalCode: organizationInfo.postalCode,
  addressLocality: organizationInfo.city,
  addressRegion: "Corse",
  addressCountry: "FR",
} as const;

export const programmeInfo = {
  title: "Parcours conducteur de voyageurs",
  duration: "Définie après positionnement",
  schedule: "Calendrier communiqué avant inscription",
  financing:
    "Les possibilités de financement sont étudiées au cas par cas et confirmées par écrit avant toute inscription.",
  employment:
    "L’accompagnement prépare l’accès à l’emploi, sans garantir une embauche ni un type de contrat.",
} as const;

export const exploitantProgrammeInfo = {
  title: "Parcours exploitant-régulateur en transport routier de voyageurs",
  status: "Fiche programme en préparation",
  duration: "À confirmer dans la fiche programme",
  schedule: "Aucune session publiée à ce jour",
  certification:
    "La certification éventuellement préparée par BOAZ sera confirmée avant toute candidature.",
  financing:
    "Aucune prise en charge n’est présentée comme acquise avant l’accord écrit du financeur.",
} as const;
