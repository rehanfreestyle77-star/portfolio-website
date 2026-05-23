"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personalInfo, typingPhrases } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const typed = useTypewriter(typingPhrases);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-purple/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent-green" />
              <span className="font-mono text-xs text-accent-green tracking-widest">
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-syne font-extrabold text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] tracking-tighter mb-4"
            >
              Building
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Experiences
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              {...fadeUp(0.3)}
              className="font-mono text-base text-text-muted min-h-[1.5rem] mb-6"
            >
              {typed}
              <span className="inline-block w-0.5 h-[1em] bg-accent-cyan ml-0.5 align-text-bottom animate-blink" />
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-text-muted font-light leading-relaxed max-w-xl mb-8 text-base"
            >
              {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold text-sm glow-purple hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#252b3b] text-text font-medium text-sm hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
              >
                <Download size={16} /> Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex gap-8 mt-10 pt-8 border-t border-[#1e2330]"
            >
              {personalInfo.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-syne text-2xl font-extrabold text-gradient-blue">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-text-dim mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block animate-float"
          >
            <div className="relative w-56 h-72 rounded-2xl bg-gradient-to-br from-[#161921] to-[#13161e] border border-[#252b3b] p-5 overflow-hidden">
              {/* Top glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent-purple/30 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-accent-cyan/20 blur-xl" />

              {/* Avatar */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-xl font-syne font-extrabold mb-3">
                ⚡
              </div>

              <div className="relative z-10">
                <div className="font-syne font-bold text-sm mb-0.5">{personalInfo.name}</div>
                <div className="font-mono text-xs text-text-muted mb-4">
                  Software · Game · Android
                </div>

                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "// Software Engineer", color: "border-accent-cyan/30 text-accent-cyan" },
                    { label: "// Unity Developer", color: "border-accent-purple/30 text-accent-purple" },
                    { label: "// Android Dev", color: "border-accent-green/30 text-accent-green" },
                    { label: "Open to Work ✦", color: "border-[#252b3b] text-text-muted" },
                  ].map((tag) => (
                    <div
                      key={tag.label}
                      className={`font-mono text-[0.6rem] px-2 py-1 rounded border bg-white/[0.02] ${tag.color}`}
                    >
                      {tag.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
