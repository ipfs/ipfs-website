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

const textCenter = props.center ? 'text-center' : ''
</script>

<template>
  <div class="p-8 rounded-xl flex flex-col justify-between" :class="bgColor">
    <div :class="textCenter">
      <slot />
    </div>
    <div class="flex-none" :class="props.center ? 'mx-auto' : ''">
      <Btn v-if="props.buttonLabel" :href="props.buttonLink">
        {{ props.buttonLabel }}
      </Btn>
    </div>
  </div>
</template>
