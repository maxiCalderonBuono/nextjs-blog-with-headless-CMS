const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        toggle: "toggle 3s ease-in-out",
      },
      keyframes: {
        toggle: {
          "0%": { transform: "rotate(0deg)", opacity: "100%" },
          "100%": { transform: "rotate(100deg)", opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
