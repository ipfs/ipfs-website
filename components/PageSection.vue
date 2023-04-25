<script setup lang="ts">
interface Props {
  id?: string
  background?: string
  darkGradient?: boolean
  lightGradient?: boolean
  overlay?: string
  overlayPosition?: string
  textWhite?: boolean
  contentClasses?: string
  tight?: boolean
}
defineProps<Props>()
</script>

<template>
  <section
    :id="id" class="relative" :class="{ 'text-white': textWhite }"
  >
    <div v-if="darkGradient" class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue" />
    <div v-if="lightGradient" class="absolute -z-1 w-full h-full bg-gradient-to-b from-brand-teal-light to-white" />
    <img v-if="background" :src="`./images/${background}`" alt="" class="absolute -z-1 w-full h-full object-cover">
    <div :class="`absolute lg:overflow-visible overflow-x-hidden ${overlayPosition}`">
      <img v-if="overlay" :src="`./images/${overlay}`" alt="">
    </div>
    <div class="relative max-w-screen-xl mx-auto lg:p-x-32 px-7" :class="{ 'lg:py-28 py-14': tight }">
      <slot />
    </div>
  </section>
</template>
