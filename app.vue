<script setup>
const isDev = import.meta.env.DEV

useHead({
  htmlAttrs: {
    class: {
      'mode-dev': isDev,
    },
  },
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
