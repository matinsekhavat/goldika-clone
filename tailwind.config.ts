import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
      colors: {
        dark: {
          400: "#6E7187",
          600: "#494C5A",
          700: "#373943",
          900: "#2A2C34",
        },
      },
    },
  },
  plugins: [],
};
export default config;
