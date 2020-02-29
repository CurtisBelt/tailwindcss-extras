const merge = require('lodash/merge')
const cssMatcher = require('jest-matcher-css')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      merge(
        {
          theme: {
            screens: {
              sm: '640px',
            },
          },
          corePlugins: false,
          plugins: [require('../index.js')],
        },
        config
      )
    )
  )
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then((result) => {
      return result.css
    })
}

expect.extend({
  toMatchCss: cssMatcher,
})
