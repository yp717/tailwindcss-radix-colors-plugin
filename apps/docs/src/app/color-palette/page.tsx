import { NextPage } from 'next'

import ColorPalette from '../../components/palette/ColorPalette'
import Link from 'next/link'

const ColorPalettePage: NextPage = () => {
  return (
    <div className="h-full w-5xl">
      <h1 className="text-4xl font-bold text-slate-1200">Color Palette</h1>

      <div className="flex flex-col w-full gap-4">
        <h2>Examples</h2>

        <div className="flex flex-col w-full gap-2">
          <h3>Standard inversions with no theme pinning</h3>
          <div className="p-3 text-gray-100 bg-gray-1200">
            The background should auto invert on on gray-1200 and text should
            auto invert on gray-100
          </div>
          <div className="p-3 bg-gray-1200 text-grayLight-100">
            The background should auto invert on gray-1200 but the text should
            stay gray-light-100
          </div>
          <div className="p-3 text-gray-100 bg-grayDark-1200">
            The background should stay gray-dark-1200 but the text should invert
            on gray-100
          </div>
          <div className="p-3 bg-grayDark-100 text-grayLight-100">
            The background should stay gray-dark-100 and the text should stay
            gray-light-100
          </div>
          <div className="p-3 bg-grayDark-100 text-grayDark-1200">
            The background should stay gray-dark-100 and the text should stay
            gray-dark-1200
          </div>
          <div className="p-3 bg-gray-500 dark:bg-crimson-500 text-grayDark-1200">
            The background light color is specified with auto inversion but the
            dark color is overwritten
          </div>
          <div className="p-3 bg-grayLight-500 dark:bg-crimson-500 text-grayDark-1200 dark:text-yellow-500">
            This should be the same as the above but the text also turns yellow
            on dark
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <h3>Standard inversions with theme pinning</h3>
          <div className="p-3 pin-theme-light">
            Regardless of the classnames the color themes should be pinned to
            light in this scope
            <div className="p-3 bg-gray-1200">
              The auto inversion should fix to the light theme
            </div>
            <div className="p-3 bg-grayLight-1200">
              The light fixed variant should stay light and fixed
            </div>
            <div className="p-3 bg-grayDark-1200">
              The dark fixed variant should stay dark and fixed
            </div>
            {/* TODO: this is one to investigate */}
            <div className="p-3 bg-gray-1200 dark:bg-crimsonDark-500">
              A dark override is ignored and the light variant is used, even if
              above the scope the global theme is dark
            </div>
          </div>
          <div className="p-3 pin-theme-dark">
            Regardless of the classnames the color themes should be pinned to
            dark in this scope
            <div className="p-3 bg-gray-1200">
              The auto inversion should fix to the dark theme
            </div>
            <div className="p-3 bg-grayLight-1200">
              The light fixed variant should stay light and fixed
            </div>
            <div className="p-3 bg-grayDark-1200">
              The dark fixed variant should stay dark and fixed
            </div>
            {/* TODO: this is one to investigate */}
            <div className="p-3 light:bg-gray-1200 dark:bg-crimson-500">
              The dark variant is used even if the global scope is light
            </div>
          </div>
        </div>
      </div>

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
