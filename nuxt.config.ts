// https://nuxt.com/docs/api/configuration/nuxt-config

import process from 'node:process'

const PUBLIC_SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://ipfs.tech'
const PUBLIC_BLOG_URL = 'https://blog.ipfs.tech'
// strip out the protocol and trailing slash
const PUBLIC_DOMAIN = PUBLIC_SITE_URL.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')

export default defineNuxtConfig({
  routeRules: {
    '/ipfs-404.html': { prerender: true },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/index.css',
  ],

  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/plausible',
    '@vueuse/motion/nuxt',
  ],

  extends: [
    'nuxt-seo-kit',
  ],

  experimental: {
    inlineSSRStyles: false,
    componentIslands: true,
  },

  linkChecker: {
    failOn404: false, // TODO: enable before launch
  },

  runtimeConfig: {
    public: {
      siteUrl: PUBLIC_SITE_URL,
      siteName: 'IPFS Powers the Distributed Web',
      siteDescription: 'The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity\'s knowledge by making the web upgradeable, resilient, and more open.',
      siteImage: '/images/ipfs-social-card.png',
      blogUrl: PUBLIC_BLOG_URL,
      language: 'en-US',
      indexable: false, // TODO: enable before launch
      plausible: {
        domain: PUBLIC_DOMAIN,
      },
    },
  },

  devtools: true,
})
