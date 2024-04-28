<script setup lang="ts">
const { data } = await useAsyncData('data', () => queryContent('_data').findOne())
definePageMeta({
  title: 'Community',
})
</script>

<template>
  <div>
    <Hero background="community-hero.jpg">
      <template #title>
        Community: Get in Orbit
      </template>
      <template #subtitle>
        Join our open source ecosystem of ~2,000 active contributors, plus many more developers and users.
      </template>
    </Hero>
    <PageSection bottom-tight>
      <Heading center>
        Connect
      </Heading>
      <Subhead center>
        From the annual IPFS Camp and <AppLink href="https://2023.ipfs-thing.io/">
          IPFS Thing
        </AppLink> conferences to
        working groups and online forums, our community creates out-of-this-world ideas right here on Earth. Join us!
      </Subhead>
      <Grid cols="2">
        <Card background="light">
          <Subhead bold tight>
            Join the conversation
          </Subhead>
          <div class="mx-auto flex justify-between gap-8">
            <div>
              <AppLink href="https://matrix.to/#/#ipfs-space:ipfs.io">
                <img src="~/assets/images/circle-matrix.svg" class="mx-auto my-4">
                <p class="text-center text-xl text-black">
                  Matrix
                </p>
              </AppLink>
            </div>
            <div>
              <AppLink href="https://discord.gg/vj7qWuAyHY">
                <img src="~/assets/images/circle-discord.svg" class="mx-auto my-4">
                <p class="text-center text-xl text-black">
                  Discord
                </p>
              </AppLink>
            </div>
            <div>
              <AppLink href="https://filecoin.io/slack">
                <img src="~/assets/images/circle-slack.svg" class="mx-auto my-4 block">
                <p class="text-center text-xl text-black">
                  Slack
                </p>
              </AppLink>
            </div>
          </div>
        </Card>
        <Card background="light">
          <ImageSplit image="ipfs-logo.svg" image-width="140" tight>
            <Subhead bold tight>
              Discuss topics in-depth
            </Subhead>
            <p class="text-xl text-black">
              Check out the <AppLink href="https://discuss.ipfs.tech/">
                IPFS Forums
              </AppLink> to discuss open problems, share ideas, and get help from the
              community.
            </p>
          </ImageSplit>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Join a community event
          </Subhead>
          <img src="~/assets/images/circle-star.svg" class="mx-auto my-6">
          <p class="text-xl text-black">
            Meet other members of the community virtually or in-person by
            subscribing
            to our <AppLink href="https://lu.ma/ipfs">
              event calendar
            </AppLink>.
          </p>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Keep up with what's new
          </Subhead>
          <p class="text-xl text-black">
            Get the latest on news about what's happening in the IPFS ecosystem by
            subscribing to our <AppLink href="https://ipfs.fyi/newsletter">
              newsletter
            </AppLink> and
            <AppLink href="https://www.youtube.com/c/IPFSbot/videos">
              YouTube channel
            </AppLink>.
          </p>
        </Card>
      </Grid>
      <div class="mt-28">
        <Ribbon
          :images="[
            'ribbon-community-1.jpg',
            'ribbon-community-2.jpg',
            'ribbon-community-3.jpg',
            'ribbon-community-4.jpg',
            'ribbon-community-5.jpg',
            'ribbon-community-6.jpg',
            'ribbon-community-7.jpg',
            'ribbon-community-8.jpg',
          ]"
        />
      </div>
    </PageSection>
    <PageSection id="meetups-wgs" dark-gradient>
      <div class="text-white">
        <Heading center>
          Events And Working Groups
        </Heading>
        <Subhead center>
          Help us untangle the thorniest problems facing the distributed web (and meet some bleeding edge thinkers) by joining one of our global working groups.
        </Subhead>
        <iframe src="https://lu.ma/embed/calendar/cal-85sH6jbua7BU1uu/events" width="100%" height="600" frameborder="0" class="rounded-md bg-transparent" allowfullscreen aria-hidden="false" tabindex="0" />
      </div>
    </PageSection>
    <PageSection>
      <Heading center>
        Community Voices
      </Heading>
      <div class="columns-2 gap-8 md:columns-3">
        <TwitterCard
          v-for="(card, index) in data?.twitterCards"
          :key="index"
          v-bind="card"
        />
      </div>
    </PageSection>
    <PageSection dark-gradient bottom-tight overlay="constellations-telescope.svg" overlay-position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-white">
        <Heading center>
          The Next Frontiers
        </Heading>
        <Subhead center>
          We're shooting for the stars, and we can't do it without your help. Here are some
          of the unknowns we've yet to discover:
        </Subhead>
        <div class="telescope relative mb-16 lg:mt-30">
          <img src="~/assets/images/constellation-telescope.svg" class="mx-auto py-10">
          <div class="relative inset-0 flex flex-col gap-4 lg:absolute">
            <p class="lg:absolute lg:top-0 lg:w-64">
              How can we introduce privacy and encryption functionality to IPFS?
            </p>
            <p class="lg:absolute lg:right-0 lg:top-0 lg:w-80">
              How do we enable connectivity between every platform IPFS runs on, from satellites to lower powered IoT devices?
            </p>
            <p class="lg:absolute lg:top-60 lg:w-80">
              What data structures and recommendations can we create to help other developers?
            </p>
            <p class="lg:absolute lg:right-0 lg:top-60 lg:w-56">
              How can we invent a more efficient peer-to-peer data transfer protocol?
            </p>
          </div>
        </div>
        <Card background="dark">
          <Subhead center tight>
            Interested in solving these challenges together? Join a <AppLink href="https://lu.ma/ipfs">
              community event
            </AppLink>, a <AppLink to="#meetups-wgs">
              working group
            </AppLink>, or <AppLink href="https://discuss.ipfs.tech">
              forum
            </AppLink> discussion.
          </Subhead>
        </Card>
      </div>
    </PageSection>
  </div>
</template>
