<template>
  <MarkdownContent :content="legal" />
</template>

<script>
import MarkdownContent from '../components/MarkdownContent';

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({ $content }) {
    const legal = await $content('legal').fetch();

    return {
      legal,
    };
  },
  head() {
    return {
      title: 'Legal | IPFS',
    };
  },
};
</script>
