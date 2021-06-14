<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <MobileMenu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = 'auto';
    }
  },
};
</script>
