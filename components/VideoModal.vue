<script>
import Link from '~/components/Link.vue'

export default {
  name: 'VideoModal',
  components: { Link },
  props: {},
  data() {
    return {
      show: false,
      video: {},
    }
  },
  computed: {
    resolvedPath() {
      if (
        !this.video.url.includes('youtube')
        || this.video.url.includes('embed')
      )
        return this.video.url

      const newPath = new URL(this.video.url)
      const originalStartTime = newPath.searchParams.get('t')
      const start
        = originalStartTime
        && newPath.searchParams
          .get('t')
          .slice(0, newPath.searchParams.get('t').length - 1)
      const id
        = newPath.searchParams.get('v') || newPath.searchParams.get('list')
      const isAList = newPath.pathname.includes('list')

      return isAList
        ? `https://www.youtube.com/embed/videoseries?list=${id}`
        : `https://www.youtube.com/embed/${id}?${
            start ? `start=${start}` : ''
          }`
    },
  },
  methods: {
    closeModal() {
      this.show = false
      this.video = {}
    },
    openModal(video) {
      this.video = video
      this.show = true
    },
  },
}
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed bottom-0 left-0 right-0 top-0 z-50">
      <div
        class="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-25"
        @click="closeModal()"
      />
      <div
        role="dialog"
        aria-modal="true"
        class="modal-content absolute max-h-screen w-11/12 max-w-screen-lg overflow-y-auto rounded bg-white p-4 md:w-4/5 lg:p-8"
      >
        <h1 class="type-h5 text-primary mr-4 text-xl font-semibold">
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
          />
        </div>
        <button
          type="button"
          class="text-blueGreen absolute right-0 top-0 mr-4 mt-4 text-xl font-bold hover:underline"
          @click="closeModal()"
        >
          X
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
