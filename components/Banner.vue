<template>
  <div class="banner">
    <a class="banner-cta" :href="cta">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    cta: {
      type: String,
      default: '',
    },
  },
};
</script>
