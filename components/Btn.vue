<script setup lang="ts">
import type { AppLinkProps } from '@/components/AppLink.vue'

interface Props extends AppLinkProps {
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
