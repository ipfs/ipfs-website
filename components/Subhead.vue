<script setup lang="ts">
interface Props {
  bold?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <h3 class="text-2xl m-b-13" :class="`${bold ? 'font-bold' : 'font-normal'}`">
    <slot />
  </h3>
</template>
