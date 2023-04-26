<template>
  <div>
    <seo-tags
      title="IPFS Powers the Distributed Web"
      description="The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."
    />
    <Hero background="community-hero.jpg">
      <template #title>
        Community: Get in Orbit
      </template>
      <template #subtitle>
        IPFS is made of you – our open source ecosystem of nearly 2,000 active contributors and many more developers and users.
      </template>
    </Hero>
    <PageSection>
      <Heading center>
        Connect
      </Heading>
      <p class="text-xl mb-12">
        From the annual IPFS Camp and IPFS Thing conferences to working groups and online forums, our community creates out-of-this-world ideas right here on Earth. Join us!
      </p>
      <Grid cols="2">
        <Card background="light">
          <Subhead bold tight>
            Contribute
          </Subhead>
          <p class="text-xl text-black text-center">
            Join the conversation
          </p>
          <div class="grid grid-cols-3 mx-auto max-w-xs">
            <div>
              <img src="/images/circle-star.svg" class="mx-auto my-4">
              <p class="text-xl text-black text-center">
                Slack
              </p>
            </div>
            <div>
              <img src="/images/circle-star.svg" class="mx-auto my-4">
              <p class="text-xl text-black text-center">
                Slack
              </p>
            </div>
            <div>
              <img src="/images/circle-star.svg" class="mx-auto my-4">
              <p class="text-xl text-black text-center">
                Slack
              </p>
            </div>
          </div>
        </Card>
        <Card background="light">
          <ImageSplit image="ipfs-logo.svg" image-width="140" tight>
            <Subhead bold tight>
              Discuss Open Problems
            </Subhead>
            <p class="text-xl text-black">
              Check out the IPFS Forums to discuss open problems, share ideas, and get help from the community.
            </p>
          </ImageSplit>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Meet the Community
          </Subhead>
          <img src="/images/circle-star.svg" class="mx-auto my-6">
          <p class="text-xl text-black">
            Subscribe to our community calendar to attend an upcoming event.
          </p>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Tune In To What's New
          </Subhead>
          <p class="text-xl text-black">
            Get the latest on news in the IPFS ecosystem by subscribing to our newsletter  or watching This Month in IPFS livestream.
          </p>
        </Card>
      </Grid>
    </PageSection>
  </div>
</template>
