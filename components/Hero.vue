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
    <div :class="`${tall ? 'p-y-16' : 'pt-16'} max-w-xl m-x-auto`">
      <h1 class="text-5xl text-center text-white m-b-4">
        <slot name="title" />
      </h1>
      <h4 class="text-lg text-center font-normal text-gray-400">
        <slot name="subtitle" />
      </h4>
    </div>
  </PageSection>
</template>
