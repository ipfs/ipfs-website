<script setup lang="ts">
interface Props {
  link?: string
  label?: string
}
defineProps<Props>()
</script>

<template>
  <li class="mr-3 inline-block border-r-2 border-brand-teal-dark pr-3 text-sm font-bold text-brand-teal-dark last:mr-0 last:border-r-0 last:pr-0">
    <AppLink :href="link">
      {{ label }}
    </AppLink>
  </li>
</template>
