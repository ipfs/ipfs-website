<script setup lang="ts">
interface Props {
  background?: string
  overlay?: string
  overlayPosition?: string
}
const props = defineProps<Props>()
</script>

<template>
  <PageSection id="hero" :background="props.background" :overlay="props.overlay" background-color="bg-brand-dark" overlay-position="top-0 right-0">
    <div class="p-y-52 max-w-xl m-x-auto">
      <h1 class="text-5xl text-center text-white m-b-5">
        <slot name="title" />
      </h1>
      <h4 class="text-lg text-center font-normal text-gray-400">
        <slot name="subtitle" />
      </h4>
    </div>
  </PageSection>
</template>
