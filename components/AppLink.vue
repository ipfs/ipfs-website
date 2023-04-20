<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

interface AppLinkProps extends NuxtLinkProps {}
defineProps<AppLinkProps>()
</script>

<template>
  <NuxtLink target="_blank">
    <slot />
  </NuxtLink>
</template>
