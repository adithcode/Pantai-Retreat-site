"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, MapPin, Banknote, User } from "lucide-react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <>
      {/* Edge-to-Edge Desktop Top Navbar and Minimalist Mobile Top Logo Bar */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-[5000] px-6 lg:px-12 py-3 lg:py-4 flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-[20px] border-b border-transparent ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-slate-200/60' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="flex items-center gap-12 mx-auto lg:mx-0">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logowithname.png" alt="THC Group Logo" className="h-7 lg:h-8 object-contain" />
          </Link>
  
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
            <Link href="/stays/pantai-retreat-villa" className="hover:text-slate-900 transition-colors">
              Stays
            </Link>
            <Link href="/finance" className="hover:text-slate-900 transition-colors">
              Asset Loans
            </Link>
            <Link href="/welcome" className="hover:text-slate-900 transition-colors">
              Guest Portal
            </Link>
          </div>
        </div>
  
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://wa.me/919446576300" target="_blank" className="flex items-center justify-center bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            Quick Inquiry
          </Link>
        </div>
      </motion.header>

      {/* Mobile Bottom Tab Bar (App-Like) */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-3xl border-t border-slate-100 z-[6000] lg:hidden pb-safe-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex justify-around items-center px-2 py-3">
          
          <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === "/" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}>
            <Home size={22} className={pathname === "/" ? "stroke-[2.5px]" : "stroke-[2px]"} />
            <span className="text-[10px] font-semibold">Home</span>
          </Link>
          
          <Link href="/stays/pantai-retreat-villa" className={`flex flex-col items-center gap-1 ${pathname?.includes("/stays") ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}>
            <MapPin size={22} className={pathname?.includes("/stays") ? "stroke-[2.5px]" : "stroke-[2px]"} />
            <span className="text-[10px] font-semibold">Stays</span>
          </Link>
          
          <Link href="/finance" className={`flex flex-col items-center gap-1 ${pathname?.includes("/finance") ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}>
            <Banknote size={22} className={pathname?.includes("/finance") ? "stroke-[2.5px]" : "stroke-[2px]"} />
            <span className="text-[10px] font-semibold">Loans</span>
          </Link>
          
          <Link href="/welcome" className={`flex flex-col items-center gap-1 ${pathname?.includes("/welcome") ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}>
            <User size={22} className={pathname?.includes("/welcome") ? "stroke-[2.5px]" : "stroke-[2px]"} />
            <span className="text-[10px] font-semibold">Portal</span>
          </Link>

        </div>
      </div>
    </>
  );
};
