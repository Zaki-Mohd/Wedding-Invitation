"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import OrnamentalDivider from "@/components/OrnamentalDivider";

/**
 * SECTION A: Couple Introduction
 * Fixed centering with explicit margin/text-align on all elements
 */
export default function CoupleIntro() {
  const headingRef = useScrollAnimation<HTMLDivElement>("fadeUp", {
    duration: 1.2,
  });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>("fadeUp", {
    delay: 0.2,
    duration: 1,
  });
  const descRef = useScrollAnimation<HTMLDivElement>("fadeUp", {
    delay: 0.4,
    duration: 1,
  });

  return (
    <section
      id="couple"
      className="relative py-28 sm:py-36 px-6 overflow-hidden"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(27,94,58,0.08), transparent 60%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "768px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <OrnamentalDivider icon="♡" />

        <div ref={headingRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <p className="text-text-muted text-xs tracking-[0.35em] uppercase mb-10 font-sans">
            Together with their beloved families
          </p>

          <h2 className="font-cursive text-5xl sm:text-6xl md:text-8xl text-gold-gradient text-glow-strong mb-4 py-2 pr-6 sm:pr-8 leading-tight">
            Althaf
          </h2>
          <p className="font-heading text-xl text-text-gold tracking-[0.25em] my-4 text-glow-gold">
            &
          </p>
          <h2 className="font-cursive text-5xl sm:text-6xl md:text-8xl text-gold-gradient text-glow-strong mb-10 py-2 pr-6 sm:pr-8 leading-tight">
            Sania
          </h2>
        </div>

        <p
          ref={subtitleRef}
          className="font-heading text-2xl sm:text-3xl text-text-cream leading-relaxed mb-8"
        >
          Two souls, one beautiful journey
        </p>

        <div ref={descRef} style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            With hearts full of joy and gratitude to Allah (SWT), we invite you
            to share in our happiness as we begin a new chapter of our lives
            together. Your presence and duas would make our special day truly
            blessed.
          </p>
        </div>

        <OrnamentalDivider icon="✦" className="mt-10" />
      </div>
    </section>
  );
}
