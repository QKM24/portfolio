"use client";

import { portfolioConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { MapPin, AtSign, Phone, Mail, User, Github, Linkedin } from "lucide-react";

export function About() {
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
            <div className="neo-border rounded-lg bg-neo-blue p-2">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-black uppercase">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 neo-card">
              <p className="text-lg leading-relaxed">
                {portfolioConfig.bio}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="neo-card bg-neo-accent">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-bold text-sm">{portfolioConfig.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-foreground text-background px-2 py-0.5 rounded">
                      {portfolioConfig.pronouns}
                    </span>
                  </div>
                </div>
              </div>

              <div className="neo-card">
                <h3 className="font-black text-sm uppercase mb-3">Contacts</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm font-medium break-all">
                      {portfolioConfig.contacts.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {portfolioConfig.contacts.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AtSign className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {portfolioConfig.contacts.social}
                    </span>
                  </div>
                  <a
                    href={portfolioConfig.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-neo-blue transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={portfolioConfig.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-neo-blue transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
