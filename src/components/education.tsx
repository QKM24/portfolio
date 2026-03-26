"use client";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  const { lang, langCode } = useLang();

  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-yellow p-2">
              <GraduationCap className="h-6 w-6 text-foreground" />
            </div>
            <h2 className="text-4xl font-black uppercase">
              {langCode === "fr" ? "Formation" : "Education"}
            </h2>
          </div>
          <div className="grid gap-6">
            {lang.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="neo-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="neo-border inline-block rounded px-2 py-0.5 bg-neo-yellow mb-2">
                      <span className="text-xs font-bold text-foreground">
                        {edu.startDate} — {edu.endDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase">{edu.degree}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-black uppercase mb-6">
              {langCode === "fr" ? "Certifications" : "Courses"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lang.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="neo-card"
                >
                  <p className="font-black uppercase text-sm">{course.name}</p>
                  <p className="text-xs font-bold text-muted-foreground mt-1">{course.provider} — {course.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-black uppercase mb-6">
              {langCode === "fr" ? "Langues" : "Languages"}
            </h3>
            <div className="flex gap-4 flex-wrap">
              {lang.languages.map((l, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="neo-card flex items-center gap-3"
                >
                  <span className="font-black uppercase">{l.language}</span>
                  <div className="neo-border rounded px-2 py-0.5 bg-neo-green">
                    <span className="text-xs font-bold">{l.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
