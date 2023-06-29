<script setup lang="ts">
interface Props {
  image?: string
  name?: string
}
defineProps<Props>()
</script>

<template>
  <ImageSplit :image="image" image-width="260" flip image-rounded full-height>
    <Heading>
      Testimonials
    </Heading>
    <p class="mb-6 text-xl">
      <slot />
    </p>
    <p class="text-xl font-bold">
      {{ name }}
    </p>
  </ImageSplit>
</template>
