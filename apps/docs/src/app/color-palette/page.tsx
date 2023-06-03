import { NextPage } from 'next'

import ColorPalette from '../../components/palette/ColorPalette'

const ColorPalettePage: NextPage = () => {
  return (
    <div className="h-full">
      <p className="text-gray-1200">Color Palette</p>
      <ColorPalette />
    </div>
  )
}

export default ColorPalettePage
