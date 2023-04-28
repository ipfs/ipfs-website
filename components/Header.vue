<script setup lang='ts'>
defineProps({
  noHero: Boolean,
})

const headerLinks = [
  { text: 'Community', link: '/community' },
  { text: 'Developers', link: '/developers' },
  { text: 'Docs', link: 'https://docs.ipfs.tech/' },
  { text: 'Blog', link: 'https://blog.ipfs.tech/' },
]

// state
const { x, y } = useWindowScroll()
const header = ref('header')
const nav = reactive({
  isVisible: true,
  isSticky: true,
  isTransparent: true,
  threshold: 10,
  offset: 300,
  mobileActive: false,
})

// watch scroll position and update nav visibility state (throttled)
watch([x, y], useThrottleFn(([x, y], [px, py]) => {
  if (y > nav.threshold)
    nav.isTransparent = false
  else if (y <= nav.offset)
    nav.isTransparent = true

  if (y > nav.offset && y > py + nav.threshold)
    nav.isVisible = false
  else if (y <= nav.offset)
    nav.isVisible = true
  else if (y < py - nav.threshold)
    nav.isVisible = true
}, 100))

function onLinkClick(link: any) {}

function toggleMobileMenu() {
  nav.mobileActive = !nav.mobileActive
}
</script>

<template>
  <header
    ref="header"
    class="top-0 z-50 w-full transform text-white transition duration-300 ease-out"
    :class="[
      nav.isTransparent ? 'bg-transparent' : 'bg-brand-blueDark/90 backdrop-blur-md',
      {
        '-translate-y-full': nav.isSticky,
        'fixed': !noHero,
        'static': noHero,
        'bg-transparent': nav.isTransparent,
        'isVisible': nav.isVisible,
        'mobileNavOpen': nav.mobileActive,
      },
    ]"
  >
    <!-- <Banner cta="https://blog.ipfs.tech/state-of-ipfs-in-js/">
      💡 Read more about the state of IPFS in JS in 2022 & 2023
    </Banner> -->
    <div class="h-20 flex items-center justify-between grid-margins">
      <AppLink
        class="mobile-nav-link transition-opacity duration-300 ease-in-out hover:opacity-75"
        href="/" title="IPFS.tech"
      >
        <img class="h-12 w-32 fill-current" src="/images/ipfs-icon.svg">
      </AppLink>
      <nav class="hidden max-w-lg w-full justify-between md:flex">
        <AppLink
          v-for="link in headerLinks"
          :key="link.text"
          :href="link.link"
          class="nav-link display relative"
        >
          {{ link.text }}
        </AppLink>
      </nav>
      <button
        aria-label="Toggle Mobile Menu"
        class="mobile-nav-link sm:visible md:hidden"
        @click="toggleMobileMenu"
      >
        <div class="hamburger-icon h-8 w-8" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.isVisible {
  @apply translate-y-0;
}

.mobileNavOpen {
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
