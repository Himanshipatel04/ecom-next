import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5f0",
          100: "#ffe6d9",
          200: "#ffcbb3",
          300: "#ffa07a",
          400: "#ff7043",
          500: "#e8491d",
          600: "#c73d18",
          700: "#a33214",
          800: "#7f2710",
          900: "#5c1c0b",
        },
        navy: {
          50: "#eef1f8",
          100: "#d5dcef",
          200: "#aab8de",
          300: "#7f95cd",
          400: "#5471bc",
          500: "#1a2a6c",
          600: "#152259",
          700: "#101a46",
          800: "#0b1233",
          900: "#060920",
        },
        dark: {
          100: "#2d3561",
          200: "#232b52",
          300: "#1a2144",
          400: "#111836",
          500: "#0a1025",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0a1025 0%, #1a2a6c 50%, #0d1b3e 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(26,42,108,0.8) 0%, rgba(10,16,37,0.95) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;