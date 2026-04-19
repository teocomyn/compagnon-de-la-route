"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  const id = useId();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, reduce ? 0 : 48]);

  if (reduce) {
    return (
      <div
        className={cn("pointer-events-none fixed inset-0 -z-20", className)}
        aria-hidden
      >
        <svg
          className="h-full w-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`grid-static-${id}`}
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="rgba(255,255,255,0.02)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id={`fade-static-${id}`} cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id={`mask-static-${id}`}>
              <rect width="100%" height="100%" fill={`url(#fade-static-${id})`} />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#grid-static-${id})`}
            mask={`url(#mask-static-${id})`}
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("pointer-events-none fixed inset-0 -z-20", className)}
      style={{ y }}
      aria-hidden
    >
      <svg
        className="h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${id}`}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id={`fade-${id}`} cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={`mask-${id}`}>
            <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${id})`}
          mask={`url(#mask-${id})`}
        />
      </svg>
    </motion.div>
  );
}
