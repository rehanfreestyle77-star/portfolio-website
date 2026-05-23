"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="pb-28 max-w-6xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="font-mono text-xs text-accent-cyan tracking-widest mb-2">
          // technical_skills
        </div>
        <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-3">My Tech Stack</h2>
        <p className="text-text-muted font-light">Technologies I use to bring ideas to life.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-[#161921] border border-[#1e2330] rounded-2xl p-5 hover:border-accent-purple/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            style={{
              boxShadow: "0 0 0 transparent",
            }}
            whileHover={{
              boxShadow: "0 8px 30px rgba(124,92,252,0.12)",
            }}
          >
            <div className="font-mono text-[0.65rem] text-accent-cyan tracking-widest uppercase mb-3">
              {skill.category}
            </div>
            <div className="font-syne font-bold text-lg mb-3">{skill.title}</div>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="text-[0.68rem] font-mono px-2 py-1 rounded border border-[#1e2330] bg-white/[0.02] text-text-muted group-hover:border-[#252b3b] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
