<script lang="ts" setup>
interface RetweetProps {
  name?: string
  handle?: string
  post?: string
  image?: string
  time?: string
  date?: string
}

defineProps<RetweetProps>()
</script>

<template>
  <div class="mb-4 border rounded-md p-3">
    <div class="mb-2 w-full flex items-center gap-1">
      <img :src="`/images/twitter-profile-${handle}.jpg`" :alt="handle" class="h-5 w-5 flex-none rounded-full">
      <p class="flex-1">
        <span class="font-bold">{{ name }}</span> @{{ handle }}, {{ date }}
      </p>
    </div>
    <div class="twitter-post">
      <slot />
    </div>
    <img v-if="image" :src="`/images/${image}`" class="mt-4 w-full">
  </div>
</template>
