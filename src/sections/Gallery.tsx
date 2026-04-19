"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OrnamentalDivider from "@/components/OrnamentalDivider";

/**
 * SECTION D: Gallery
 *
 * Image gallery grid with hover zoom effects and fade-in animations.
 * Uses generated gradient placeholders (replace with real images).
 */

// Gradient placeholders — replace these with real image paths
const galleryImages = [
  {
    gradient: "linear-gradient(135deg, #E8D4B8, #F5C76E)",
    label: "Our Story Begins",
  },
  {
    gradient: "linear-gradient(135deg, #B8D4E3, #D6E8F0)",
    label: "Engagement Day",
  },
  {
    gradient: "linear-gradient(135deg, #F5C76E, #E8913A)",
    label: "Golden Moments",
  },
  {
    gradient: "linear-gradient(135deg, #C9A84C, #E8D48B)",
    label: "Together Forever",
  },
  {
    gradient: "linear-gradient(135deg, #D6E8F0, #B8D4E3)",
    label: "Blessings",
  },
  {
    gradient: "linear-gradient(135deg, #F0EBE1, #C9A84C)",
    label: "Celebration",
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.15), transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-text-muted text-sm tracking-[0.25em] uppercase mb-4 font-sans">
            Precious Moments
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            Our Gallery
          </h2>
          <OrnamentalDivider />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image placeholder (gradient) */}
              <motion.div
                className="absolute inset-0"
                style={{ background: img.gradient }}
                animate={{
                  scale: hoveredIndex === index ? 1.08 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/20 flex items-end p-6"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="text-white font-heading text-xl">
                    {img.label}
                  </p>
                  <p className="text-white/70 text-xs tracking-wide mt-1">
                    Althaf & Sania
                  </p>
                </div>
              </motion.div>

              {/* Border frame */}
              <div className="absolute inset-2 border border-white/20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-text-muted text-sm italic">
            Replace these with your cherished photographs
          </p>
        </div>
      </div>
    </section>
  );
}
