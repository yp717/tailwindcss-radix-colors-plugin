import { NextPage } from 'next'

import ColorPalette from '../../components/palette/ColorPalette'

const ColorPalettePage: NextPage = () => {
  return (
    <div className="h-full prose dark:prose-invert">
      <h1 className="text-gray-1200">Color Palette</h1>
      <ColorPalette />
    </div>
  )
}

export default ColorPalettePage
