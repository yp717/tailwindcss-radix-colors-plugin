const radix = require("./src/colors");
const plugin = require("tailwindcss/plugin");
const parseHSLAColor = require("./parseHSLAColor");

const tailwindRadixPlugin = plugin.withOptions(
  ({ colors = radix, rootSelector = ":root" } = {}) => {
    let rootColors = {};
    let darkModeColors = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      const colorMap = colorName.includes("Dark") ? darkModeColors : rootColors;

      for (const [weight, value] of Object.entries(colorObj)) {
        const { hue, saturation, lightness, alpha } = parseHSLAColor(value);

        // Create the CSS variable
        const cssVarName = `--${colorName}-${weight}`;
        colorMap[
          cssVarName
        ] = `hsl(${hue}deg ${saturation}% ${lightness}% / ${alpha})`;

        if (colorName.includes("Dark")) {
          // For each Dark variant, create a CSS variable that will switch to it in dark mode
          const cssVarNameSwitch = `--${colorName.replace(
            "Dark",
            ""
          )}-${weight}`;
          darkModeColors[cssVarNameSwitch] = `var(${cssVarName})`;
        } else if (colorName.includes("Light")) {
          // For each Light variant, create a CSS variable that will switch to it in light mode
          const cssVarNameSwitch = `--${colorName.replace(
            "Light",
            ""
          )}-${weight}`;
          rootColors[cssVarNameSwitch] = `var(${cssVarName})`;
        }
      }
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
