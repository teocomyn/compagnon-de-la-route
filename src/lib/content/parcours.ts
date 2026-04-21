import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  ClipboardCheck,
  GraduationCap,
  PhoneCall,
  Wallet,
} from "lucide-react";

export type ParcoursStepStatus = "completed" | "in-progress" | "pending";

export type ParcoursStep = {
  id: number;
  title: string;
  duration: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds: number[];
  status: ParcoursStepStatus;
  progress: number;
};

export const parcoursCompagnon: ParcoursStep[] = [
  {
    id: 1,
    title: "Premier contact",
    duration: "Jour 1",
    content:
      "Un appel de 15 minutes avec un conseiller pour comprendre votre projet, valider vos prérequis (permis B, 21 ans, casier vierge) et cadrer votre profil. Sans engagement.",
    category: "Qualification",
    icon: PhoneCall,
    relatedIds: [2],
    status: "completed",
    progress: 100,
  },
  {
    id: 2,
    title: "Positionnement",
    duration: "Sous 7 jours",
    content:
      "Entretien de 45 minutes en visio ou à Lens : test écrit de français et logique, échange sur votre motivation, bilan de votre situation. Nous validons ensemble que la formation est la bonne voie pour vous.",
    category: "Évaluation",
    icon: ClipboardCheck,
    relatedIds: [1, 3],
    status: "completed",
    progress: 100,
  },
  {
    id: 3,
    title: "Financement",
    duration: "2 à 6 semaines",
    content:
      "Montage de votre plan de financement avec un conseiller : CPF, AIF France Travail, OPCO Mobilités, Transition Pro, Région. Dans 90% des cas, zéro reste à charge pour vous.",
    category: "Dossier administratif",
    icon: Wallet,
    relatedIds: [2, 4],
    status: "in-progress",
    progress: 65,
  },
  {
    id: 4,
    title: "Formation 30 jours",
    duration: "210h sur 6 semaines",
    content:
      "Parcours intensif à Lens : 70% de pratique, mises en situation réelles, coaching individuel hebdomadaire. Vous passez le permis D, la FIMO Voyageurs, et vous préparez le Titre Pro CTCR.",
    category: "Apprentissage",
    icon: GraduationCap,
    relatedIds: [3, 5],
    status: "pending",
    progress: 0,
  },
  {
    id: 5,
    title: "Certification",
    duration: "Jour 30",
    content:
      "Examens du Titre Professionnel Conducteur du Transport en Commun sur Route (CTCR), reconnu par l'État et inscrit au RNCP. 98% de nos stagiaires réussissent du premier coup.",
    category: "Validation",
    icon: Award,
    relatedIds: [4, 6],
    status: "pending",
    progress: 0,
  },
  {
    id: 6,
    title: "Placement CDI",
    duration: "Sous 30 jours",
    content:
      "Mise en relation directe avec nos entreprises partenaires en Hauts-de-France : Ilévia, Transdev, Keolis, Artis, Tadao, GEIQ Mobilités. 78% de nos stagiaires signent un CDI, 15% un CDD long.",
    category: "Insertion professionnelle",
    icon: Briefcase,
    relatedIds: [5],
    status: "pending",
    progress: 0,
  },
];
