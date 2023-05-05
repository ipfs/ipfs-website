<script setup lang="ts">
import { marked } from 'marked'

interface Props {
  content: string
}
const props = defineProps<Props>()

const compiledMarkdown = computed(() => {
  return marked(props.content)
})
</script>

<template>
  <div v-html="compiledMarkdown" />
</template>
