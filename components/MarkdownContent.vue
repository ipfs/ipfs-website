<script setup lang="ts">
// @ts-expect-error avoid lint error
import markdownParser from '@nuxt/content/transformers/markdown'

export interface MarkdownRenderProps {
  content?: string
  cid?: string
}
const props = withDefaults(defineProps<MarkdownRenderProps>(), { content: '', cid: '<some-id>' })
const parsedMarkdown = await markdownParser.parse(props.cid, props.content)
</script>

<template>
  <ContentRenderer :value="parsedMarkdown" v-bind="$attrs" />
</template>
