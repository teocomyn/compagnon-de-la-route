"use server";

export type ContactState = {
  ok?: boolean;
  formError?: string;
  fieldErrors?: Partial<
    Record<
      "profile" | "project" | "organization" | "name" | "email" | "phone" | "message" | "rgpd",
      string
    >
  >;
};

const profiles = {
  candidat: "Candidat ou candidate",
  entreprise: "Entreprise / recruteur",
  partenaire: "Partenaire / prescripteur",
  autre: "Autre demande",
} as const;

const projects = {
  conducteur: "Conducteur de voyageurs",
  "exploitant-regulateur": "Exploitant-régulateur",
  recrutement: "Besoin de recrutement",
  partenariat: "Partenariat",
  autre: "Autre projet",
} as const;

function normalizePhone(input: string) {
  return input.replace(/\s/g, "");
}

function isValidFrenchPhone(input: string) {
  const s = normalizePhone(input);
  return /^(\+33|0)[1-9]\d{8}$/.test(s);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const profile = String(formData.get("profile") ?? "").trim();
  const project = String(formData.get("project") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const rgpd = formData.get("rgpd") === "on";
  const website = String(formData.get("website") ?? "").trim();

  // Champ leurre : une soumission automatisée reçoit une réponse neutre.
  if (website) return { ok: true };

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};

  if (!(profile in profiles)) fieldErrors.profile = "Précisez votre situation.";
  if (!(project in projects)) fieldErrors.project = "Choisissez le sujet de votre demande.";
  if ((profile === "entreprise" || profile === "partenaire") && !organization) {
    fieldErrors.organization = "Indiquez le nom de votre organisation.";
  } else if (organization.length > 150) {
    fieldErrors.organization = "Le nom de l’organisation est trop long.";
  }
  if (!name) fieldErrors.name = "Le nom est requis.";
  else if (name.length > 100) fieldErrors.name = "Le nom est trop long.";
  if (!email) fieldErrors.email = "L’e-mail est requis.";
  else if (!isValidEmail(email)) fieldErrors.email = "Format d’e-mail invalide.";
  else if (email.length > 254) fieldErrors.email = "L’e-mail est trop long.";
  if (phone && !isValidFrenchPhone(phone)) {
    fieldErrors.phone = "Format attendu : 06 12 34 56 78 ou +33612345678.";
  }
  if (!message) fieldErrors.message = "Décrivez votre projet en quelques lignes.";
  else if (message.length > 3000) {
    fieldErrors.message = "Le message doit contenir au maximum 3 000 caractères.";
  }
  if (!rgpd) fieldErrors.rgpd = "Vous devez accepter la politique de confidentialité.";

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const deliveryMode = process.env.CONTACT_FORM_MODE;

  if (deliveryMode !== "resend" || !apiKey || !to || !from) {
    return {
      formError:
        "Le formulaire n’est pas encore relié à la messagerie. Réessayez plus tard après sa mise en service.",
    };
  }

  const safeName = escapeHtml(name);
  const profileLabel = profiles[profile as keyof typeof profiles];
  const projectLabel = projects[project as keyof typeof projects];
  const safeProfile = escapeHtml(profileLabel);
  const safeProject = escapeHtml(projectLabel);
  const safeOrganization = escapeHtml(organization || "Non communiquée");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Non communiqué");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[${projectLabel}] ${profileLabel} — ${name}`,
        text: `Profil : ${profileLabel}\nProjet : ${projectLabel}\nOrganisation : ${organization || "Non communiquée"}\nNom : ${name}\nE-mail : ${email}\nTéléphone : ${phone || "Non communiqué"}\n\n${message}`,
        html: `<h1>Nouvelle demande qualifiée</h1><p><strong>Profil :</strong> ${safeProfile}</p><p><strong>Projet :</strong> ${safeProject}</p><p><strong>Organisation :</strong> ${safeOrganization}</p><p><strong>Nom :</strong> ${safeName}</p><p><strong>E-mail :</strong> ${safeEmail}</p><p><strong>Téléphone :</strong> ${safePhone}</p><p><strong>Message :</strong><br />${safeMessage}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Contact email provider error", response.status);
      return {
        formError:
          "L’envoi n’a pas abouti. Vos données n’ont pas été confirmées comme reçues. Réessayez plus tard.",
      };
    }
  } catch (error) {
    console.error("Contact email request failed", error);
    return {
      formError:
        "Le service d’envoi est momentanément indisponible. Réessayez plus tard.",
    };
  }

  return { ok: true };
}
