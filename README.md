# IPFS Website (ipfs.tech)


[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg)](https://protocol.ai)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?)](https://ipfs.tech/)
[![](https://img.shields.io/badge/framework-Nuxt-green.svg)](https://nuxtjs.org/)
[![](https://img.shields.io/badge/deployed%20on-Fleek-ff69b4.svg)](https://fleek.co/)

![Image of IPFS website displayed on a laptop](https://user-images.githubusercontent.com/1507828/121082054-c3df1480-c79a-11eb-89f0-681f41ec705c.png)

**This repository contains code and content for the [official IPFS Project website](https://ipfs.tech)**, located at https://ipfs.tech. This site acts as a high-level overview of the IPFS project, offering valuable introductory information and next-steps pathways for prospective and current IPFS users and developers, members of the press, and more.

Please note that some sites closely related to this primary IPFS website have their own repos:
- [IPFS Blog & News](https://github.com/ipfs/ipfs-blog)
- [IPFS Ecosystem Directory](https://github.com/ipfs/ecosystem-directory)
- [IPFS Documentation](https://github.com/ipfs/ipfs-docs)

## For site developers

### Pre requisites

```bash
# install node LTS/Current
https://nodejs.org/en/download/

# enable corepack in node > v16.17
corepack enable

# install deps
pnpm i
```

### Run developer mode locally

To build a local copy, run the following:

```bash
# serve with hot reload at localhost:3000
pnpm dev

```

### Build for production

```bash
# build optimised static site
pnpm generate

# launch a webserver to preview the site
pnpm preview
```

### PR and preview

Once you're happy with your local changes, please make a PR **against the `main` branch**. Including detailed notes on your PR - particularly screenshots to depict any changes in UI - will help speed up approval and deployment.

All PRs against `main` automatically generate Fleek previews to make it easier to "check your work". You can view your PR's preview by clicking `Details` in the `fleek/build` check at the bottom of your PR page:<br/>
![image](https://user-images.githubusercontent.com/1507828/110034382-9dbb5b80-7cf7-11eb-89a4-7772970677d3.png)

A reviewer will be by shortly to have a look!

## Maintainers

This site's codebase is under active maintenance by members of the core [IPFS team](https://ipfs.tech/team/).

## License

© Protocol Labs | Code is licensed with the [MIT](LICENSE) License. Except as noted, other content licensed [CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/us/).
