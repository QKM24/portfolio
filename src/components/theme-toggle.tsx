"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="neo-border neo-shadow-sm inline-flex h-9 w-9 items-center justify-center rounded-lg bg-card">
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <motion.button
      className="neo-border inline-flex h-9 w-9 items-center justify-center rounded-lg bg-card"
      style={{ boxShadow: "2px 2px 0px 0px var(--foreground)" }}
      whileTap={{ y: 2, boxShadow: "0px 0px 0px 0px var(--foreground)" }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </motion.button>
  );
}
