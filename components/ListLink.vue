<script setup lang="ts">
interface Props {
  link?: string
  label?: string
}
defineProps<Props>()
</script>

<template>
  <li class="inline-block text-sm font-bold text-brand-teal-dark border-brand-teal-dark border-r-2 last:border-r-0 pr-3 mr-3 last:pr-0 last:mr-0">
    <a :href="link">
      {{ label }}
    </a>
  </li>
</template>
