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
        mint: "#86D4C4",
        sky: "#A3D2F7",
        slate: {
          brand: "#3F5669",
        },
        background: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(63, 86, 105, 0.08)",
        card: "0 2px 16px -2px rgba(63, 86, 105, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
