"use client";

import { portfolioConfig } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof portfolioConfig.experience)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const colors = ["bg-neo-blue", "bg-neo-pink", "bg-neo-yellow", "bg-neo-green", "bg-neo-orange"];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="neo-card cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className={`neo-border inline-block rounded px-2 py-0.5 ${color} mb-2`}>
            <span className="text-xs font-bold text-foreground">
              {exp.startDate} — {exp.endDate}
            </span>
          </div>
          <h3 className="text-xl font-black uppercase">{exp.role}</h3>
          <p className="text-sm font-bold text-muted-foreground">
            {exp.company}, {exp.location}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 mt-1" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t-2 border-foreground">
              <ul className="space-y-2">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-foreground shrink-0" />
                    <span className="text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-pink p-2">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-black uppercase">Experience</h2>
          </div>

          <div className="grid gap-6">
            {portfolioConfig.experience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
