<script setup lang="ts">
interface Props {
  flip?: boolean
  image?: string
  imageClass?: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col-reverse lg:text-left text-center items-center" :class="`${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'}`">
    <div class="">
      <slot />
    </div>
    <img class="lg:ml-0 mx-auto" :class="imageClass" :src="`./images/${image}`">
  </div>
</template>
