"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/rehanfreestyle77-star",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/rihan-shaikh-freestyle77/",
    href: personalInfo.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mredlgpo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
    } else {
      alert("Something went wrong. Please try again!");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="pb-28 max-w-6xl mx-auto px-6" ref={ref}>
      <div className="grid md:grid-cols-2 gap-14 mt-6">
        {/* Info side */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-xs text-accent-cyan tracking-widest mb-3">// get_in_touch</div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Let's Build{" "}
            <span className="text-gradient-blue">Something</span>
          </h2>
          <p className="text-text-muted font-light leading-loose mb-8">
            Whether it's a new project, freelance opportunity, or just a chat about tech and games — my inbox is always open.
          </p>

          <div className="flex flex-col gap-3">
            {socials.map(({ icon: Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161921] border border-[#1e2330] text-text hover:border-accent-purple/50 hover:text-accent-purple transition-all duration-200 group"
              >
                <Icon size={18} className="text-text-muted group-hover:text-accent-purple transition-colors" />
                <span className="text-sm font-medium">{label}</span>
                <span className="ml-auto font-mono text-xs text-text-muted">{handle}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
              <CheckCircle2 size={48} className="text-accent-green" />
              <h3 className="font-syne text-xl font-bold">Message Sent!</h3>
              <p className="text-text-muted font-light">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 font-mono text-sm text-accent-cyan hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { id: "name",    name: "name",    label: "NAME",    type: "text",  placeholder: "Your name" },
                { id: "email",   name: "email",   label: "EMAIL",   type: "email", placeholder: "you@email.com" },
                { id: "subject", name: "subject", label: "SUBJECT", type: "text",  placeholder: "What's this about?" },
              ].map(({ id, name, label, type, placeholder }) => (
                <div key={id} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={id}
                    className="font-mono text-[0.68rem] text-accent-cyan tracking-widest"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="bg-[#161921] border border-[#1e2330] rounded-lg px-4 py-3 text-sm text-text placeholder-text-dim focus:outline-none focus:border-accent-purple/60 transition-colors"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-[0.68rem] text-accent-cyan tracking-widest"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  required
                  className="bg-[#161921] border border-[#1e2330] rounded-lg px-4 py-3 text-sm text-text placeholder-text-dim focus:outline-none focus:border-accent-purple/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-syne font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,92,252,0.35)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? "Sending..." : (<><Send size={15} /> Send Message</>)}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
