"use client";

import { motion } from "framer-motion";

/**
 * Elegant ornamental divider with animated gold lines on dark bg.
 */
export default function OrnamentalDivider({
  icon = "✦",
  className = "",
}: {
  icon?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 py-6 ${className}`}
      initial={{ opacity: 0, scaleX: 0.2 }}
      whileInView={{ opacity: 0.5, scaleX: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.span
        className="block h-px w-16 md:w-28"
        style={{
          background: "linear-gradient(90deg, transparent, #D4A843, transparent)",
          boxShadow: "0 0 8px rgba(212,168,67,0.2)",
        }}
      />
      <span className="text-gold text-sm tracking-widest text-glow-gold font-heading">
        {icon}
      </span>
      <motion.span
        className="block h-px w-16 md:w-28"
        style={{
          background: "linear-gradient(90deg, transparent, #D4A843, transparent)",
          boxShadow: "0 0 8px rgba(212,168,67,0.2)",
        }}
      />
    </motion.div>
  );
}
