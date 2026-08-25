import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.fimo;

export const metadata = verifiedGuideMetadata(guide);

export default function FimoPassageALaRoutePage() {
  return <VerifiedGuidePage guide={guide} />;
}
