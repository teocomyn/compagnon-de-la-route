import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.faq;

export const metadata = verifiedGuideMetadata(guide);

export default function FaqConducteurDeVoyageursPage() {
  return <VerifiedGuidePage guide={guide} />;
}
