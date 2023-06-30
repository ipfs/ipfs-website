<script setup lang="ts">
const { data } = await useAsyncData('data', () => queryContent('_data').findOne())
</script>

<template>
  <div>
    <Hero background="star-aurora.jpg" overlay="constellations-hero.svg" tall>
      <template #title>
        Discover What's<br>
        Out There with IPFS
      </template>
      <template #subtitle>
        IPFS is an open system to manage data without a central server
      </template>
    </Hero>
    <PageSection>
      <ImageSplit image="ipfs-logo.svg" image-class="w-80 pl-12">
        <Heading>
          A Universe Of Uses
        </Heading>
        <Subhead>How IPFS is Used in Production</Subhead>
        <p class="text-xl">
          IPFS's versatility shines across different industries – making it the multi-purpose tool for the decentralized age.
        </p>
      </ImageSplit>
    </PageSection>
    <PageSection tight full-width class="min-h-96">
      <CarouselCards :items="data?.useCards" button-label="Read their story" />
    </PageSection>
    <PageSection>
      <Heading center>
        Why IPFS?
      </Heading>
      <p class="mb-12 text-xl">
        Our peer-to-peer content delivery network is built around content addressing: Store, retrieve, and locate data based on the guts of its content vs. its name or location.
      </p>
      <Grid>
        <Card center>
          <img src="/images/constellation-open.svg" class="mx-auto mb-8">
          <h3 class="mb-4 text-2xl text-brand-teal-dark">
            Open
          </h3>
          <p class="mb-8 text-xl">
            The IPFS network is distributed and participatory, which reduces data silos from central servers.
          </p>
        </Card>
        <Card center>
          <img src="/images/constellation-verifiable.svg" class="mx-auto mb-8">
          <h3 class="mb-4 text-2xl text-brand-teal-dark">
            Verifiable
          </h3>
          <p class="mb-8 text-xl">
            The integrity of all data is verified using hash functions, so you can trust that you always get the data you’re looking for.
          </p>
        </Card>
        <Card center>
          <img src="/images/constellation-resilient.svg" class="mx-auto mb-8">
          <h3 class="mb-4 text-2xl text-brand-teal-dark">
            Resilient
          </h3>
          <p class="mb-8 text-xl">
            Files and data can be stored across multiple nodes, which keeps content at the ready even during critical outages
          </p>
        </Card>
      </Grid>
      <div class="mx-auto table">
        <Btn href="/developers" primary>
          How it works
        </Btn>
      </div>
    </PageSection>
    <PageSection dark-gradient text-white overlay="constellations-home-get-started.svg" overlay-position="right-0">
      <Heading center>
        Get Started
      </Heading>
      <p class="mb-16">
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      </p>
      <Grid cols="2">
        <Card>
          <ImageSplit image="constellation-peer.svg" tight>
            <h3 class="mb-4 text-xl text-black">
              Build peer-to-peer apps with IPFS
            </h3>
            <p class="text-lg text-black">
              Join thousands of developers who choose IPFS to build software that's open, verifiable, and resilient.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Developers Page" link="#" />
            <ListLink label="Documentation" link="https://docs.ipfs.tech/" />
            <ListLink label="Read Case Studies" link="https://docs.ipfs.tech/case-studies/arbol/" />
          </ListLinks>
        </Card>
        <Card>
          <ImageSplit image="constellation-tooling.svg" tight>
            <h3 class="mb-4 text-xl text-black">
              Build tooling for IPFS
            </h3>
            <p class="text-lg text-black">
              Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Kubo (Go)" link="#" />
            <ListLink label="Cluster" link="#" />
            <ListLink label="Iroh (Rust)" link="#" />
            <ListLink label="Helia (JavaScript)" link="#" />
          </ListLinks>
        </Card>
        <Card>
          <ImageSplit image="constellation-apps.svg" tight>
            <h3 class="mb-4 text-xl text-black">
              Use IPFS apps
            </h3>
            <p class="text-lg text-black">
              Store and share files, stream music, publish your website, store NFTs, and more through hundreds of applications built on IPFS.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Install IPFS Desktop" link="#" />
            <ListLink label="Browse IPFS Applications" link="https://ecosystem.ipfs.tech/" />
          </ListLinks>
        </Card>
        <Card>
          <ImageSplit image="constellation-store.svg" tight>
            <h3 class="mb-4 text-xl text-black">
              Store and manage your data on IPFS
            </h3>
            <p class="text-lg text-black">
              Use content addressing to give your data unique identifiers, and use IPFS for large scale data storage and compute.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Tutorial: Content Addressing" link="https://proto.school/content-addressing" />
            <ListLink label="Tutorial: Sturcturing Data" link="https://proto.school/merkle-dags" />
            <ListLink label="Managing Data" link="#" />
            <ListLink label="Data Ingestion with Bacalhau" link="https://docs.bacalhau.org/examples/data-ingestion/" />
          </ListLinks>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Connect Through Community
      </Heading>
      <div class="text-center">
        <p class="mb-8 text-xl">
          Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
        </p>
        <div class="ribbon-wrap py-12 lg:py-56">
          <RibbonAnnotations
            :annotations="[
              'Application-Developers',
              'Scientists',
              'Infrastructure Developers',
              'Researchers',
              'Designers',
              'Archivists',
              'Yes, Even the occasional Astronaut',
              'Artists',
            ]"
          />
          <Ribbon
            :images="[
              'ribbon-home-1.jpg',
              'ribbon-home-2.jpg',
              'ribbon-home-3.jpg',
              'ribbon-home-4.jpg',
              'ribbon-home-5.jpg',
              'ribbon-home-6.jpg',
              'ribbon-home-7.jpg',
              'ribbon-home-8.jpg',
            ]"
          />
        </div>
        <p class="mb-8 text-xl">
          <b>Our protocol's success hinges on participation from all of our neighbors:</b> Every new node that joins IPFS makes our network stronger for everyone else.
        </p>
        <Btn href="/community" primary>
          Join Our Community
        </Btn>
      </div>
    </PageSection>
    <PageSection dark-gradient text-white overlay="constellations-home-by-the-numbers.svg" overlay-position="right-0 top-16">
      <Heading center>
        IPFS By The Numbers
      </Heading>
      <div class="mt-16">
        <Grid>
          <Stat number="2000+" label="active contributors" />
          <Stat number="280,000+" label="unique nodes" />
          <Stat number="1 Billion+" label="CIDs published to network" />
        </Grid>
      </div>
    </PageSection>
    <PageSection>
      <Heading center>
        What's Happening
      </Heading>
      <div class="mb-12">
        <Subhead>
          On Our Blog
        </Subhead>
        <Grid>
          <Card2
            image="blog-1.jpg"
            date="30 January 2023"
            heading="Interplanetary Applications: Disco Chat"
            subhead="Discordian"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
          <Card2
            image="blog-2.jpg"
            date="30 January 2023"
            heading="Interplanetary Applications: Disco Chat"
            subhead="Discordian"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
          <Card2
            image="blog-3.jpg"
            date="30 January 2023"
            heading="Interplanetary Applications: Disco Chat"
            subhead="Discordian"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead>
          In The Media
        </Subhead>
        <Grid>
          <Card2
            date="30 January 2023"
            heading="WebTransport in libp2p"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
          <Card2
            date="30 January 2023"
            heading="Why the Internet Needs the Interplanetary File System"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
          <Card2
            date="30 January 2023"
            heading="Quiet: Free and Open P2P Team Chat built with Tor, libp2p and IPFS"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
          />
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead>
          Recent Videos
        </Subhead>
        <Grid>
          <Card2
            image="video-1.jpg"
            date="30 January 2023"
            heading="Meet the Web3 Builders: Pinata"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
            category="Video"
            tags="#NFTs #pinning #API #community"
          />
          <Card2
            image="video-2.jpg"
            date="30 January 2023"
            heading="Meet the Web3 Builders: Pinata"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
            category="Video"
            tags="#NFTs #pinning #API #community"
          />
          <Card2
            image="video-3.jpg"
            date="30 January 2023"
            heading="Meet the Web3 Builders: Pinata"
            excerpt="Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other"
            link="#"
            category="Video"
            tags="#NFTs #pinning #API #community"
          />
        </Grid>
      </div>
    </PageSection>
    <PageSection light-gradient>
      <Heading center>
        Testimonials
      </Heading>
      <CarouselTestimonials :items="data?.testimonialCards" />
    </PageSection>
  </div>
</template>
