"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
import HeroSection from "@/sections/HeroSection";
import InvitationCard from "@/sections/InvitationCard";
import CoupleIntro from "@/sections/CoupleIntro";
import EventDetails from "@/sections/EventDetails";
import WeddingTimeline from "@/sections/WeddingTimeline";
import Footer from "@/sections/Footer";

// Components
import MusicToggle from "@/components/MusicToggle";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Main wedding invitation page.
 * Cinematic flow: Hero → Invitation opening → Scroll-based story sections
 * Removed: Gallery, RSVP
 */
export default function Home() {
  const [inviteOpened, setInviteOpened] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const handleOpenInvite = useCallback(() => {
    setInviteOpened(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }, 300);
  }, []);

  const handleInviteComplete = useCallback(() => {
    setShowSections(true);
    setTimeout(() => {
      sectionsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, []);

  useEffect(() => {
    if (showSections) {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }
  }, [showSections]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center">
      {/* Music Toggle */}
      <MusicToggle />

      {/* 1. Cinematic Hero */}
      <HeroSection onOpenInvite={handleOpenInvite} />

      {/* 2. Invitation Card */}
      <InvitationCard isOpen={inviteOpened} onComplete={handleInviteComplete} />

      {/* 3. Scroll-Based Story */}
      <AnimatePresence>
        {showSections && (
          <motion.div
            ref={sectionsRef}
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Couple Intro */}
            <CoupleIntro />

            {/* Glowing divider */}
            <div
              className="relative h-px w-3/4 max-w-xl mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)",
                boxShadow: "0 0 15px rgba(212,168,67,0.05)",
              }}
            />

            {/* Event Details */}
            <EventDetails />

            {/* Timeline */}
            <WeddingTimeline />

            {/* Bulletproof Layout Gap */}
            <div style={{ height: "120px", width: "100%" }} />

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
