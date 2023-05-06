<template>
  <TwitterRetweet v-bind="$props">
    <ContentSlot v-if="$slots.default" :use="$slots.default" />
  </TwitterRetweet>
</template>
