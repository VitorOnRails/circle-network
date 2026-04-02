/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2E201C",
        red: "#841207",
        yellow: "#FFEAAE",
        orange: "#F6820C",
      }
    },
  },
  plugins: [],
}