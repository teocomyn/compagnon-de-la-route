import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.tourism;

export const metadata = verifiedGuideMetadata(guide);

export default function FormationConducteurAutocarTourismePage() {
  return <VerifiedGuidePage guide={guide} />;
}
