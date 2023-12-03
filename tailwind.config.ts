import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-top":
          "slide-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in-fwd":
          "fade-in-fwd 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s  both",
        "fade-in-fwd-2":
          "fade-in-fwd 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s  both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(20px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
