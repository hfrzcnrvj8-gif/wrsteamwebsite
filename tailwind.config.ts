import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#000000",
          soft: "#0a0a0b",
          card: "#111113",
        },
        // "brand" names are kept so existing utility classes keep working,
        // but every value now maps onto the automotive red / steel palette.
        brand: {
          red: "#E60000",
          // legacy aliases → all resolve to the new accent system
          purple: "#990000", // deep red
          gold: "#8A8F98", // brushed steel
          cyan: "#E60000", // primary sporty red
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "liquid-glass":
          "linear-gradient(120deg, #FF1A1A 0%, #E60000 40%, #8A8F98 70%, #B30000 100%)",
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%,-6%,0) scale(1.08)" },
          "66%": { transform: "translate3d(-5%,4%,0) scale(0.96)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "orb-float": "orb-float 26s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
