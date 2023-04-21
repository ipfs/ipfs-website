<template>
  <div>
    <seo-tags
      title="IPFS Powers the Distributed Web"
      description="The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."
    />
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
      <ImageSplit image="ipfs-logo.svg" image-class="w-80 pl-12" >
        <Heading>
          A Universe Of Uses
        </Heading>
        <Subhead>How IPFS is Used in Production</Subhead>
        <p class="text-xl">
          IPFS's versatility shines across different industries – making it the multi-purpose tool for the decentralized age.
        </p>
      </ImageSplit>
    </PageSection>
    <PageSection tight>
      <Grid>
        <Card background="light" button-label="Read their story" button-link="#" center>
          <img src="/images/logo-3s.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Speed up gameplay for your superfans
          </h3>
          <p class="text-xl mb-8">
            3S Studios built an IPFS plugin for Unity that reduced the content size of a game from 2 gigabytes to 40 megabytes
          </p>
        </Card>
        <Card background="light" button-label="Read their story" button-link="#" center>
          <img src="/images/portrait-nancy-baker.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Speed up gameplay for your superfans
          </h3>
          <p class="text-xl mb-8">
            Digital artist Nancy Baker Cahill stores all of her full-resolution art assets using IPFS through NFT.storage
          </p>
        </Card>
        <Card background="light" button-label="Read their story" button-link="#" center>
          <img src="/images/logo-anytype.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Speed up gameplay for your superfans
          </h3>
          <p class="text-xl mb-8">
            Anytype uses the content addressing on IPFS to empower users to build personal knowledge webs that can be shared with others
          </p>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Why IPFS?
      </Heading>
      <p class="text-xl mb-12">
        Our peer-to-peer content delivery network is built around content addressing: Store, retrieve, and locate data based on the guts of its content vs. its name or location.
      </p>
      <Grid>
        <Card center>
          <img src="/images/constellation-open.svg" class="mb-8 mx-auto">
          <h3 class="text-2xl text-brand-teal-dark mb-4">
            Open
          </h3>
          <p class="text-xl mb-8">
            The IPFS network is distributed and participatory, which reduces data silos from central servers.
          </p>
        </Card>
        <Card center>
          <img src="/images/constellation-verifiable.svg" class="mb-8 mx-auto">
          <h3 class="text-2xl text-brand-teal-dark mb-4">
            Verifiable
          </h3>
          <p class="text-xl mb-8">
            The integrity of all data is verified using hash functions, so you can trust that you always get the data you’re looking for.
          </p>
        </Card>
        <Card center>
          <img src="/images/constellation-resilient.svg" class="mb-8 mx-auto">
          <h3 class="text-2xl text-brand-teal-dark mb-4">
            Resilient
          </h3>
          <p class="text-xl mb-8">
            Files and data can be stored across multiple nodes, which keeps content at the ready even during critical outages
          </p>
        </Card>
      </Grid>
      <div class="table mx-auto">
        <Btn href="#" primary>How it works</Btn>
      </div>
    </PageSection>
    <PageSection dark-gradient text-white>
      <Heading center>
        Get Started
      </Heading>
      <p class="mb-16">
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      </p>
      <Grid cols="2">
        <Card>
          <ImageSplit image="constellation-peer.svg" gap="6" gap-lg="6">
            <h3 class="text-xl text-black mb-4">
              Build peer-to-peer apps with IPFS
            </h3>
            <p class="text-lg text-black">
              Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
            </p>
          </ImageSplit>
        </Card>
        <Card>
          <ImageSplit image="constellation-tooling.svg" gap="6" gap-lg="6">
            <h3 class="text-xl text-black mb-4">
              Build tooling for IPFS
            </h3>
            <p class="text-lg text-black">
              Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
            </p>
          </ImageSplit>
        </Card>
        <Card>
          <ImageSplit image="constellation-apps.svg" gap="6" gap-lg="6">
            <h3 class="text-xl text-black mb-4">
              Use IPFS apps
            </h3>
            <p class="text-lg text-black">
              Store and share files, stream music, publish your website, store NFTs, and more through hundreds of applications built on IPFS.
            </p>
          </ImageSplit>
        </Card>
        <Card>
          <ImageSplit image="constellation-store.svg" gap="6" gap-lg="6">
            <h3 class="text-xl text-black mb-4">
              Store and manage your data on IPFS
            </h3>
            <p class="text-lg text-black">
              Use content addressing to give your data unique identifiers, and use IPFS for large scale data storage and compute.
            </p>
          </ImageSplit>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Connect Through Community
      </Heading>
      <p class="text-xl">
        Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
      </p>
    </PageSection>
    <PageSection dark-gradient text-white>
      <Heading center>
        IPFS By The Numbers
      </Heading>
      <div class="mt-16">
        <Grid>
          <div class="text-center">
            <h3 class="text-6xl text-brand-teal-dark mb-4">
              2000+
            </h3>
            <p class="text-xl">
              active contributors
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-6xl text-brand-teal-dark mb-4">
              280,000+
            </h3>
            <p class="text-xl">
              unique nodes
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-6xl text-brand-teal-dark mb-4">
              1 Billion+
            </h3>
            <p class="text-xl">
              CIDs published to network
            </p>
          </div>
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
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              InterPlanetary Applications: Disco Chat
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              InterPlanetary Applications: Disco Chat
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              InterPlanetary Applications: Disco Chat
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead>
          In The Media
        </Subhead>
        <Grid>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              WebTransport in libp2p
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              Why the Internet Needs the Interplanetary File System
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              Quiet: Free and Open P2P Team Chat built with Tor, libp2p and IPFS
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead>
          Recent Videos
        </Subhead>
        <Grid>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              Meet the Web3 Builders: Pinata
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              Meet the Web3 Builders: Pinata
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
          <Card background="light">
            <h3 class="text-xl text-black mb-4">
              Meet the Web3 Builders: Pinata
            </h3>
            <p class="text-base mb-4">
              Check out Disco Chat, a peer-to-peer chat application built to demonstrate the power of peer-to-peer while enabling other...
              <a href="#">Read more</a>
            </p>
          </Card>
        </Grid>
      </div>
    </PageSection>
    <PageSection light-gradient>
      <ImageSplit image="portrait-mauve-signweaver.png" image-class="w-80 pr-12" flip>
        <Heading>
          Testimonials
        </Heading>
        <p class="text-xl mb-6">
          “IPFS gives us a set of flexible building blocks for connecting devices and exchanging data. The plethora of IPFS documentation and community members contributes toward our goal at Agregore of making peer-to-peer web apps easy to use.”
        </p>
        <p class="text-xl font-bold">
          Mauve Signweaver, Aregore
        </p>
      </ImageSplit>
    </PageSection>
  </div>
</template>
