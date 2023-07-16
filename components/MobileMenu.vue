<script setup lang="ts">
interface Props {
  active: boolean
  links: { text: string; link: string }[]
}
defineProps<Props>()
defineEmits(['navigate'])
</script>

<template>
  <Transition name="transition-content">
    <div
      v-if="active"
      class="mobile-nav fixed inset-x-0 top-0 z-40 grid grid-cols-12 h-full"
    >
      <div class="col-span-10 col-start-2 flex flex-col py-8">
        <div class="flex flex-grow flex-col justify-center">
          <nav>
            <h1 v-for="{ text, link } in links" :key="link" class="mb-3">
              <AppLink
                class="mobile-nav-link"
                :href="link"
                @click="$emit('navigate')"
              >
                {{ text }}
              </AppLink>
            </h1>
          </nav>
        </div>
        <SocialLinks class="flex" @navigate="$emit('navigate')" />
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.mobile-nav-link {
  position: relative;
  @apply text-3xl leading-normal font-sans;
}

.transition-content-enter-active,
.transition-content-leave-active {
  @apply transition transform duration-300 ease-in-out opacity-100 scale-100;
}
.transition-content-enter-from,
.transition-content-leave-to {
  @apply opacity-0 scale-105;
}
</style>
