import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        gray: {
          light: {
            1: "#f0f0f0",
            2: "#dbdbdb",
            3: "#aaaaaa",
            4: "#8a8a8a",
          },
          dark: {
            1: "#323133",
            2: "#242225",
            3: "#1e1b20",
            4: "#1a171e",
            5: "#120e16",
          },
        },
        fontFamily: {
          sans: "var(--font-calibre)",
          mono: "var(--font-jetbrains-mono)",
        },
      },
      backgroundImage: {
        "custom-gradient":
          'linear-gradient(120deg, transparent 0%, transparent 50%, theme("colors.blue.500") 50%)',
      },
    },
  },
  plugins: [],
};
export default config;
