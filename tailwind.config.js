/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0B4B31",
      secondary: "#59B791",
      tertiary: "#ABE4CD",
      black: "#020418",
      white: "#ffffff",
      softwhite: "#DCDDE1",
      warning: "#c0ab60",
      error: "#c06060",
    },
    screens: {
      xs: { min: "", max: "420px" },
      sm: { min: "421px", max: "650px" },
      md: { min: "651px", max: "1024px" },
      lg: { min: "1025px", max: "" },
    },
  },
  plugins: [],
};
