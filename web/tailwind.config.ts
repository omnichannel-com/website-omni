import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ---------- Brand colors ---------- */
      colors: {
        "ocx-dark-blue": {
          DEFAULT: "#1b1464",
          90: "#2a2280",
        },
        "ocx-mauve": "#aa42dc",
        "ocx-bright-blue": "#0071bc",
        "ocx-mid-grey": "#575757",
        "ocx-black": "#000000",
        "ocx-white": "#ffffff",
        "ocx-grey": {
          50: "#f6f6f8",
          100: "#ececf1",
          200: "#d8d8e0",
          300: "#b8b8c4",
          400: "#8a8a96",
          700: "#3a3a48",
          900: "#14141c",
        },
        ocx: {
          bg: "var(--bg)",
          "bg-subtle": "var(--bg-subtle)",
          "bg-muted": "var(--bg-muted)",
          "bg-inverse": "var(--bg-inverse)",
          fg: "var(--fg)",
          "fg-muted": "var(--fg-muted)",
          "fg-subtle": "var(--fg-subtle)",
          "fg-inverse": "var(--fg-inverse)",
          "fg-link": "var(--fg-link)",
          "fg-accent": "var(--fg-accent)",
          "fg-primary": "var(--fg-primary)",
          border: "var(--border)",
          "border-strong": "var(--border-strong)",
        },
      },

      /* ---------- Typography ---------- */
      fontFamily: {
        display: ['"Overpass"', '"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ['"Cormorant"', '"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Oxygen"', '"Helvetica Neue"', "Arial", "sans-serif"],
        mono: ['ui-monospace', '"SF Mono"', "Menlo", "Consolas", "monospace"],
      },

      fontSize: {
        "ocx-xs": ["12px", { lineHeight: "1.55" }],
        "ocx-sm": ["14px", { lineHeight: "1.55" }],
        "ocx-base": ["16px", { lineHeight: "1.55" }],
        "ocx-md": ["18px", { lineHeight: "1.55" }],
        "ocx-lg": ["22px", { lineHeight: "1.55" }],
        "ocx-xl": ["28px", { lineHeight: "1.2" }],
        "ocx-2xl": ["36px", { lineHeight: "1.2" }],
        "ocx-3xl": ["48px", { lineHeight: "1.05" }],
        "ocx-4xl": ["64px", { lineHeight: "1.05" }],
        "ocx-5xl": ["88px", { lineHeight: "1.05" }],
        "ocx-6xl": ["120px", { lineHeight: "1.05" }],
      },

      lineHeight: {
        "ocx-tight": "1.05",
        "ocx-snug": "1.2",
        "ocx-base": "1.55",
        "ocx-loose": "1.75",
      },

      letterSpacing: {
        "ocx-tight": "-0.02em",
        "ocx-normal": "0",
        "ocx-wide": "0.04em",
        "ocx-caps": "0.12em",
      },

      /* ---------- Spacing ---------- */
      spacing: {
        "ocx-1": "4px",
        "ocx-2": "8px",
        "ocx-3": "12px",
        "ocx-4": "16px",
        "ocx-5": "24px",
        "ocx-6": "32px",
        "ocx-7": "48px",
        "ocx-8": "64px",
        "ocx-9": "96px",
        "ocx-10": "128px",
      },

      /* ---------- Radii ---------- */
      borderRadius: {
        "ocx-sm": "4px",
        "ocx-md": "8px",
        "ocx-lg": "14px",
        "ocx-xl": "22px",
        "ocx-pill": "999px",
      },

      /* ---------- Shadows ---------- */
      boxShadow: {
        "ocx-xs": "0 1px 2px rgba(27, 20, 100, 0.06)",
        "ocx-sm": "0 2px 6px rgba(27, 20, 100, 0.08)",
        "ocx-md": "0 8px 24px rgba(27, 20, 100, 0.10)",
        "ocx-lg": "0 20px 48px rgba(27, 20, 100, 0.16)",
        "ocx-glow": "0 12px 40px rgba(170, 66, 220, 0.28)",
      },

      /* ---------- Motion ---------- */
      transitionDuration: {
        "ocx-fast": "140ms",
        "ocx-base": "220ms",
        "ocx-slow": "380ms",
      },

      transitionTimingFunction: {
        "ocx-standard": "cubic-bezier(0.2, 0.8, 0.2, 1)",
        "ocx-emphasis": "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      /* ---------- Gradient backgrounds ---------- */
      backgroundImage: {
        "ocx-gradient": "var(--ocx-gradient)",
        "ocx-gradient-soft": "var(--ocx-gradient-soft)",
        "ocx-whisper": "var(--ocx-bg-whisper)",
        "ocx-tint": "var(--ocx-bg-tint)",
        "ocx-indigo": "var(--ocx-bg-indigo)",
        "ocx-aurora": "var(--ocx-bg-aurora)",
        "ocx-signature": "var(--ocx-bg-signature)",
      },
    },
  },
  darkMode: ['variant', '&:where([data-theme=dark], [data-theme=dark] *)'],
  plugins: [],
  safelist: [
    'dark',
  ],
};
export default config;
