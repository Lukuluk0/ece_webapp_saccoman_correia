/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'olivine': '#acc18a',
          'algues-metal': '#388697',
          'violette-esp': '#4a306d',
          'vert-mousse-f':'#3f612d',
          'ombres-noires': '#cab1bd'
      }
    },
    borderWidth: {
      DEFAULT: '3px'
    },
  },
  plugins: [require ( 'tailwindcss-font-inter' ),
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms')],
}
