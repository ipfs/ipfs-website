<script setup lang="ts">
interface Props {
  image?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="lg:p-t-40 p-t-20 flex lg:gap-32 gap-16 lg:flex-row flex-col-reverse lg:text-left text-center">
    <div class="">
      <slot />
    </div>
    <img class="lg:w-auto w-40 lg:m-l-0 m-x-auto" :src="`./images/${props.image}`">
  </div>
</template>
