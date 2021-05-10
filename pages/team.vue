<template>
  <MarkdownContent :content="team" />
</template>

<script>
import MarkdownContent from '../components/MarkdownContent';

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({ $content }) {
    const team = await $content('team').fetch();

    return {
      team,
    };
  },
  head() {
    return {
      title: 'Team | IPFS',
    };
  },
};
</script>
