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

<style>
html {
  scroll-behavior: smooth;
}
</style>
