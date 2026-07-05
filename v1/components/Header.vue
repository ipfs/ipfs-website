<script setup lang='ts'>
defineProps({
  noHero: Boolean,
})

const headerLinks = [
  { text: 'Community', link: '/community/' },
  { text: 'Developers', link: '/developers/' },
  { text: 'Docs', link: '//docs.ipfs.tech/' },
  { text: 'Blog', link: '//blog.ipfs.tech/' },
]

const mobileLinks = [
  { text: 'About', link: '/' },
  ...headerLinks,
]

// state
const { x, y } = useWindowScroll()
const header = ref('header')
const nav = reactive({
  isVisible: true,
  isSticky: true,
  isTransparent: true,
  threshold: 5,
  offset: 300,
  mobileActive: false,
})

// watch scroll position and update nav visibility state (throttled)
watch([x, y], useThrottleFn(([x, y], [px, py]) => {
  // set nav transparency
  if (y > nav.threshold)
    nav.isTransparent = false
  else if (y <= nav.offset)
    nav.isTransparent = true
  // set nav sticky
  if (y > nav.offset && y > py + nav.threshold)
    nav.isVisible = false
  else if (y <= nav.offset)
    nav.isVisible = true
  else if (y < py - nav.threshold)
    nav.isVisible = true
}, 30))

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
      noHero ? 'static !bg-brand-blueDark' : 'fixed ',
      {
        '-translate-y-full': nav.isSticky,
        'is-visible': nav.isVisible,
        'mobile-nav-open': nav.mobileActive,
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
        <img class="h-12 w-32 fill-current" src="~/assets/images/ipfs-icon.svg">
      </AppLink>
      <nav class="hidden max-w-lg w-full justify-between md:flex">
        <AppLink
          v-for="link in headerLinks"
          :key="link.text"
          :href="link.link"
          class="nav-link relative text-sm font-semibold tracking-wide"
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
  <MobileMenu :active="nav.mobileActive" :links="mobileLinks" class="bg-brand-blueDark/90 text-white backdrop-blur-md" @navigate="nav.mobileActive = false" />
</template>

<style scoped lang="postcss">
.is-visible {
  @apply translate-y-0;
}

.mobile-nav-open {
  @apply text-white;
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

.mobile-nav-open .hamburger-icon::before,
.mobile-nav-open .hamburger-icon::after {
  top: 15px;
}

.mobile-nav-open .hamburger-icon::before {
  @apply rotate-45;
}

.mobile-nav-open .hamburger-icon::after {
  @apply -rotate-45;
}
</style>
