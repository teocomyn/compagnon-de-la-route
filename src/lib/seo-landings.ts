import type { Metadata } from "next";
import { siteName } from "@/lib/constants";

export type SeoLandingPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  breadcrumbs: { label: string; href: string }[];
  features: { icon: string; title: string; text: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  stats?: { value: string; label: string }[];
  faq?: { q: string; a: string }[];
  relatedLinks?: { href: string; label: string }[];
};

export function seoLandingMetadata(data: SeoLandingPageData): Metadata {
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    ...(data.keywords?.length ? { keywords: data.keywords } : {}),
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${data.slug}`,
      type: "article",
      siteName,
      images: [{ url: "/images/og/default.jpg", width: 1920, height: 1069, alt: data.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

const baseCrumbs = (slug: string, label: string) => [
  { label: "Accueil", href: "/" },
  { label: label, href: `/${slug}` },
];

export const seoLandingPages: Record<string, SeoLandingPageData> = {
  "financement-formation-conducteur-voyageurs": {
    slug: "financement-formation-conducteur-voyageurs",
    metaTitle: "Financement formation conducteur de voyageurs (CPF, OPCO, France Travail)",
    metaDescription:
      "CPF, OPCO, France Travail : comment financer votre formation conducteur de voyageurs avec Compagnon de la Route. Accompagnement dossiers, reste à charge, solutions adaptées.",
    keywords: [
      "financement formation conducteur voyageurs",
      "CPF conducteur car",
      "OPCO formation transport",
      "France Travail formation permis D",
    ],
    eyebrow: "Financer votre projet",
    h1: "Financer votre formation conducteur de voyageurs",
    intro:
      "Le transport de voyageurs recrute : votre projet peut être pris en charge par le CPF, un OPCO ou un dispositif public. Nous vous aidons à monter un dossier clair et à anticiper le reste à charge.",
    breadcrumbs: baseCrumbs(
      "financement-formation-conducteur-voyageurs",
      "Financement",
    ),
    stats: [
      { value: "3", label: "Leviers fréquents : CPF, OPCO, accompagnement public" },
      { value: "210h", label: "Parcours certifiant sur 30 jours ouvrés" },
      { value: "1:1", label: "Point personnalisé sur votre éligibilité" },
    ],
    features: [
      {
        icon: "Wallet",
        title: "CPF & droits à la formation",
        text: "Vérification de vos droits, montage de dossier et calendrier réaliste pour démarrer sereinement.",
      },
      {
        icon: "ShieldCheck",
        title: "OPCO & financements entreprise",
        text: "Cadre pour les salariés en reconversion ou les demandeurs d’emploi selon conventions en vigueur.",
      },
      {
        icon: "Users",
        title: "Accompagnement humain",
        text: "Une équipe pédagogique à taille humaine pour sécuriser les étapes administratives.",
      },
    ],
    sections: [
      {
        heading: "Quels financements pour une formation conducteur de voyageurs ?",
        paragraphs: [
          "Selon votre situation (demandeur d’emploi, salarié, reconversion), les dispositifs diffèrent. Le Compte Personnel de Formation (CPF) peut couvrir tout ou partie du coût lorsque vos droits le permettent. Les OPCO financent souvent les plans de développement des compétences dans l’entreprise.",
          "France Travail et les dispositifs régionaux peuvent également intervenir selon votre profil et les priorités locales. L’objectif est simple : rendre votre entrée en formation lisible, traçable et conforme aux exigences des financeurs.",
        ],
      },
      {
        heading: "Notre rôle chez Compagnon de la Route",
        paragraphs: [
          "Nous ne remplaçons pas l’administration : nous clarifions les étapes, préparons les pièces utiles et vous aidons à présenter un projet professionnel cohérent. La formation reste exigeante : sécurité, réglementation, relation voyageurs — le financement doit servir un projet réaliste.",
          "Pour aller plus loin, découvrez le parcours certifiant et les modalités sur la page formation conducteur de voyageurs, ou contactez-nous pour un premier échange.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/formations/conducteur-voyageurs", label: "Formation conducteur de voyageurs" },
      { href: "/fimo-passage-a-la-route", label: "FIMO & passage à la route" },
      { href: "/faq-conducteur-de-voyageurs", label: "FAQ conducteur de voyageurs" },
    ],
  },

  "fimo-passage-a-la-route": {
    slug: "fimo-passage-a-la-route",
    metaTitle: "FIMO & passage à la route : conducteur de voyageurs",
    metaDescription:
      "Comprendre le FIMO et le passage à la route pour les conducteurs de voyageurs : enjeux, démarches et lien avec une formation certifiante chez Compagnon de la Route.",
    keywords: ["FIMO", "passage à la route", "conducteur voyageurs", "formation transport"],
    eyebrow: "Réglementation & parcours",
    h1: "FIMO et passage à la route : ce qu’il faut savoir",
    intro:
      "Les exigences du métier évoluent : le FIMO et le passage à la route structurent la montée en compétences. Voici une lecture claire pour cadrer votre projet avec une formation orientée emploi.",
    breadcrumbs: baseCrumbs("fimo-passage-a-la-route", "FIMO"),
    features: [
      {
        icon: "GraduationCap",
        title: "Cadre national",
        text: "Des étapes identifiables pour sécuriser les compétences et la conformité sur la route.",
      },
      {
        icon: "Route",
        title: "Du permis à l’emploi",
        text: "Relier titre, pratique encadrée et exigence terrain : le cœur de notre pédagogie.",
      },
      {
        icon: "BadgeCheck",
        title: "Formation certifiante",
        text: "Un parcours structuré pour viser l’insertion avec des référentiels explicites.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi ces étapes comptent pour les voyageurs",
        paragraphs: [
          "Le transport de personnes combine sécurité, réglementation et service. Le FIMO et le passage à la route s’inscrivent dans une logique de maîtrise progressive : on ne « conduit » pas seulement un véhicule, on garantit la chaîne de confiance voyageurs / employeur / autorités.",
          "Chez Compagnon de la Route, nous plaçons la préparation pratique et la culture de la sécurité au centre : relation client, gestes professionnels, anticipation — autant de sujets travaillés en formation.",
        ],
      },
      {
        heading: "Et ensuite ?",
        paragraphs: [
          "Selon votre situation, un financement peut être mobilisé (CPF, OPCO, dispositifs publics). Consultez notre page dédiée au financement et échangez avec nous pour un plan personnalisé.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/financement-formation-conducteur-voyageurs", label: "Financement de la formation" },
      { href: "/certification-formation-conducteur-voyageurs", label: "Certification & Qualiopi" },
      { href: "/formations/conducteur-voyageurs", label: "Programme conducteur de voyageurs" },
    ],
  },

  "metier-conducteur-de-car-debouches": {
    slug: "metier-conducteur-de-car-debouches",
    metaTitle: "Métier conducteur de car : débouchés, salaires, perspectives",
    metaDescription:
      "Conducteur de car et de voyageurs : missions, perspectives d’emploi, secteurs qui recrutent et compétences clés. Préparez votre reconversion avec Compagnon de la Route.",
    keywords: ["métier conducteur car", "débouchés transport voyageurs", "reconversion conducteur bus"],
    eyebrow: "Carrière & terrain",
    h1: "Conducteur de car : un métier d’avenir et de responsabilité",
    intro:
      "Tourisme, scolaire, réseaux urbains : les besoins restent forts. Le métier combine autonomie, sécurité et relation voyageurs — une voie accessible après une formation certifiante et un accompagnement sérieux.",
    breadcrumbs: baseCrumbs("metier-conducteur-de-car-debouches", "Métier & débouchés"),
    stats: [
      { value: "Fort", label: "Besoin recrutement transport voyageurs (France)" },
      { value: "Stable", label: "Emploi structurant pour les territoires" },
      { value: "Humain", label: "Relation client au cœur du quotidien" },
    ],
    features: [
      {
        icon: "BusFront",
        title: "Des métiers variés",
        text: "Autocar, scolaire, lignes régulières : des environnements différents, une même exigence sécurité.",
      },
      {
        icon: "TrendingUp",
        title: "Perspectives",
        text: "Le secteur investit : modernisation des flottes, sobriété, digital — des compétences à jour.",
      },
      {
        icon: "Users",
        title: "Insertion",
        text: "Une formation orientée emploi pour rendre votre profil lisible aux employeurs.",
      },
    ],
    sections: [
      {
        heading: "Ce que les employeurs attendent",
        paragraphs: [
          "Au-delà du permis et des habilitations, les entreprises cherchent des conducteurs fiables : ponctualité, courtoisie, gestion du stress, rigueur dans les rondes et les procédures. C’est exactement le socle que nous renforçons en formation.",
          "La sécurité n’est pas une option : c’est une culture. Notre approche mêle simulation, retours d’expérience et exigence bienveillante.",
        ],
      },
      {
        heading: "Passer à l’action",
        paragraphs: [
          "Vous hésitez encore ? Lisez nos témoignages, parcourez le journal, puis prenez contact : nous construisons un parcours réaliste avec vous.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/reussir-embauche-conducteur-car", label: "Réussir son embauche" },
      { href: "/formation-transport-scolaire-conducteur", label: "Transport scolaire" },
      { href: "/contact", label: "Nous contacter" },
    ],
  },

  "formation-transport-scolaire-conducteur": {
    slug: "formation-transport-scolaire-conducteur",
    metaTitle: "Formation transport scolaire : devenir conducteur de car scolaire",
    metaDescription:
      "Formation et compétences pour le transport scolaire : sécurité des enfants, cadre réglementaire, relation aux familles. Préparez le métier avec Compagnon de la Route.",
    keywords: ["formation transport scolaire", "conducteur car scolaire", "ramassage scolaire"],
    eyebrow: "Scolaire & sécurité",
    h1: "Le transport scolaire : exigence et sens au quotidien",
    intro:
      "Accompagner des élèves, sécuriser les trajets et incarner le service public sur la route : un métier exigeant où la formation fait toute la différence.",
    breadcrumbs: baseCrumbs("formation-transport-scolaire-conducteur", "Transport scolaire"),
    features: [
      {
        icon: "ShieldCheck",
        title: "Sécurité prioritaire",
        text: "Rondes, comportements, anticipation : une posture professionnelle continue.",
      },
      {
        icon: "Users",
        title: "Relation de confiance",
        text: "Parents, équipes éducatives, élèves : la communication calme et claire.",
      },
      {
        icon: "BusFront",
        title: "Pratique de conduite",
        text: "Manœuvres, environnements contraints, gestion du trafic aux horaires de pointe.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi une formation dédiée au contexte scolaire",
        paragraphs: [
          "Le transport scolaire n’est pas seulement une ligne sur un itinéraire : c’est une responsabilité collective. Les procédures, la vigilance et la bienveillance sont indissociables.",
          "Notre parcours conducteur de voyageurs intègre ces réalités : relation voyageurs, cadre réglementaire, culture de la sécurité — des compétences directement transférables au scolaire.",
        ],
      },
      {
        heading: "Financement & insertion",
        paragraphs: [
          "Selon votre profil, un financement peut être mobilisé. Consultez notre page financement et parlons de votre calendrier avec un conseiller.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/formation-conducteur-autocar-tourisme", label: "Autocar & tourisme" },
      { href: "/formations/conducteur-voyageurs", label: "Formation conducteur de voyageurs" },
      { href: "/financement-formation-conducteur-voyageurs", label: "Financement" },
    ],
  },

  "formation-conducteur-autocar-tourisme": {
    slug: "formation-conducteur-autocar-tourisme",
    metaTitle: "Formation conducteur d’autocar tourisme & voyage",
    metaDescription:
      "Autocar de tourisme : compétences, service voyageurs, sécurité et encadrement. Préparez-vous au métier avec une formation conducteur de voyageurs exigeante.",
    keywords: ["formation autocar tourisme", "conducteur voyageurs tourisme", "car de tourisme"],
    eyebrow: "Tourisme & service",
    h1: "Autocar de tourisme : l’excellence du service sur la route",
    intro:
      "Circuits, séjours, événements : le tourisme en car demande rigueur, élégance relationnelle et maîtrise technique. Une formation complète vous prépare à ce standard.",
    breadcrumbs: baseCrumbs("formation-conducteur-autocar-tourisme", "Tourisme"),
    features: [
      {
        icon: "Sparkles",
        title: "Expérience voyageur",
        text: "Accueil, informations, posture : la qualité de service comme signature.",
      },
      {
        icon: "Route",
        title: "Itinéraires & cadence",
        text: "Longues distances, pauses, variabilité : anticiper sans compromis sur la sécurité.",
      },
      {
        icon: "FileCheck",
        title: "Conformité",
        text: "Réglementation, contrôles, documentation : la tranquillité d’esprit opérationnelle.",
      },
    ],
    sections: [
      {
        heading: "Le tourisme, un métier de scène… sur la route",
        paragraphs: [
          "Le voyageur attend un service fluide : embarquement, annonces, gestes utiles en situation imprévue. Cette dimension humaine s’apprend et se structure avec des mises en situation et des retours pédagogiques.",
          "Compagnon de la Route place la relation voyageurs au même niveau que la technique : c’est notre ADN.",
        ],
      },
      {
        heading: "Construire votre projet",
        paragraphs: [
          "Découvrez le programme certifiant, les financements possibles et les témoignages de nos stagiaires pour valider votre orientation.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/formation-transport-scolaire-conducteur", label: "Transport scolaire" },
      { href: "/metier-conducteur-de-car-debouches", label: "Métier & débouchés" },
      { href: "/formations/conducteur-voyageurs", label: "Programme de formation" },
    ],
  },

  "certification-formation-conducteur-voyageurs": {
    slug: "certification-formation-conducteur-voyageurs",
    metaTitle: "Certification formation conducteur de voyageurs & Qualiopi",
    metaDescription:
      "Certification, titre professionnel, qualité de formation : ce que garantit Compagnon de la Route pour votre parcours conducteur de voyageurs (Qualiopi, exigence pédagogique).",
    keywords: ["certification conducteur voyageurs", "Qualiopi", "titre professionnel transport"],
    eyebrow: "Qualité & cadre",
    h1: "Certification & exigence : votre projet sur des bases solides",
    intro:
      "Choisir une formation, c’est choisir un cadre : référentiels, évaluation, amélioration continue. Nous plaçons la qualité au centre pour des débouchés réalistes.",
    breadcrumbs: baseCrumbs(
      "certification-formation-conducteur-voyageurs",
      "Certification",
    ),
    features: [
      {
        icon: "BadgeCheck",
        title: "Qualité certifiée",
        text: "Processus Qualiopi : une exigence sur les parcours et l’accompagnement.",
      },
      {
        icon: "GraduationCap",
        title: "Compétences mesurables",
        text: "Évaluations, mises en situation, feedback : progresser avec méthode.",
      },
      {
        icon: "ShieldCheck",
        title: "Sécurité intégrée",
        text: "La conformité et la prévention ne sont pas des options périphériques.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi la certification compte pour votre employabilité",
        paragraphs: [
          "Les employeurs lisent votre parcours : un organisme structuré, des compétences explicites et une traçabilité pédagogique réduisent l’incertitude à l’embauche.",
          "Notre formation conducteur de voyageurs s’inscrit dans cette logique : exigence terrain, humilité professionnelle, culture du collectif.",
        ],
      },
      {
        heading: "En savoir plus",
        paragraphs: [
          "Comparez les parcours sur notre page formations, consultez les témoignages et contactez-nous pour une analyse personnalisée de votre dossier.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
      { href: "/fimo-passage-a-la-route", label: "FIMO & passage à la route" },
      { href: "/formations/conducteur-voyageurs", label: "Formation conducteur de voyageurs" },
    ],
  },

  "reussir-embauche-conducteur-car": {
    slug: "reussir-embauche-conducteur-car",
    metaTitle: "Réussir son embauche comme conducteur de car",
    metaDescription:
      "Entretien, mise en situation, qualités attendues : comment se présenter et convaincre comme futur conducteur de voyageurs. Conseils et préparation avec Compagnon de la Route.",
    keywords: ["embauche conducteur car", "entretien transport", "recrutement conducteur bus"],
    eyebrow: "Insertion professionnelle",
    h1: "Convaincre à l’embauche : le conducteur que les entreprises veulent voir",
    intro:
      "Technique et savoir-être vont ensemble : ponctualité, attitude, capacité à intégrer une culture sécurité. Voici comment rendre votre candidature crédible et alignée avec le terrain.",
    breadcrumbs: baseCrumbs("reussir-embauche-conducteur-car", "Embauche"),
    features: [
      {
        icon: "Briefcase",
        title: "CV & cohérence",
        text: "Relier expérience, projet et contraintes du métier : la clarté rassure.",
      },
      {
        icon: "Users",
        title: "Soft skills terrain",
        text: "Calme, communication, esprit d’équipe : des qualités testées au quotidien.",
      },
      {
        icon: "ShieldCheck",
        title: "Culture sécurité",
        text: "Montrer que vous comprenez les enjeux : priorité aux procédures et au collectif.",
      },
    ],
    sections: [
      {
        heading: "Ce qui fait la différence en entretien",
        paragraphs: [
          "Les recruteurs cherchent la fiabilité : un conducteur qui anticipe, qui documente, qui respecte la chaîne de sécurité. Montrez des exemples concrets, même issus d’autres métiers : rigueur, responsabilité, relation client.",
          "La formation chez Compagnon de la Route vous aide à formaliser ces points : simulations, retours, préparation aux questions fréquentes du secteur.",
        ],
      },
      {
        heading: "Ressources utiles",
        paragraphs: [
          "Parcourez le journal, les témoignages stagiaires et la page formation pour compléter votre préparation.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/metier-conducteur-de-car-debouches", label: "Métier & débouchés" },
      { href: "/journal", label: "Journal" },
      { href: "/temoignages", label: "Témoignages" },
    ],
  },

  "permis-d-conducteur-professionnel": {
    slug: "permis-d-conducteur-professionnel",
    metaTitle: "Permis D & conduite professionnelle : guide conducteur voyageurs",
    metaDescription:
      "Permis D, conduite en transport de voyageurs et formation professionnelle : comprendre les étapes et le lien avec votre projet conducteur avec Compagnon de la Route.",
    keywords: ["permis D", "conduite professionnelle", "conducteur voyageurs permis"],
    eyebrow: "Permis & cadre",
    h1: "Permis D et projet professionnel : poser les bonnes bases",
    intro:
      "Le permis est une étape ; le métier s’apprend avec des règles, une posture et une pratique encadrée. Ce guide relie votre titre à une formation orientée emploi.",
    breadcrumbs: baseCrumbs("permis-d-conducteur-professionnel", "Permis D"),
    features: [
      {
        icon: "FileCheck",
        title: "Cadre réglementaire",
        text: "Comprendre les obligations et les suites possibles après obtention du titre.",
      },
      {
        icon: "BusFront",
        title: "Passage au métier",
        text: "De la conduite à la responsabilité transport : élargir la compétence.",
      },
      {
        icon: "Route",
        title: "Formation certifiante",
        text: "Structurer vos compétences pour une insertion lisible côté employeur.",
      },
    ],
    sections: [
      {
        heading: "Droit, pratique et employabilité",
        paragraphs: [
          "Le permis valide des savoir-faire techniques ; le transport de voyageurs exige en plus une maîtrise des procédures, de la relation client et de la sécurité opérationnelle. La formation professionnelle relie ces dimensions.",
          "Chez Compagnon de la Route, nous préparons des profils complets : humains, exigeants, prêts à s’intégrer dans des équipes structurées.",
        ],
      },
      {
        heading: "Étapes suivantes",
        paragraphs: [
          "Évaluez le financement, consultez le programme conducteur de voyageurs et planifiez un échange avec notre équipe.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/fimo-passage-a-la-route", label: "FIMO & passage à la route" },
      { href: "/financement-formation-conducteur-voyageurs", label: "Financement" },
      { href: "/formations/conducteur-voyageurs", label: "Formation certifiante" },
    ],
  },

  "formation-conducteur-voyageurs-hauts-de-france": {
    slug: "formation-conducteur-voyageurs-hauts-de-france",
    metaTitle: "Formation conducteur de voyageurs en Hauts-de-France",
    metaDescription:
      "Formation conducteur de voyageurs en Hauts-de-France : parcours certifiant, financement, insertion. Compagnon de la Route, organisme engagé sur le territoire.",
    keywords: [
      "formation conducteur voyageurs Hauts-de-France",
      "conducteur car Nord",
      "formation transport Lille",
    ],
    eyebrow: "Territoire",
    h1: "Votre formation conducteur de voyageurs en Hauts-de-France",
    intro:
      "Un bassin d’emploi dynamique, des besoins de mobilité forts : se former ici, c’est s’ancrer dans un réseau de transports et d’acteurs locaux qui recrutent.",
    breadcrumbs: baseCrumbs(
      "formation-conducteur-voyageurs-hauts-de-france",
      "Hauts-de-France",
    ),
    stats: [
      { value: "HDF", label: "Ancrage régional & partenariats locaux" },
      { value: "210h", label: "Formation certifiante intensive" },
      { value: "Qualiopi", label: "Démarche qualité pour votre projet" },
    ],
    features: [
      {
        icon: "MapPin",
        title: "Proximité",
        text: "Un organisme attentif aux réalités du territoire et aux débouchés régionaux.",
      },
      {
        icon: "Users",
        title: "Réseau",
        text: "Employeurs, financeurs, acteurs du transport : une insertion pensée avec le terrain.",
      },
      {
        icon: "Sparkles",
        title: "Parcours premium",
        text: "Pédagogie exigeante, accompagnement humain, culture de la sécurité.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi se former sur son territoire",
        paragraphs: [
          "Connaître les lignes, les contraintes locales et les employeurs du secteur aide à rendre votre projet crédible. Nous intégrons cette dimension dans l’accompagnement : votre carrière se construit aussi par la compréhension du milieu.",
          "Les financements peuvent mobiliser des dispositifs nationaux et régionaux : parlez-nous de votre situation pour cadrer les options.",
        ],
      },
      {
        heading: "Contact & prochaines sessions",
        paragraphs: [
          "Écrivez-nous depuis la page contact : nous revenons vers vous avec des informations à jour sur le calendrier et les modalités.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/contact", label: "Contact" },
      { href: "/financement-formation-conducteur-voyageurs", label: "Financement" },
      { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    ],
  },

  "faq-conducteur-de-voyageurs": {
    slug: "faq-conducteur-de-voyageurs",
    metaTitle: "FAQ conducteur de voyageurs : formation, financement, métier",
    metaDescription:
      "Réponses aux questions fréquentes sur la formation conducteur de voyageurs : durée, financement, débouchés, certification. Compagnon de la Route.",
    keywords: ["FAQ conducteur voyageurs", "questions formation car", "conducteur bus FAQ"],
    eyebrow: "Ressources",
    h1: "FAQ : tout savoir sur la formation conducteur de voyageurs",
    intro:
      "Durée, financement, débouchés, public concerné : les réponses essentielles pour avancer sereinement. Pour un cas personnel, contactez-nous.",
    breadcrumbs: baseCrumbs("faq-conducteur-de-voyageurs", "FAQ"),
    features: [
      {
        icon: "HelpCircle",
        title: "Réponses directes",
        text: "Des synthèses claires pour cadrer votre décision.",
      },
      {
        icon: "FileCheck",
        title: "Cadre & qualité",
        text: "Certification, processus, exigences : transparence sur le parcours.",
      },
      {
        icon: "Wallet",
        title: "Financements",
        text: "CPF, OPCO, dispositifs : les grandes familles de solutions.",
      },
    ],
    sections: [
      {
        heading: "Avant de vous inscrire",
        paragraphs: [
          "Les réponses ci-dessous posent un cadre général. Les situations individuelles peuvent varier : un conseiller peut préciser votre éligibilité et le calendrier.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure la formation conducteur de voyageurs ?",
        a: "Notre parcours certifiant s’étend sur 30 jours ouvrés pour 210 heures de formation, avec une forte part de pratique et d’accompagnement vers l’emploi.",
      },
      {
        q: "Puis-je financer la formation avec mon CPF ?",
        a: "Selon vos droits accumulés, le CPF peut prendre en charge tout ou partie du coût. Nous vous aidons à vérifier vos droits et à monter un dossier cohérent.",
      },
      {
        q: "Qu’est-ce qu’un OPCO peut couvrir ?",
        a: "Pour les salariés, l’OPCO de votre branche peut financer des actions de formation dans le cadre du plan de développement des compétences. Les modalités dépendent de votre entreprise et des accords en vigueur.",
      },
      {
        q: "Quels débouchés après la formation ?",
        a: "Le transport de voyageurs recrute : scolaire, tourisme, lignes régulières. L’objectif de la formation est de rendre votre profil lisible et opérationnel pour les employeurs.",
      },
      {
        q: "La formation est-elle certifiante ?",
        a: "Le parcours vise une certification dans le respect des référentiels et d’un processus qualité (notamment Qualiopi). Les précisions sur le titre délivré sont communiquées lors de l’inscription.",
      },
      {
        q: "Faut-il déjà le permis D ?",
        a: "Les prérequis dépendent du parcours et du public. Lors d’un échange, nous vérifions votre situation (permis, expérience, projet) pour vous orienter correctement.",
      },
      {
        q: "Proposez-vous un accompagnement à l’embauche ?",
        a: "Oui : la préparation professionnelle inclut des éléments de posture, de compréhension du métier et d’insertion, en cohérence avec les attentes du secteur.",
      },
      {
        q: "Comment prendre contact ?",
        a: "Utilisez la page contact ou demandez un rendez-vous : nous revenons vers vous avec des informations à jour sur les sessions et les financements.",
      },
    ],
    relatedLinks: [
      { href: "/financement-formation-conducteur-voyageurs", label: "Financement" },
      { href: "/formations/conducteur-voyageurs", label: "Programme de formation" },
      { href: "/contact", label: "Contact" },
    ],
  },
};

export const seoLandingSlugs = Object.keys(seoLandingPages) as string[];
