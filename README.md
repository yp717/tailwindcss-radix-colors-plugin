# Tailwind Radix Plugin

The package you've been looking for to use the Radix Color Palette in the most flexible way possible with TailwindCSS.

## Installation

```sh
npm install tailwind-radix-plugin
```

## Usage

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwind-radix-plugin')],
}
```

## Configuration

```js
// tailwind.config.js
TBC
```

## How is this project built? (The Stack 🥞)

- [Turborepo](https://turbo.build/repo/docs/) - A tool for building and managing monorepos
- [Radix Color Palette](https://www.radix-ui.com/colors) - A color palette for UI design
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io) - An opinionated code formatter
- [npm](https://www.npmjs.com/) - The package manager for the Node.js platform
- [changesets](https://github.com/changesets/changesets) - A way to manage your versioning and changelogs with a focus on monorepos

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: The documentation site built [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library for the `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
