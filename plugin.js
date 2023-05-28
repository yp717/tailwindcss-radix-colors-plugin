const plugin = require("tailwindcss/plugin");

const colors = {
  grass: {
    100: "green",
  },
  "dark-grass": {
    100: "blue",
  },
  crimson: {
    100: "red",
  },
  "dark-crimson": {
    100: "darkred",
  },
};

module.exports = plugin(function ({ addUtilities, e, theme }) {
  const newUtilities = {};
  Object.entries(colors).forEach(([name, values]) => {
    Object.entries(values).forEach(([key, value]) => {
      if (name.startsWith("dark-")) {
        // For dark colors, add a utility that applies in dark mode
        const colorName = name.replace("dark-", "");
        newUtilities[`.${e(`${colorName}-${key}`)} .dark`] = { color: value };
        newUtilities[`.${e(`bg-${colorName}-${key}`)} .dark`] = {
          backgroundColor: value,
        };
        newUtilities[`.${e(`border-${colorName}-${key}`)} .dark`] = {
          borderColor: value,
        };
        newUtilities[`.${e(`text-${colorName}-${key}`)} .dark`] = {
          color: value,
        };
      } else {
        // For light colors, add a utility that applies in light mode
        newUtilities[`.${e(`${name}-${key}`)}`] = { color: value };
        newUtilities[`.${e(`bg-${name}-${key}`)}`] = { backgroundColor: value };
        newUtilities[`.${e(`border-${name}-${key}`)}`] = { borderColor: value };
        newUtilities[`.${e(`text-${name}-${key}`)}`] = { color: value };
      }
    });
  });

  addUtilities(newUtilities, ["responsive", "dark"]);
});
