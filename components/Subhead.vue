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
  <h3 :class="[bold ? 'font-bold' : 'font-normal', small ? 'text-lg' : 'text-2xl', tight ? 'mb-3' : 'mb-13', center ? 'text-center' : 'text-left']">
    <slot />
  </h3>
</template>
