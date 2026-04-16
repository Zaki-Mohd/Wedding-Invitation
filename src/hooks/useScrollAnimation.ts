"use client";

import { useEffect, useRef } from "react";

/**
 * Super lightweight, native Web Animations API alternative to GSAP.
 * Achieves 60FPS fluid animations without the massive GSAP bundle size.
 */
export function useScrollAnimation<T extends HTMLElement>(
  animation: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn" = "fadeUp",
  options?: {
    delay?: number;
    duration?: number;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { delay = 0, duration = 0.8 } = options || {};

    // Hide initially to prevent flash of content
    el.style.opacity = "0";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let keyframes: Keyframe[] = [];

            switch (animation) {
              case "fadeUp":
                keyframes = [
                  { opacity: 0, transform: "translateY(40px)" },
                  { opacity: 1, transform: "translateY(0px)" },
                ];
                break;
              case "fadeIn":
                keyframes = [{ opacity: 0 }, { opacity: 1 }];
                break;
              case "slideLeft":
                keyframes = [
                  { opacity: 0, transform: "translateX(-50px)" },
                  { opacity: 1, transform: "translateX(0px)" },
                ];
                break;
              case "slideRight":
                keyframes = [
                  { opacity: 0, transform: "translateX(50px)" },
                  { opacity: 1, transform: "translateX(0px)" },
                ];
                break;
              case "scaleIn":
                keyframes = [
                  { opacity: 0, transform: "scale(0.85)" },
                  { opacity: 1, transform: "scale(1)" },
                ];
                break;
            }

            el.animate(keyframes, {
              duration: duration * 1000,
              delay: delay * 1000,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "forwards",
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animation, options]);

  return ref;
}
