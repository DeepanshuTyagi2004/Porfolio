/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'heading': ["Outfit", "sans-serif"],
      'signature': ["Alex Brush", "cursive"],
      'sub-text': ["Borel", "cursive"],
    },
    extend: {},
  },
  plugins: [],
}

