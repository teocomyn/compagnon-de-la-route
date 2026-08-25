import Image from "next/image";

const commitments = [
  ["01", "Vérifier les prérequis", "Votre situation est examinée avant de définir le parcours."],
  ["02", "Écrire les conditions", "Objectifs, durée, calendrier, évaluations et prix sont formalisés."],
  ["03", "Étudier le financement", "Chaque piste dépend de votre profil et de la décision du financeur."],
  ["04", "Préparer la suite", "La candidature se travaille sans présenter l’embauche comme acquise."],
] as const;

export function TrustBuilding() {
  return (
    <section className="border-y border-white/10 bg-night-deep">
      <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
        <figure className="relative min-h-[440px] border-b border-white/10 lg:min-h-[720px] lg:border-b-0 lg:border-r">
          <Image
            src="/images/journal/voyageurs-autocar.webp"
            alt="Voyageurs installés dans un autocar"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-night-deep/90 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white-60">
            La responsabilité commence avant le départ
          </figcaption>
        </figure>

        <div className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
            Avant l&apos;inscription
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-[clamp(2.35rem,4.6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white-90">
            Vous devez savoir où vous allez.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white-60">
            Un projet de formation engage du temps et souvent un financement. Les
            réponses importantes doivent être précises avant toute décision.
          </p>

          <ol className="mt-10 border-t border-white/15">
            {commitments.map(([number, title, text]) => (
              <li key={number} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-white/15 py-5">
                <span className="font-mono text-xs text-orange-300">{number}</span>
                <div>
                  <h3 className="font-semibold text-white-90">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white-60">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
