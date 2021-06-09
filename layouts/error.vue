<template>
  <main>
    <div class="grid-margins pt-12 pb-16 px-2 sm:px-0">
      <h1 v-if="error.statusCode === 404" class="mb-8">Page not found</h1>
      <h1 v-else class="mb-8">An error occurred</h1>
      <p>
        Unfortunately, we can't find what you're looking for. To continue your
        adventure, visit the
        <Link
          class="text-blueGreen font-bold hover:underline"
          :item="{ link: '/', text: 'homepage' }"
        />
        or learn where to get
        <Link
          class="text-blueGreen font-bold hover:underline"
          :item="{ link: '/help', text: 'IPFS help and support' }"
        />.
      </p>
    </div>
  </main>
</template>

<script>
import Link from '~/components/Link';

export default {
  components: {
    Link,
  },
  layout: 'simple',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.error.statusCode === 404) {
      this.$countly.trackEvent(this.$countly.events.NOT_FOUND, {
        path: this.$route.path,
        referrer: typeof window !== 'undefined' ? document.referrer : null,
      });
    } else {
      // refresh to not show error page
      this.$router.go();
    }
  },
};
</script>
