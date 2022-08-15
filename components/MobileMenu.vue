<template>
  <transition name="transition-content" @after-enter="afterEnter">
    <div
      v-if="mobileNavActive"
      class="
        mobile-nav
        bg-gradient-6
        grid grid-cols-12
        fixed
        h-full
        top-0
        inset-x-0
        text-white
        z-40
      "
    >
      <div class="col-span-10 col-start-2 flex flex-col py-8">
        <div class="flex-grow justify-center flex flex-col">
          <nav>
            <h1 v-for="page in mobileNavLinks" :key="page.text" class="mb-3">
              <Link
                class="mobile-nav-link"
                :item="page"
                :on-click="onLinkClick"
              />
            </h1>
          </nav>
        </div>
        <SocialLinks class="flex" tracking="mobile-menu" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
import SocialLinks from './SocialLinks';

const mobileNavLinks = [
  { text: 'About', link: '/#why' },
  { text: 'Install', link: '/#install' },
  { text: 'Docs', link: 'https://docs.ipfs.tech/' },
  { text: 'Team', link: '/team' },
  { text: 'Blog', link: 'https://blog.ipfs.tech/' },
  { text: 'Help', link: '/help' },
];

export default {
  name: 'MobileMenu',
  components: {
    SocialLinks,
  },
  data: () => ({
    tabItems: [],
    mobileNavLinks: mobileNavLinks,
  }),
  computed: {
    ...mapState('appState', ['mobileNavActive', 'routerLocation']),
  },
  watch: {
    routerLocation() {
      if (this.mobileNavActive) {
        this.$store.commit('appState/toggleMobileNav', false);
      }
    },
  },
  destroyed() {
    window.removeEventListener('keydown', this.trapFocus);
  },
  methods: {
    closeMenu() {
      this.$store.commit('appState/toggleMobileNav', false);
    },
    afterEnter() {
      window.addEventListener('keydown', this.trapFocus);
    },
    trapFocus(e) {
      const tabItems = [
        ...Array.from(document.querySelectorAll('.mobile-nav-link')),
        ...Array.from(this.$el.querySelectorAll('A, button')),
      ];

      const keyCode = e.keyCode || e.which;
      const ESC_KEY = 27;
      const TAB_KEY = 9;

      if (keyCode === ESC_KEY) {
        this.closeMenu();
      }

      if (keyCode !== TAB_KEY) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === tabItems[0]) {
          tabItems[tabItems.length - 1].focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === tabItems[tabItems.length - 1]) {
          tabItems[0].focus();
          e.preventDefault();
        }
      }
    },
    onLinkClick(item) {
      this.$store.commit('appState/toggleMobileNav', false);

      this.$countly.trackEvent(this.$countly.events.LINK_CLICK_NAV, {
        path: this.$route.path,
        text: item.text,
        href: item.link,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.mobile-nav-link {
  position: relative;
}

.mobile-nav-link.nuxt-link-active::after {
  content: '';
  height: 1px;
  bottom: -2px;
  background-color: currentColor;
  @apply absolute;
  @apply w-full;
  @apply left-0;
  @apply transition-opacity;
  @apply duration-200;
}

.transition-content-enter-active,
.transition-content-leave-active {
  @apply transition transform duration-300 ease-in-out opacity-100 scale-100;
}
.transition-content-enter,
.transition-content-leave-to {
  @apply opacity-0 scale-105;
}
</style>
