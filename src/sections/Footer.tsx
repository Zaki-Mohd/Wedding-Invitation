"use client";

import { motion } from "framer-motion";

/**
 * Footer — Centered with inline styles for bulletproof alignment
 */
export default function Footer() {
  return (
    <footer
      className="relative py-24 px-6 overflow-hidden"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
          boxShadow: "0 0 20px rgba(212,168,67,0.1)",
        }}
      />

      <motion.div
        style={{
          width: "100%",
          maxWidth: "480px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Dua */}
        <p className="text-text-gold text-lg sm:text-xl mb-2 text-glow-gold font-heading">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
        </p>
        <p className="text-text-muted text-[10px] tracking-[0.15em] uppercase mb-10 font-sans" style={{ maxWidth: "320px" }}>
          &ldquo;And among His signs is that He created for you mates from among yourselves&rdquo;
          — Quran 30:21
        </p>

        <p className="font-cursive text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] text-gold-gradient text-glow-strong mb-4 py-2 pr-4 sm:pr-8 leading-tight">
          Althaf & Sania
        </p>
        <p className="text-text-muted text-sm leading-relaxed mb-10" style={{ maxWidth: "380px" }}>
          We are excited to begin this beautiful journey together.
          Your love, duas, and blessings make it all the more special.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem", marginBottom: "3rem", opacity: 0.6, color: "#D4A843" }}>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C15 10 20 2 30 2C40 2 45 10 60 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <circle cx="30" cy="2" r="2" fill="currentColor"/>
          </svg>
          <span className="text-gold text-lg">✿</span>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C45 10 40 2 30 2C20 2 15 10 0 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <circle cx="30" cy="2" r="2" fill="currentColor"/>
          </svg>
        </div>

        <p className="text-text-muted/40 text-[10px] tracking-[0.2em] uppercase">
          Made with love · May 2026
        </p>
      </motion.div>
    </footer>
  );
}
