"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full z-50"></div>;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-6 md:bottom-10 md:right-10 p-4 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full z-[6000] shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className="absolute inset-0 h-6 w-6 text-amber-500 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-6 w-6 text-indigo-400 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
