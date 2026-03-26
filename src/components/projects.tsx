"use client";
import { portfolioConfig } from "@/data/portfolio";
import { useLang } from "@/lib/lang-context";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ChevronDown, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  status: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["bg-neo-blue", "bg-neo-pink", "bg-neo-yellow", "bg-neo-green", "bg-neo-orange"];
  const color = colors[index % colors.length];

  const staticData = portfolioConfig.projects[index];

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
            <span className="text-xs font-bold text-foreground">{project.status}</span>
          </div>
          <h3 className="text-xl font-black uppercase">{project.title}</h3>
          <p className="text-sm font-bold text-muted-foreground">{project.description}</p>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
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
              <div className="flex flex-wrap gap-2 mb-4">
                {staticData?.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md font-mono border border-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                {staticData?.github && (
                  <a href={staticData.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-bold hover:underline">
                    <Github size={16} />GitHub
                  </a>
                )}
                {staticData?.demo && (
                  <a href={staticData.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-bold hover:underline">
                    <ExternalLink size={16} />Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const { lang, langCode } = useLang();

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-blue p-2">
              <FolderGit2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-black uppercase">
              {langCode === "fr" ? "Projets" : "Projects"}
            </h2>
          </div>
          <div className="grid gap-6">
            {lang.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
