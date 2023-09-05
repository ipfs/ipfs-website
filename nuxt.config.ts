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
    // TODO: fix relative and dynamic base paths for IPFS hosting
    // baseURL: process.env.NODE_ENV === 'production' ? './' : '/',
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
    // TODO: fix payload extraction for IPFS hosting
    // see: https://github.com/nuxt/nuxt/issues/19478
    // payloadExtraction: false,
    componentIslands: true,
  },

  linkChecker: {
    // TODO: enable once these issues are resolved
    // https://github.com/harlan-zw/nuxt-link-checker/issues/2
    // https://github.com/harlan-zw/nuxt-link-checker/issues/13
    failOn404: false,
  },

  sitemap: {
    exclude: [
      '/__nuxt_island/**',
      '/help/',
      '/team/',
      '/docs/**',
      '/privacy/',
      '/companion-privacy/',
    ],
  },

  runtimeConfig: {
    public: {
      // seoKit
      siteUrl: PUBLIC_SITE_URL,
      siteName: 'IPFS Powers the Distributed Web',
      siteDescription: 'The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity\'s knowledge by making the web upgradeable, resilient, and more open.',
      trailingSlash: true,
      siteImage: '/images/social-card.png',
      language: 'en-US',
      // seoKit
      blogUrl: PUBLIC_BLOG_URL,
      plausible: {
        domain: PUBLIC_DOMAIN,
      },
    },
  },

  devtools: true,
})
