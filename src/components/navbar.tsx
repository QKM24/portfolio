"use client";

import { portfolioConfig } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md neo-border border-t-0 border-x-0">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a
          href="#"
          className="text-xl font-black tracking-tight uppercase"
        >
          {portfolioConfig.name}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {portfolioConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-neo-accent hover:text-neo-accent-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <motion.button
            className="neo-border inline-flex h-9 w-9 items-center justify-center rounded-lg bg-card"
            style={{ boxShadow: "2px 2px 0px 0px var(--foreground)" }}
            whileTap={{ y: 2, boxShadow: "0px 0px 0px 0px var(--foreground)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t-2 border-foreground bg-background"
          >
            <div className="flex flex-col p-4 gap-1">
              {portfolioConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-neo-accent hover:text-neo-accent-foreground transition-colors rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
