<script setup lang="ts">
const isDev = import.meta.env.DEV

useHead({
  htmlAttrs: {
    class: {
      'mode-dev': isDev,
    },
  },
})
useSeoMeta({
  title: 'IPFS Powers the Distributed Web',
  ogImage: 'https://ipfs.tech/images/social-card.png',
  twitterSite: '@ipfs',
})
</script>

<template>
  <NuxtLayout>
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* debug mode */
.mode-dev *:hover {
  outline: 1px solid red
}

.mode-dev .setup {
  display: block;
}
</style>
