# tailwindcss-radix-colors-plugin

![GitHub](https://img.shields.io/github/license/yp717/tailwindcss-radix-colors-plugin)
![npm](https://img.shields.io/npm/v/tailwindcss-radix-colors-plugin)

## Overview

Welcome to the world of superior color control with our Radix Colors for Tailwind CSS plugin. Designed to seamlessly enhance your Tailwind CSS projects, this plugin effortlessly incorporates the dynamic Radix color palette into your design workflow. Simplify your color management process while maintaining design consistency across your projects.

This Radix Colors for Tailwind CSS plugin operates in conjunction with your Tailwind CSS configuration. By extending your Tailwind CSS theme colors with the Radix palette, it allows you to use Radix colors directly in your Tailwind utility classes. Simply install the plugin, update your Tailwind configuration, and start creating stunning designs with enhanced color control.

## Key Features

`tailwindcss-radix-colors-plugin` introduces the following standout features:

- _Seamless Integration_: The plugin works effortlessly with Tailwind CSS, allowing you to take advantage of the Radix color palette without any disruption to your workflow.
- _Dynamic Color Management_: Manage your colors efficiently with this plugin. It maintains the consistency of your design while also providing a rich color palette for your projects.
- _Accessibility_: Colors are WCAG-compliant, ensuring your designs are accessible to a wide range of users, including those with visual impairments.
- _Customization_: The plugin is highly customizable, allowing you to tailor the palette to your specific needs
- _Dark Mode OOTB_: The plugin supports dark mode out of the box, allowing you to easily switch between light and dark mode. But, when you want to deviate from Radix's automatic inversions, you can still access the variables you need not to limit your creativity or your design freedom!

## How it works

### Prerequisites

Before using tailwindcss-radix-colors-plugin, ensure you meet the following prerequisites:

- You're using Node.js version 12 or newer.
- Your project uses Tailwind CSS 2.0 or newer.
- Your project is set up to process CSS with PostCSS. If you're using a tool like Create React App, Next.js, or Gatsby, you're already set.

### Installation

Install tailwindcss-radix-colors-plugin with npm:

```{bash}
npm install tailwindcss-radix-colors-plugin
```

### Basic Usage

In your Tailwind CSS configuration file (tailwind.config.js), import the plugin and add it to your configuration:

```{bash}
const { tailwindRadixPlugin } = require('tailwindcss-radix-colors-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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

After adding the plugin to your configuration, your Tailwind CSS utility classes will have access to Radix color palette. You can use these classes like any other utility classes provided by Tailwind CSS:

```{bash}
<div className="text-crimson-500 bg-indigo-1000">
  <!-- your content -->
</div>
```

## Project Stack 🥞

- [Radix Color Palette](https://www.radix-ui.com/colors) - A color palette for UI design
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [Turborepo](https://turbo.build/repo/docs/) - A tool for building and managing monorepos
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io) - An opinionated code formatter
- [npm](https://www.npmjs.com/) - The package manager for the Node.js platform
- [changesets](https://github.com/changesets/changesets) - A way to manage your versioning and changelogs with a focus on monorepos

### Inside the monorepo 🏎️?

This Turborepo includes the following packages/apps:

- `docs`: The documentation site for `tailwindcss-radix-colors-plugin`, built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `example apps`: Example apps built with `tailwindcss-radix-colors-plugin` and different frameworks (Coming Soon!)
