"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FooterRevealProps = {
  children: ReactNode;
  className?: ComponentProps<typeof motion.div>["className"];
  delay?: number;
};

/**
 * Fine client boundary for footer entrance effects.
 * The footer content and navigation remain rendered by the Server Component.
 */
export function FooterReveal({
  children,
  className,
  delay = 0,
}: FooterRevealProps) {
  return (
    <motion.div
      className={cn(
        "motion-safe:translate-y-[18px] motion-safe:opacity-0 motion-safe:blur-[4px]",
        className,
      )}
      initial={false}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ amount: 0.16, once: true }}
      transition={{
        delay,
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
