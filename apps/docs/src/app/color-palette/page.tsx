import { NextPage } from 'next'

import ColorPalette from '../../components/palette/ColorPalette'
import Link from 'next/link'

const ColorPalettePage: NextPage = () => {
  return (
    <div className="h-full w-5xl">
      <h1 className="text-slate-1200 text-4xl font-bold">Color Palette</h1>
      <p className="text-slate-1100">
        This plugin integrates the wonderful{' '}
        <Link href="https://www.radix-ui.com/colors">
          Radix UI Color Palette{' '}
        </Link>
        , (originally by <Link href="https://workos.com/">WorkOS</Link>) with
        TailwindCSS. The Radix UI Color Palette is a set of colors that are
        designed to work harmoniously together. The colors are designed to be
        accessible and to provide a good contrast ratio. The best part is that
        the colors are designed to automatically work with dark and light mode
        through inversions. This provides designers and developers with a
        consistent color palette for light and dark themes without even having
        to manually adjust colors. All 30 colors are available in 4 variants,
        and 12 weights out of the box with this plugin. This means you have
        access to 1440 colors to choose from !
      </p>
      <p className="text-slate-1100">
        The only major difference between the original Radix UI Color Palette
        and how this palette is implemented is that we multiply the weights by
        100, so instead of using the 1-12 scale, we use the 100-1200 scale. This
        is because this is more familiar for users of TailwindCSS and other
        weighted color palettes, and its also easier on the eyes in the markup
        to spot the difference between a color and a weight.
      </p>
      <ColorPalette />
    </div>
  )
}

export default ColorPalettePage
