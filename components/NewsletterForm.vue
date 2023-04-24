<script>
export default {
  props: {},
  data: () => ({
    email: null,
  }),
  methods: {
    onSubmit() {
      /* this.$countly.trackEvent(this.$countly.events.NEWSLETTER_SUBSCRIBE); */
    },
  },
}
</script>

<template>
  <div id="newsletter-form">
    <Subhead bold small>Stay informed</Subhead>
    <p class="text-sm mb-8 ">
      Sign up for the IPFS Weekly newsletter (<a class="text-blueGreenLight hover:underline" href="https://blog.ipfs.tech/?tags=weekly">example</a>) for the latest on releases, upcoming developments, community events, and more.
    </p>
    <form
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      action="https://ipfs.us4.list-manage.com/subscribe/post?u=25473244c7d18b897f5a1ff6b&amp;id=cad54b2230"
      method="post"
      target="_blank"
      @submit="onSubmit"
    >
      <div id="mc_embed_signup_scroll">
        <div class="relative mb-3">
          <input
            id="mce-EMAIL"
            v-model="email"
            required
            type="email"
            aria-label="Email Address"
            class="text-black rounded-full w-full h-8 pr-36 pl-3 py-2"
            placeholder="email@your.domain"
            name="EMAIL"
          >
          <div class="-ml-8">
            <input
              id="mc-embedded-subscribe"
              type="submit"
              value="Subscribe"
              name="subscribe"
              class="btn btn-primary absolute -right-px top-0 h-8 py-0 opacity-90"
            >
          </div>
        </div>
        <label class="pt-2 col-start-1 col-span-2" for="gdpr_28879">
          <input
            id="gdpr_28879"
            type="checkbox"
            class=""
            required
            name="gdpr[28879]"
            value="Y"
          ><span class="pl-2">Please send me the newsletter</span>
        </label>
      </div>
      <div id="mergeRow-gdpr">
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input type="text" name="b_25473244c7d18b897f5a1ff6b_cad54b2230" tabindex="-1" value="">
        </div>
      </div>
    </form>
  </div>
</template>
