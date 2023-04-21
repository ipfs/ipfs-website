<script setup lang="ts">
interface Props {
  center?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <h2 class="text-4xl m-b-8" :class="`${props.center ? 'text-center' : ''}`">
    <slot />
  </h2>
</template>
