"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="pb-28 max-w-6xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="font-mono text-xs text-accent-cyan tracking-widest mb-2">
          // featured_work
        </div>
        <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-3">Projects</h2>
        <p className="text-text-muted font-light">Things I've built — from prototype to production.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#161921] border border-[#1e2330] rounded-2xl overflow-hidden hover:border-[#252b3b] hover:-translate-y-1 transition-all duration-300"
            style={{ boxShadow: "0 0 0 transparent" }}
            whileHover={{ boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
          >
            <div className="px-5 pt-5 flex items-start justify-between gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: project.iconBg }}
              >
                {project.icon}
              </div>
              <span className="font-mono text-xs text-text-dim">{project.number}</span>
            </div>

            <div className="p-5">
              <h3 className="font-syne font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] font-mono px-2 py-1 rounded bg-accent-purple/10 border border-accent-purple/20 text-accent-purple"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#252b3b] text-text-muted text-xs font-mono hover:border-text hover:text-text transition-all duration-200"
                >
                  <Github size={13} /> View Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-xs font-mono hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
