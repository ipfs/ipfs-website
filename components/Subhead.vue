<script setup lang="ts">
interface Props {
  bold?: boolean
  small?: boolean
}
defineProps<Props>()
</script>

<template>
  <h3 :class="`${bold ? 'font-bold' : 'font-normal'} ${small ? 'text-lg mb-3' : 'text-2xl mb-13'}`">
    <slot />
  </h3>
</template>
