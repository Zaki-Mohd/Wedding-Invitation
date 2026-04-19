"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrnamentalDivider from "@/components/OrnamentalDivider";

/**
 * SECTION E: RSVP Form
 *
 * Clean, elegant RSVP form with:
 * - Smooth focus animations
 * - Input validation UI
 * - Thank-you state after submission
 * - No backend — just UI
 */
export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just show thank-you card
    setIsSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 40% 70%, rgba(184,212,227,0.25), transparent 60%)",
        }}
      />

      <div className="relative max-w-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-text-muted text-sm tracking-[0.25em] uppercase mb-4 font-sans">
            We&apos;d Love to See You
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            RSVP
          </h2>
          <OrnamentalDivider />
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="invitation-card rounded-2xl p-8 sm:p-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block text-text-secondary text-sm tracking-wide mb-2 font-sans"
                >
                  Your Name
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label
                  htmlFor="rsvp-guests"
                  className="block text-text-secondary text-sm tracking-wide mb-2 font-sans"
                >
                  Number of Guests
                </label>
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-text-secondary text-sm tracking-wide mb-3 font-sans">
                  Will You Attend?
                </label>
                <div className="flex gap-3">
                  {["Joyfully Accept", "Regretfully Decline"].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 text-center py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 text-sm font-sans ${
                        formData.attendance === option
                          ? "bg-gold text-white shadow-md"
                          : "bg-ivory-dark/50 text-text-secondary hover:bg-ivory-dark"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        checked={formData.attendance === option}
                        onChange={handleChange}
                        className="hidden"
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block text-text-secondary text-sm tracking-wide mb-2 font-sans"
                >
                  Wishes & Blessings (Optional)
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  placeholder="Share your warm wishes..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-input resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn-gold w-full text-base tracking-[0.12em]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              className="invitation-card rounded-2xl p-10 sm:p-14 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="text-5xl block mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                💌
              </motion.span>
              <h3 className="font-heading text-3xl text-text-primary mb-3">
                Thank You!
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Your response means the world to us.
                <br />
                We can&apos;t wait to celebrate with you!
              </p>
              <p className="font-cursive text-2xl text-gold-gradient">
                Althaf & Sania
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
