<script setup lang="ts">
interface Props {
  images: Array<string>
}
defineProps<Props>()
</script>

<template>
  <div class="relative h-112 -ml-56">
    <div class="h-56">
      <div class="absolute -left-384 w-384 flex -ml-4">
        <div v-for="image in images.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="absolute left-0 w-384 flex -ml-4">
        <div v-for="image in images.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="absolute left-384 w-384 flex -ml-4">
        <div v-for="image in images.slice(0, 4)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
    <div class="h-56">
      <div class="absolute -left-384 w-384 flex">
        <div v-for="image in images.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="absolute left-0 w-384 flex">
        <div v-for="image in images.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="absolute left-384 w-384 flex">
        <div v-for="image in images.slice(4, 8)" :key="image" class="h-56 w-96">
          <img :src="`/images/${image}`" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>
