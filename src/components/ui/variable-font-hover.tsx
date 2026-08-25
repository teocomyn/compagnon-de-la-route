"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type StaggerFrom = "first" | "last" | "center" | number;

type VariableFontHoverProps = {
  className?: string;
  fromFontVariationSettings?: string;
  label: string;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  toFontVariationSettings?: string;
};

function getStaggerOrder(index: number, total: number, from: StaggerFrom) {
  if (from === "last") return total - 1 - index;
  if (from === "center") return Math.abs(index - (total - 1) / 2);
  if (typeof from === "number") {
    const origin = Math.min(Math.max(from, 0), Math.max(total - 1, 0));
    return Math.abs(index - origin);
  }
  return index;
}

export function VariableFontHover({
  className,
  fromFontVariationSettings = "'wght' 400",
  label,
  staggerDuration = 0.025,
  staggerFrom = "first",
  toFontVariationSettings = "'wght' 700",
}: VariableFontHoverProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [active, setActive] = useState(false);
  const characters = Array.from(label);

  return (
    <span
      className={cn("inline-flex whitespace-nowrap", className)}
      aria-label={label}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          className="inline-block"
          animate={{
            fontVariationSettings: active
              ? toFontVariationSettings
              : fromFontVariationSettings,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.28,
            delay: reducedMotion
              ? 0
              : getStaggerOrder(index, characters.length, staggerFrom) * staggerDuration,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </span>
  );
}
