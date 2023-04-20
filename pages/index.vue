<template>
  <div>
    <seo-tags
      title="IPFS Powers the Distributed Web"
      description="The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."
    />
    <Hero background="star-aurora.jpg" overlay="constellations-hero.svg" tall>
      <template #title>
        Discover What's<br>
        Out There with IPFS
      </template>
      <template #subtitle>
        IPFS is an open system to manage data without a central server
      </template>
    </Hero>
    <PageSection>
      <ImageSplit image="ipfs-logo.svg">
        <Heading>A Universe Of Uses</Heading>
        <Subhead>How IPFS is Used in Production</Subhead>
        <p class="text-xl">IPFS's versatility shines across different industries – making it the multi-purpose tool for the decentralized age.</p>
      </ImageSplit>
    </PageSection>
  </div>
</template>

<script>
import SeoTags from '~/components/SeoTags.vue';
import Button from '~/components/Button';
import StarfieldHero from '~/components/StarfieldHero';
import VideoModal from '~/components/VideoModal.vue';

export default {
  components: { Button, StarfieldHero, SeoTags, VideoModal },
  data() {
    return {
      latestPosts: [],
      latestNews: [],
      latestVideos: [],
    };
  },
  async fetch() {
    const [latestPosts, latestNews, latestVideos] = await Promise.allSettled([
      fetch('https://blog.ipfs.tech/index.json')
        .then((res) => res.json())
        .then((data) => data.posts),
      fetch('https://blog.ipfs.tech/news.json')
        .then((res) => res.json())
        .then((data) => data.news),
      fetch('https://blog.ipfs.tech/videos.json')
        .then((res) => res.json())
        .then((data) => data.videos),
    ]);

    if (latestPosts.status === 'fulfilled') {
      this.latestPosts = latestPosts.value;
    }

    if (latestNews.status === 'fulfilled') {
      this.latestNews = latestNews.value;
    }

    if (latestVideos.status === 'fulfilled') {
      this.latestVideos = latestVideos.value;
    }
  },
  fetchOnServer: false,
  methods: {
    onCTAClick(data) {
      this.$countly.trackEvent(this.$countly.events.CTA_CLICK, {
        path: this.$route.path,
        ...data,
      });
    },
    openVideoModal: function (video) {
      this.$refs.videoModal.openModal(video);
    },
  },
};
</script>

<style scoped>
.video-preview:hover .video-preview-thumbnail {
  @apply scale-105;
}

h2 {
  @apply text-3xl;
}

@screen sm {
  h2 {
    @apply text-4xl;
  }
}
</style>
