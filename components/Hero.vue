<template>
  <div class="bg-gradient-6 pt-20 pb-10 lg:py-20">
    <div class="grid-margins pt-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-white mt-4">{{ title }}</h1>
        <h2 class="text-white mt-8 max-w-4xl">
          {{ description }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
