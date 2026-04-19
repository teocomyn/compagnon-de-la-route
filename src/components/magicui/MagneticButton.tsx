"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 100) {
      const tx = Math.max(-6, Math.min(6, dx * 0.12));
      const ty = Math.max(-6, Math.min(6, dy * 0.12));
      x.set(tx);
      y.set(ty);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      className={cn("relative inline-flex", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div style={{ transform }} className="inline-flex">
        {children}
      </motion.div>
    </div>
  );
}
