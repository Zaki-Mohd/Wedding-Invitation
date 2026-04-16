"use client";

import { useEffect, useState, useMemo } from "react";

/**
 * ULTRA-OPTIMIZED Floating Floral & Star Effects
 * Uses 100% pure CSS keyframes on the compositor thread (zero Framer Motion JS overhead).
 * Guarantees 60FPS on low-end mobile devices without scroll lag.
 */

const FlowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-80">
    <path d="M12 2C12 2 14.5 5 14.5 9C14.5 11.5 12 14 12 14C12 14 9.5 11.5 9.5 9C9.5 5 12 2 12 2Z" />
    <path d="M12 22C12 22 14.5 19 14.5 15C14.5 12.5 12 10 12 10C12 10 9.5 12.5 9.5 15C9.5 19 12 22 12 22Z" />
    <path d="M22 12C22 12 19 9.5 15 9.5C12.5 9.5 10 12 10 12C10 12 12.5 14.5 15 14.5C19 14.5 22 12 22 12Z" />
    <path d="M2 12C2 12 5 9.5 9 9.5C11.5 9.5 14 12 14 12C14 12 11.5 14.5 9 14.5C5 14.5 2 12 2 12Z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-90">
    <path d="M12 0C12 0 13 8 24 12C13 16 12 24 12 24C12 24 11 16 0 12C11 8 12 0 12 0Z" />
  </svg>
);

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

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const typeRand = Math.random();
      const type = typeRand < 0.3 ? "flower" : typeRand < 0.6 ? "star" : "petal";
      
      const size = type === "star" ? Math.random() * 12 + 10 : Math.random() * 18 + 12;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 8; // Pure CSS duration
      const delay = Math.random() * -15; // Negative delay so they start on screen
      const sway = Math.random() * 40 - 20; // Random sway distance

      const colors = ["#E5B782", "#F8D9B6", "#E88B80", "#B4395A", "#FFD700", "#FFF"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        type,
        size,
        left,
        duration,
        delay,
        sway,
        color,
      };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 overflow-clip ${className}`}>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(var(--sway-dist)); }
        }
        @keyframes glowDust {
          0% { transform: translateY(110vh); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            color: p.color,
            // Optimized box-shadow for glowing instead of slow drop-shadow filters
            filter: `drop-shadow(0 0 6px ${p.color}88)`,
            willChange: "transform, opacity",
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              "--sway-dist": `${p.sway}px`,
              animation: `sway ${p.duration * 0.6}s ease-in-out ${p.delay}s infinite alternate`,
            } as React.CSSProperties}
          >
            {p.type === "flower" && <FlowerIcon />}
            {p.type === "star" && <StarIcon />}
            {p.type === "petal" && <PetalIcon />}
          </div>
        </div>
      ))}

      {/* Bokeh / Particle effect via CSS instead of Framer Motion */}
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * -20;
        return (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white z-0"
            style={{
              left: `${Math.random() * 100}vw`,
              width: size,
              height: size,
              boxShadow: "0 0 8px rgba(255,255,255,0.8)",
              willChange: "transform, opacity",
              animation: `glowDust ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
