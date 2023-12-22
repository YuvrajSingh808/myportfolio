/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        bgblack: '#101010',
        primaryGreen: '#009E66',
        secondaryGrey: '#BFBEBE',
        secondaryBlack: '#161616',
        darkGrey: '#1E1E1E',
      },
    },
  },
  plugins: [],
}