"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsAppNumber = "919446576300";
  const whatsAppMessage = encodeURIComponent("Hello Villa Pantai, I would like to inquire about booking the beach villa for our stay in Azhikode.");
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover-lift active:scale-90"
        title="Chat via WhatsApp"
        aria-label="Chat via WhatsApp"
      >
        <img
          src="/whatsapp.svg?v=4"
          alt="WhatsApp logo"
          className="w-full h-full object-contain"
        />
      </a>
    </motion.div>
  );
}
