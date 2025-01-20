import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        orange: {
          50: "#fff4f0",
          100: "#ffe8d9",
          200: "#ffb8a8",
          300: "#ff9584",
          400: "#ff6b55",
          500: "#FD6F00",
          600: "#ff2d00",
          700: "#cc2400",
          800: "#991b00",
          900: "#661200",
        },
        black: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b4b4b4",
          400: "#9a9a9a",
          500: "#818181",
          600: "#676767",
          700: "#515151",
          800: "#383838",
          900: "#1a1a1a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
