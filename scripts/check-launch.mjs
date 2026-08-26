import { resolveMx, resolveTxt } from "node:dns/promises";

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
  ["CONSUMER_SALES_ENABLED", "statut de vente aux particuliers"],
];

const missing = required.filter(([key]) => !process.env[key]?.trim());
const invalid = [];
const externalFailures = [];

if (process.env.CONTACT_FORM_MODE !== "resend") {
  invalid.push("CONTACT_FORM_MODE doit valoir « resend »");
}

const consumerSalesValue = process.env.CONSUMER_SALES_ENABLED?.trim().toLowerCase();
if (consumerSalesValue && !["true", "false"].includes(consumerSalesValue)) {
  invalid.push("CONSUMER_SALES_ENABLED doit valoir « true » ou « false »");
}
if (consumerSalesValue === "true") {
  for (const item of [
    ["CONSUMER_MEDIATOR_NAME", "médiateur de la consommation"],
    ["CONSUMER_MEDIATOR_URL", "URL du médiateur"],
  ]) {
    if (!process.env[item[0]]?.trim()) missing.push(item);
  }
}

let site;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
if (siteUrl) {
  try {
    site = new URL(siteUrl);
    if (site.protocol !== "https:") invalid.push("NEXT_PUBLIC_SITE_URL doit utiliser HTTPS");
    if (site.hostname === "localhost") invalid.push("NEXT_PUBLIC_SITE_URL ne peut pas être localhost");
  } catch {
    invalid.push("NEXT_PUBLIC_SITE_URL doit être une URL valide");
  }
}

const emailPattern = /^[^\s@]+@([^\s@]+)$/;
const publicEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
const fromEmail = process.env.CONTACT_FROM_EMAIL?.match(/<([^>]+)>/)?.[1]?.trim();
const emailDomain = publicEmail?.match(emailPattern)?.[1]?.toLowerCase();

for (const [label, value] of [
  ["NEXT_PUBLIC_CONTACT_EMAIL", publicEmail],
  ["CONTACT_TO_EMAIL", toEmail],
  ["CONTACT_FROM_EMAIL", fromEmail],
]) {
  if (value && !emailPattern.test(value)) {
    invalid.push(`${label} doit contenir une adresse e-mail valide`);
  }
}

if (site && emailDomain && emailDomain !== site.hostname.replace(/^www\./, "")) {
  invalid.push("l’adresse e-mail publique doit utiliser le domaine canonique du site");
}
if (publicEmail && toEmail && publicEmail.toLowerCase() !== toEmail.toLowerCase()) {
  invalid.push("CONTACT_TO_EMAIL doit être la boîte publique réellement surveillée");
}
if (process.env.CONTACT_FROM_EMAIL?.includes("votre-domaine")) {
  invalid.push("CONTACT_FROM_EMAIL contient encore le domaine d’exemple");
}

if (!missing.length && !invalid.length && site && emailDomain) {
  try {
    const response = await fetch(site, { signal: AbortSignal.timeout(8_000) });
    if (!response.ok) externalFailures.push(`le site public répond HTTP ${response.status}`);
  } catch {
    externalFailures.push("le site public HTTPS est inaccessible");
  }

  try {
    if (!(await resolveMx(emailDomain)).length) throw new Error();
  } catch {
    externalFailures.push(`aucun serveur MX ne reçoit les e-mails pour ${emailDomain}`);
  }

  try {
    const records = (await resolveTxt(`_dmarc.${emailDomain}`)).map((entry) => entry.join(""));
    if (!records.some((value) => value.startsWith("v=DMARC1"))) throw new Error();
  } catch {
    externalFailures.push(`l’enregistrement DMARC de ${emailDomain} est absent`);
  }

  try {
    const records = (await resolveTxt(`resend._domainkey.${emailDomain}`)).map((entry) =>
      entry.join(""),
    );
    if (!records.some((value) => value.includes("p="))) throw new Error();
  } catch {
    externalFailures.push(`la signature DKIM Resend de ${emailDomain} est absente`);
  }

  try {
    const returnPath = `send.${emailDomain}`;
    const [mxRecords, txtRecords] = await Promise.all([
      resolveMx(returnPath),
      resolveTxt(returnPath),
    ]);
    const spf = txtRecords.map((entry) => entry.join(""));
    if (!mxRecords.length || !spf.some((value) => value.startsWith("v=spf1"))) {
      throw new Error();
    }
  } catch {
    externalFailures.push(`le Return-Path SPF de send.${emailDomain} est incomplet`);
  }

  try {
    const response = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new Error();
    const payload = await response.json();
    const domain = payload.data?.find((item) => item.name === emailDomain);
    if (!domain || domain.status !== "verified") {
      externalFailures.push(`le domaine ${emailDomain} n’est pas vérifié dans Resend`);
    }
  } catch {
    externalFailures.push("la configuration Resend n’a pas pu être vérifiée");
  }
}

if (missing.length || invalid.length || externalFailures.length) {
  console.error("\nCompagnon de la Route n’est pas prêt pour une mise en ligne définitive.\n");
  for (const [key, label] of missing) console.error(`- ${key} : ${label} manquant`);
  for (const message of invalid) console.error(`- ${message}`);
  for (const message of externalFailures) console.error(`- ${message}`);
  console.error("\nCompléter les paramètres, puis relancer npm run check:launch.\n");
  process.exit(1);
}

console.log("Tous les paramètres critiques et les services externes de lancement sont vérifiés.");
