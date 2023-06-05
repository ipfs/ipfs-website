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
  fullWidth?: boolean
}
defineProps<Props>()
</script>

<template>
  <section
    :id="id"
    v-motion-fade-visible-once class="relative overflow-visible" :class="{ 'text-white': textWhite }"
  >
    <div v-if="darkGradient" class="absolute h-full w-full from-brand-dark to-brand-blue-dark bg-gradient-to-r -z-1" />
    <div v-if="lightGradient" class="absolute h-full w-full from-brand-teal-light to-white bg-gradient-to-b -z-1" />
    <img v-if="background" :src="`/images/${background}`" alt="" class="absolute h-full w-full object-cover -z-1">
    <div v-if="overlay" class="absolute inset-0 overflow-x-hidden lg:overflow-visible">
      <img :src="`/images/${overlay}`" :class="`absolute ${overlayPosition}`">
    </div>
    <div
      class="relative mx-auto max-w-screen-xl"
      :class="[tight ? 'lg:py-14 py-6' : 'lg:py-20 py-14', bottomTight ? 'lg:pb-0 pb-0' : 'lg:pb-28 pb-14', fullWidth ? '' : 'px-7 lg:p-x-32']"
    >
      <slot />
    </div>
  </section>
</template>
