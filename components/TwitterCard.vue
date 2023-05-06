<script setup lang="ts">
interface Props {
  name?: string
  handle?: string
  post?: string
  image?: string
  time?: string
  date?: string
}
defineProps<Props>()
</script>

<template>
  <div class="twitter-card mb-8 break-inside-avoid rounded-xl bg-brand-light p-4">
    <div class="mb-4 w-full flex items-center gap-2">
      <img :src="`/images/twitter-profile-${handle}.jpg`" :alt="handle" class="h-9 w-9 flex-none rounded-full">
      <div class="flex-1">
        <p class="font-bold">
          {{ name }}
        </p>
        <p>@{{ handle }}</p>
      </div>
      <img src="/images/twitter-bird.svg" alt="twitter-bird" class="h-7 w-8 flex-none">
    </div>
    <div class="twitter-post mb-4">
      <slot />
    </div>
    <img v-if="image" :src="`/images/${image}`" class="mb-4 w-full">
    <slot name="retweet" />
    <p>
      {{ time }} • {{ date }}
    </p>
  </div>
</template>

<style lang="postcss">
  .twitter-card {
    @apply text-xs;
  }
  .twitter-card p {
    @apply mb-0 text-xs;
  }
  .twitter-post p {
    @apply text-xs mb-3;
  }
  .twitter-post p:last-child {
    @apply mb-0;
  }
</style>
