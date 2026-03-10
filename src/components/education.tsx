"use client";

import { portfolioConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Globe } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="neo-border rounded-lg bg-neo-orange p-2">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-black uppercase">Education</h2>
              </div>
              <div className="space-y-4">
                {portfolioConfig.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="neo-card"
                  >
                    <h3 className="font-black text-lg uppercase">{edu.degree}</h3>
                    {edu.honors && (
                      <span className="neo-border inline-block rounded bg-neo-accent px-2 py-0.5 text-xs font-bold mt-1">
                        {edu.honors}
                      </span>
                    )}
                    <p className="text-sm font-medium text-muted-foreground mt-2">
                      {edu.school}
                    </p>
                    <p className="text-xs font-bold text-muted-foreground mt-1">
                      {edu.startDate} — {edu.endDate}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="neo-border rounded-lg bg-neo-green p-2">
                  <BookOpen className="h-6 w-6 text-neo-accent-foreground" />
                </div>
                <h2 className="text-3xl font-black uppercase">Courses</h2>
              </div>
              <div className="space-y-4">
                {portfolioConfig.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="neo-card"
                  >
                    <h3 className="font-black text-sm uppercase">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.provider}</p>
                    <span className="neo-border inline-block rounded bg-secondary px-2 py-0.5 text-xs font-bold mt-2">
                      {course.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="neo-border rounded-lg bg-neo-blue p-2">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-black uppercase">Languages</h2>
              </div>
              <div className="space-y-4">
                {portfolioConfig.languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="neo-card flex items-center justify-between"
                  >
                    <h3 className="font-black text-sm uppercase">{lang.language}</h3>
                    <span className="neo-border rounded bg-foreground text-background px-3 py-1 text-xs font-black">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="neo-border rounded-lg bg-neo-pink p-2">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black uppercase">Tools</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioConfig.programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="neo-border rounded-lg bg-card p-3 neo-shadow-sm flex items-center gap-2"
                    >
                      <span className="text-sm font-black">{program.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
