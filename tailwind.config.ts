import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        sans: ["var(--font-source-sans-3)"],
        serif: ["var(--font-source-serif-4)"],
      },
      colors: {
        "dark-green": "#3a5134",
        "light-orange": "#f3cc86",
        "secondary-light-orange": "#f2bb7b",
        beige: "#fefae7",
        mud: "#7e7d74",
        "primary-orange": "#E98300",
        "primary-bg": "#D5D5D4",
        "secondary-bg": "#D9D9D9",
        "primary-green": "#56876D",
      },
    },
  },
  plugins: [],
};
export default config;
