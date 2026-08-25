import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.hiring;

export const metadata = verifiedGuideMetadata(guide);

export default function ReussirEmbaucheConducteurCarPage() {
  return <VerifiedGuidePage guide={guide} />;
}
