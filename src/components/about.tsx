"use client";
import { portfolioConfig } from "@/data/portfolio";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function About() {
  const { lang, langCode } = useLang();

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-orange p-2">
              <User className="h-6 w-6 text-foreground" />
            </div>
            <h2 className="text-4xl font-black uppercase">
              {langCode === "fr" ? "À propos" : "About Me"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neo-card">
              <p className="text-lg leading-relaxed">{lang.bio}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="neo-border rounded px-2 py-0.5 bg-neo-accent text-sm font-bold">
                  {portfolioConfig.location}
                </span>
                <span className="neo-border rounded px-2 py-0.5 bg-neo-accent text-sm font-bold">
                  {lang.pronouns}
                </span>
              </div>
            </div>

            <div className="neo-card">
              <h3 className="text-xl font-black uppercase mb-4">
                {langCode === "fr" ? "Contacts" : "Contacts"}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold">
                  <Mail className="h-4 w-4" />
                  {portfolioConfig.contacts.email}
                </li>
                <li className="flex items-center gap-2 text-sm font-bold">
                  <Phone className="h-4 w-4" />
                  {portfolioConfig.contacts.phone}
                </li>
                <li className="flex items-center gap-2 text-sm font-bold">
                  <Github className="h-4 w-4" />
                  <a href={portfolioConfig.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm font-bold">
                  <Linkedin className="h-4 w-4" />
                  <a href={portfolioConfig.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
