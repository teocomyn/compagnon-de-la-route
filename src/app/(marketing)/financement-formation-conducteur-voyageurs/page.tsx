import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.financing;

export const metadata = verifiedGuideMetadata(guide);

export default function FinancementFormationConducteurVoyageursPage() {
  return <VerifiedGuidePage guide={guide} />;
}
