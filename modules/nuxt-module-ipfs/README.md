# Nuxt Module for IPFS Gateway Routing

## Overview

A Nuxt module that enables nuxt routing for both the intended path and IPFS gateway URLs, which include a CID (hash) of the asset.

Enabling this plugin for Nuxt in **static mode** will allow resources, including pages, to be accessible via two routes. For example:

- `foo.com/`
- `gateway.ipfs.io/ipfs/Qma....AbFd/`

Subsequently, resources and other pages use paths relative to those bases:

- `foo.com/bar`
- `gateway.ipfs.io/ipfs/Qma....AbFd/bar`

or

- `foo.com/style.css`
- `gateway.ipfs.io/ipfs/Qma....AbFd/style.css`

## Installation

_`npm` package coming soon. Manual installation required for now._

1. Download this repo, extract it and put the resulting folder into your `modules` directory in your Nuxt project
2. Add `target: 'static'` to your `nuxt.config.js`
3. Add the module folder name to the `modules` array in `nuxt.config.js`

**nuxt.config.js**

```js
export default {
  target: 'static',
  modules: ['~/modules/nuxt-module-ipfs']
};
```

## Usage

_Support for the `assets` directory potentially coming in the future_

All image assets must be placed in the `static` directory, _not_ the `assets` directory.

All image assets must be wrapped using the included `$relativity()` global method.

**component.vue**

```vue
<template>
  <nuxt-link :to="/duck">
    <img :src="$relativity('/images/duck.jpg')" />
  </nuxt-link>
</template>
```

## Additional Cases

_To be added_

#### Canonicalization and SEO

Additionally, it may be useful in the future to add a canonicalization option, to semantically declare one page as a duplicate of the other, and direct third party entities like bots to the correct resource. This would be accomplished by injecting a tag into `<head>` of the version that is considered secondary, which would look like

```html
<link rel="canonical" href="foo.com/bar" />
```

Since IPFS gateway URLs were an older (and by some standards _legacy_) implementation, this tag would typically be added to the IPFS Gateway URLs only.

## Roadmap

- [ ] Update hook to clear `WARN` message: `render:routeContext(nuxt) is deprecated, Please use vue-renderer:ssr:context(context)`
- [ ] Add checker for `target: static`
- [ ] Add checker for `publicPath` and `router.base` (values _must not_ be set in `nuxt.config.js`)
- [ ] Construct and inject `rel="canonical"` tag
- [ ] Make the favicon path relative
- [ ] Make `200.html` path relative
