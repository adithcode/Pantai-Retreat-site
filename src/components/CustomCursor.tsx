"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.style.cursor === "pointer") {
        setCursorType("hover");
      } else if (target.closest("img") || target.classList.contains("gallery-item")) {
        setCursorType("view");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);
    
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-thc-gold pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorType === "hover" ? 80 : cursorType === "view" ? 100 : 32,
        height: cursorType === "hover" ? 80 : cursorType === "view" ? 100 : 32,
        backgroundColor: cursorType === "hover" ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0)",
      }}
    >
      {cursorType === "view" && (
        <span className="text-[10px] font-bold text-thc-gold tracking-widest uppercase animate-pulse">View</span>
      )}
      {cursorType === "hover" && (
        <div className="w-2 h-2 bg-thc-gold rounded-full"></div>
      )}
    </motion.div>
  );
};
