"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Gamepad2, Smartphone } from "lucide-react";
import { personalInfo } from "@/data";

const focuses = [
  {
    icon: Gamepad2,
    color: "bg-accent-purple/15 text-accent-purple",
    title: "Software Engineering",
    desc: "Full-stack development with a focus on clean architecture, scalability, and performance.",
  },
  {
    icon: Smartphone,
    color: "bg-accent-cyan/10 text-accent-cyan",
    title: "Android Development",
    desc: "Crafting optimized native apps with Java, Firebase, and modern Material Design.",
  },
  {
    icon: Code2,
    color: "bg-accent-green/10 text-accent-green",
    title: "Game Development",
    desc: "Building immersive experiences with Unity & C#. From 2D platformers to 3D open-world prototypes.",
  },
];

const pills = [
  "Problem Solver",
  "Clean Code Advocate",
  "Game Dev Enthusiast",
  "Android Native",
  "Open Source ❤",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6" ref={ref}>
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest">// about_me</span>
          </div>
          <h2 className="font-syne text-4xl font-extrabold leading-tight mb-5">
            Crafting Code,{" "}
            <span className="text-accent-cyan">Games</span> &amp; Apps
          </h2>
          <p className="text-text-muted font-light leading-loose mb-4">
            {personalInfo.description}
          </p>
          <p className="text-text-muted font-light leading-loose">
            I believe great software is a craft. Every line of code is a decision, and I take those decisions seriously — from architecture down to pixel-perfect UI.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {pills.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 rounded-full text-xs font-mono text-text-muted border border-[#252b3b] bg-white/[0.02]"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Focus Cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-[#161921] border border-[#1e2330] overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-px bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-green" />

          <div className="p-6 divide-y divide-[#1e2330]">
            {focuses.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-4 items-start py-4 first:pt-0 last:pb-0"
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${color}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">{title}</div>
                  <div className="text-xs text-text-muted leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
