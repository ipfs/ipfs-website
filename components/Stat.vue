<script setup lang="ts">
interface Props {
  number?: string
  label?: string
}
defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <h3 class="mb-4 inline-block border-b-1 border-brand-teal-transparent pb-4 text-6xl text-brand-teal-dark">
      {{ number }}
    </h3>
    <p class="text-xl">
      {{ label }}
    </p>
  </div>
</template>
