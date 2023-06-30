<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

interface Props {
  items?: [
    {
      title?: string
      description?: string
      image?: string
    },
  ]
}
defineProps<Props>()

const breakpoints = {
  500: { itemsToShow: 1 },
  650: { itemsToShow: 1 },
  800: { itemsToShow: 1 },
  1000: { itemsToShow: 1 },
}
</script>

<template>
  <div class="carousel-wrap relative">
    <Carousel
      :autoplay="12000"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="px-10">
          <Testimonial :image="item.image" :name="item.title">
            "{{ item.description }}"
          </Testimonial>
        </div>
      </Slide>
      <template #addons>
        <Navigation class="z-3" />
      </template>
    </Carousel>
  </div>
</template>

<style lang="postcss">
  .carousel__slide > div {
    @apply h-full w-full mx-4 cursor-grab;
  }
</style>
