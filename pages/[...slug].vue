<script setup lang="ts">
const event = useRequestEvent()
setResponseStatus(event, 404, 'Page Not Found')
</script>

<template>
  <div>Oops, this page is missing</div>
</template>
