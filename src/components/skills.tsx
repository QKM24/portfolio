"use client";
import { useLang } from "@/lib/lang-context";
import { portfolioConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Skills() {
  const { lang, langCode } = useLang();

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-green p-2">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            <h2 className="text-4xl font-black uppercase">
              {langCode === "fr" ? "Compétences" : "Skills"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black uppercase mb-4">
                {langCode === "fr" ? "Soft Skills" : "Soft Skills"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {lang.skills.soft.map((skill) => (
                  <span key={skill} className="neo-border rounded-lg px-3 py-1.5 bg-neo-pink text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase mb-4">
                {langCode === "fr" ? "Hard Skills" : "Hard Skills"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioConfig.skills.hard.map((skill) => (
                  <span key={skill} className="neo-border rounded-lg px-3 py-1.5 bg-neo-blue text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
