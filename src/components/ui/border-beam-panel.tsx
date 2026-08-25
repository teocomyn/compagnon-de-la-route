"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Adapté du Border Beam Panel de Motiq, distribué sous licence MIT.

export interface BorderBeamPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  beams?: 1 | 2;
  colors?: [string, string?];
  thickness?: number;
  idleSpeed?: number;
  hoverSpeed?: number;
  glow?: boolean;
  radius?: number;
  spring?: { stiffness?: number; damping?: number };
  seed?: number;
  pauseWhenHidden?: boolean;
  reducedMotion?: boolean;
}

class Spring {
  x: number;
  v = 0;
  target: number;
  k: number;
  d: number;

  constructor(value: number, stiffness: number, damping: number) {
    this.x = value;
    this.target = value;
    this.k = stiffness;
    this.d = damping;
  }

  step(delta: number) {
    const acceleration = this.k * (this.target - this.x) - this.d * this.v;
    this.v += acceleration * delta;
    this.x += this.v * delta;
    return this.x;
  }
}

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function useReducedMotion() {
  return React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function useVisibilityPause(ref: React.RefObject<HTMLDivElement | null>) {
  const [onScreen, setOnScreen] = React.useState(true);
  const [tabVisible, setTabVisible] = React.useState(true);

  React.useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => setOnScreen(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  React.useEffect(() => {
    const update = () => setTabVisible(document.visibilityState !== "hidden");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return onScreen && tabVisible;
}

function comet(color: string, start: number) {
  return [
    `color-mix(in srgb, ${color} 4%, transparent) ${start + 12}deg`,
    `color-mix(in srgb, ${color} 42%, transparent) ${start + 42}deg`,
    `${color} ${start + 54}deg`,
    `color-mix(in srgb, ${color} 72%, var(--color-white-90)) ${start + 59}deg`,
    `transparent ${start + 63}deg`,
  ].join(", ");
}

function ringGradient(beams: 1 | 2, colors?: [string, string?]) {
  const first = colors?.[0] ?? "var(--color-orange-500)";
  const second = colors?.[1] ?? "var(--color-orange-100)";
  const stops = ["transparent 0deg", comet(first, 0)];

  if (beams === 2) {
    stops.push("transparent 198deg", comet(second, 198));
  }

  stops.push("transparent 360deg");
  return `conic-gradient(from var(--cdr-beam-angle, 0deg), ${stops.join(", ")})`;
}

export function BorderBeamPanel({
  children,
  beams = 2,
  colors,
  thickness = 2,
  idleSpeed = 24,
  hoverSpeed = 110,
  glow = false,
  radius = 24,
  spring,
  seed = 1,
  pauseWhenHidden = true,
  reducedMotion,
  className,
  style,
  ...props
}: BorderBeamPanelProps) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const scope = `cdr-beam-${id}`;
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const systemReducedMotion = useReducedMotion();
  const visible = useVisibilityPause(rootRef);
  const staticMode = reducedMotion === true || systemReducedMotion;
  const animate = !staticMode && (!pauseWhenHidden || visible);
  const stiffness = spring?.stiffness ?? 30;
  const damping = spring?.damping ?? 11;
  const startAngle = React.useMemo(() => ((seed * 137.508) % 360 + 360) % 360, [seed]);
  const angleRef = React.useRef(startAngle);
  const speedRef = React.useRef(new Spring(idleSpeed, stiffness, damping));
  const speedsRef = React.useRef({ idleSpeed, hoverSpeed });

  React.useEffect(() => {
    speedsRef.current = { idleSpeed, hoverSpeed };
  }, [hoverSpeed, idleSpeed]);

  React.useEffect(() => {
    speedRef.current.k = stiffness;
    speedRef.current.d = damping;
  }, [damping, stiffness]);

  const paint = React.useCallback((angle: number) => {
    const normalized = ((angle % 360) + 360) % 360;
    rootRef.current?.style.setProperty("--cdr-beam-angle", `${normalized.toFixed(2)}deg`);
  }, []);

  React.useEffect(() => {
    if (!animate) return;

    let frameId = 0;
    let previous = 0;
    const frame = (time: number) => {
      if (!previous) previous = time;
      const delta = clamp((time - previous) / 1000, 0, 0.05);
      previous = time;
      angleRef.current += speedRef.current.step(delta) * delta;
      paint(angleRef.current);
      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, [animate, paint]);

  React.useEffect(() => {
    if (!staticMode) return;
    angleRef.current = 40;
    speedRef.current.x = speedsRef.current.idleSpeed;
    speedRef.current.target = speedsRef.current.idleSpeed;
    speedRef.current.v = 0;
    paint(40);
  }, [paint, staticMode]);

  const surge = () => {
    speedRef.current.target = speedsRef.current.hoverSpeed;
  };
  const settle = () => {
    speedRef.current.target = speedsRef.current.idleSpeed;
  };

  const gradient = React.useMemo(() => ringGradient(beams, colors), [beams, colors]);
  const css = `
.${scope} .cdr-beam-ring,.${scope} .cdr-beam-glow{position:absolute;inset:-1px;border-radius:${radius}px;pointer-events:none;background:${gradient}}
.${scope} .cdr-beam-ring{padding:${Math.max(1, thickness)}px;-webkit-mask:linear-gradient(white 0 0) content-box,linear-gradient(white 0 0);-webkit-mask-composite:xor;mask:linear-gradient(white 0 0) content-box,linear-gradient(white 0 0);mask-composite:exclude}
.${scope} .cdr-beam-glow{filter:blur(12px);opacity:.22;z-index:-1}
@media (forced-colors:active){.${scope} .cdr-beam-ring,.${scope} .cdr-beam-glow{display:none}.${scope}{border-color:CanvasText}}
  `.trim();

  return (
    <div
      ref={rootRef}
      data-cdr-border-beam="true"
      data-motion={staticMode ? "static" : "animated"}
      data-paused={!animate && !staticMode ? "true" : "false"}
      onPointerEnter={surge}
      onPointerLeave={settle}
      onFocusCapture={surge}
      onBlurCapture={settle}
      className={cn("relative isolate w-full border border-white/15 bg-night-deep", scope, className)}
      style={{
        borderRadius: `${radius}px`,
        ["--cdr-beam-angle" as string]: `${startAngle.toFixed(2)}deg`,
        ...style,
      }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {glow ? <div className="cdr-beam-glow" aria-hidden="true" /> : null}
      <div className="cdr-beam-ring" aria-hidden="true" />
      {children}
    </div>
  );
}

export default BorderBeamPanel;
