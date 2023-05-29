// @ts-nocheck
const radix = require('./src/colors')
const plugin = require('tailwindcss/plugin')
const parseHSLAColor = require('./parseHSLAColor')

const tailwindRadixPlugin = plugin.withOptions(
  ({ colors = radix, rootSelector = ':root' } = {}) => {
    let rootColors = {}
    let darkModeColors = {}

    for (const [colorName, colorObj] of Object.entries(colors)) {
      for (const [weight, value] of Object.entries(colorObj)) {
        const { hue, saturation, lightness, alpha } = parseHSLAColor(value)

        // Create the CSS variable
        const cssVarName = `--${colorName}-${weight}`
        rootColors[
          cssVarName
        ] = `hsl(${hue}deg ${saturation}% ${lightness}% / ${alpha})`

        // Create color switching variables
        if (colorName.includes('Dark')) {
          // For Dark variant, create a CSS variable that will switch to it in dark mode
          const cssVarNameSwitch = `--${colorName.replace(
            'Dark',
            '',
          )}-${weight}`
          darkModeColors[cssVarNameSwitch] = `var(--${colorName}-${weight})`
        } else if (colorName.includes('Light')) {
          // For Light variant, create a CSS variable that will switch to it in light mode
          const cssVarNameSwitch = `--${colorName.replace(
            'Light',
            '',
          )}-${weight}`
          rootColors[cssVarNameSwitch] = `var(--${colorName}-${weight})`
        }
      }
    }

    return ({ addBase, config }) => {
      const [darkMode, className = '.dark'] = [].concat(
        config('darkMode', 'media'),
      )

      if (darkMode === 'class') {
        addBase({
          [rootSelector]: rootColors,
          [className]: darkModeColors,
        })
      } else {
        addBase({
          [rootSelector]: rootColors,
          '@media (prefers-color-scheme: dark)': {
            [rootSelector]: darkModeColors,
          },
        })
      }
    }
  },
  () => {
    const colors = [
      'amber',
      'blue',
      'bronze',
      'brown',
      'crimson',
      'cyan',
      'gold',
      'grass',
      'gray',
      'green',
      'indigo',
      'lime',
      'mauve',
      'mint',
      'olive',
      'orange',
      'pink',
      'plum',
      'primary',
      'purple',
      'red',
      'sage',
      'sand',
      'sky',
      'slate',
      'teal',
      'tomato',
      'violet',
      'yellow',
    ]

    const variants = ['', 'A', 'Light', 'LightA', 'Dark', 'DarkA']
    const themeColors = {}

    for (const color of colors) {
      for (const variant of variants) {
        const colorVariant = `${color}${variant}`
        const themeColor = {
          100: `var(--${colorVariant}-100)`,
          200: `var(--${colorVariant}-200)`,
          300: `var(--${colorVariant}-300)`,
          400: `var(--${colorVariant}-400)`,
          500: `var(--${colorVariant}-500)`,
          600: `var(--${colorVariant}-600)`,
          700: `var(--${colorVariant}-700)`,
          800: `var(--${colorVariant}-800)`,
          900: `var(--${colorVariant}-900)`,
          1000: `var(--${colorVariant}-1000)`,
          1100: `var(--${colorVariant}-1100)`,
          1200: `var(--${colorVariant}-1200)`,
        }

        themeColors[colorVariant] = themeColor
      }
    }

    return {
      theme: {
        extend: {
          colors: themeColors,
        },
      },
    }
  },
)

export default tailwindRadixPlugin
