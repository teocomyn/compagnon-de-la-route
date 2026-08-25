import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.school;

export const metadata = verifiedGuideMetadata(guide);

export default function FormationTransportScolaireConducteurPage() {
  return <VerifiedGuidePage guide={guide} />;
}
