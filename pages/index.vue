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
    <PageSection dark-gradient text-white overlay="constellations-home-get-started.svg" overlay-position="right-0">
      <Heading center>
        Get Started
      </Heading>
      <p class="mb-16">
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      </p>
      <Grid cols="2">
        <Card>
          <ImageSplit image="constellation-peer.svg" image-class="mr-6">
            <h3 class="text-xl text-black mb-4">
              Build peer-to-peer apps with IPFS
            </h3>
            <p class="text-lg text-black">
              Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Developers Page" link="#" />
            <ListLink label="Documentation" link="#" />
            <ListLink label="Read Case Studies" link="#" />
          </ListLinks>
        </Card>
        <Card>
          <ImageSplit image="constellation-tooling.svg" image-class="mr-6">
            <h3 class="text-xl text-black mb-4">
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
          <ImageSplit image="constellation-apps.svg" image-class="mr-6">
            <h3 class="text-xl text-black mb-4">
              Use IPFS apps
            </h3>
            <p class="text-lg text-black">
              Store and share files, stream music, publish your website, store NFTs, and more through hundreds of applications built on IPFS.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Install IPFS Desktop" link="#" />
            <ListLink label="Browse IPFS Applications" link="#" />
          </ListLinks>
        </Card>
        <Card>
          <ImageSplit image="constellation-store.svg" image-class="mr-6">
            <h3 class="text-xl text-black mb-4">
              Store and manage your data on IPFS
            </h3>
            <p class="text-lg text-black">
              Use content addressing to give your data unique identifiers, and use IPFS for large scale data storage and compute.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Tutorial: Content Addressing" link="#" />
            <ListLink label="Tutorial: Sturcturing Data" link="#" />
            <ListLink label="Managing Data" link="#" />
            <ListLink label="Data Ingestion with Bacalhau" link="#" />
          </ListLinks>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Connect Through Community
      </Heading>
      <div class="text-center">
        <p class="text-xl mb-8">
          Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
        </p>
        <p class="text-xl mb-8">
          <b>Our protocol's success hinges on participation from all of our neighbors:</b> Every new node that joins IPFS makes our network stronger for everyone else.
        </p>
        <Btn href="#" primary>Join Our Community</Btn>
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
      <Testimonial image="portrait-mauve-signweaver.png" name="Mauve Signweaver, Aregore">
        “IPFS gives us a set of flexible build`zing blocks for connecting devices and exchanging data. The plethora of IPFS documentation and community members contributes toward our goal at Agregore of making peer-to-peer web apps easy to use.”
      </Testimonial>
    </PageSection>
  </div>
</template>
