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

// reactive state
const header = ref('header')
const navVisibility = reactive({
  navVisible: true,
  navSticky: true,
})
const mobileNavActive = ref(false)

function onLinkClick(link: any) {}

function toggleMobileMenu() {
  // header.value.classList.toggle('navVisible')
  // header.value.classList.toggle('mobileNavOpen')
}
</script>

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
        'fixed': !noHero,
        'static': noHero,
        'bg-gradient-6': noHero,
        'navVisible': navVisibility.navVisible,
        'navSticky': navVisibility.navSticky && !mobileNavActive,
        'mobileNavOpen': mobileNavActive,
      },
    ]"
  >
    <!-- <Banner cta="https://blog.ipfs.tech/state-of-ipfs-in-js/">
      💡 Read more about the state of IPFS in JS in 2022 & 2023
    </Banner> -->
    <div class="grid-margins flex justify-between items-center h-20">
      <AppLink
        class="
          hover:opacity-75
          transition-opacity
          duration-300
          ease-in-out
          mobile-nav-link
        "
        href="/" title="IPFS.tech"
      >
        <img class="w-32 h-12 fill-current" src="/images/ipfs-icon.svg">
      </AppLink>
      <nav class="hidden md:flex justify-between w-full max-w-lg">
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
        class="sm:visible md:hidden mobile-nav-link"
        @click="toggleMobileMenu"
      >
        <div class="hamburger-icon w-8 h-8" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.navVisible {
  @apply translate-y-0;
}
.navSticky {
  @apply bg-transparent;
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
