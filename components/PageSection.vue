<script setup lang="ts">
interface Props {
  id?: string
  background?: string
  darkGradient?: boolean
  overlay?: string
  overlayPosition?: string
  textWhite?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <section :id="id" class="relative" :class="`${textWhite ? 'text-white' : ''}`">
    <div v-if="props.darkGradient" class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue" />
    <img v-if="props.background" :src="`./images/${background}`" alt="" class="absolute -z-1 w-full h-full object-cover">
    <div :class="`absolute inset-0 lg:overflow-visible overflow-x-hidden ${overlayPosition}`">
      <img v-if="props.overlay" :src="`./images/${overlay}`" alt="">
    </div>
    <div class="max-w-screen-xl mx-auto lg:p-x-32 p-x-7 lg:py-32 relative">
      <slot />
    </div>
  </section>
</template>
