/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'sm': '0.875rem',
      'lg':'2.156rem',

    },


    extend: {

      colors: {
        grey: '#121212',
        lilac: '#C2BFFC',
        primary : '#36364A',
        white : '#FFFFFF',
        natural: '#BEC9D5',
        darkgray:'#2E2A4D'
      }
    },
  },
  plugins: [],
}

