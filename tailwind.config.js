/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        opensans: ['Open Sans'],
      },
    },
  },
  plugins: [],
}

