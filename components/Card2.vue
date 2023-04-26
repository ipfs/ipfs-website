<script setup lang="ts">
interface Props {
  image?: string
  date?: string
  heading?: string
  subhead?: string
  excerpt?: string
  link?: string
  category?: string
  tags?: string
}
defineProps<Props>()
</script>

<template>
  <div class="rounded-lg bg-brand-light">
    <img v-if="image" class="w-full h-40 object-cover" :src="`./images/${image}`">
    <div class="p-6 pb-0">
      <p v-if="date" class="text-xs text-gray-400 mb-1">
        {{ date }}
      </p>
      <h3 v-if="heading" class="text-xl text-black mb-1">
        {{ heading }}
      </h3>
      <p v-if="subhead" class="text-xs text-gray-400 mb-1">
        {{ subhead }}
      </p>
    </div>
    <div class="p-6 pt-4">
      <p v-if="excerpt" class="inline-block text-base">
        {{ excerpt }}...
        <a class="text-brand-teal-dark underline" :href="link">Read more</a>
      </p>
      <slot />
      <div v-if="category || tags" class="flex inline-flex mt-4 gap-1">
        <div v-if="category" class="rounded-sm py-1 px-3 text-xs text-brand-teal-dark bg-brand-teal-light">
          {{ category }}
        </div>
        <div v-if="tags" class="py-1 text-xs">
          <span class="pl-2">{{ tags }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
