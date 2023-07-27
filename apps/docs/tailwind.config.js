const { tailwindRadixPlugin } = require('tailwindcss-radix-colors-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'radix',
  theme: {
    extend: {},
  },
  plugins: [tailwindRadixPlugin(), require('@tailwindcss/typography')],
}
