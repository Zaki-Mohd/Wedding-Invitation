"use client";

import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import { motion } from "framer-motion";

/**
 * Floating music toggle with animated equalizer — dark theme.
 */
export default function MusicToggle() {
  const { isPlaying, toggle } = useMusicPlayer();

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group"
      style={{
        background: "rgba(20, 28, 22, 0.9)",
        border: "1px solid rgba(212,168,67,0.3)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 20px rgba(212,168,67,0.05)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      title={isPlaying ? "Pause music" : "Play music"}
    >
      <div className="flex items-end gap-[2px] h-4">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: "linear-gradient(180deg, #F0D078, #D4A843)" }}
            animate={
              isPlaying
                ? { height: ["6px", "16px", "8px", "14px", "6px"] }
                : { height: "6px" }
            }
            transition={
              isPlaying
                ? {
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
            initial={{ height: "6px" }}
          />
        ))}
      </div>
    </motion.button>
  );
}
