"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-white/15 animate-pulse" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative w-9 h-9 rounded-full flex items-center justify-center
        bg-white/10 hover:bg-white/20
        text-white/80 hover:text-white
        transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]
        focus-visible:ring-offset-1 focus-visible:ring-offset-[#2D6A4F]
      "
    >
      <motion.div
        key={isDark ? "sun" : "moon"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.22 }}
      >
        {/* Show Sun in dark mode (click → go light), Moon in light mode (click → go dark) */}
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}
