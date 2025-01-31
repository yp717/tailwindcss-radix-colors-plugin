import type { Config } from 'tailwindcss'
import { tailwindRadixPlugin } from 'tailwindcss-radix-colors-plugin'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [tailwindRadixPlugin()]
} satisfies Config
