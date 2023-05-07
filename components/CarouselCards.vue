<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

interface Props {
  items?: [
    {
      title?: string
      description?: string
      image?: string
      link?: string
    },
  ]
  buttonLabel?: string
}
defineProps<Props>()

const breakpoints = {
  500: { itemsToShow: 1.25 },
  650: { itemsToShow: 2 },
  800: { itemsToShow: 2.5 },
  1000: { itemsToShow: 3.5 },
}
</script>

<template>
  <div class="carousel-wrap relative">
    <div class="absolute left-0 z-2 h-full w-20 from-white from-30% bg-gradient-to-r md:w-32" />
    <div class="absolute right-0 z-2 h-full w-20 from-white from-30% bg-gradient-to-l md:w-32" />
    <Carousel
      :autoplay="6000"
      :pause-autoplay-on-hover="true"
      :items-to-show="3.5"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide
        v-for="(item, index) in items"
        :key="index"
      >
        <Card background="light" :button-label="buttonLabel" :button-link="item.link" center>
          <img :src="`/images/${item.image}`" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="mb-8 text-xl">
            {{ item.title }}
          </h3>
          <p class="mb-8 text-xl">
            {{ item.description }}
          </p>
        </Card>
      </Slide>
      <template #addons>
        <Navigation class="z-3" />
      </template>
    </Carousel>
  </div>
</template>

<style lang="postcss">
  .carousel__slide > div {
    @apply h-full w-full mx-4;
  }
</style>
