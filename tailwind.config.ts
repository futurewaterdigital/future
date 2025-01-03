import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        cyan: "#00FFF3",
      },
      screens: {
        hd: { raw: "(min-width: 768px)" },
      },
      animation: {
        "spin-slow": "spin 70s linear infinite", // You can adjust the duration (10s) to make it slower or faster
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
