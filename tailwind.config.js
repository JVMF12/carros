/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': "#E28625",
      "green": "#006971",
      "dark-green": "#004140",
      "off-white": "rgba(255, 255, 255, 0.75)",
      "white": "#FFF",
      "off-white-bg": "#F2F2F2"
    },

    fontFamily: {
      "shoulders": '"Big Shoulders Display',
      "lexend": '"Lexend Deca'
    }
  },
  plugins: [],
}