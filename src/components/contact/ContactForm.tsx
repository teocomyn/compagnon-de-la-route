"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitContact, type ContactState } from "@/actions/contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
const initial: ContactState = {};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div
        className="border-l-2 border-mint-400 bg-mint-500/[0.07] p-8"
        role="status"
      >
        <p className="text-lg font-semibold text-white-90">
          Merci : votre demande est bien envoyée. Nous revenons vers vous très vite.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-white-60">
          Une copie n&apos;est pas envoyée automatiquement : conservez cette confirmation.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6" noValidate>
      <input type="hidden" name="form" value="contact" />
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Site internet</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Input
        name="name"
        label="Nom complet"
        autoComplete="name"
        required
        maxLength={100}
        error={state.fieldErrors?.name}
      />
      <Input
        name="email"
        type="email"
        label="Adresse e-mail"
        autoComplete="email"
        required
        maxLength={254}
        error={state.fieldErrors?.email}
      />
      <Input
        name="phone"
        type="tel"
        label="Téléphone (facultatif)"
        autoComplete="tel"
        maxLength={30}
        placeholder="06 12 34 56 78"
        error={state.fieldErrors?.phone}
      />
      <Textarea
        name="message"
        label="Quel est votre projet ?"
        rows={4}
        required
        maxLength={3000}
        error={state.fieldErrors?.message}
      />

      <div>
        <label className="flex items-start gap-3 text-[14px] leading-relaxed text-white-75">
          <input
            name="rgpd"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-orange-500"
          />
          <span>
            J’accepte le traitement de mes données pour recevoir une réponse à ma
            demande, conformément à la{" "}
            <Link href="/confidentialite" className="underline underline-offset-2 hover:text-orange-300">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors?.rgpd ? (
          <p className="mt-2 text-sm text-danger">{state.fieldErrors.rgpd}</p>
        ) : null}
      </div>

      {state.formError ? (
        <p
          className="rounded-lg border border-danger/30 bg-danger/10 p-4 text-sm leading-relaxed text-white-75"
          role="alert"
          aria-live="assertive"
        >
          {state.formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="xl"
        variant="primary"
        className="w-full md:w-auto"
        disabled={pending}
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>
    </form>
  );
}
