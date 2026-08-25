"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitContact, type ContactState } from "@/actions/contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
const initial: ContactState = {};

const selectClassName =
  "w-full rounded-md border border-white/10 bg-forest-surface px-[18px] py-[14px] text-[15px] text-white-90 transition-colors duration-200 focus-visible:border-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

export function ContactForm({ initialProject = "" }: { initialProject?: string }) {
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
      <div className="grid gap-6 md:grid-cols-2">
        <SelectField
          name="profile"
          label="Vous êtes"
          error={state.fieldErrors?.profile}
          options={[
            ["", "Choisir une situation"],
            ["candidat", "Candidat ou candidate"],
            ["entreprise", "Entreprise / recruteur"],
            ["partenaire", "Partenaire / prescripteur"],
            ["autre", "Autre demande"],
          ]}
        />
        <SelectField
          name="project"
          label="Votre projet"
          defaultValue={initialProject}
          error={state.fieldErrors?.project}
          options={[
            ["", "Choisir un projet"],
            ["conducteur", "Conducteur de voyageurs"],
            ["exploitant-regulateur", "Exploitant-régulateur"],
            ["recrutement", "Besoin de recrutement"],
            ["partenariat", "Partenariat"],
            ["autre", "Autre projet"],
          ]}
        />
      </div>
      <Input
        name="organization"
        label="Entreprise ou organisation (si concerné)"
        autoComplete="organization"
        maxLength={150}
        error={state.fieldErrors?.organization}
      />
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

function SelectField({
  name,
  label,
  options,
  defaultValue,
  error,
}: {
  name: string;
  label: string;
  options: readonly (readonly [string, string])[];
  defaultValue?: string;
  error?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-white-90">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className={selectClassName}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {options.map(([value, optionLabel]) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
