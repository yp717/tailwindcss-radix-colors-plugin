/**
 * Converts a valid CSS HSL or HSLA string to an object with hue, saturation, lightness and (optional) alpha values.
 * @param {string} hslString - A valid CSS HSL or HSLA string in the format 'hsl(hue, saturation%, lightness%)' or 'hsla(hue, saturation%, lightness%, alpha)'.
 * @returns {{ hue: number, saturation: number, lightness: number, alpha: number }} An object with hue, saturation, lightness and alpha values.
 */
const parseHSLAColor = (hslString) => {
  const hslRegex =
    /^hsla?\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%(?:,\s*(\d*(?:\.\d+)?))?\)$/;
  const matches = hslString.match(hslRegex);

  if (!matches) throw new Error(`Invalid CSS HSL or HSLA string: ${hslString}`);

  return {
    hue: parseFloat(matches[1]),
    saturation: parseFloat(matches[2]),
    lightness: parseFloat(matches[3]),
    // Return alpha if it exists, else return default alpha value 1
    alpha: matches[4] ? parseFloat(matches[4]) : 1,
  };
};

module.exports = parseHSLAColor;
