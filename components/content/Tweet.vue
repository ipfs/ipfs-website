<template>
  <TwitterCard v-bind="$props">
    <ContentSlot v-if="$slots.default" :use="$slots.default" />
    <template #retweet>
      <ContentSlot v-if="$slots.retweet" :use="$slots.retweet" />
    </template>
  </TwitterCard>
</template>
