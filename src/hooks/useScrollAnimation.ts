"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook to animate elements on scroll using GSAP ScrollTrigger.
 * @param animation - Animation config: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
 * @param options - Additional GSAP ScrollTrigger options
 */
export function useScrollAnimation<T extends HTMLElement>(
  animation: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn" = "fadeUp",
  options?: {
    delay?: number;
    duration?: number;
    start?: string;
    ease?: string;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { delay = 0, duration = 1.2, start = "top 85%", ease = "power3.out" } =
      options || {};

    // Define animation presets
    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { y: 60, opacity: 0 },
      fadeIn: { opacity: 0 },
      slideLeft: { x: -80, opacity: 0 },
      slideRight: { x: 80, opacity: 0 },
      scaleIn: { scale: 0.85, opacity: 0 },
    };

    const fromVars = animations[animation] || animations.fadeUp;

    gsap.fromTo(el, fromVars, {
      ...Object.fromEntries(Object.keys(fromVars).map((key) => [key, key === "scale" ? 1 : 0])),
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, options]);

  return ref;
}
