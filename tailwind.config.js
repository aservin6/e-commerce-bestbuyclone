/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      lightGray: "#f0f2f4",
      bestBuyBlue: "#0A4ABF",
      bestBuyYellow: "#FFED31",
      dark: "#1C252C",
      errorRed: "#b91c1c",
      darkYellow: "#ffe000",
      orderSuccess: "#22c55e"
    },
    fontFamily: {
      primary: ["Open Sans", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
