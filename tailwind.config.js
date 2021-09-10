const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Favorit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'ds-purple': '#6D44FF',
        'ds-black': '#34363E',
        'ds-grey': '#A1A1A1',
      },
      boxShadow: {
        nav: '0px 1px 0px #E0E0E0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
