<template>
  <div id="stars" class="relative bg-gradient-6 pt-20 h-screen max-h-1200">
    <div
      class="hero-container absolute left-0 right-0 mx-auto grid-margins mb-20"
    >
      <div
        v-if="title"
        class="flex flex-col justify-center items-center text-white"
      >
        <h2 class="pb-5 text-center">{{ title }}</h2>
        <Divider v-if="$slots.default" class="mb-5" />
        <slot />
      </div>
    </div>
    <button
      id="toggle-animation"
      class="absolute left-0 bottom-0 text-xs m-1.5 py-1.5 px-2 transition duration-300 ease-in-out"
    >
      Disable animation
    </button>
    <a
      href="#why"
      class="view-more block absolute bottom-8 w-full sm:hidden hover:opacity-75"
    >
      <svg-icon name="down-arrow-01" class="h-6 mx-auto" />
    </a>
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
</style>

<style scoped>
#toggle-animation {
  background-color: rgba(6, 27, 45, 0.6);
  min-width: initial;
  border: none;
  color: #8c9aa2;
  z-index: 2;

  &:hover {
    @apply text-blueGreenLight;
  }
}

.view-more {
  z-index: 2;
}

.hero-container {
  margin-top: 23vh;
  z-index: 2;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.375rem;
  font-weight: 200;
}

@media (max-width: 768px) {
  .hero-container {
    margin-top: 10rem;
    padding: 0 15%;
  }
}

@media (max-width: 640px) {
  h2 {
    font-size: 1.375rem;
  }

  h3 {
    font-size: 1.0625rem;
  }
}
</style>
