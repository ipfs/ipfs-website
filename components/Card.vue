<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  background?: string
  center?: boolean
  buttonLabel?: string
  buttonLink?: string
}
const props = defineProps<Props>()

const bgColor = computed(() => {
  if (props.background === 'light')
    return 'bg-brand-light'
  if (props.background === 'blue')
    return 'bg-brand-blue'
  return 'bg-white'
})
</script>

<template>
  <div class="p-10 rounded-xl flex flex-col justify-between" :class="bgColor">
    <div :class="props.center ? 'text-center' : ''">
      <slot />
    </div>
    <div class="flex-none" :class="center ? 'mx-auto' : ''">
      <Btn v-if="buttonLabel" :href="buttonLink">
        {{ buttonLabel }}
      </Btn>
    </div>
  </div>
</template>
