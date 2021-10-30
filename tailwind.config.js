const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        heading: {
            title: "#b7b7a4"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}