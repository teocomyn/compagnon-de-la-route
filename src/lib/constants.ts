export const siteName = "Compagnon de la Route";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://compagnon-de-la-route.fr";

export const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/guides", label: "Guides" },
  { href: "/journal", label: "Journal" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
  { href: "/contact", label: "Nous contacter" },
] as const;

export const footerFormations = [
  { href: "/formations/conducteur-voyageurs", label: "Conducteur de voyageurs" },
  { href: "/formations", label: "Toutes les formations" },
] as const;

export const footerAbout = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
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
  { href: "/financement-formation-conducteur-voyageurs", label: "Financement formation" },
  { href: "/metier-conducteur-de-car-debouches", label: "Métier & débouchés" },
  { href: "/certification-formation-conducteur-voyageurs", label: "Vérifier une certification" },
] as const;

export const contactInfo = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? null,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  serviceArea: "France",
};

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
