const radix = require("./src/colors");
const plugin = require("tailwindcss/plugin");
const parseHSLAColor = require("./parseHSLAColor");

const tailwindRadixPlugin = plugin.withOptions(
  ({ colors = radix, rootSelector = ":root" } = {}) => {
    let rootColors = {};
    let darkModeColors = {};
    const themeColors = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      const colorMap = colorName.includes("Dark") ? darkModeColors : rootColors;
      const themeColor = {};

      for (const [weight, value] of Object.entries(colorObj)) {
        const { hue, saturation, lightness, alpha } = parseHSLAColor(value);

        // Create the CSS variable
        const cssVarName = `--${colorName}-${weight}`;
        colorMap[
          cssVarName
        ] = `hsl(${hue}deg ${saturation}% ${lightness}% / ${alpha})`;

        // Create the color in the Tailwind theme
        const scale = weight.replace(colorName, "");
        themeColor[scale] = `var(${cssVarName})`;
      }

      themeColors[colorName] = themeColor;
    }

    return ({ addBase, config }) => {
      const [darkMode, className = ".dark"] = [].concat(
        config("darkMode", "media")
      );

      if (darkMode === "class") {
        addBase({
          [rootSelector]: rootColors,
          [className]: darkModeColors,
        });
      } else {
        addBase({
          [rootSelector]: rootColors,
          "@media (prefers-color-scheme: dark)": {
            [rootSelector]: darkModeColors,
          },
        });
      }
    };
  },
  ({ colors = radix } = {}) => {
    const themeColors = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      if (colorName.includes("Dark")) {
        continue;
      }

      const themeColor = {};
      for (const key of Object.keys(colorObj)) {
        const scale = key.replace(colorName, "");
        themeColor[scale] = `var(--${colorName}-${scale})`;
      }

      themeColors[colorName] = themeColor;
    }

    return {
      theme: {
        extend: {
          colors: themeColors,
        },
      },
    };
  }
);

module.exports = tailwindRadixPlugin;
