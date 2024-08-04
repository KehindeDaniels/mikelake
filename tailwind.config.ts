import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        worksans: ["var(--font-work-sans)", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          300: "#d1d5db",
          600: "#f9fafb",
          900: "#f9fafb",
          1000: "#111827",
          blur: "#154EEA",
          glassmorphism: "rgba(255, 255, 255, 0.8)",
          textGradient:
            "linear-gradient(90deg, #9845EB 0%, #33D2FF 55%, #DD5798 100%)",
        },
        light: {
          DEFAULT: "#030712",
          cardBackground: "#080E1F",
          50: "#111827",
          100: "#1f2937",
          300: "#4b5563",
          600: "#4b5563",
          900: "#111827",
          1000: "#f9fafb",
          glassmorphism: "rgba(0, 0, 0, 0.8)",
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, #4E8AFF 0%, #030712 100%)",
        "gradient-linear":
          "linear-gradient(90deg, #9845EB 0%, #33D2FF 55%, #DD5798 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
