import { personalInfo } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2330] py-8 text-center">
      <p className="font-mono text-xs text-text-dim">
        Designed & built by{" "}
        <span className="text-accent-purple">{personalInfo.name}</span>{" "}
        · {new Date().getFullYear()} ·{" "}
        <span className="text-accent-cyan">Next.js + Tailwind + Framer Motion</span>
      </p>
    </footer>
  );
}
