import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'md-transform',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve())

    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolve('./md-transformer.ts'))
    })
  },
})
