<template>
  <div>
    <seo-tags
      :title="content.title + ' | IPFS'"
      :description="content.description"
    />
    <Hero :title="content.title" :description="content.description" />
    <article class="grid-margins py-8 px-2 sm:px-0">
      <nuxt-content :document="content" class="prose max-w-5xl" />
    </article>
  </div>
</template>

<script>
import Hero from './Hero';
import SeoTags from './SeoTags.vue';

export default {
  name: 'MarkdownContent',
  components: { Hero, SeoTags },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
