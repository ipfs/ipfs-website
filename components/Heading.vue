<script setup lang="ts">
interface Props {
  center?: boolean
  tight?: boolean
}
defineProps<Props>()
</script>

<template>
  <h2 class="text-2xl lg:text-3xl sm:text-2xl" :class="[{ 'text-center': center }, tight ? 'mb-2' : 'mb-8']">
    <slot />
  </h2>
</template>
