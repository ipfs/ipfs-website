<script setup lang="ts">
interface Props {
  flip?: boolean
  tight?: boolean
  image?: string
  imageWidth?: string
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
  <div class="flex flex-col-reverse lg:text-left text-center items-center" :class="[flip ? 'lg:flex-row-reverse' : 'lg:flex-row', tight ? 'gap-4' : 'gap-12']">
    <div class="">
      <slot />
    </div>
    <img class="lg:ml-0 mx-auto" :style="imageStyle" :src="`./images/${image}`">
  </div>
</template>
