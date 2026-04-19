export const siteName = "Compagnon de la Route";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://compagnon-de-la-route.fr";

export const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Nous contacter" },
] as const;

export const footerFormations = [
  { href: "/formations/conducteur-voyageurs", label: "Conducteur de voyageurs" },
  { href: "/formations", label: "Toutes les formations" },
] as const;

export const footerAbout = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/journal", label: "Journal" },
  { href: "/temoignages", label: "Témoignages" },
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
  { href: "/financement-formation-conducteur-voyageurs", label: "Financement formation" },
  { href: "/faq-conducteur-de-voyageurs", label: "FAQ conducteur de voyageurs" },
  { href: "/metier-conducteur-de-car-debouches", label: "Métier & débouchés" },
  { href: "/formation-conducteur-voyageurs-hauts-de-france", label: "Formation Hauts-de-France" },
  { href: "/certification-formation-conducteur-voyageurs", label: "Certification" },
] as const;

export const contactInfo = {
  phone: "+33 3 20 00 00 00",
  email: "contact@compagnon-de-la-route.fr",
  address: "Hauts-de-France, France",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81398.4!2d3.0!3d50.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDM2JzAwLjAiTiAzwrAwMCcwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1",
};

/** Adresse structurée (SEO / JSON-LD), à affiner avec l’adresse réelle du siège */
export const orgPostalAddress = {
  addressRegion: "Hauts-de-France",
  addressCountry: "FR",
};

export const partners = [
  "GEIQ Transport & Mobilité",
  "BPV",
  "France Travail",
  "OPCO",
  "Qualiopi",
  "Région Hauts-de-France",
] as const;
