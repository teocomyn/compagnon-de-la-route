export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jacob",
    role: "Conducteur urbain",
    quote:
      "J’ai compris le métier sur le terrain, pas dans un livre. L’accompagnement était exigeant, mais juste : on sent qu’on prépare un vrai poste, pas un examen.",
  },
  {
    name: "Ethan",
    role: "Conducteur scolaire",
    quote:
      "Le suivi humain m’a permis de gagner en confiance sur la route et avec les voyageurs. C’est structuré, sérieux, et ça colle à la réalité du transport.",
  },
  {
    name: "Nathan",
    role: "Conducteur interurbain",
    quote:
      "La formation va vite, mais chaque journée sert quelque chose. J’ai appris à être régulier, calme, et rigoureux sur la sécurité.",
  },
  {
    name: "Daniel",
    role: "Conducteur tourisme",
    quote:
      "On sent une vraie culture métier : exigence, respect, sens du service. J’ai trouvé un emploi rapidement après le titre, avec des repères clairs.",
  },
  {
    name: "Mitchell",
    role: "Conducteur réseau périurbain",
    quote:
      "Les formateurs connaissent le terrain et ça change tout. Les mises en situation m’ont aidé à anticiper ce qui arrive vraiment au volant.",
  },
  {
    name: "Lucas",
    role: "Conducteur débutant",
    quote:
      "J’avais le permis, mais pas le métier. Ici, on m’a appris à être fiable : horaires, procédures, relation aux passagers. C’est concret.",
  },
];
