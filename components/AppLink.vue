<script setup lang="ts">
export interface AppLinkProps { href?: string; to?: string }
defineProps<AppLinkProps>()

function isExternal(href: string | undefined) {
  return typeof href === 'string' ? (href?.startsWith('http') || href?.startsWith('//')) : false
}
</script>

<template>
  <NuxtLink class="pointer" :href="href || to" :target="isExternal(href || to) ? '_blank' : undefined">
    <slot />
  </NuxtLink>
</template>
