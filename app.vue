<script setup lang="ts">
useSeoMeta({
  twitterSite: '@ipfs',
})
</script>

<template>
  <NuxtLayout class="antialiased">
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
