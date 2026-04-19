"use server";

export type ContactState = {
  ok?: boolean;
  fieldErrors?: Partial<
    Record<"name" | "email" | "phone" | "message" | "rgpd", string>
  >;
};

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

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const rgpd = formData.get("rgpd") === "on";

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};

  if (!name) fieldErrors.name = "Le nom est requis.";
  if (!email) fieldErrors.email = "L’e-mail est requis.";
  else if (!isValidEmail(email)) fieldErrors.email = "Format d’e-mail invalide.";
  if (!phone) fieldErrors.phone = "Le téléphone est requis.";
  else if (!isValidFrenchPhone(phone)) {
    fieldErrors.phone = "Format attendu : 06 12 34 56 78 ou +33612345678.";
  }
  if (!message) fieldErrors.message = "Décrivez votre projet en quelques lignes.";
  if (!rgpd) fieldErrors.rgpd = "Vous devez accepter la politique de confidentialité.";

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  // In production: envoyer vers CRM / email (Resend, etc.)
  return { ok: true };
}
