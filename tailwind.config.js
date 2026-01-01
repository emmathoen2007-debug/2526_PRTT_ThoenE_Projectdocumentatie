/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",      // HTML in root
    "./html/**/*.html" // HTML in submap en eventueel dieper
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
