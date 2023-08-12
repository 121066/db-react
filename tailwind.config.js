/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      width: {},
    },
  },
  darkMode: false,
  plugins: [],
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
};
