"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="pb-28 max-w-6xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="font-mono text-xs text-accent-cyan tracking-widest mb-2">// journey</div>
        <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-3">Experience</h2>
        <p className="text-text-muted font-light">My path in software, games, and mobile development.</p>
      </motion.div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative pb-10 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute -left-[1.9rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-purple bg-[#0a0c10] shadow-[0_0_12px_rgba(124,92,252,0.5)]" />

            <div className="font-mono text-xs text-accent-cyan mb-1">{item.date}</div>
            <h3 className="font-syne font-bold text-base mb-0.5">{item.title}</h3>
            <div className="text-sm text-accent-purple mb-2">{item.org}</div>
            <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
