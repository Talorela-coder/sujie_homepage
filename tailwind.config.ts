import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6efe2",
        ink: "#221f1a",
        muted: "#756d61",
        rule: "#d9cab5",
        accent: "#843f2f"
      },
      fontFamily: {
        serif: [
          "Georgia",
          "Times New Roman",
          "Songti SC",
          "STSong",
          "SimSun",
          "serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
