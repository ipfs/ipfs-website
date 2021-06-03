<template>
  <div class="flex items-center text-sm">
    <span>
      <a
        href="https://protocol.ai"
        target="_blank"
        class="mr-1 inline-block align-middle"
        @click="(event) => onClick(event, true)"
      >
        <svg-icon
          name="logo-icon"
          title="Protocol Labs"
          class="w-4 h-4 fill-current"
        />
      </a>
      ©
      <a
        class="text-blueGreenLight hover:underline"
        href="https://protocol.ai"
        target="_blank"
        @click="onClick"
      >
        Protocol Labs
      </a>
      | Except as
      <a
        class="text-blueGreenLight hover:underline"
        href="https://protocol.ai/legal/"
        target="_blank"
        @click="onClick"
      >
        noted</a
      >, content licensed
      <a
        class="text-blueGreenLight hover:underline"
        href="https://creativecommons.org/licenses/by/3.0/"
        target="_blank"
        @click="onClick"
        >CC-BY 3.0</a
      >
      |
      <a
        class="text-blueGreenLight hover:underline"
        href="https://protocol.ai/legal/#terms-of-service"
        target="_blank"
        @click="onClick"
        >Terms</a
      >
      |
      <a
        class="text-blueGreenLight hover:underline"
        href="https://protocol.ai/legal/#privacy-policy"
        target="_blank"
        @click="onClick"
        >Privacy</a
      >
      |
      <Link
        class="text-blueGreenLight hover:underline"
        :item="{ link: '/legal', text: 'DMCA' }"
        :on-click="onLinkClick"
      />
    </span>
  </div>
</template>

<script>
import Link from './Link';

export default {
  name: 'FooterLegal',
  components: {
    Link,
  },
  methods: {
    onClick(event, isSvg) {
      const href = isSvg
        ? event.srcElement.parentElement.href
        : event.srcElement.href;

      const text = isSvg ? event.srcElement.textContent : event.srcElement.text;

      this.$countly.trackEvent(this.$countly.events.LINK_CLICK_FOOTER, {
        path: this.$route.path,
        text: text.trim(),
        href,
      });
    },
    onLinkClick(item) {
      this.$countly.trackEvent(this.$countly.events.LINK_CLICK_FOOTER, {
        path: this.$route.path,
        text: item.text.trim(),
        href: item.link,
      });
    },
  },
};
</script>
