<template>
  <footer class="relative">
    <div class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue" />
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
              <Subhead bold small>About</Subhead>
              <ul class="lg:text-sm text-xs leading-7">
                <li><a href="https://protocol.ai/">About Protocol Labs</a></li>
                <li><a href="https://blog.ipfs.tech/">Blog &amp; News</a></li>
                <li><a href="https://ipfs.tech/media">Press</a></li>
                <li><a href="https://github.com/ipfs/community/blob/master/code-of-conduct.md">Code of conduct</a></li>
                <li><a href="https://github.com/ipfs/community/blob/master/CONTRIBUTING.md#security-issues">Security</a></li>
                <li><a href="#">Browsers</a></li>
              </ul>
            </div>
            <div>
              <Subhead bold small>Community</Subhead>
              <ul class="mt-4 lg:text-sm text-xs leading-7">
                <li><a href="#">Forums</a></li>
                <li><a href="#">Office Hours</a></li>
                <li><a href="#">Hackathons</a></li>
                <li><a href="#">Developer Grants</a></li>
                <li><a href="#">Accelerators</a></li>
              </ul>
            </div>
            <div>
              <Subhead bold small>Resources</Subhead>
              <ul class="mt-4 lg:text-sm text-xs leading-7">
                <li><a href="#">Specs</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Research</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4 justify-end mt-4">
        <a href="http://twitter.com/ipfs">
          <img src="/images/social-twitter.svg" alt="Twitter logo" class="w-8">
        </a>
        <a href="https://github.com/ipfs">
          <img src="/images/social-github.svg" alt="Github logo" class="w-8">
        </a>
        <a href="https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew">
          <img src="/images/social-youtube.svg" alt="Youtube logo" class="w-8">
        </a>
      </div>
    </div>
  </footer>
</template>
