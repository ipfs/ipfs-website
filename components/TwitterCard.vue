<script setup lang="ts">
interface Props {
  card: {
    name?: string
    handle?: string
    post?: string
    image?: string
    time?: string
    date?: string
    retweet?: {
      name?: string
      handle?: string
      post?: string
      image?: string
      time?: string
      date?: string
    }
  }
}
defineProps<Props>()
</script>

<template>
  <div class="twitter-card mb-8 break-inside-avoid rounded-xl bg-brand-light p-4">
    <div class="mb-4 w-full flex items-center gap-2">
      <img :src="`/images/twitter-profile-${card.handle}.jpg`" :alt="card.handle" class="h-9 w-9 flex-none rounded-full">
      <div class="flex-1">
        <p class="font-bold">
          {{ card.name }}
        </p>
        <p>@{{ card.handle }}</p>
      </div>
      <img src="/images/twitter-bird.svg" alt="twitter-bird" class="h-7 w-8 flex-none">
    </div>
    <div class="twitter-post mb-4">
      <MarkdownContent v-if="card.post" :content="card.post" />
    </div>
    <img v-if="card.image" :src="`/images/${card.image}`" class="mb-4 w-full">
    <div v-if="card.retweet" class="mb-4 border rounded-md p-3">
      <div class="mb-2 w-full flex items-center gap-1">
        <img :src="`/images/twitter-profile-${card.handle}.jpg`" :alt="card.handle" class="h-5 w-5 flex-none rounded-full">
        <p class="flex-1">
          <span class="font-bold">{{ card.retweet.name }}</span> @{{ card.retweet.handle }}, {{ card.retweet.date }}
        </p>
      </div>
      <div class="twitter-post">
        <MarkdownContent v-if="card.retweet.post" :content="card.retweet.post" />
      </div>
      <img v-if="card.retweet.image" :src="`/images/${card.retweet.image}`" class="mt-4 w-full">
    </div>
    <p>
      {{ card.time }} • {{ card.date }}
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
