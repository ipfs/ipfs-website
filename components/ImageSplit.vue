<script setup lang="ts">
interface Props {
  flip?: boolean
  tight?: boolean
  image?: string
  imageWidth?: string
  imageRounded?: boolean
  imageClass?: string
  fullHeight?: boolean
}
const props = defineProps<Props>()

const imageStyle = computed(() => {
  if (props.imageWidth) {
    return {
      width: `${props.imageWidth}px`,
    }
  }
  return ''
})
</script>

<template>
  <div class="flex flex-col-reverse items-center text-center lg:text-left" :class="[flip ? 'lg:flex-row-reverse' : 'lg:flex-row', tight ? 'gap-4' : 'gap-12', fullHeight ? 'lg:h-full' : '']">
    <div>
      <slot />
    </div>
    <img v-if="imageRounded" class="tinted mx-auto rounded-full lg:ml-0" :style="imageStyle" :class="imageClass" :src="`/images/${image}`">
    <img v-else class="mx-auto" :style="imageStyle" :class="imageClass" :src="`/images/${image}`">
  </div>
</template>

<style scoped>
  .tinted {
    filter: sepia(100%) saturate(50%) brightness(90%) hue-rotate(125deg);
  }
</style>
