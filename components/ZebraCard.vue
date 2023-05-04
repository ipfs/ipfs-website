<script setup lang="ts">
interface Props {
  buttonLabel?: string
  buttonLink?: string
}
defineProps<Props>()
</script>

<template>
  <div class="zebra-card flex flex-col justify-between rounded-xl p-6 even:border-1 odd:bg-brand-blue">
    <div>
      <slot />
    </div>
    <div class="flex-none pt-4">
      <Btn v-if="buttonLabel" :href="buttonLink" full outline>
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
