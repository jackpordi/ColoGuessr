/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,jsx,ts,js,css}"
  ],
  theme: {
    fontFamily: {
      "mono": [ "Cousine", "monospace" ],
      "lobster": [ "Lobster", "cursive" ],
    },
    extend: {},
  },
  plugins: [],
}
