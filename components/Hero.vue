<script setup lang="ts">
interface Props {
  tall?: boolean
  background?: string
  overlay?: string
  overlayPosition?: string
}
defineProps<Props>()
</script>

<template>
  <PageSection id="hero" :background="background" :overlay="overlay" overlay-position="top-0 right-0">
    <div class="m-x-auto max-w-xl" :class="[tall ? 'p-y-16' : 'pt-16']">
      <h1 class="mb-4 text-center text-2xl text-white lg:text-5xl sm:text-2xl">
        <slot name="title" />
      </h1>
      <h4 class="text-center text-lg font-normal text-gray-400">
        <slot name="subtitle" />
      </h4>
    </div>
  </PageSection>
</template>
