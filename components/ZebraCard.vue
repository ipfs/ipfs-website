<script setup lang="ts">
interface Props {
  buttonLabel?: string
  buttonLink?: string
}
defineProps<Props>()
</script>

<template>
  <div class="zebra-card p-6 rounded-xl flex flex-col justify-between odd:bg-brand-blue even:border-1">
    <div>
      <slot />
    </div>
    <div class="flex-none pt-4">
      <Btn v-if="buttonLabel" :href="buttonLink" outline full>
        {{ buttonLabel }}
      </Btn>
    </div>
  </div>
</template>

<style lang="postcss">
.zebra-card h3 {
  @apply text-teal mb-6;
}
.zebra-card p {
  @apply text-sm mb-4;
}
</style>
