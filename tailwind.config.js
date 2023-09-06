/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: { min: "", max: "420px" },
        sm: { min: "421px", max: "650px" },
        md: { min: "651px", max: "1024px" },
        lg: { min: "1025px", max: "" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addComponents }) => {
      addComponents({
        ".body-6large-bold": {
          fontSize: "4.5rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        ".body-6large-semibold": {
          fontSize: "4.5rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-6large-regular": {
          fontSize: "4.5rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-4large-bold": {
          fontSize: "3rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        ".body-4large-semibold": {
          fontSize: "3rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-4large-regular": {
          fontSize: "3rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-2large-bold": {
          fontSize: "1.75rem",

          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: 1.5,
        },
        ".body-2large-semibold": {
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-2large-regular": {
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-extralarge-semibold": {
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        ".body-extralarge-medium": {
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-extralarge-regular": {
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-large-medium": {
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-large-regular": {
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-large-semibold": {
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        ".body-base-medium": {
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-base-regular": {
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
        ".body-base-semibold": {
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        ".body-small-medium": {
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: 1.5,
        },
        ".body-small-regular": {
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: 1.5,
        },
      });
    }),
  ],
};
