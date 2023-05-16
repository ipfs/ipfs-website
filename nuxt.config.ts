// https://nuxt.com/docs/api/configuration/nuxt-config

const PUBLIC_SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://ipfs.tech'
const PUBLIC_DOMAIN = PUBLIC_SITE_URL.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')

export default defineNuxtConfig({
  nitro: {
    prerender: {
      ignore: ['/help', '/legal', '/media', '/privacy'],
      routes: ['/ipfs-404.html'],
    },
  },
  app: {
    head: {
      title: 'IPFS Powers the Distributed Web',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/fonts.css',
  ],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/plausible',
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  experimental: {
    inlineSSRStyles: false,
    componentIslands: true,
  },
  linkChecker: {
    failOn404: true,
  },
  runtimeConfig: {
    public: {
      siteUrl: PUBLIC_SITE_URL,
      siteName: 'IPFS',
      siteDescription: 'The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity\'s knowledge by making the web upgradeable, resilient, and more open.',
      language: 'en-US',
      indexable: false, // disable indexing for until launch
      plausible: {
        // strip out the protocol and trailing slash
        domain: PUBLIC_DOMAIN,
      },
    },
  },
})
