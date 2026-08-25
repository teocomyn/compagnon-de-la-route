const steps = [
  {
    title: "Faire le point",
    text: "Un échange et un positionnement clarifient le projet et le parcours adapté.",
  },
  {
    title: "Apprendre le métier",
    text: "Les apports théoriques et pratiques développent les compétences du programme.",
  },
  {
    title: "Se mettre en situation",
    text: "Les exercices et évaluations permettent de mesurer la progression.",
  },
  {
    title: "Préparer la suite",
    text: "Le bilan relie les acquis au projet professionnel et aux prochaines démarches.",
  },
] as const;

export function MethodTimeline() {
  return (
    <ol className="grid border-l border-t border-white/15 md:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="border-b border-r border-white/15 p-6 md:p-7">
          <span className="font-mono text-xs text-orange-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-8 text-xl font-semibold text-white-90">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white-60">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
