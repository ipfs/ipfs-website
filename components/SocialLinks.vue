<template>
  <div>
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      class="mr-5 last:mr-0"
      :href="link.link"
      target="_blank"
      rel="noopener noreferrer"
      @click="() => onClick(link)"
    >
      <Icon
        :name="link.icon"
        class="
          w-8
          h-8
          fill-current
          hover:opacity-75
          transition
          duration-300
          ease-in-out
        "
        :title="link.text"
      />
    </a>
  </div>
</template>

<script>
import Icon from './Icon';

const socialLinks = [
  {
    text: 'Github',
    link: 'https://github.com/ipfs',
    icon: 'github-icon',
  },
  {
    text: 'YouTube',
    link: 'https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew',
    icon: 'youtube-icon',
  },
  {
    text: 'Twitter',
    link: 'http://twitter.com/ipfs',
    icon: 'twitter-icon',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/company/protocollabs/',
    icon: 'linkedin-icon',
  },
];

export default {
  name: 'SocialLinks',
  components: {
    Icon,
  },
  props: {
    tracking: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    socialLinks: socialLinks,
  }),
  methods: {
    onClick(item) {
      this.$countly.trackEvent(this.$countly.events.SOCIAL_MEDIA_OUTBOUNDS, {
        path: this.$route.path,
        text: item.text,
        href: item.link,
        ui: this.tracking,
      });
    },
  },
};
</script>
