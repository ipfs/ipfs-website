<script setup lang="ts">
interface Props {
  background?: string
  overlay?: string
  overlayPosition?: string
}
const props = defineProps<Props>()
</script>

<template>
  <section class="relative">
    <img v-if="props.background" :src="`./images/${background}`" alt="" class="bg-black absolute -z-1 w-full h-full object-cover">
    <img v-if="props.overlay" :src="`./images/${overlay}`" alt="" :class="`absolute ${overlayPosition}`">
    <div class="max-w-screen-xl mx-auto p-x-32 relative">
      <slot />
    </div>
  </section>
</template>
