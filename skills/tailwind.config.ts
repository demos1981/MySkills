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
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: {
          baseOneLight: "#dfdfdf",
          baseOneDark: "#1d1e20",
          baseTextColorGrey: "#545864",
          baseHeaderColor: "#313441",
          baseHeaderTextColor: "#c850c0",
          newColor: "#08a3eb",
          bgHomePage: "#12071f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
