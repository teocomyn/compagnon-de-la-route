import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white-90">
        {title}
      </h2>
      {lead ? (
        <p className="text-lg leading-relaxed text-white-60">{lead}</p>
      ) : null}
    </div>
  );
}
