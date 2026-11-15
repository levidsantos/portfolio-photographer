import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Arthur Valença
        "off-white": "#F8F6F1",
        sand: "#EAE5DC",
        taupe: "#C7BBA9",
        olive: "#827969",
        graphite: "#292824",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-big-shoulders)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
