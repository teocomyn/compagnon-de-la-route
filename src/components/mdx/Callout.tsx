import { cn } from "@/lib/utils";

type CalloutType = "info" | "tip" | "warning";

const styles: Record<CalloutType, string> = {
  info: "border-orange-400 text-white-75",
  tip: "border-mint-400 text-white-80",
  warning: "border-amber-400 text-white-80",
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
        "my-8 border-l-2 py-1 pl-5 text-[1.05rem] leading-relaxed",
        styles[type],
      )}
    >
      {children}
    </aside>
  );
}
