const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  const newUtilities = {
    '.aspect-ratio-square': {
      paddingTop: '100%',
    },
    '.aspect-ratio-16x9': {
      paddingTop: '56.2%',
    },
    '.aspect-ratio-21x9': {
      paddingTop: '42.8%',
    },
    '.aspect-ratio-4x3': {
      paddingTop: '75%',
    },
    '.aspect-ratio-2x3': {
      paddingTop: '150%',
    },
  }

  addUtilities(newUtilities, {
    variants: ['responsive', 'hover'],
  })
})
