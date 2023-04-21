<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

interface Props extends NuxtLinkProps {
  cols?: string
}
defineProps<Props>()
</script>

<template>
  <div class="grid gap-8" :class="`grid-cols-${cols || 3}`">
    <slot />
  </div>
</template>
