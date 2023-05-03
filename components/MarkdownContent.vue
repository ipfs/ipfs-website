<script>
import Hero from './Hero'
import SeoTags from './SeoTags.vue'

export default {
  name: 'MarkdownContent',
  components: { Hero, SeoTags },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <SeoTags
      :title="`${content.title} | IPFS`"
      :description="content.description"
    />
    <Hero :title="content.title" :description="content.description" />
    <article class="px-2 py-8 grid-margins sm:px-0">
      <nuxt-content :document="content" class="max-w-5xl prose" />
    </article>
  </div>
</template>
