"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Premium Floating Floral & Star Effects
 * A dazzling array of fast-moving stars, petals, and flowers drifting upwards.
 */

// Elegant flower/petal SVG
const FlowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-80">
    <path d="M12 2C12 2 14.5 5 14.5 9C14.5 11.5 12 14 12 14C12 14 9.5 11.5 9.5 9C9.5 5 12 2 12 2Z" />
    <path d="M12 22C12 22 14.5 19 14.5 15C14.5 12.5 12 10 12 10C12 10 9.5 12.5 9.5 15C9.5 19 12 22 12 22Z" />
    <path d="M22 12C22 12 19 9.5 15 9.5C12.5 9.5 10 12 10 12C10 12 12.5 14.5 15 14.5C19 14.5 22 12 22 12Z" />
    <path d="M2 12C2 12 5 9.5 9 9.5C11.5 9.5 14 12 14 12C14 12 11.5 14.5 9 14.5C5 14.5 2 12 2 12Z" />
  </svg>
);

// Magical 4-point star SVG
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-90">
    <path d="M12 0C12 0 13 8 24 12C13 16 12 24 12 24C12 24 11 16 0 12C11 8 12 0 12 0Z" />
  </svg>
);

// Small petal SVG
const PetalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-70">
    <path d="M12 2C12 2 18 8 20 12C22 16 16 22 12 20C8 18 2 16 4 12C6 8 12 2 12 2Z" />
  </svg>
);

export default function FloatingLanterns({
  className = "",
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate 80 fast-moving particles randomly assigned as Flowers, Stars, or Petals
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => {
      const typeRand = Math.random();
      // 30% Flowers, 30% Stars, 40% Petals
      const type = typeRand < 0.3 ? "flower" : typeRand < 0.6 ? "star" : "petal";
      
      const size = type === "star" ? Math.random() * 15 + 10 : Math.random() * 20 + 15;
      const left = Math.random() * 100;
      // Much faster animation: 6s to 12s
      const animationDuration = Math.random() * 6 + 6;
      const delay = Math.random() * -15; // Random start
      const rotateStart = Math.random() * 360;
      const rotateEnd = rotateStart + (Math.random() > 0.5 ? 360 : -360);

      const colors = ["#E5B782", "#F8D9B6", "#E88B80", "#B4395A", "#FFD700", "#FFF"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        type,
        size,
        left,
        animationDuration,
        delay,
        rotateStart,
        rotateEnd,
        color,
      };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0"
          initial={{
            y: "110vh",
            x: "-50%",
            rotate: p.rotateStart,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            x: ["-50%", "-100%", "50%", "-50%"],
            rotate: p.rotateEnd,
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            y: {
              duration: p.animationDuration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            },
            x: {
              duration: p.animationDuration * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            },
            rotate: {
              duration: p.animationDuration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            },
            opacity: {
              duration: p.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            },
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            color: p.color,
            filter: `drop-shadow(0 0 12px ${p.color}88)`,
          }}
        >
          {p.type === "flower" && <FlowerIcon />}
          {p.type === "star" && <StarIcon />}
          {p.type === "petal" && <PetalIcon />}
        </motion.div>
      ))}

      {/* Bokeh / Particle effect for magical glowing dust */}
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        return (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white opacity-60 z-0"
            initial={{
              y: "110vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: "-10vh",
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20,
            }}
            style={{
              width: size,
              height: size,
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
          />
        );
      })}
    </div>
  );
}
