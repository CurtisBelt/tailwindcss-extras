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

test('utilities are generated', () => {
  return generatePluginCss().then((css) => {
    expect(css).toMatchCss(`
      .aspect-ratio-square {
        padding-top: 100%
      }

      .aspect-ratio-16x9 {
        padding-top: 56.2%
      }

      .aspect-ratio-21x9 {
        padding-top: 42.8%
      }

      .aspect-ratio-4x3 {
        padding-top: 75%
      }

      .aspect-ratio-2x3 {
        padding-top: 150%
      }

      .hover\\:aspect-ratio-square:hover {
        padding-top: 100%
      }

      .hover\\:aspect-ratio-16x9:hover {
        padding-top: 56.2%
      }

      .hover\\:aspect-ratio-21x9:hover {
        padding-top: 42.8%
      }

      .hover\\:aspect-ratio-4x3:hover {
        padding-top: 75%
      }

      .hover\\:aspect-ratio-2x3:hover {
        padding-top: 150%
      }

      @media (min-width: 640px) {
        .sm\\:aspect-ratio-square {
          padding-top: 100%
        }

        .sm\\:aspect-ratio-16x9 {
          padding-top: 56.2%
        }

        .sm\\:aspect-ratio-21x9 {
          padding-top: 42.8%
        }

        .sm\\:aspect-ratio-4x3 {
          padding-top: 75%
        }

        .sm\\:aspect-ratio-2x3 {
          padding-top: 150%
        }

        .sm\\:hover\\:aspect-ratio-square:hover {
          padding-top: 100%
        }

        .sm\\:hover\\:aspect-ratio-16x9:hover {
          padding-top: 56.2%
        }

        .sm\\:hover\\:aspect-ratio-21x9:hover {
          padding-top: 42.8%
        }

        .sm\\:hover\\:aspect-ratio-4x3:hover {
          padding-top: 75%
        }

        .sm\\:hover\\:aspect-ratio-2x3:hover {
          padding-top: 150%
        }
      }
    `)
  })
})
