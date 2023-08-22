<script setup lang="ts">
import AppLink from './AppLink.vue'

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
const props = defineProps<Props>()
const image = props.image?.startsWith('http') ? props.image : `~/assets/images/${props.image}`
</script>

<template>
  <component :is="link ? AppLink : 'div'" class="card rounded-lg bg-brand-light" :href="link">
    <img v-if="props.image" class="aspect-video w-full object-cover" :src="image">
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
  </component>
</template>
