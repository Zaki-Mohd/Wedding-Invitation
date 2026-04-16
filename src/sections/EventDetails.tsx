"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import OrnamentalDivider from "@/components/OrnamentalDivider";

/**
 * SECTION B: Event Details — Centered with inline styles for bulletproof alignment
 */
export default function EventDetails() {
  const sectionRef = useScrollAnimation<HTMLDivElement>("fadeUp", {
    duration: 1.2,
  });

  const details = [
    { icon: "🕌", label: "Ceremony", value: "Nikah" },
    { icon: "📅", label: "Date", value: "Thursday, May 14, 2026" },
    { icon: "🕐", label: "Time", value: "1:00 PM Onwards" },
    {
      icon: "📍",
      label: "Venue",
      value: "Srimannaryana Gardens",
      sub: "",
    },
  ];

  return (
    <section
      id="details"
      className="relative py-28 sm:py-36 px-6 overflow-hidden"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(212,168,67,0.05), transparent 50%)",
        }}
      />

      <div
        ref={sectionRef}
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
        <p className="text-text-muted text-xs tracking-[0.35em] uppercase mb-4 font-sans">
          Ceremony Details
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-text-white mb-4 text-glow-gold">
          Join Us In Celebration
        </h2>
        <OrnamentalDivider />

        {/* Details Card */}
        <div
          className="invitation-card p-8 sm:p-12 md:p-16"
          style={{
            width: "100%",
            maxWidth: "600px",
            textAlign: "center",
            marginTop: "2.5rem",
          }}
        >
          <div className="relative z-10" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <span className="text-3xl mb-3 block">{detail.icon}</span>
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-2 font-sans">
                  {detail.label}
                </p>
                <p className="font-heading text-2xl sm:text-3xl text-text-white text-glow-gold">
                  {detail.value}
                </p>
                {detail.sub && (
                  <p className="text-text-muted text-sm mt-1 font-sans">
                    {detail.sub}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
