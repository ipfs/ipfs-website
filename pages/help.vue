<script>
export default {
  components: {
    MarkdownContent,
  },
  async asyncData({ $content }) {
    const help = await $content('help').fetch()

    return {
      help,
    }
  },
  head() {
    return {
      title: 'Getting Help | IPFS',
    }
  },
}
</script>

<template>
  <MarkdownContent :content="help" />
</template>
