<script setup lang="ts">
interface Props {
  flip?: boolean
  image?: string
  imageClass?: string
  gap?: string
  gapLg?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col-reverse lg:text-left text-center" :class="`${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'}`">
    <div class="">
      <slot />
    </div>
    <img class="lg:m-l-0 m-x-auto" :class="imageClass" :src="`./images/${props.image}`">
  </div>
</template>
