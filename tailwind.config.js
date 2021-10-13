const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
        'ds-violet': '#5630DE',
        'ds-black': '#34363E',
        'ds-grey': '#A1A1A1',
        'ds-gpurple': '#4700DD',
        'ds-gblue': '#5E98EA',
      },
      boxShadow: {
        nav: '0px 1px 0px #E0E0E0',
        card: '0px 0px 10px 5px rgba(0, 0, 0, 0.05);',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          // '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }

      addUtilities(newUtilities)
    })
  ],
}
