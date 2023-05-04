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
    <img v-if="image" class="h-40 w-full object-cover" :src="`/images/${image}`">
    <div class="p-6 pb-0">
      <p v-if="date" class="mb-1 text-xs text-gray-400">
        {{ date }}
      </p>
      <h3 v-if="heading" class="mb-1 text-xl text-black">
        {{ heading }}
      </h3>
      <p v-if="subhead" class="mb-1 text-xs text-gray-400">
        {{ subhead }}
      </p>
    </div>
    <div class="p-6 pt-4">
      <p v-if="excerpt" class="inline-block text-base">
        {{ excerpt }}...
        <AppLink class="text-brand-teal-dark underline" :href="link">
          Read more
        </AppLink>
      </p>
      <slot />
      <div v-if="category || tags" class="mt-4 flex inline-flex gap-1">
        <div v-if="category" class="rounded-sm bg-brand-teal-light px-3 py-1 text-xs text-brand-teal-dark">
          {{ category }}
        </div>
        <div v-if="tags" class="py-1 text-xs">
          <span class="pl-2">{{ tags }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
