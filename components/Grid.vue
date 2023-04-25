<script setup lang="ts">
interface Props {
  cols?: string
}
defineProps<Props>()
</script>

<template>
  <div class="grid gap-8 md:grid-cols-2 grid-cols-1" :class="`lg:grid-cols-${cols || 3}`">
    <slot />
  </div>
</template>
