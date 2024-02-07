const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      smd: "1024px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1780px",
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        accent: "#F4C550",
        btnHover: "#FFDC86",
        gray: "#8A8A89",
      },
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        line: {
          "0%, 100%": { width: 0 },
          "50%": { width: "100%" },
        },
      },
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) 1",
        line: "line 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
