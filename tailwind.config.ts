import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        body: ["Outfit", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0c10",
          2: "#0f1117",
          3: "#13161e",
          card: "#161921",
        },
        border: {
          DEFAULT: "#1e2330",
          2: "#252b3b",
        },
        accent: {
          cyan: "#00d9ff",
          purple: "#7c5cfc",
          green: "#00ffa3",
        },
        text: {
          DEFAULT: "#e8eaf2",
          muted: "#8890a8",
          dim: "#555e78",
        },
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #7c5cfc 0%, #00d9ff 50%, #00ffa3 100%)",
        "gradient-purple": "linear-gradient(135deg, #7c5cfc, #00d9ff)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
