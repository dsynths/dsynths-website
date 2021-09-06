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
        purple: '#6D44FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
