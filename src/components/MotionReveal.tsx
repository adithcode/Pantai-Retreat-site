"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export const MotionReveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
}: MotionRevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration > 0.5 ? duration : 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as any, // Cinematic slow ease
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxScroll = ({
  children,
  offset = 50,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) => {
  return (
    <motion.div
      style={{ y: 0 }}
      whileInView={{ y: [offset, -offset] }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity, repeatType: "reverse" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
