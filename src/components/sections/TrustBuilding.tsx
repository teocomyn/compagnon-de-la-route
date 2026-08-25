import Image from "next/image";

const commitments = [
  ["01", "Le candidat", "Son expérience, ses contraintes et son projet donnent le point de départ."],
  ["02", "Le métier", "Les gestes, les décisions et la posture attendue structurent l’apprentissage."],
  ["03", "L’entreprise", "Lorsque l’employeur est associé, ses réalités opérationnelles précisent les situations à travailler."],
  ["04", "BOAZ", "L’organisme relie ces informations, formalise le parcours et distingue ce qui reste à confirmer."],
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
            Candidat / métier / entreprise / BOAZ
          </figcaption>
        </figure>

        <div className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
            La méthode BOAZ
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-[clamp(2.35rem,4.6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white-90">
            Le parcours se construit à partir du réel.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white-60">
            BOAZ ne part pas d’un programme abstrait. L’organisme croise la situation
            du candidat, les responsabilités du métier et, lorsqu’elle est connue, la
            réalité de l’entreprise d’accueil.
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
