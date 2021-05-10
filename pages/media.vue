<template>
  <MarkdownContent :content="media" />
</template>

<script>
import MarkdownContent from '../components/MarkdownContent';

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({ $content }) {
    const media = await $content('media').fetch();

    return {
      media,
    };
  },
  head() {
    return {
      title: 'Press Kit | IPFS',
    };
  },
};
</script>
