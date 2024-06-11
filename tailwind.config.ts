import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "solana-purple": "#9945FF",
        "solana-green": "#14F195",
      },
      fontFamily: {
        custom: ["custom-font", "sans-serif"], // Replace 'CustomFontName' with the actual font name
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#14F195",
          accent: "#9945FF",
        },
      },
    ],
  },
};
export default config;
