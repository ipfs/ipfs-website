<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

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
</script>

<template>
  <div class="carousel-wrap relative">
    <Carousel
      :autoplay="12000"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
    >
      <Slide
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="px-10">
          <Testimonial :image="item.image" :name="item.title">
            &ldquo;{{ item.description?.trim() }}&rdquo;
          </Testimonial>
        </div>
      </Slide>
      <template #addons>
        <Pagination class="py-4" />
      </template>
    </Carousel>
  </div>
</template>

<style lang="postcss">
  .carousel__slide > div {
    @apply h-full w-full mx-4 cursor-grab;
  }
</style>
