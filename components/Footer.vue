<template>
  <footer class="relative">
    <div class="absolute h-full w-full from-brand-dark to-brand-blue-dark bg-gradient-to-r -z-1" />
    <div class="absolute bottom-0 right-0 overflow-x-hidden lg:overflow-visible">
      <img src="~/assets/images/constellations-footer.svg" alt="">
    </div>
    <div class="relative mx-auto max-w-screen-xl px-7 py-16 lg:p-x-32 lg:py-32">
      <div class="grid grid-cols-1 text-white lg:grid-cols-2">
        <div class="flex flex-col lg:flex-row">
          <img src="~/assets/images/ipfs-logo.svg" alt="IPFS logo" class="mb-8 mr-8 w-28 lg:mb-0">
          <div class="text-white">
            <NewsletterForm />
          </div>
        </div>
        <div class="mt-8 pl-0 lg:mt-0 lg:pl-8">
          <div class="flex justify-between gap-4">
            <div>
              <Subhead bold small tight>
                About
              </Subhead>
              <ul class="text-xs leading-7 lg:text-sm">
                <li>
                  <AppLink href="https://blog.ipfs.tech/">
                    Blog &amp; News
                  </AppLink>
                </li>
                <li>
                  <AppLink href="/media">
                    Press Kit
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://github.com/ipfs/community/blob/master/code-of-conduct.md">
                    Code of Conduct
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://github.com/ipfs/community/blob/master/CONTRIBUTING.md#security-issues">
                    Security
                  </AppLink>
                </li>
              </ul>
            </div>
            <div>
              <Subhead bold small tight>
                Community
              </Subhead>
              <ul class="mt-4 text-xs leading-7 lg:text-sm">
                <li>
                  <AppLink href="https://discuss.ipfs.tech/">
                    Forums
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://ipfs.fyi/office">
                    Office Hours
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://hackathons.filecoin.io/">
                    Hackathons
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://github.com/ipfs/devgrants">
                    Developer Grants
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://ipfs.fyi/accelerators">
                    Accelerators
                  </AppLink>
                </li>
              </ul>
            </div>
            <div>
              <Subhead bold small tight>
                Resources
              </Subhead>
              <ul class="mt-4 text-xs leading-7 lg:text-sm">
                <li>
                  <AppLink href="https://specs.ipfs.tech/">
                    Specs
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://docs.ipfs.tech/case-studies/arbol/">
                    Case Studies
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://docs.ipfs.tech/concepts/further-reading/academic-papers/">
                    Research
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 flex justify-end gap-4">
        <AppLink href="http://twitter.com/ipfs">
          <img src="~/assets/images/social-twitter.svg" alt="Twitter logo" class="w-8">
        </AppLink>
        <AppLink href="https://github.com/ipfs">
          <img src="~/assets/images/social-github.svg" alt="Github logo" class="w-8">
        </AppLink>
        <AppLink href="https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew">
          <img src="~/assets/images/social-youtube.svg" alt="Youtube logo" class="w-8">
        </AppLink>
      </div>
    </div>
  </footer>
</template>
