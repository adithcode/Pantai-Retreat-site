"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

export const PillButton = ({ 
  children, 
  className = "", 
  href, 
  onClick 
}: { 
  children: ReactNode; 
  className?: string;
  href?: string;
  onClick?: () => void;
}) => {
  const baseClasses = `inline-flex flex-row items-center justify-center bg-slate-900 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95 ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export const SoftCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
