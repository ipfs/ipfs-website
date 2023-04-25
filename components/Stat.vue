<script setup lang="ts">
interface Props {
  number?: string
  label?: string
}
defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <h3 class="text-6xl text-brand-teal-dark inline-block pb-4 mb-4 border-b-1 border-brand-teal-transparent">
      {{ number }}
    </h3>
    <p class="text-xl">
      {{ label }}
    </p>
  </div>
</template>
