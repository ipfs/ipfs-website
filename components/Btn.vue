<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

interface Props extends NuxtLinkProps {
  primary?: boolean
}
defineProps<Props>()
</script>

<template>
  <AppLink
    class="btn" :class="
      {
        'btn-primary': primary,
      }"
  >
    <slot />
  </AppLink>
</template>
