<script setup lang="ts">
interface Props {
  background?: 'light' | 'dark'
  center?: boolean
  buttonLabel?: string
  buttonLink?: string
}
const props = defineProps<Props>()

const bgColor = computed(() => {
  switch (props.background) {
    case 'light':
      return 'bg-brand-light'
    case 'dark':
      return 'bg-brand-blue'
    default:
      return 'bg-white'
  }
})
</script>

<template>
  <div class="flex flex-col justify-between rounded-xl p-10" :class="[{ 'text-center': center }, bgColor]">
    <slot />
    <div v-if="buttonLabel" class="flex-none" :class="{ 'mx-auto': center }">
      <Btn :href="buttonLink">
        {{ buttonLabel }}
      </Btn>
    </div>
  </div>
</template>
