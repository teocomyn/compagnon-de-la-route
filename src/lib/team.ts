export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Jules", role: "Formateur transport", image: "/images/team/jules.jpg" },
  { name: "Arnaud", role: "Accompagnement insertion", image: "/images/team/arnaud.jpg" },
  { name: "Charles", role: "Responsable pédagogie", image: "/images/team/charles.jpg" },
  { name: "Michèle", role: "Coordination terrain", image: "/images/team/michele.jpg" },
];
