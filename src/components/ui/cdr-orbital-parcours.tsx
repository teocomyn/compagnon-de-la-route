"use client";

import { ArrowRight, LinkIcon, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ParcoursStep, ParcoursStepStatus } from "@/lib/content/parcours";

export type { ParcoursStep } from "@/lib/content/parcours";

const ORBITAL_STYLES = `
@keyframes cdr-orb-pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 12px rgba(242, 107, 42, 0.55); }
  50% { opacity: 0.45; box-shadow: 0 0 4px rgba(242, 107, 42, 0.25); }
}
.cdr-orb-pulse-dot {
  animation: cdr-orb-pulse-dot 2.4s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .cdr-orb-pulse-dot { animation: none; opacity: 1; }
}
`;

interface CdrOrbitalParcoursProps {
  steps: ParcoursStep[];
  className?: string;
}

export default function CdrOrbitalParcours({ steps, className }: CdrOrbitalParcoursProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = steps.findIndex((item) => item.id === nodeId);
    const totalNodes = steps.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key, 10) !== id) {
          newState[parseInt(key, 10)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const current = steps.find((s) => s.id === id);
        const newPulse: Record<number, boolean> = {};
        current?.relatedIds.forEach((relId) => {
          newPulse[relId] = true;
        });
        setPulseEffect(newPulse);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rotationTimer: ReturnType<typeof setInterval> | undefined;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.25) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.45, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = steps.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (activeNodeId === null) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: ParcoursStepStatus): string => {
    switch (status) {
      case "completed":
        return "text-night bg-mint-400 border-mint-400";
      case "in-progress":
        return "text-night bg-orange-500 border-orange-500";
      case "pending":
        return "text-white/80 bg-white/10 border-white/30";
      default:
        return "text-white/80 bg-white/10 border-white/30";
    }
  };

  const getStatusLabel = (status: ParcoursStepStatus): string => {
    switch (status) {
      case "completed":
        return "VALIDÉ";
      case "in-progress":
        return "EN COURS";
      case "pending":
        return "À VENIR";
      default:
        return "À VENIR";
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ORBITAL_STYLES }} />
      <section
        id="parcours"
        aria-labelledby="parcours-heading"
        className={cn(
          "relative flex min-h-[720px] w-full flex-col items-center justify-center overflow-hidden bg-night md:min-h-[860px]",
          className,
        )}
        ref={containerRef}
        onClick={handleContainerClick}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle, rgba(242,107,42,0.12) 0%, rgba(242,107,42,0.03) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 mx-auto mb-4 max-w-2xl px-6 pt-10 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 cdr-orb-pulse-dot" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Parcours en 6 étapes
            </span>
          </div>
          <h2
            id="parcours-heading"
            className="mb-4 text-3xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-5xl"
          >
            Du premier contact <span className="font-medium italic text-orange-300">au CDI</span>
          </h2>
          <p className="text-sm leading-relaxed text-white/60 md:text-base">
            Cliquez sur une étape pour la déployer. Chaque étape est connectée à la suivante, comme un relais de
            route.
          </p>
        </div>

        <div className="relative flex h-[min(520px,70vh)] w-full max-w-5xl items-center justify-center sm:h-[580px] md:h-[640px]">
          <div
            className="absolute flex h-full w-full origin-center scale-[0.82] items-center justify-center sm:scale-90 md:scale-100"
            ref={orbitRef}
            style={{ perspective: "1000px" }}
          >
            <div
              className="absolute z-20 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl p-1.5"
              style={{
                background: "linear-gradient(135deg, #f26b2a 0%, #c75220 100%)",
                boxShadow: "0 0 60px rgba(242, 107, 42, 0.35)",
              }}
            >
              <span
                className="pointer-events-none absolute h-28 w-28 animate-ping rounded-full border border-orange-500/30 opacity-60 motion-reduce:hidden"
                style={{ animationDuration: "2s" }}
              />
              <span
                className="pointer-events-none absolute h-36 w-36 animate-ping rounded-full border border-orange-500/15 opacity-40 motion-reduce:hidden"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              />
              <BrandLogo size="orbital" className="relative z-10" />
            </div>

            <div
              className="absolute rounded-full border border-dashed border-white/10"
              style={{ width: "440px", height: "440px" }}
            />
            <div
              className="absolute rounded-full border border-white/5"
              style={{ width: "500px", height: "500px" }}
            />

            {steps.map((item, index) => {
              const position = calculateNodePosition(index, steps.length);
              const isExpanded = expandedItems[item.id];
              const isRelated = isRelatedToActive(item.id);
              const isPulsing = pulseEffect[item.id];
              const Icon = item.icon;

              const nodeStyle: React.CSSProperties = {
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 300 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              };

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    nodeRefs.current[item.id] = el;
                  }}
                  className="absolute cursor-pointer transition-all duration-700"
                  style={nodeStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  <div
                    className={cn("absolute -inset-1 rounded-full", isPulsing && "motion-safe:animate-pulse")}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(242,107,42,0.3) 0%, rgba(242,107,42,0) 70%)",
                      width: `${item.progress * 0.5 + 48}px`,
                      height: `${item.progress * 0.5 + 48}px`,
                      left: `-${(item.progress * 0.5 + 48 - 44) / 2}px`,
                      top: `-${(item.progress * 0.5 + 48 - 44) / 2}px`,
                    }}
                  />

                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300",
                      isExpanded &&
                        "scale-[1.35] border-orange-500 bg-orange-500 text-night shadow-lg shadow-orange-500/50",
                      !isExpanded &&
                        isRelated &&
                        "motion-safe:animate-pulse border-orange-300 bg-orange-300 text-night",
                      !isExpanded &&
                        !isRelated &&
                        item.status === "completed" &&
                        "border-mint-400/60 bg-forest-surface text-mint-400",
                      !isExpanded &&
                        !isRelated &&
                        item.status === "in-progress" &&
                        "border-orange-500/60 bg-forest-surface text-orange-500",
                      !isExpanded &&
                        !isRelated &&
                        item.status === "pending" &&
                        "border-white/25 bg-forest-surface text-white/70",
                    )}
                  >
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300",
                      isExpanded ? "scale-110" : "scale-100",
                    )}
                  >
                    <div className="mb-0.5 font-mono text-[10px] tracking-[0.2em] text-orange-300">
                      ÉTAPE {item.id}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-bold tracking-wide",
                        isExpanded ? "text-white" : "text-white/80",
                      )}
                    >
                      {item.title}
                    </div>
                  </div>

                  {isExpanded && (
                    <div
                      className="absolute left-1/2 top-28 w-72 -translate-x-1/2 overflow-visible rounded-xl border border-orange-500/40 bg-night-deep/95 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(242,107,42,0.15)] backdrop-blur-xl"
                      role="dialog"
                      aria-label={`Détail · ${item.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2"
                        style={{ background: "rgba(242, 107, 42, 0.6)" }}
                        aria-hidden
                      />
                      <div className="border-b border-white/10 p-4 pb-2">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-[0.15em]",
                              getStatusStyles(item.status),
                            )}
                          >
                            {getStatusLabel(item.status)}
                          </span>
                          <span className="font-mono text-[11px] text-white/50">{item.duration}</span>
                        </div>
                        <h3 className="mt-3 text-base font-semibold leading-tight text-white">{item.title}</h3>
                        <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-orange-300">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-4 pt-3 text-xs leading-relaxed text-white/75">
                        <p>{item.content}</p>

                        <div className="mt-4 border-t border-white/10 pt-3">
                          <div className="mb-1.5 flex items-center justify-between text-[11px]">
                            <span className="flex items-center text-white/60">
                              <Zap size={10} className="mr-1 text-orange-500" aria-hidden />
                              Avancement
                            </span>
                            <span className="font-mono font-bold text-white">{item.progress}%</span>
                          </div>
                          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: `${item.progress}%`,
                                background: "linear-gradient(to right, #f26b2a, #fda172)",
                              }}
                            />
                          </div>
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-4 border-t border-white/10 pt-3">
                            <div className="mb-2 flex items-center">
                              <LinkIcon size={10} className="mr-1.5 text-orange-300" aria-hidden />
                              <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                                Étapes connectées
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = steps.find((i) => i.id === relatedId);
                                return (
                                  <button
                                    key={relatedId}
                                    type="button"
                                    className={cn(
                                      buttonVariants({ variant: "secondary", size: "sm" }),
                                      "h-7 min-h-0 rounded-full px-2 py-0 text-[10px] font-semibold text-white/85 hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-white",
                                    )}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleItem(relatedId);
                                    }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight size={8} className="ml-1 text-orange-300" aria-hidden />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-6 pb-10 pt-2 text-[11px] font-mono uppercase tracking-wider md:gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-mint-400" />
            <span className="text-white/60">Validé</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 cdr-orb-pulse-dot" />
            <span className="text-white/60">En cours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="text-white/60">À venir</span>
          </div>
        </div>
      </section>
    </>
  );
}
