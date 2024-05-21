import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/splashscreen.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-inner-border")],
};
export default config;
