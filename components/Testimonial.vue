<script setup lang="ts">
interface Props {
  image?: string
  name?: string
}
defineProps<Props>()
</script>

<template>
  <ImageSplit :image="image" image-class="w-80 pr-12" flip>
    <Heading>
      Testimonials
    </Heading>
    <p class="text-xl mb-6">
      <slot />
    </p>
    <p class="text-xl font-bold">
      {{ name }}
    </p>
  </ImageSplit>
</template>
