export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
  location?: string;
  tag?: string;
};

/** Avis page d’accueil — 9 profils (visuels Unsplash, à remplacer par photos alumni). */
export const testimonialsColumnsHome: Testimonial[] = [
  {
    text: "J'ai compris le métier sur le terrain, pas dans un livre. L'accompagnement était exigeant, mais juste : on sent qu'on prépare un vrai poste, pas un examen.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    name: "Jacob Williams",
    role: "Conducteur urbain chez Ilévia",
    location: "Lille",
    tag: "Urbain",
  },
  {
    text: "Après 18 ans en restauration, j'avais besoin de changement. La formation de 30 jours a été intense, surtout la partie technique. Aujourd'hui je rentre à 19h tous les soirs, je ne regrette rien.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    name: "Mathieu Carpentier",
    role: "Ex-serveur · Conducteur urbain",
    location: "Valenciennes",
    tag: "Reconversion",
  },
  {
    text: "Le suivi humain m'a permis de gagner en confiance sur la route et avec les voyageurs. C'est structuré, sérieux, et ça colle à la réalité du transport.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    name: "Marie Dubois",
    role: "Conductrice scolaire",
    location: "Pas-de-Calais",
    tag: "Scolaire",
  },
  {
    text: "Reconversion depuis le commerce à 35 ans. L'équipe pédagogique a été patiente, bienveillante, exigeante. Je conduis des scolaires depuis 18 mois, et je me forme au tourisme maintenant.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    name: "Sophie Lambert",
    role: "Ex-vendeuse · Scolaire + tourisme",
    location: "Arras",
    tag: "Reconversion",
  },
  {
    text: "La formation va vite, mais chaque journée sert quelque chose. J'ai appris à être régulier, calme, et rigoureux sur la sécurité. L'essentiel du métier quoi.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
    name: "Nathan Carter",
    role: "Conducteur interurbain",
    location: "Amiens",
    tag: "Interurbain",
  },
  {
    text: "Fin de carrière militaire à 51 ans, je cherchais un métier civil avec du sens. En 2 mois j'étais opérationnel, formation financée par Défense Mobilité. CDI dès la sortie.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
    name: "David Foster",
    role: "Ex-militaire · Interurbain",
    location: "Aisne",
    tag: "Reconversion",
  },
  {
    text: "Je voulais un métier stable qui me laisse mes week-ends et mes vacances scolaires. J'ai trouvé exactement ça. Mon mari apprécie, mes enfants aussi.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    name: "Claire Moreau",
    role: "Conductrice scolaire",
    location: "Béthune",
    tag: "Scolaire",
  },
  {
    text: "Après des années en logistique, je voulais retrouver un métier de contact et d'utilité. Grâce à la formation, je me sens utile et reconnu, chaque trajet compte.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    name: "Mitchell Appart",
    role: "Ex-logistique · Interurbain",
    location: "Dunkerque",
    tag: "Reconversion",
  },
  {
    text: "J'ai repris confiance en moi. L'équipe m'a accompagné du début à la fin, et j'ai décroché un CDI chez Transdev dès la sortie de formation. Un an plus tard, je suis toujours là.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces",
    name: "Lucas Bennett",
    role: "Conducteur urbain · CDI",
    location: "Lens",
    tag: "Urbain",
  },
];
