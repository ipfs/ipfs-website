<template>
  <footer class="relative">
    <div class="absolute -z-1 w-full h-full bg-gradient-to-r from-brand-dark to-brand-blue" />
    <div class="relative max-w-screen-xl mx-auto lg:p-x-32 px-7 lg:py-32 py-16">
      <div class="grid grid-cols-2 text-white">
        <div class="flex">
          <img src="/images/ipfs-logo.svg" alt="IPFS logo" class="w-32 mr-6">
          <div class="text-white">
            <NewsletterForm />
          </div>
        </div>
        <div class="pl-8">
          <div class="flex justify-between gap-4">
            <div>
              <Subheading>About</Subheading>
              <ul class="mt-4">
                <li><a href="#">About Protocol Labs</a></li>
                <li><a href="#">Blog &amp; News</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Code of conduct</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Browsers</a></li>
              </ul>
            </div>
            <div>
              <Subheading>Community</Subheading>
              <ul class="mt-4">
                <li><a href="#">Forums</a></li>
                <li><a href="#">Office Hours</a></li>
                <li><a href="#">Hackathons</a></li>
                <li><a href="#">Developer Grants</a></li>
                <li><a href="#">Accelerators</a></li>
              </ul>
            </div>
            <div>
              <Subheading>Resources</Subheading>
              <ul class="mt-4">
                <li><a href="#">Specs</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Research</a></li>
              </ul>
            </div>
          </div>
          <div class="flex gap-4 justify-end">
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
