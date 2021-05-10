<template>
  <div id="stars" class="relative bg-gradient-6 pt-20 h-screen max-h-1200">
    <div class="grid-margins pt-5">
      <div v-if="title" class="flex flex-col justify-center items-center">
        <h2 class="text-white pb-5">{{ title }}</h2>
      </div>
      <slot />
    </div>
    <button
      id="toggle-animation"
      class="absolute left-0 bottom-0 text-xs m-1.5 py-1.5 px-2 transition duration-300 ease-in-out"
    >
      Disable animation
    </button>
  </div>
</template>

<script>
import stars from '@/assets/js/stars';

export default {
  name: 'StarfieldHero',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  async mounted() {
    const PIXI = await import('pixi.js');
    stars(PIXI);
  },
};
</script>

<style>
canvas {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
}

#toggle-animation {
  background-color: rgba(6, 27, 45, 0.6);
  min-width: initial;
  border: none;
  color: #8c9aa2;

  &:hover {
    @apply text-blueGreenLight;
  }
}
</style>
