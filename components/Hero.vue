<script setup lang="ts">
interface Props {
  tall?: boolean
  background?: string
  overlay?: string
  overlayPosition?: string
}
const props = defineProps<Props>()
</script>

<template>
  <PageSection id="hero" :background="props.background" :overlay="props.overlay" background-color="bg-brand-dark" overlay-position="top-0 right-0">
    <div :class="`${props.tall ? 'p-y-52' : 'pt-36 pb-20'} max-w-xl m-x-auto`">
      <h1 class="text-5xl text-center text-white m-b-4">
        <slot name="title" />
      </h1>
      <h4 class="text-lg text-center font-normal text-gray-400">
        <slot name="subtitle" />
      </h4>
    </div>
  </PageSection>
</template>
