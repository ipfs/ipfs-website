<template>
  <NuxtLink
    v-if="isInternal"
    :to="link"
    :exact="exact"
    @click.native="onClick(item)"
  >
    <slot>{{ item.text }}</slot>
  </NuxtLink>
  <a v-else :href="link" :target="target" :rel="rel" @click="onClick(item)">
    <slot>{{ item.text }}</slot>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@/assets/js/util';

export default {
  name: 'Link',
  props: {
    item: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    link() {
      return ensureExt(this.item.link);
    },
    exact() {
      return this.link === '/';
    },
    isNonHttpURI() {
      return isMailto(this.link) || isTel(this.link);
    },
    isBlankTarget() {
      return this.target === '_blank';
    },
    isInternal() {
      return !isExternal(this.link) && !this.isBlankTarget;
    },
    target() {
      if (this.isNonHttpURI) {
        return null;
      }

      if (this.item.target) {
        return this.item.target;
      }

      return isExternal(this.link) ? '_blank' : '';
    },
    rel() {
      if (this.isNonHttpURI) {
        return null;
      }

      if (this.item.rel) {
        return this.item.rel;
      }

      return this.isBlankTarget ? 'noopener noreferrer' : '';
    },
  },
};
</script>
