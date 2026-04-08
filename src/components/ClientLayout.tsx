"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeProvider";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { Preloader } from "./Preloader";
import { Navbar } from "./Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <SmoothScroll>
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>
        <Navbar />
        <main className="flex-grow pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
