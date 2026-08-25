import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.career;

export const metadata = verifiedGuideMetadata(guide);

export default function MetierConducteurDeCarDebouchesPage() {
  return <VerifiedGuidePage guide={guide} />;
}
