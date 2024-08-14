# Nuxt 3 Core

## Required
 - [Node](https://nodejs.org/en): 20.16.0 or LTS
 - [Pnpm](https://pnpm.io/): 9.7.0

## Library
 - [SASS](https://sass-lang.com/)
 - [JS-Cookie](https://www.npmjs.com/package/js-cookie)

## Modules
 - [Eslint](https://nuxt.com/modules/eslint)
 - [Tailwindcss](https://nuxt.com/modules/tailwindcss)
 - [Pinia](https://nuxt.com/modules/pinia)
 - [Delay Hydration | Performance](https://nuxt.com/modules/delay-hydration)
 - [Image](https://nuxt.com/modules/image)
 - [I18n](https://nuxt.com/modules/i18n)
 - [Day.js](https://nuxt.com/modules/dayjs)
 - [Icon](https://nuxt.com/modules/icon)
   - [Icon Data](https://icon-sets.iconify.design/)
   - Use two package icon: [uil](https://icon-sets.iconify.design/uil/) and [mdi](https://icon-sets.iconify.design/mdi/)

## Stylistic / Formatting
 - [Prettier](https://prettier.io/)

## Setup
Install [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script). It helps you switch between Node versions smoothly without affecting about old version.
```bash
# node
nvm install 20.16.0
nvm use 20.16.0
nvm alias default 20.16.0

# pnpm 
npm i -g pnpm
```

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Change the keys in the file: `enums/app.enum.ts`
```bash
enum APP_STORAGE_KEY {
  TOKEN_NAME = 'app-token-name',
  CURRENT_USER = 'app-current-user'
}
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
