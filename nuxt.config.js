export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: 'ipfs-404.html',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IPFS Powers the Distributed Web',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/index.css',
    '~/assets/css/layout.css',
    '~/assets/css/typography.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/countly-analytics'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@/modules/https',
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    [
      'nuxt-mq',
      {
        breakpoints: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1440 },
      },
    ],
    '@nuxtjs/speedcurve',
    '~/modules/nuxt-module-ipfs',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  svgSprite: {
    input: '~/assets/svgs/',
  },

  publicRuntimeConfig: {
    // Speedcurve config
    lux: {
      id: process.env.SPEEDCURVE_ID || '',
    },
    countly: {
      key: process.env.COUNTLY_KEY || '',
      domain: process.env.DEPLOY_DOMAIN || '',
      events: {
        LINK_CLICK_NAV: 'linkClickNav',
        LINK_CLICK_FOOTER: 'linkClickFooter',
        SOCIAL_MEDIA_OUTBOUNDS: 'socialMediaOutbounds',
        CTA_CLICK: 'ctaClick',
        NEWSLETTER_SUBSCRIBE: 'newsletterSubscribe',
        NOT_FOUND: '404NotFound',
      },
    },
  },
};
