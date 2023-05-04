<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

export interface AppLinkProps extends NuxtLinkProps { href?: string; to?: string }
defineProps<AppLinkProps>()

function isExternal(href: string | undefined) {
  return typeof href === 'string' ? (href?.startsWith('http') || href?.startsWith('//')) : false
}
</script>

<template>
  <NuxtLink class="pointer inline-block" :href="href || to" :target="isExternal(href || to) ? '_blank' : undefined">
    <slot />
  </NuxtLink>
</template>
