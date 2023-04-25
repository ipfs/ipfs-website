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
  <div class="p-10 rounded-xl flex flex-col justify-between" :class="bgColor">
    <div
      :class="{ 'text-center': center }"
    >
      <slot />
    </div>
    <div class="flex-none" :class="{ 'mx-auto': center }">
      <Btn v-if="buttonLabel" :href="buttonLink">
        {{ buttonLabel }}
      </Btn>
    </div>
  </div>
</template>
