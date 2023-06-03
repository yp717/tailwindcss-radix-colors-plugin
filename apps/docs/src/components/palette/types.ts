// Weight type - an integer from 100 to 1200, stepping by 100
export type ColorWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000'
  | '1100'
  | '1200'

// Single ColorScale - an object with weights as keys and color strings as values
export type ColorScale = {
  [K in ColorWeight]: string
}

// Full ColorPalette - an object with color scale names as keys and ColorScale objects as values
export type ColorPalette = {
  [colorName: string]: ColorScale
}
