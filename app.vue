<script setup lang="ts">
useSeoMeta({
  twitterSite: '@ipfs',
})
</script>

<template>
  <NuxtLayout>
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
html {
  scroll-behavior: smooth;
  @apply antialiased;
}
</style>
