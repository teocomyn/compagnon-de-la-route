const required = [
  ["NEXT_PUBLIC_SITE_URL", "URL canonique publique"],
  ["NEXT_PUBLIC_CONTACT_EMAIL", "adresse e-mail publique"],
  ["NEXT_PUBLIC_CONTACT_PHONE", "numéro de téléphone public"],
  ["RESEND_API_KEY", "clé Resend"],
  ["CONTACT_TO_EMAIL", "destinataire du formulaire"],
  ["CONTACT_FROM_EMAIL", "expéditeur vérifié du formulaire"],
  ["LEGAL_PUBLICATION_DIRECTOR", "directeur de la publication"],
  ["LEGAL_HOST_NAME", "nom de l’hébergeur"],
  ["LEGAL_HOST_ADDRESS", "adresse de l’hébergeur"],
  ["CONSUMER_MEDIATOR_NAME", "médiateur de la consommation"],
  ["CONSUMER_MEDIATOR_URL", "URL du médiateur"],
];

const missing = required.filter(([key]) => !process.env[key]?.trim());
const invalid = [];

if (process.env.CONTACT_FORM_MODE !== "resend") {
  invalid.push("CONTACT_FORM_MODE doit valoir « resend »");
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
if (siteUrl) {
  try {
    const parsed = new URL(siteUrl);
    if (parsed.protocol !== "https:") invalid.push("NEXT_PUBLIC_SITE_URL doit utiliser HTTPS");
    if (parsed.hostname === "localhost") invalid.push("NEXT_PUBLIC_SITE_URL ne peut pas être localhost");
  } catch {
    invalid.push("NEXT_PUBLIC_SITE_URL doit être une URL valide");
  }
}

if (process.env.CONTACT_FROM_EMAIL?.includes("votre-domaine")) {
  invalid.push("CONTACT_FROM_EMAIL contient encore le domaine d’exemple");
}

if (missing.length || invalid.length) {
  console.error("\nCompagnon de la Route n’est pas prêt pour une mise en ligne définitive.\n");
  for (const [key, label] of missing) console.error(`- ${key} : ${label} manquant`);
  for (const message of invalid) console.error(`- ${message}`);
  console.error("\nCompléter les variables de production, puis relancer npm run check:launch.\n");
  process.exit(1);
}

console.log("Tous les paramètres critiques de lancement sont présents.");
