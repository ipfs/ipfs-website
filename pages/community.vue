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
        IPFS is made of you – our open source ecosystem of nearly 2,000 active contributors and many more developers and
        users.
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
          <div class="mx-auto max-w-xs flex justify-between">
            <div>
              <AppLink href="https://filecoin.io/slack">
                <img src="/images/circle-slack.svg" class="mx-auto my-4 block">
                <p class="text-center text-xl text-black">
                  Slack
                </p>
              </AppLink>
            </div>
            <div>
              <AppLink href="https://discord.gg/vj7qWuAyHY">
                <img src="/images/circle-discord.svg" class="mx-auto my-4">
                <p class="text-center text-xl text-black">
                  Discord
                </p>
              </AppLink>
            </div>
            <div>
              <AppLink href="https://matrix.to/#/#lobby:ipfs.io">
                <img src="/images/circle-matrix.svg" class="mx-auto my-4">
                <p class="text-center text-xl text-black">
                  Matrix
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
            Meet the Community
          </Subhead>
          <img src="/images/circle-star.svg" class="mx-auto my-6">
          <p class="text-xl text-black">
            Meet other members of the community virtually or in-person by <AppLink href="https://lu.ma/ipfs">
              subscribing
            </AppLink> to our event calendar.
          </p>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Keep up with what's new
          </Subhead>
          <p class="text-xl text-black">
            Get the latest on news about what's happening in the IPFS ecosystem by <AppLink href="https://share.hsforms.com/1-wT-kbwkRw-4HLsYY3nLIgnkivw">
              subscribing to our newsletter
            </AppLink> or watching
            This Month in <AppLink href="https://www.youtube.com/@IPFSbot/videos">
              IPFS livestream
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
    <PageSection dark-gradient>
      <div class="text-white">
        <Heading center>
          Meetups And Working Groups
        </Heading>
        <Subhead center>
          Help us untangle the thorniest problems facing the distributed web (and meet some bleeding edge thinkers) by joining one of our global working groups.
        </Subhead>
        <Grid>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/IP-Office-Hours">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Interplanetary Office Hours
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/ipfs-implementers">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                IPFS Implementers
              </h3>
              <p>
                Biweekly working group for people who create and maintain different IPFS implementations
              </p>
            </ImageSplit>
            <p>What’s covered: IPFS improvement proposals (IPIPS), protocol bugs, feedback.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://calendar.google.com/calendar/u/0/embed?src=libp2p.io_0q9682i3te7eanhe9q7ae1c58g@group.calendar.google.com">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                libp2p Implementers
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Learn more" cta-link="https://ipld.io/docs/intro/community/">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                IPLD Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Lear more" cta-link="https://github.com/wnfs-wg">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                WNFS Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/ipvm">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                IPVM Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/8kk9i628">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Move the Bytes Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/ipfs-routing-wg">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Content Routing Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
          <ZebraCard cta-label="Meeting Calendar" cta-link="https://lu.ma/ipfs-network-measurements">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                ProbeLab Office Hours - IPFS Network Measurements
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
          </ZebraCard>
        </Grid>
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
          <img src="/images/constellation-telescope.svg" class="mx-auto py-10">
          <div class="relative inset-0 lg:absolute">
            <p class="text-xl lg:absolute lg:top-0 lg:w-64">
              How can we introduce privacy and encryption functionality to IPFS?
            </p>
            <p class="text-xl lg:absolute lg:right-0 lg:top-0 lg:w-80">
              How do we enable connectivity between every platform IPFS runs on, from satellites to lower powered IoT devices?
            </p>
            <p class="text-xl lg:absolute lg:top-60 lg:w-80">
              What data structures and recommendations can we create to help other developers?
            </p>
            <p class="text-xl lg:absolute lg:right-0 lg:top-60 lg:w-56">
              How can we invent a more efficient peer-to-peer data transfer protocol?
            </p>
          </div>
        </div>
        <Card background="dark">
          <Subhead center tight>
            Interested in solving these challenges together? Join a community event, a working group, or forum discussion.
          </Subhead>
        </Card>
      </div>
    </PageSection>
  </div>
</template>
