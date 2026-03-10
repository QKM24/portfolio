"use client";

import { portfolioConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export function Skills() {
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
            <div className="neo-border rounded-lg bg-neo-yellow p-2">
              <Zap className="h-6 w-6 text-neo-accent-foreground" />
            </div>
            <h2 className="text-4xl font-black uppercase">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="neo-card">
              <div className="neo-border inline-block rounded bg-neo-green px-3 py-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="text-sm font-black uppercase">Soft Skills</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioConfig.skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="neo-border rounded-full bg-background px-4 py-2 text-sm font-bold neo-shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="neo-card">
              <div className="neo-border inline-block rounded bg-foreground px-3 py-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-background" />
                  <span className="text-sm font-black uppercase text-background">Hard Skills</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioConfig.skills.hard.map((skill) => (
                  <span
                    key={skill}
                    className="neo-border rounded-full bg-background px-4 py-2 text-sm font-bold neo-shadow-sm"
                  >
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
