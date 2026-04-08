"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const containerVariants = {
    initial: { clipPath: "inset(0% 0% 0% 0%)" },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] as any,
        delay: 0.1 
      }
    }
  };

  const textVariants = {
    initial: { y: 100, opacity: 0, filter: "blur(10px)" },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6, 
        ease: [0.33, 1, 0.68, 1] as any, 
        delay: i * 0.05 
      }
    }),
    exit: {
      y: -60,
      opacity: 0,
      filter: "blur(5px)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[10000] bg-white dark:bg-thc-charcoal flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Architectural Blueprint Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0" 
        style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex overflow-hidden mb-6">
          {"THC GROUP".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={i}
              className="font-heading text-4xl md:text-7xl font-light tracking-[0.2em] text-slate-900 dark:text-white uppercase leading-none inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="h-[1px] w-48 md:w-80 bg-thc-gold/40 mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center space-x-6 text-[9px] md:text-[11px] uppercase tracking-[0.6em] font-bold text-slate-400 dark:text-slate-500"
        >
          <span>HOSPITALITY</span>
          <div className="w-1.5 h-1.5 rounded-full bg-thc-gold" />
          <span>FINANCE</span>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        exit={{ opacity: 0 }}
        className="absolute bottom-12 text-[10rem] md:text-[20rem] font-heading font-medium text-slate-900 dark:text-white select-none pointer-events-none"
      >
        T
      </motion.div>
    </motion.div>
  );
};
