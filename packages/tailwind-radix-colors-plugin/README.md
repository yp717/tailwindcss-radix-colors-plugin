# tailwindcss-radix-colors-plugin

## Introduction

`tailwindcss-radix-colors-plugin` is a plugin for [Tailwind CSS](https://tailwindcss.com/) that adds the [Radix UI Color Palette](https://www.radix-ui.com/colors) to your Tailwind CSS configuration. This plugin allows you to use Radix colors directly in your Tailwind utility classes, making color management effortless and consistent across your projects.

## Key Features

Some of the key features `tailwindcss-radix-colors-plugin` offers include:

- _Seamless Integration_: The plugin works effortlessly with Tailwind CSS, allowing you to take advantage of the Radix color palette without any disruption to your workflow.
- _Dynamic Color Management_: Manage your colors efficiently with this plugin. It maintains the consistency of your design while also providing a rich color palette for your projects.
- _Accessibility_: Colors are WCAG-compliant, ensuring your designs are accessible to a wide range of users, including those with visual impairments.
- _Customization_: The plugin is highly customizable, allowing you to tailor the palette to your specific needs
- _Dark Mode OOTB_: The plugin supports dark mode out of the box, allowing you to easily switch between light and dark mode. But, when you want to deviate from Radix's automatic inversions, you can still access the variables you need not to limit your creativity or your design freedom!

## Get Started

### Prerequisites

To use the Tailwind CSS Radix Colors plugin, ensure:

- You're using Node.js version 12 or newer.
- Your project uses Tailwind CSS 2.0 or newer.
- Your project processes CSS with PostCSS (true for tools like Create React App, Next.js, or Gatsby).

### Installation

Install the plugin with npm:

```{bash}
npm install tailwindcss-radix-colors-plugin
```

### Basic Usage

To use the plugin, import it in your Tailwind CSS configuration file (tailwind.config.js) and add it to your configuration:

```{bash}
const { tailwindRadixPlugin } = require('tailwindcss-radix-colors-plugin')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
    content: ['./src/**/\*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        // your theme configuration
    },
    variants: {
        // your variants configuration
    },
    plugins: [
        tailwindRadixPlugin(),
        // your other plugins
    ],
}
```

Your Tailwind CSS utility classes now have access to the Radix color palette. You can use these classes just like any other utility classes provided by Tailwind CSS:

```{bash}
<div className="text-crimson-500 bg-indigo-1000">
  <!-- your content -->
</div>
```

### Advanced Usage

#### Tailwind Dark Mode: Class vs Media

Tailwind CSS provides two strategies for dark mode: 'class' and 'media'. The 'media' strategy uses the CSS prefers-color-scheme media feature to automatically switch based on the user's system preferences:

```{javascript}
module.exports = {
    darkMode: 'media',
    // ...
}
```

The 'class' strategy allows manual dark mode toggling. Dark variants are applied whenever the 'dark' class is present on the html element:

```{javascript}
module.exports = {
    darkMode: 'class',
    // ...
}
```

For more details, refer to the official [Tailwind CSS documentation](https://tailwindcss.com/).

#### Including Specific Colors

If you prefer to include specific colors from the Radix palette, pass an options object to the plugin function:

```{javascript}
plugins: [
    tailwindRadixPlugin({
        colors: ['red', 'blue', 'green'],
    }),
    // ...
],
```

### Excluding Specific Colors

Although not generally recommended, you may exclude specific colors, variants, or weights to reduce your CSS bundle size:

```{javascript}
plugins: [
    tailwindRadixPlugin({
        exclude: {
            colors: ['yellow'],
            variants: ['dark'],
            weights: ['500', '600'],
        },
    }),
    // ...
],
```
