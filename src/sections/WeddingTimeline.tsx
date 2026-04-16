"use client";

import { motion } from "framer-motion";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const events = [
  {
    title: "Haldi",
    time: "10:00 AM",
    date: "May 13, 2026",
    description:
      "A vibrant ceremony of turmeric and blessings, marking the beginning of the wedding festivities with family and loved ones.",
    icon: "🌻",
    color: "#F0D078",
  },
  {
    title: "Nikah",
    time: "1:00 PM",
    date: "May 14, 2026",
    description:
      "The sacred union ceremony — a moment of devotion, love, and eternal promises before Allah (SWT).",
    icon: "🕌",
    color: "#D4A843",
  },
  {
    title: "Walima",
    time: "8:00 PM",
    date: "May 15, 2026",
    description:
      "A grand dinner celebration to honour the newlyweds with joy, feasting, and togetherness. InshAllah.",
    icon: "✨",
    color: "#E8913A",
  },
];

export default function WeddingTimeline() {
  return (
    <section
      id="timeline"
      className="relative pt-28 pb-32 sm:pt-36 sm:pb-40 mb-32 sm:mb-48 md:mb-64 overflow-hidden w-full"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(120,30,60,0.06), transparent 50%)",
        }}
      />

      {/* Centered constrained wrapper */}
      <div className="relative mx-auto px-6 sm:px-10" style={{ maxWidth: "1100px" }}>

        {/* Heading */}
        <div className="text-center mb-24 flex flex-col items-center">
          <p className="text-text-muted text-xs tracking-[0.35em] uppercase mb-4 font-sans">
            Our Celebrations
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-white mb-4 text-glow-gold">
            Wedding Timeline
          </h2>
          <OrnamentalDivider />
        </div>

        {/* ═══ Desktop timeline (md and above) ═══ */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div
            className="absolute inset-y-0 w-[2px]"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, transparent 0%, #D4A843 30%, #D4A843 70%, transparent 100%)",
              boxShadow: "0 0 18px rgba(212,168,67,0.35)",
            }}
          />

          <div className="flex flex-col" style={{ gap: "6rem" }}>
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  className="relative flex items-center"
                  style={{ minHeight: "120px" }}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {/* Center glowing dot */}
                  <div
                    className="absolute z-20 rounded-full border-[3px] border-bg-deep"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "20px",
                      height: "20px",
                      background: `radial-gradient(circle, ${event.color}, ${event.color}AA)`,
                      boxShadow: `0 0 20px ${event.color}70, 0 0 40px ${event.color}30`,
                    }}
                  />

                  {/* Left half */}
                  <div className="flex items-center justify-end" style={{ width: "50%", paddingRight: "3.5rem" }}>
                    {isLeft && <TimelineCard event={event} />}
                  </div>

                  {/* Right half */}
                  <div className="flex items-center justify-start" style={{ width: "50%", paddingLeft: "3.5rem" }}>
                    {!isLeft && <TimelineCard event={event} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ═══ Mobile timeline ═══ */}
        <div className="md:hidden relative">
          {/* Left-side line */}
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: "16px",
              background: "linear-gradient(to bottom, transparent 0%, #D4A843 20%, #D4A843 80%, transparent 100%)",
              boxShadow: "0 0 10px rgba(212,168,67,0.3)",
            }}
          />

          <div className="flex flex-col" style={{ gap: "2rem" }}>
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="relative pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * index }}
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Mobile dot */}
                <div
                  className="absolute rounded-full border-[3px] border-bg-deep z-10"
                  style={{
                    left: "8px",
                    top: "24px",
                    width: "18px",
                    height: "18px",
                    background: `radial-gradient(circle, ${event.color}, ${event.color}AA)`,
                    boxShadow: `0 0 14px ${event.color}60`,
                  }}
                />
                <TimelineCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineCard({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-9 group relative overflow-hidden w-full" style={{ maxWidth: "420px" }}>
      {/* Accent line on left border */}
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: event.color,
          boxShadow: `0 0 10px ${event.color}40`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl flex-shrink-0" role="img" aria-label={event.title}>
            {event.icon}
          </span>
          <div>
            <h3 className="font-heading text-2xl text-text-white mb-1 tracking-wide">
              {event.title}
            </h3>
            <p className="text-text-muted text-xs font-sans tracking-wide">
              {event.date} · {event.time}
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}
