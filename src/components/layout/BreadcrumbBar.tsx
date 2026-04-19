import type { ReactNode } from "react";

export function BreadcrumbBar({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-white/5 bg-night-deep/50 backdrop-blur-sm supports-[backdrop-filter]:bg-night-deep/35">
      <div className="section-shell py-3 sm:py-4">{children}</div>
    </div>
  );
}
