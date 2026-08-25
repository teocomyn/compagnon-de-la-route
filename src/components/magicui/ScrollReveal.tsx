import { type ReactNode } from "react";
import type { Variants } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
};

export function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
