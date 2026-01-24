import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "900": "900px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "serif-display": ['"Playfair Display"', "serif"],
        "serif-headline": ["Merriweather", "serif"],
        "sans-body": ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
