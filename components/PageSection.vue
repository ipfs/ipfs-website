<script setup lang="ts">
interface Props {
  id?: string
  backgroundColor?: string
  background?: string
  overlay?: string
  overlayPosition?: string
}
const props = defineProps<Props>()
</script>

<template>
  <section :id="id" class="relative">
    <div v-if="props.backgroundColor" :class="`absolute -z-1 w-full h-full ${backgroundColor}`" />
    <img v-if="props.background" :src="`./images/${background}`" alt="" class="absolute -z-1 w-full h-full object-cover">
    <div :class="`absolute inset-0 lg:overflow-visible overflow-x-hidden ${overlayPosition}`">
      <img v-if="props.overlay" :src="`./images/${overlay}`" alt="">
    </div>
    <div class="max-w-screen-xl mx-auto lg:p-x-32 p-x-7 relative">
      <slot />
    </div>
  </section>
</template>
