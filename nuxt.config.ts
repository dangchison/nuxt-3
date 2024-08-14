// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "nuxt-delay-hydration",
    "@nuxt/image",
    "@nuxtjs/i18n",
    'dayjs-nuxt',
    "@nuxt/icon",
    "@nuxt/eslint"
  ],
  icon: {
    size: '24px',
    class: 'icon',
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },
  dayjs: {
    locales: ['en', 'vi', 'ja'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    // code and ios: https://gist.github.com/eddieoz/63d839c8a20ef508cfa4fa9562632a21
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        name: 'Vietnamese',
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi-VN.json'
      },
      {
        name: 'Japanese',
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.json'
      }
    ]
  },
  pinia: {
    storesDirs: ['./stores/**/*.ts']
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: process.env.NODE_ENV === 'development'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Implement Structure Nuxt" },
        // Add meta
        { name: "msapplication-TileColor", content: "#fff" },
        { name: "msapplication-TileImage", content: "/meta/ms-icon-144x144.png" },
        { name: "theme-color", content: "#fff" }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Quicksand:wght@400;600&display=swap' }
      ]
    }
  },
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      domain: process.env.DOMAIN_NAME,
      siteName: process.env.SITE_NAME
    }
  }
})