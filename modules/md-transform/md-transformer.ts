// ts-expect-error no types for this
import { defineTransformer, transformContent } from '@nuxt/content/transformers'

export default defineTransformer({
  name: 'md-transformer',
  extensions: ['.yml', '.yaml'],
  async parse(id: any, rawContent: any) {
    const yamlObject = await transformContent(id, rawContent)

    if (yamlObject.twitterCards) {
      for (const key in yamlObject) {
        if (key === 'post') {
          console.log('yamlObject', yamlObject[key])
          // transform the post
          yamlObject[key] = await transformContent('content:dummy.md', yamlObject[key])
        }
      }
    }
    // yamlObject.post = await transformContent('content:dummy.md', yamlObject.post)
    return yamlObject
  },
})
