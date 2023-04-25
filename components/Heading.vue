<script setup lang="ts">
interface Props {
  center?: boolean
}
defineProps<Props>()
</script>

<template>
  <h2 class="text-4xl m-b-8" :class="{ 'text-center': center }">
    <slot />
  </h2>
</template>
