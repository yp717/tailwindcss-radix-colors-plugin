import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import { tailwindRadixPlugin } from 'tailwindcss-radix-colors-plugin'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [tailwindRadixPlugin(), typographyPlugin()],
} satisfies Config
