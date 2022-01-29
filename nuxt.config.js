export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/codefolio/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Codefolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Codefolio is a Jamstack portfolio web application for programmers by Ali Raza. It is built using Nuxt.js and leverages the @nuxt/content module.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '0xAliRaza, nuxt, nuxtjs, nuxt.js, jamstack, portfolio, free-template, html-template, portfolio-project, resume-template',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Ali Raza',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/codefolio/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/codefolio/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/codefolio/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/codefolio/site.webmanifest',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Sitemap module options: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    // routes: ['/test', '/test/2', '/test/3'],
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
