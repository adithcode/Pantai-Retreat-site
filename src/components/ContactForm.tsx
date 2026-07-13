"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Construct mailto link to thckdr@gmail.com
    const subject = encodeURIComponent(`Pantai Retreat Villa Inquiry - ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:thckdr@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      // Trigger the email client
      window.location.href = mailtoUrl;
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto w-full px-4">
      <div className="bg-white dark:bg-ocean-950 p-6 md:p-10 rounded-3xl border border-sand-200 dark:border-ocean-900 shadow-luxury-lg relative overflow-hidden">
        
        {/* Soft sandy background glow */}
        <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-gold-100/30 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-950/40 text-gold-500 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-light text-ocean-900 dark:text-sand-50 font-serif">Inquiry Received</h3>
              <p className="text-sm md:text-base text-ocean-600 dark:text-sand-300 font-light max-w-sm leading-relaxed mx-auto">
                Thank you for your interest in Pantai Retreat Villa. Our private guest experience host will contact you within 12 hours with availability details.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-semibold tracking-widest text-gold-600 dark:text-gold-400 uppercase hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="text-center md:text-left mb-2">
                <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">Direct Inquiry</span>
                <h3 className="text-2xl md:text-3xl font-light text-ocean-900 mt-1 font-serif">Send us a Message</h3>
              </div>

              {/* Name Field */}
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-ocean-600 font-semibold block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="e.g. Anand Kumar"
                  disabled={status === "submitting"}
                  className="w-full min-h-[48px] px-4 py-2.5 bg-sand-50/50 border border-sand-300 rounded-lg text-sm text-ocean-900 focus:outline-none focus:border-gold-400 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-ocean-600 font-semibold block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="e.g. anand@example.com"
                  disabled={status === "submitting"}
                  className="w-full min-h-[48px] px-4 py-2.5 bg-sand-50/50 border border-sand-300 rounded-lg text-sm text-ocean-900 focus:outline-none focus:border-gold-400 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-ocean-600 font-semibold block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your holiday dates, total guests, or any other travel details."
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 bg-sand-50/50 border border-sand-300 rounded-lg text-sm text-ocean-900 focus:outline-none focus:border-gold-400 transition-colors disabled:opacity-50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full min-h-[48px] bg-ocean-900 hover:bg-ocean-950 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-xs tracking-widest uppercase font-semibold"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Inquiry
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
