<template>
  <MarkdownContent :content="help" />
</template>

<script>
import MarkdownContent from '../components/MarkdownContent';

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({ $content }) {
    const help = await $content('help').fetch();

    return {
      help,
    };
  },
  head() {
    return {
      title: 'Getting Help | IPFS',
    };
  },
};
</script>
