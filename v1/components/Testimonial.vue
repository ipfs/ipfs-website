<script setup lang="ts">
interface Props {
  image?: string
  name?: string
}
defineProps<Props>()
</script>

<template>
  <ImageSplit :image="image" image-width="260" flip image-rounded full-height>
    <p class="mb-6 sm:text-xl">
      <slot />
    </p>
    <p class="font-bold sm:text-xl">
      {{ name }}
    </p>
  </ImageSplit>
</template>
