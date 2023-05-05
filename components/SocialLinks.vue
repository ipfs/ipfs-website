<script setup lang="ts">
defineEmits(['navigate'])
const socialLinks = [
  {
    text: 'Github',
    link: 'https://github.com/ipfs',
    icon: 'i-carbon-logo-github',
  },
  {
    text: 'YouTube',
    link: 'https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew',
    icon: 'i-carbon-logo-youtube',
  },
  {
    text: 'Twitter',
    link: 'http://twitter.com/ipfs',
    icon: 'i-carbon-logo-twitter',
  },
]
</script>

<template>
  <div>
    <AppLink
      v-for="{ link, text, icon } in socialLinks"
      :key="icon"
      class="mr-5 last:mr-0"
      :href="link"
      @click="$emit('navigate')"
    >
      <div
        :name="icon"
        :class="icon"
        class="h-8 w-8 fill-current transition duration-300 ease-in-out hover:opacity-75"
        :title="text"
      />
    </AppLink>
  </div>
</template>
