<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

interface AppLinkProps extends NuxtLinkProps {}
const props = defineProps<AppLinkProps>()

const href = computed(() => {
  return typeof props.href === 'string' ? props.href : typeof props.to === 'string' ? props.to : undefined
})
const isExternal = computed(() => {
  return props.external || href.value?.startsWith('http') || href.value?.startsWith('//')
})
</script>

<template>
  <NuxtLink :external="isExternal" :target="isExternal ? '_blank' : undefined">
    <slot />
  </NuxtLink>
</template>
