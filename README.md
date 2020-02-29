# Tailwind CSS Extras

[![npm](https://img.shields.io/npm/v/@curtisbelt/tailwindcss-extras.svg)](https://www.npmjs.com/package/@curtisbelt/tailwindcss-extras)
[![tests](https://travis-ci.org/curtisbelt/tailwindcss-extras.svg?branch=master)](https://travis-ci.org/curtisbelt/tailwindcss-extras)

## Installation

```bash
yarn add -D @curtisbelt/tailwindcss-extras
```

or

```bash
npm install @curtisbelt/tailwindcss-extras --save-dev
```


## Usage

```js
// tailwind.config.js
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {},
  variants: {},
  plugins: [
    require('@curtisbelt/tailwindcss-extras')
  ]
}
```

This plugin generates the following utilities:

**Aspect Ratio**

```css
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
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
