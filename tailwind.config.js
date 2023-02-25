/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0567F0',
        'g-dark-blue': '#080729',
      },
      fontFamily: {
        'display': ['"Ailerons"', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('/public/bg-stars.png')",
      }
    },
    plugins: [],
  }
}
