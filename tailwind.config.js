/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "palette-noble-black-700": "#15181b",
      "palette-pac-man-500": "#ffca5f",
      goldenrod: "#e6b045",
      "palette-noble-black-600": "#1a1d21",
      mediumpurple: "#b9a0ff",
      black: "#000",
      white: "#fff",
      "palette-pac-man-50": "#fffcf7",
      darkslategray: "#484f56",
      gainsboro: "#e7e7e7",
      gray: {
        100: "#282b30",
        200: "rgba(255, 255, 255, 0.2)",
      },
    },
    spacing: {},
    fontFamily: {
      "astrix-beta-heading-s": "Lexend",
      inter: "Inter",
    },
    borderRadius: {
      "21xl": "40px",
      "4xs": "9px",
      "81xl": "100px",
    },
  },
  fontSize: {
    "5xl": "1.5rem",
    "xs-2": "0.7rem",
    "5xs-8": "0.488rem",
    "6xs-7": "0.419rem",
    sm: "0.875rem",
    base: "1rem",
    lgi: "1.188rem",
    "38xl": "3.563rem",
    "15xl": "2.125rem",
    "27xl": "2.875rem",
    "7xl": "1.625rem",
    "2xl": "1.313rem",
    lg: "1.125rem",
    "13xl": "2rem",
    inherit: "inherit",
  },
  screens: {
    mq1125: {
      raw: "screen and (max-width: 1125px)",
    },
    mq1050: {
      raw: "screen and (max-width: 1050px)",
    },
    mq750: {
      raw: "screen and (max-width: 750px)",
    },
    mq450: {
      raw: "screen and (max-width: 450px)",
    },
  },

  plugins: [],
};
