/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lightBlue': '#bfdbfe'
    },
    fontFamily: {
      'outputDigits': 'Chakra Petch',
      'heading': 'Nanum Pen Script',  
    },
    extend: {},
  },
  plugins: [],
}