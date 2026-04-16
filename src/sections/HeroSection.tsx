"use client";

import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load FloatingFlowers to avoid SSR issues
const FloatingFlowers = dynamic(
  () => import("@/components/FloatingLanterns"),
  { ssr: false }
);

/**
 * SECTION 1: Cinematic Landing / Hero Screen
 *
 * Dark luxurious fullscreen hero with:
 * - Deep burgundy-to-black gradient bg
 * - Islamic geometric pattern overlay
 * - Floating Flowers
 * - Animated gold gradient text
 * - Cinematic entrance animations
 */
export default function HeroSection({
  onOpenInvite,
}: {
  onOpenInvite: () => void;
}) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.6,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 2.4 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* ─── Cinematic dark background ─── */}
      <div className="absolute inset-0 hero-bg" />

      {/* ─── Islamic geometric pattern overlay ─── */}
      <div className="pattern-overlay" />

      {/* ─── Ambient glow orbs ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-center burgundy glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(132,35,64,0.15) 0%, transparent 70%)",
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Right-side gold glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(229,183,130,0.12) 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Left-side subtle glow */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(180,57,90,0.1) 0%, transparent 70%)",
            top: "40%",
            left: "-8%",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ─── Floating Flowers ─── */}
      <FloatingFlowers />

      {/* ─── Main Content — CENTERED ─── */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bismillah */}
        <motion.p
          variants={textVariants}
          className="text-text-gold text-2xl sm:text-3xl mb-2 text-glow-gold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-text-muted text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-10"
        >
          In the name of God, the Most Gracious, the Most Merciful
        </motion.p>

        {/* Decorative line */}
        <motion.div variants={textVariants} className="flex items-center justify-center gap-4 mb-10">
          <span className="block h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold text-xs text-glow-gold">✦</span>
          <span className="block h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Pre-title */}
        <motion.p
          variants={textVariants}
          className="text-text-muted text-xs sm:text-sm tracking-[0.4em] uppercase mb-8 font-sans"
        >
          You are cordially invited to the wedding of
        </motion.p>

        {/* ─── GROOM NAME ─── */}
        <motion.h1
          variants={textVariants}
          className="font-cursive text-gold-gradient text-glow-strong leading-none mb-3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Althaf
        </motion.h1>

        {/* "weds" connector with ornament */}
        <motion.div variants={textVariants} className="flex items-center justify-center gap-4 my-4">
          <span className="block h-px w-8 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="font-heading text-xl sm:text-2xl text-text-gold tracking-[0.25em] text-glow-gold">
            weds
          </p>
          <span className="block h-px w-8 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* ─── BRIDE NAME ─── */}
        <motion.h1
          variants={textVariants}
          className="font-cursive text-gold-gradient text-glow-strong leading-none mb-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Saniya
        </motion.h1>

        {/* Date */}
        <motion.div variants={textVariants} className="mb-12 flex flex-col items-center">
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-2 font-sans">
            Save the Date
          </p>
          <p className="font-heading text-2xl sm:text-3xl text-text-cream tracking-[0.1em]">
            14 · 05 · 2026
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={buttonVariants}>
          <motion.button
            onClick={onOpenInvite}
            className="btn-gold text-base sm:text-lg tracking-[0.2em]"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            OPEN INVITATION
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <p className="text-text-muted text-[9px] tracking-[0.3em] uppercase">Scroll</p>
        <motion.div
          className="w-5 h-8 border border-gold/30 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1.5 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
