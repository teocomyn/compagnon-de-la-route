"use client";

import CdrOrbitalParcours from "@/components/ui/cdr-orbital-parcours";
import { parcoursCompagnon } from "@/lib/content/parcours";

export function ParcoursOrbitalSection() {
  return <CdrOrbitalParcours steps={parcoursCompagnon} />;
}
