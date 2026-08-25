const items = [
  {
    number: "01",
    title: "Comprendre avant d’exécuter",
    text: "Chaque geste est relié à une règle de sécurité, une situation de circulation ou un besoin voyageur.",
  },
  {
    number: "02",
    title: "Répéter en situation",
    text: "Les exercices servent à installer des repères utilisables au volant et pendant le service.",
  },
  {
    number: "03",
    title: "Corriger avec précision",
    text: "Le suivi porte sur les points observés, les progrès réalisés et le travail encore nécessaire.",
  },
  {
    number: "04",
    title: "Préparer la prise de poste",
    text: "La posture professionnelle et la candidature sont travaillées à partir des réalités du métier.",
  },
] as const;

export function Pedagogy() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
              La méthode
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2.35rem,4.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white-90">
              Faire, observer, recommencer.
            </h2>
          </div>

          <ol className="border-t border-white/15">
            {items.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-white/15 py-6 sm:grid-cols-[3rem_minmax(12rem,0.75fr)_minmax(0,1fr)] sm:gap-6"
              >
                <span className="font-mono text-xs text-orange-300">{item.number}</span>
                <h3 className="font-semibold text-white-90">{item.title}</h3>
                <p className="col-start-2 text-sm leading-6 text-white-60 sm:col-start-3">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
