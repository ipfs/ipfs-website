<script setup lang="ts">
interface Props {
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
      <div alt="twitter-bird" class="i-carbon-logo-twitter h-7 w-8 flex-none fill-current color-[#2aa9e0]" />
    </div>
    <div class="twitter-post mb-4">
      <MarkdownContent v-if="post" :content="post" />
    </div>
    <img v-if="image" :src="`/images/${image}`" class="mb-4 w-full">
    <div v-if="retweet" class="mb-4 border rounded-md p-3">
      <div class="mb-2 w-full flex items-center gap-1">
        <img :src="`/images/twitter-profile-${handle}.jpg`" :alt="handle" class="h-5 w-5 flex-none rounded-full">
        <p class="flex-1">
          <span class="font-bold">{{ retweet.name }}</span> @{{ retweet.handle }}, {{ retweet.date }}
        </p>
      </div>
      <div class="twitter-post">
        <MarkdownContent v-if="retweet.post" :content="retweet.post" />
      </div>
      <img v-if="retweet.image" :src="`/images/${retweet.image}`" class="mt-4 w-full">
    </div>
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
