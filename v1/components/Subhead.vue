<script setup lang="ts">
interface Props {
  center?: boolean
  bold?: boolean
  small?: boolean
  tight?: boolean
}
defineProps<Props>()
</script>

<template>
  <h3
    class="max-w-prose" :class="[bold ? 'font-bold' : 'font-normal', small ? 'text-lg' : 'text-xl', tight ? 'mb-4' : 'mb-10', { 'text-center': center }, { 'm-a': center }]"
  >
    <slot />
  </h3>
</template>
