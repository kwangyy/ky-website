import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          2: "var(--line-2)",
        },
        accent: "var(--accent)",
        ok: "var(--ok)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Helvetica Neue", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.719rem", { lineHeight: "1.4", letterSpacing: "0.09em" }],
        meta: ["0.844rem", { lineHeight: "1.5" }],
        body: ["1.063rem", { lineHeight: "1.55" }],
        lede: ["1.188rem", { lineHeight: "1.62", letterSpacing: "-0.008em" }],
        card: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        section: ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        shell: "1120px",
        measure: "640px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        fadeUp: "fadeUp 900ms cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
