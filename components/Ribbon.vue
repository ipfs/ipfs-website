<script setup lang="ts">
interface Props {
  images: string[]
}
const props = defineProps<Props>()
const pImages = computed(() => props.images.map(img => useAsset(`images/${img}`)))
console.log(pImages.value)
</script>

<template>
  <div class="relative h-112 -ml-56">
    <div class="h-56">
      <div class="absolute w-384 flex -left-384 -ml-4">
        <div v-for="image in pImages.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
      <div class="absolute left-0 w-384 flex -ml-4">
        <div v-for="image in pImages.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
      <div class="absolute left-384 w-384 flex -ml-4">
        <div v-for="image in pImages.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
    </div>
    <div class="h-56">
      <div class="absolute w-384 flex -left-384">
        <div v-for="image in pImages.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
      <div class="absolute left-0 w-384 flex">
        <div v-for="image in pImages.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
      <div class="absolute left-384 w-384 flex">
        <div v-for="image in pImages.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="image" class="h-full w-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>
