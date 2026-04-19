"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

/**
 * SECTION 2: Invitation Card Opening
 *
 * Dark luxury invitation card with:
 * - GSAP-powered cinematic reveal
 * - 3D perspective tilt on hover
 * - Animated gold border glow
 * - Islamic calligraphy
 * - Corner ornaments
 */
export default function InvitationCard({
  isOpen,
  onComplete,
}: {
  isOpen: boolean;
  onComplete: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  const stableOnComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!isOpen || !cardRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setShowContent(true);
        setTimeout(() => stableOnComplete(), 800);
      },
    });

    tl.fromTo(
      cardRef.current,
      { scale: 0.5, opacity: 0, rotateX: 20, y: 120 },
      {
        scale: 1,
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 1.6,
        ease: "power4.out",
      }
    );
  }, [isOpen, stableOnComplete]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;

    gsap.to(innerRef.current, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-4">
          {/* Background glow */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,168,67,0.06) 0%, transparent 60%)",
            }}
          />

          <div
            ref={cardRef}
            className="relative w-full max-w-2xl mx-auto"
            style={{ opacity: 0 }}
          >
            <div
              ref={innerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="invitation-card p-12 sm:p-20 text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 w-14 h-14 border-t border-l border-gold/30 rounded-tl-xl" />
              <div className="absolute top-4 right-4 w-14 h-14 border-t border-r border-gold/30 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-14 h-14 border-b border-l border-gold/30 rounded-bl-xl" />
              <div className="absolute bottom-4 right-4 w-14 h-14 border-b border-r border-gold/30 rounded-br-xl" />

              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                  >
                    {/* Bismillah */}
                    <p className="text-text-gold text-3xl sm:text-4xl mb-2 text-glow-gold font-heading">
                      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                    </p>
                    <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-10 font-sans">
                      In the name of God, the Most Gracious, the Most Merciful
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                      <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                      <span className="text-gold text-[10px]">❖</span>
                      <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    </div>

                    <p className="text-text-muted text-xs tracking-[0.25em] uppercase mb-8 font-sans">
                      Together with their families
                    </p>

                    <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient text-glow-strong mb-3 py-2 pr-4 sm:pr-8">
                      Althaf
                    </h2>
                    <p className="font-heading text-xl text-text-gold tracking-[0.2em] mb-3 text-glow-gold">
                      &
                    </p>
                    <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient text-glow-strong mb-10 py-2 pr-4 sm:pr-8">
                      Sania
                    </h2>

                    <div className="ornament-divider mb-10 opacity-40">
                      <span className="text-gold text-xs">✦</span>
                    </div>

                    <p className="font-heading text-lg sm:text-xl text-text-cream leading-relaxed mb-2">
                      Request the honour of your presence
                    </p>
                    <p className="font-heading text-lg sm:text-xl text-text-cream leading-relaxed mb-8">
                      at the celebration of their Nikah
                    </p>

                    <div className="space-y-2">
                      <p className="font-heading text-3xl text-text-white tracking-wide text-glow-gold">
                        Thursday, May 14th
                      </p>
                      <p className="text-text-muted text-sm tracking-[0.2em] font-sans">
                        Two Thousand & Twenty Six
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Outer glow */}
            <div
              className="absolute -inset-6 rounded-3xl -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,168,67,0.08), transparent 70%)",
                filter: "blur(30px)",
              }}
            />
          </div>
        </section>
      )}
    </AnimatePresence>
  );
}
