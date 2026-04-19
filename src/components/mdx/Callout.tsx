import { cn } from "@/lib/utils";

type CalloutType = "info" | "tip" | "warning";

const styles: Record<CalloutType, string> = {
  info: "border-orange-500/30 bg-orange-500/[0.06] text-white-75",
  tip: "border-mint-400/30 bg-mint-500/[0.08] text-white-80",
  warning: "border-amber-500/40 bg-amber-500/[0.08] text-white-80",
};

export function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  return (
    <aside
      className={cn(
        "my-8 rounded-xl border px-5 py-4 text-[1.05rem] leading-relaxed",
        styles[type],
      )}
    >
      {children}
    </aside>
  );
}
