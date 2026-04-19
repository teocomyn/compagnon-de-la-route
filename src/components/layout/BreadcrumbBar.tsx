import type { ReactNode } from "react";

/** Bandeau minimal : le fil d’Ariane se fond dans la page, sans encadré visible. */
export function BreadcrumbBar({ children }: { children: ReactNode }) {
  return (
    <div className="section-shell py-1.5 pb-2 sm:py-2 sm:pb-2.5">{children}</div>
  );
}
