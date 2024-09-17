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
          newColor: "#08a3eb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
