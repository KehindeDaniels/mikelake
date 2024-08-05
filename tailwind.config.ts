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
        "gradient-hero":
          "radial-gradient(100% 100% at 50% 0%, rgba(78, 138, 255, 0.20) 0%, rgba(78, 138, 255, 0.00) 100%), var(--Gray-Dark-Default, #030712);",
        "gradient-linear":
          "linear-gradient(90deg, #9845EB 0%, #33D2FF 55%, #DD5798 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text":
          "linear-gradient(89deg, #9845E8 3.33%, #33D2FF 43.52%, #DD5789 76.47%)",
        "header-dark":
          "radial-gradient(100% 100% at 50.1% 100%, rgba(78, 138, 255, 0.2) 0%, rgba(78, 138, 255, 0) 100%), #030712",
        "header-light":
          "radial-gradient(100% 100% at 50.1% 100%, rgba(5, 44, 119, 0.5) 0%, rgba(78, 138, 255, 0) 100%)",
        "mobile-header-dark": "rgba(110, 141, 210, 0.1)",
        "mobile-header-light": "var(--White, #fff)",
      },
      boxShadow: {
        "mobile-header-dark": "0px 4px 4px 0px rgba(50, 50, 71, 0.08)",
        "mobile-header-light":
          "0px 2px 2px 0px rgba(50, 50, 71, 0.06), 0px 2px 4px 0px rgba(50, 50, 71, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
