"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const slides = [
  {
    src: "/images/hero/route-nuit.jpg",
    alt: "Route de montagne de nuit dessinée par les feux des véhicules",
    label: "Route de nuit",
    objectPosition: "center",
  },
  {
    src: "/images/hero/autocar-montagne.jpeg",
    alt: "Autocar stationné au pied de montagnes enneigées",
    label: "Autocar",
    objectPosition: "42% center",
  },
  {
    src: "/images/hero/conducteur-bus.jpg",
    alt: "Conducteur de bus souriant au poste de conduite",
    label: "Au poste",
    objectPosition: "center",
  },
  {
    src: "/images/hero/bus-mouvement.jpeg",
    alt: "Bus urbain bleu photographié en mouvement",
    label: "Bus urbain",
    objectPosition: "55% center",
  },
] as const;

const AUTOPLAY_DELAY = 6500;

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotionPreference() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

export function HeroSlider() {
  const sliderRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotionPreference();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);

  const selectSlide = useCallback((nextIndex: number, nextDirection?: number) => {
    setDirection(nextDirection ?? (nextIndex > activeIndex ? 1 : -1));
    setActiveIndex((nextIndex + slides.length) % slides.length);
  }, [activeIndex]);

  const previousSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const element = sliderRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!autoplay || interacting || reducedMotion || !onScreen || !pageVisible) return;
    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [autoplay, interacting, nextSlide, onScreen, pageVisible, reducedMotion]);

  const activeSlide = slides[activeIndex];

  return (
    <figure
      ref={sliderRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Photographies du transport de voyageurs"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          previousSlide();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          nextSlide();
        }
      }}
      onPointerEnter={() => setInteracting(true)}
      onPointerLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
      }}
      className="relative order-1 min-h-[500px] overflow-hidden border-t border-white/10 bg-night-deep md:order-2 md:col-span-5 md:min-h-full md:border-l md:border-t-0"
      data-testid="hero-slider"
    >
      <div className="relative h-full min-h-[500px] md:min-h-[740px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeSlide.src}
            custom={direction}
            variants={{
              enter: (slideDirection: number) => ({
                opacity: 0,
                x: reducedMotion ? 0 : slideDirection * 72,
              }),
              center: { opacity: 1, x: 0 },
              exit: (slideDirection: number) => ({
                opacity: 0,
                x: reducedMotion ? 0 : slideDirection * -48,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: reducedMotion ? 0 : 0.62,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag={reducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) nextSlide();
              if (info.offset.x > 60 || info.velocity.x > 500) previousSlide();
            }}
            className="absolute inset-0 touch-pan-y cursor-grab active:cursor-grabbing"
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${activeIndex + 1} sur ${slides.length} · ${activeSlide.label}`}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              loading={activeIndex === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="pointer-events-none select-none object-cover"
              style={{ objectPosition: activeSlide.objectPosition }}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute left-0 top-0 hidden h-32 w-2 bg-orange-500 md:block"
          aria-hidden="true"
        />

        <figcaption className="absolute inset-x-0 bottom-0 z-10 grid min-h-20 grid-cols-[minmax(0,1fr)_auto] border-t border-white/15 bg-night-deep/95">
          <div className="flex min-w-0 items-center gap-5 px-5 py-4 md:px-7">
            <span className="shrink-0 font-mono text-[10px] font-semibold tracking-[0.16em] text-orange-300">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <span className="truncate text-sm font-semibold text-white-90">
              {activeSlide.label}
            </span>
            <div className="ml-auto hidden items-center gap-2 lg:flex" aria-label="Choisir une photographie">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Afficher ${slide.label}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => selectSlide(index)}
                  className="group flex h-11 w-7 items-center justify-center"
                >
                  <span
                    className={`h-px w-full transition-colors ${
                      index === activeIndex ? "bg-orange-400" : "bg-white/25 group-hover:bg-white/60"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex border-l border-white/15">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Photographie précédente"
              className="flex min-h-20 w-14 items-center justify-center border-r border-white/15 text-white-75 transition-colors hover:bg-white/5 hover:text-orange-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setAutoplay((current) => !current)}
              aria-label={autoplay ? "Mettre le diaporama en pause" : "Reprendre le diaporama"}
              className="flex min-h-20 w-14 items-center justify-center border-r border-white/15 text-white-75 transition-colors hover:bg-white/5 hover:text-orange-300"
            >
              {autoplay ? (
                <Pause className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Photographie suivante"
              className="flex min-h-20 w-14 items-center justify-center text-white-75 transition-colors hover:bg-white/5 hover:text-orange-300"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
