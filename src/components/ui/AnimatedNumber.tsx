"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
};

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1] as const,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value]);

  const text =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
