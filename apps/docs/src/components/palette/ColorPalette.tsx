'use client'

import * as React from 'react'

import { colors } from 'tailwindcss-radix-colors-plugin'

const ColorPalette = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {JSON.stringify(colors)}
    </div>
  )
}

export default ColorPalette
