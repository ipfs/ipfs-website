<template>
  <div>
    <Hero :title="content.title" :description="content.description" />
    <article class="grid-margins py-8 px-2 sm:px-0">
      <nuxt-content :document="content" class="prose max-w-5xl" />
    </article>
  </div>
</template>

<script>
import Hero from './Hero';

export default {
  name: 'MarkdownContent',
  components: { Hero },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
