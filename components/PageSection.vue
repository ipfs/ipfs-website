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
  bottomTight?: boolean
}
defineProps<Props>()
</script>

<template>
  <section
    :id="id" class="relative" :class="{ 'text-white': textWhite }"
  >
    <div v-if="darkGradient" class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue-dark" />
    <div v-if="lightGradient" class="absolute -z-1 w-full h-full bg-gradient-to-b from-brand-teal-light to-white" />
    <img v-if="background" :src="`./images/${background}`" alt="" class="absolute -z-1 w-full h-full object-cover">
    <div v-if="overlay" class="absolute inset-0 lg:overflow-visible overflow-x-hidden">
      <img :src="`./images/${overlay}`" :class="`absolute ${overlayPosition}`">
    </div>
    <div class="relative max-w-screen-xl mx-auto lg:p-x-32 px-7" :class="[tight ? 'lg:py-14 py-6' : 'lg:py-20 py-14', bottomTight ? 'lg:pb-0 pb-0' : 'lg:pb-28 pb-14']">
      <slot />
    </div>
  </section>
</template>
