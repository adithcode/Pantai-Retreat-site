"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  delay?: number;
}

export const RevealImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
  delay = 0,
}: RevealImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: "easeOut" 
      }}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};
