<script setup lang="ts">
import type { AppLinkProps } from '@/components/AppLink.vue'

interface Props extends AppLinkProps {
  primary?: boolean
  outline?: boolean
  full?: boolean
}
defineProps<Props>()
</script>

<template>
  <AppLink
    class="btn" :class="
      {
        'btn-primary': primary,
        'btn-outline': outline,
        'w-full text-center': full,
      }"
  >
    <slot />
  </AppLink>
</template>
