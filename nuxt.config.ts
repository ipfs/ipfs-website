// https://nuxt.com/docs/api/configuration/nuxt-config

const CDOMAIN = 'ipfs.tech'

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    prerender: {
      ignore: ['/help', '/legal', '/media', '/privacy'],
      routes: ['/ipfs-404.html'],
    },
  },
  app: {
    head: {
      title: 'IPFS Powers the Distributed Web',
      htmlAttrs: {
        lang: 'en-US',
      },
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
  experimental: {
    inlineSSRStyles: false,
  },
  runtimeConfig: {
    public: {
      plausible: {
        domain: CDOMAIN,
      },
    },
  },
})
