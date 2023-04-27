<template>
  <footer class="relative">
    <div class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue-dark" />
    <div class="absolute lg:overflow-visible overflow-x-hidden bottom-0 right-0">
      <img src="/images/constellations-footer.svg" alt="">
    </div>
    <div class="relative max-w-screen-xl mx-auto lg:p-x-32 px-7 lg:py-32 py-16">
      <div class="grid lg:grid-cols-2 grid-cols-1 text-white">
        <div class="flex lg:flex-row flex-col">
          <img src="/images/ipfs-logo.svg" alt="IPFS logo" class="w-28 mr-8 lg:mb-0 mb-8">
          <div class="text-white">
            <NewsletterForm />
          </div>
        </div>
        <div class="lg:pl-8 pl-0 lg:mt-0 mt-8">
          <div class="flex justify-between gap-4">
            <div>
              <Subhead bold small tight>
                About
              </Subhead>
              <ul class="lg:text-sm text-xs leading-7">
                <li>
                  <AppLink href="https://protocol.ai/">
                    About Protocol Labs
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://blog.ipfs.tech/">
                    Blog &amp; News
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://ipfs.tech/media">
                    Press
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://github.com/ipfs/community/blob/master/code-of-conduct.md">
                    Code of conduct
                  </AppLink>
                </li>
                <li>
                  <AppLink href="https://github.com/ipfs/community/blob/master/CONTRIBUTING.md#security-issues">
                    Security
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#">
                    Browsers
                  </AppLink>
                </li>
              </ul>
            </div>
            <div>
              <Subhead bold small tight>
                Community
              </Subhead>
              <ul class="mt-4 lg:text-sm text-xs leading-7">
                <li>
                  <AppLink href="#">
                    Forums
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#">
                    Office Hours
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#">
                    Hackathons
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#">
                    Developer Grants
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#">
                    Accelerators
                  </AppLink>
                </li>
              </ul>
            </div>
            <div>
              <Subhead bold small tight>
                Resources
              </Subhead>
              <ul class="mt-4 lg:text-sm text-xs leading-7">
                <li>
                  <AppLink href="">
                    Specs
                  </AppLink>
                </li>
                <li>
                  <AppLink href="">
                    Examples
                  </AppLink>
                </li>
                <li>
                  <AppLink href="">
                    Research
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4 justify-end mt-4">
        <AppLink href="http://twitter.com/ipfs">
          <img src="/images/social-twitter.svg" alt="Twitter logo" class="w-8">
        </AppLink>
        <AppLink href="https://github.com/ipfs">
          <img src="/images/social-github.svg" alt="Github logo" class="w-8">
        </AppLink>
        <AppLink href="https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew">
          <img src="/images/social-youtube.svg" alt="Youtube logo" class="w-8">
        </AppLink>
      </div>
    </div>
  </footer>
</template>
