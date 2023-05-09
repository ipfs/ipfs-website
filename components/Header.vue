<template>
  <header
    ref="header"
    class="
      top-0
      w-full
      text-white
      transition
      duration-300
      ease-out
      transform
      z-50
    "
    :class="[
      {
        '-translate-y-full': navVisibility.navSticky,
        fixed: !noHero,
        static: noHero,
        'bg-gradient-6': noHero,
        navVisible: navVisibility.navVisible,
        navSticky: navVisibility.navSticky && !mobileNavActive,
        mobileNavOpen: mobileNavActive,
      },
    ]"
  >
    <!-- <Banner cta="https://blog.ipfs.tech/state-of-ipfs-in-js/">
      💡 Read more about the state of IPFS in JS in 2022 & 2023
    </Banner> -->
    <div class="grid-margins flex justify-between items-center h-20">
      <Link
        class="
          hover:opacity-75
          transition-opacity
          duration-300
          ease-in-out
          mobile-nav-link
        "
        :item="{ link: '/', text: 'Homepage (logo)' }"
      >
        <!--
          The onclick handler is in the svg because for some reason in this
          particular link the handler gets called AFTER the routes changes,
          which does not allow us to track the originating path to countly.
          We could parse document.referrer but this works also.
        -->
        <Icon
          name="ipfs-logo"
          class="w-32 h-20 fill-current"
          @click="() => onLinkClick({ link: '/', text: 'Homepage (logo)' })"
        />
      </Link>
      <nav class="hidden md:flex justify-between w-full max-w-lg">
        <Link
          v-for="link in headerLinks"
          :key="link.text"
          :item="{ link: link.link, text: link.text }"
          class="nav-link font-display font-medium relative"
          :on-click="onLinkClick"
        />
      </nav>
      <button
        aria-label="Toggle Mobile Menu"
        class="sm:visible md:hidden mobile-nav-link"
        @click="toggleMobileMenu"
      >
        <div class="hamburger-icon w-8 h-8"></div>
      </button>
    </div>
  </header>
</template>

<script>
import throttle from 'lodash/throttle';
import { mapState } from 'vuex';

import Link from './Link';
import Icon from './Icon.vue';

const headerLinks = [
  { text: 'About', link: '/#why' },
  { text: 'Install', link: '/#install' },
  { text: 'Docs', link: 'https://docs.ipfs.tech/' },
  { text: 'Team', link: '/team' },
  { text: 'Blog', link: 'https://blog.ipfs.tech/' },
  { text: 'Help', link: '/help' },
];

export default {
  name: 'Header',
  components: { Link, Icon },
  props: {
    noHero: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    headerLinks: headerLinks,
    navVisibility: {
      navVisible: false,
      navSticky: false,
    },
  }),
  computed: {
    ...mapState('appState', ['mobileNavActive', 'navHeight']),
  },
  mounted() {
    this.$store.commit(
      'appState/setNavHeight',
      this.$refs.header.getBoundingClientRect().height
    );

    this.throttledFunction = throttle(this.handleScroll, 100);
    window.addEventListener('scroll', this.throttledFunction);
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttledFunction);
  },
  methods: {
    handleScroll() {
      // responsive force: lower on mobile higher on desktop
      const SCROLL_FORCE = ['sm', 'md'].includes(this.$mq) ? 20 : 40;

      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // ignore negative calculations on mobile
      if (currentScrollPosition < 0) {
        return;
      }

      // true if scrolling up
      this.showNav = currentScrollPosition < this.lastScrollPosition;

      const isOffset = currentScrollPosition > this.navHeight / 2;

      const isScrollThresholdMet =
        Math.abs(currentScrollPosition - this.lastScrollPosition) >
        SCROLL_FORCE;

      const currentVisiblity = this.navVisibility.navVisible;

      this.navVisibility = {
        ...this.navVisibility,
        ...{
          navVisible: isOffset
            ? isScrollThresholdMet
              ? this.showNav
              : currentVisiblity
            : false,
          navSticky: isOffset && !this.mobileNavActive,
        },
      };

      this.lastScrollPosition = currentScrollPosition;
    },
    toggleMobileMenu() {
      this.$store.commit('appState/toggleMobileNav', !this.mobileNavActive);
    },
    onLinkClick(item) {
      this.$countly.trackEvent(this.$countly.events.LINK_CLICK_NAV, {
        path: this.$route.path,
        text: item.text,
        href: item.link,
      });
    },
  },
};
</script>

<style scoped lang="postcss">
.navVisible {
  @apply translate-y-0;
}

.navSticky {
  @apply bg-gradient-6;
}

.mobileNavOpen {
  @apply bg-transparent;
  @apply text-white;
}

.nav-link::after {
  content: '';
  height: 1px;
  bottom: -7px;
  background-color: currentColor;
  @apply absolute;
  @apply w-full;
  @apply left-0;
  @apply opacity-0;
  @apply transition-opacity;
  @apply duration-200;
}

.nav-link:hover::after {
  @apply opacity-100;
}

.nav-link.nuxt-link-active::after {
  @apply opacity-100;
}

.hamburger-icon {
  @apply relative;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  background-color: currentColor;
  height: 2px;
  @apply absolute;
  @apply w-full;
  @apply left-0;
  @apply transition-transform;
  @apply duration-300;
  @apply ease-in-out;
  @apply origin-center;
  @apply transform;
}

.hamburger-icon::before {
  top: 10px;
}
.hamburger-icon::after {
  top: 20px;
}

.mobileNavOpen .hamburger-icon::before,
.mobileNavOpen .hamburger-icon::after {
  top: 15px;
}

.mobileNavOpen .hamburger-icon::before {
  @apply rotate-45;
}

.mobileNavOpen .hamburger-icon::after {
  @apply -rotate-45;
}
</style>
