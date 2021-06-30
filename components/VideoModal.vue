<template>
  <transition name="fade">
    <div v-if="show" class="fixed top-0 right-0 bottom-0 left-0 z-50">
      <div
        class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25"
        @click="closeModal()"
      ></div>
      <div
        role="dialog"
        aria-modal="true"
        class="
          modal-content
          absolute
          bg-white
          rounded
          w-11/12
          md:w-4/5
          max-w-screen-lg max-h-screen
          overflow-y-auto
          p-4
          lg:p-8
        "
      >
        <h1 class="type-h5 font-semibold text-xl text-primary mr-4">
          <Link
            :item="{ link: video.url, text: video.title }"
            class="clamp-3 hover:underline"
          />
        </h1>
        <div class="embed-responsive embed-responsive-16by9 my-4">
          <iframe
            type="text/html"
            :src="resolvedPath"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
        <button
          type="button"
          class="
            absolute
            top-0
            right-0
            mt-4
            mr-4
            text-blueGreen
            hover:underline
            font-bold
            text-xl
          "
          @click="closeModal()"
        >
          X
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import Link from '~/components/Link.vue';

export default {
  name: 'VideoModal',
  components: { Link },
  props: {},
  data() {
    return {
      show: false,
      video: {},
    };
  },
  computed: {
    resolvedPath() {
      if (
        !this.video.url.includes('youtube') ||
        this.video.url.includes('embed')
      ) {
        return this.video.url;
      }

      const newPath = new URL(this.video.url);
      const originalStartTime = newPath.searchParams.get('t');
      const start =
        originalStartTime &&
        newPath.searchParams
          .get('t')
          .slice(0, newPath.searchParams.get('t').length - 1);
      const id =
        newPath.searchParams.get('v') || newPath.searchParams.get('list');
      const isAList = newPath.pathname.includes('list');

      return isAList
        ? `https://www.youtube.com/embed/videoseries?list=${id}`
        : `https://www.youtube.com/embed/${id}?${
            start ? `start=${start}` : ''
          }`;
    },
  },
  methods: {
    closeModal() {
      this.show = false;
      this.video = {};
    },
    openModal(video) {
      this.video = video;
      this.show = true;
    },
  },
};
</script>

<style scoped>
.modal-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
