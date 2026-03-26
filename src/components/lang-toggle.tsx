"use client";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";

export function LangToggle() {
  const { langCode, toggle } = useLang();
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ y: 2, boxShadow: "0px 0px 0px 0px var(--foreground)" }}
      className="neo-border inline-flex items-center justify-center rounded-lg bg-card px-3 py-1.5 text-sm font-black uppercase tracking-wide"
      style={{ boxShadow: "2px 2px 0px 0px var(--foreground)" }}
    >
      {langCode === "fr" ? "EN" : "FR"}
    </motion.button>
  );
}
