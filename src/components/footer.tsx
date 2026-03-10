"use client";

import { portfolioConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t-2 border-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-black text-lg uppercase">
              {portfolioConfig.name}
            </span>
            <span className="neo-border rounded bg-neo-accent px-2 py-0.5 text-xs font-bold">
              {portfolioConfig.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {portfolioConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
