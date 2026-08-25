import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.certification;

export const metadata = verifiedGuideMetadata(guide);

export default function CertificationFormationConducteurVoyageursPage() {
  return <VerifiedGuidePage guide={guide} />;
}
