<script setup lang="ts">
interface Props {
  flip?: boolean
  tight?: boolean
  image?: string
  imageWidth?: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col-reverse lg:text-left text-center items-center" :class="[flip ? 'lg:flex-row-reverse' : 'lg:flex-row', tight ? 'gap-4' : 'gap-12']">
    <div class="">
      <slot />
    </div>
    <img class="lg:ml-0 mx-auto" :style="{ width: `${imageWidth}px` }" :src="`./images/${image}`">
  </div>
</template>
