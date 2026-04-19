"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import Image from "next/image";

/**
 * Floating flower petal component — creates beautiful falling petals
 */
function FloatingPetals() {
  // Generate an array of petals with random properties
  const petals = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    emoji: ["🌸", "🌺", "🪷", "💮", "✿", "❀"][i % 6],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    size: 12 + Math.random() * 16,
    drift: (Math.random() - 0.5) * 120,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: "-30px",
            fontSize: `${p.size}px`,
            filter: "drop-shadow(0 2px 6px rgba(212,168,67,0.2))",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.drift, -p.drift * 0.5, p.drift * 0.3],
            rotate: [0, 360, -180, 360],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/**
 * SECTION A: Couple Introduction with Ghibli Portrait
 *
 * Features:
 * - Floating flower petals animation
 * - Circular portrait with animated gold border
 * - Glowing frame with breathing pulse
 * - Centered layout
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
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(212,168,67,0.06), transparent 50%), radial-gradient(ellipse at 50% 60%, rgba(27,94,58,0.06), transparent 50%)",
        }}
      />

      {/* 🌸 Floating Flower Petals */}
      <FloatingPetals />

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
          zIndex: 2,
        }}
      >
        <OrnamentalDivider icon="♡" />

        {/* ═══ COUPLE PORTRAIT ═══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2.5rem",
            position: "relative",
          }}
        >
          {/* Outer glow ring — breathing animation */}
          <motion.div
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212,168,67,0.15), transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating decorative ring */}
          <motion.div
            style={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "50%",
              border: "1px dashed rgba(212,168,67,0.2)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Portrait frame */}
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              padding: "4px",
              background:
                "linear-gradient(135deg, #D4A843, #F0D078, #D4A843, #B8922F, #F0D078)",
              backgroundSize: "300% 300%",
              animation: "shimmer-border 4s ease-in-out infinite",
              boxShadow:
                "0 0 30px rgba(212,168,67,0.3), 0 0 60px rgba(212,168,67,0.15), 0 0 100px rgba(212,168,67,0.05), inset 0 0 30px rgba(212,168,67,0.1)",
              position: "relative",
            }}
          >
            {/* Inner circle with image */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(10,13,11,0.9)",
                position: "relative",
              }}
            >
              <Image
                src="/couple.png"
                alt="Althaf & Sania — Ghibli Style Portrait"
                fill
                priority
                sizes="240px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 15%",
                }}
              />

              {/* Subtle vignette overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, transparent 55%, rgba(10,13,11,0.3) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Small sparkle accents around the frame */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.span
              key={angle}
              style={{
                position: "absolute",
                left: `${50 + 52 * Math.cos((angle * Math.PI) / 180)}%`,
                top: `${50 + 52 * Math.sin((angle * Math.PI) / 180)}%`,
                fontSize: "8px",
                color: "#D4A843",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✦
            </motion.span>
          ))}
        </motion.div>

        {/* Names */}
        <div
          ref={headingRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
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
