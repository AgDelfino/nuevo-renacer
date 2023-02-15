/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#f1b9b2",
        "accent#1": "#544c41",
        "accent#2": "#c85346"
      },
      width: {
        "main": "min(1160px, 95%)"
      },
      fontFamily: {
        "barieta": "Barieta",
        "p": "Open Sans, sans-serif"
      }
    },
  },
  plugins: [],
}