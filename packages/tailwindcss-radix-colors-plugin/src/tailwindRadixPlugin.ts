import plugin from 'tailwindcss/plugin'

import { colors as radix } from './colors'
import { parseHSLAColor } from './utils'
import { PluginCreator, Config } from 'tailwindcss/types/config'

type PluginOptionsType = {
  colors?: string[]
  rootSelector?: string
}

type TailwindPluginType = {
  (options: PluginOptionsType): {
    handler: PluginCreator
    config?: Partial<Config> | undefined
  }
  __isOptionsFunction: true
}

/**
 * Tailwind plugin that generates CSS variables for all colors in the radix color palette.
 * @param options - Options for the plugin.
 * @param options.colors - An array of color names to include in the plugin. Defaults to all colors in the radix color palette.
 * @param options.rootSelector - The CSS selector to use for the root element. Defaults to `:root`.
 * @returns A Tailwind plugin.
 */
const tailwindRadixPlugin: TailwindPluginType = plugin.withOptions(
  ({
    colors = Object.keys(radix),
    rootSelector = ':root',
  }: PluginOptionsType = {}) => {
    let rootColors: Record<string, string> = {}
    let darkModeColors: Record<string, string> = {}

    // Update the colors array to automatically include 'Light' and 'Dark' variants if they exist in the radix object
    const updatedColors = colors.reduce((acc: string[], color: string) => {
      acc.push(color)
      if (radix[`${color}Light` as keyof typeof radix])
        acc.push(`${color}Light`)
      if (radix[`${color}Dark` as keyof typeof radix]) acc.push(`${color}Dark`)
      return acc
    }, [])

    // Filter out the entries in radix that are not in the provided colors array
    const filteredColors = Object.entries(radix).filter(([key]) =>
      updatedColors.includes(key),
    )

    for (const [colorName, colorObj] of filteredColors) {
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
      const [darkMode, className = '.dark'] = ([] as string[]).concat(
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
    const themeColors: Record<string, Record<number, string>> = {}

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
