<script setup>
const isDev = import.meta.env.DEV

useHead({
  htmlAttrs: {
    class: {
      'mode-dev': isDev,
    },
  },
})

useSeoMeta({
  charset: 'utf-8',
  description: '',
  ogLocale: 'en-US',
  ogDescription: '',
  ogTitle: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <NuxtLayout>
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
