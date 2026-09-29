import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#7ECFC7",
          dark: "#5FA8A8",
          light: "#A8E6E0",
        },
        sky: {
          brand: "#A3CDF8",
        },
        navy: {
          DEFAULT: "#35495E",
          muted: "#4A6278",
        },
        surface: "#F7FAFC",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 32px -8px rgba(53, 73, 94, 0.12)",
        card: "0 2px 12px -2px rgba(53, 73, 94, 0.08)",
        lift: "0 16px 48px -12px rgba(53, 73, 94, 0.15)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7ECFC7 0%, #A3CDF8 100%)",
        "hero-gradient":
          "linear-gradient(160deg, rgba(126, 207, 199, 0.35) 0%, rgba(163, 205, 248, 0.25) 45%, #F7FAFC 85%)",
      },
      keyframes: {
        "road-dash": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "road-dash": "road-dash 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
