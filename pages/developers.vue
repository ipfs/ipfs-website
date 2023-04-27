<template>
  <div>
    <seo-tags
      title="IPFS Powers the Distributed Web"
      description="The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."
    />
    <Hero background="developers-hero.jpg">
      <template #title>
        For Developers: Navigating IPFS
      </template>
      <template #subtitle>
        The emergent nature of our developer ecosystem spans over a dozen sub-projects and implementations
      </template>
    </Hero>
    <PageSection>
      <Heading center tight>
        How It Works
      </Heading>
      <Subhead center>
        IPFS advances the design of the internet ahead by light years
      </Subhead>
      <p class="text-2xl">
        Unlike HTTP which loads files from one server at a time, content addressing decouples data from its location. IPFS retrieves files from multiple sources at once in a peer-to-peer fashion so you can:
      </p>
      <div class="flex flex-col lg:gap-8 gap-20 lg:px-20 mt-10 lg:text-center">
        <ImageSplit flip image="constellation-fingerprinting.svg">
          <Subhead tight bold small>
            "Fingerprinting"
          </Subhead>
          <p class="text-xl">
            Content identifiers (CIDs) give every piece of content, data, or file a permanent hash address that you can <AppLink href="https://docs.ipfs.tech/concepts/persistence/">
              “pin”
            </AppLink> to keep
          </p>
        </ImageSplit>
        <ImageSplit flip image="constellation-store-distribute.svg">
          <Subhead tight bold small>
            Store &amp; distribute content freely
          </Subhead>
          <p class="text-xl">
            Our peer-to-peer network joins thousands of nodes so you can find all nodes with the content you want and help others discover the content you have
          </p>
        </ImageSplit>
        <ImageSplit flip image="constellation-optimize-delivery.svg">
          <Subhead tight bold small>
            Optimize content delivery
          </Subhead>
          <p class="text-xl">
            IPFS caches and stores data on local servers, saving bandwidth via more efficient distribution and delivery
          </p>
        </ImageSplit>
      </div>
    </PageSection>
    <PageSection light-gradient>
      <Heading center>
        Your Map To The IPFS Stack
      </Heading>
      <Subhead center>
        IPFS is a modular suite of protocols and standards for organizing and moving data, designed from the ground up with the principles of content addressing and peer-to-peer networking.
      </Subhead>
    </PageSection>
    <PageSection dark-gradient>
      <div class="text-white mb-20">
        <Heading center>
          Orient Your Project Around IPFS
        </Heading>
        <Subhead center>
          While there are endless possibilities to explore, start with one of the primary use cases for IPFS in your application.
        </Subhead>
      </div>
      <Grid cols="2">
        <Card>
          <ImageSplit gap="0" image="constellation-host-publish.svg">
            <Subhead tight bold>
              Host and Publish Data and Websites on IPFS
            </Subhead>
          </ImageSplit>
          <p>
            Content identifiers (CIDs) on IPFS offer one permanent address retrievable from multiple locations, resistant to outages or censorship.
          </p>
          <p>
            The <AppLink href="https://github.com/ipfs/distributed-wikipedia-mirror#readme">
              Distributed Wikipedia Mirror Project
            </AppLink> captures Wikipedia snapshots on IPFS that can never be taken down.
          </p>
          <p>
            <b>Get Started:</b> Deploy your site to IPFS through <AppLink href="https://docs.ipfs.tech/how-to/websites-on-ipfs/introducing-fleek/#host-a-site">
              hosting with Fleek
            </AppLink>, a <AppLink href="https://docs.ipfs.tech/concepts/persistence/#pinning-services">
              pinning service
            </AppLink> or <AppLink href="https://docs.ipfs.tech/install/">
              run your own node
            </AppLink> for more customization.
          </p>
        </Card>
        <Card>
          <ImageSplit gap="0" image="constellation-archives-home.svg">
            <Subhead tight bold>
              Give Your Archives a Permanent Home
            </Subhead>
          </ImageSplit>
          <p>
            Content addressing lets you replicate CIDs while retaining a permanent address so you can store data with long time horizons with freedom from vendor lock-in.
          </p>
          <p>
            From scientific data to open public datasets like <AppLink href="https://opendata.cityofnewyork.us/">
              NYC Open Data
            </AppLink>, dozens of projects use <AppLink href="https://estuary.tech/">
              Estuary
            </AppLink> to capture public data on IPFS.
          </p>
          <p>
            <b>Get started:</b> Learn how hashing and content addressing enable verifiable data sharing through <AppLink href="https://proto.school/content-addressing">
              this ProtoSchool tutorial
            </AppLink>.
          </p>
        </Card>
        <Card>
          <ImageSplit gap="0" image="constellation-off-chain.svg">
            <Subhead tight bold>
              Store Off-Chain Data in a Decentralized Way
            </Subhead>
          </ImageSplit>
          <p>
            Keep the promise of data transparency without the storage constraints of a blockchain in web3 through distributed storage space, where CIDs act as permanent addresses for anything from voting data to NFT art.
          </p>
          <p>
            Alternative: Explore the possibilities hybrid apps that combine smart contracts and verifiable off-chain storage on IPFS.
          </p>
          <p>
            <AppLink href="https://docs.ipfs.tech/case-studies/snapshot/">
              Snapshot uses IPFS
            </AppLink> to publicly record all proposals, votes, and data for more than 9,000 web3 projects & DAOs.
          </p>
          <p>
            <b>Get Started:</b> Read <AppLink>how content addressing and CIDs work</AppLink>.
          </p>
        </Card>
        <Card>
          <ImageSplit gap="0" image="constellation-human-agency.svg">
            <Subhead tight bold>
              Build Distributed Apps that bring back human agency
            </Subhead>
          </ImageSplit>
          <p>
            Build apps that put user agency at the front by composing IPFS into novel app architectures.
          </p>
          <p>
            Push the web's boundaries by build how information is linked and routed online by composing IPFS subsystems into novel app architectures.
          </p>
          <p>
            <AppLink href="https://blog.ipfs.tech/2021-11-15-Skiff-Integrates-IPFS/">
              Skiff uses IPFS
            </AppLink> to build a privacy-first workplace with secure, persistent, and decentralized storage.
          </p>
          <p>
            <b>Get Started:</b> Get connected with the <AppLink href="https://docs.ipfs.tech/how-to/">
              guides and tutorials
            </AppLink> to jumpstart your work with IPLD and libp2p.
          </p>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Implementations
      </Heading>
      <Subhead center>
        To achieve our goal of IPFS running everywhere and be available to every networked device, our community keeps up active work across a variety of implementations.
      </Subhead>
      <Card background="dark">
        <div class="text-white">
          <Subhead bold>
            Popular Implementations
          </Subhead>
          <ul class="list-xl">
            <li>
              <AppLink href="https://github.com/ipfs/helia">
                Helia
              </AppLink> (JavaScript) The most popular JavaScript implementation for use as a long-running process in Node.js and in constrained environments like browsers (formerly js-ipfs)
            </li>
            <li>
              <AppLink href="https://github.com/ipfs/kubo">
                Kubo
              </AppLink> (Go) The original and most widely used implementation. Also use ipfs-cluster if you’re managing multiple kubo nodes.
            </li>
            <li>
              <AppLink href="https://github.com/elastic-ipfs/elastic-ipfs">
                Elastic IPFS
              </AppLink> (Go) A new, cloud-native IPFS implementation
            </li>
            <li>
              <AppLink href="https://github.com/n0-computer/iroh">
                Iroh
              </AppLink> (Rust) A new, efficiency-focused implementation of IPFS
            </li>
            <li>
              <AppLink href="https://docs.ipfs.tech/install/ipfs-desktop/">
                IPFS Desktop
              </AppLink> Use IPFS on your desktop, with no need to touch the terminal.
            </li>
          </ul>
        </div>
      </Card>
      <div class="lg:mx-10 my-16">
        <Subhead bold>
          Lite or Experimental
        </Subhead>
        <ul class="list-xl">
          <li>
            <AppLink href="https://github.com/ipfs-rust/ipfs-embed">
              ipfs-embed
            </AppLink> (Rust) For hardware devices (low power consumption, more limited utility and functionality)
          </li>
          <li>
            <AppLink href="https://github.com/hsanjuan/ipfs-lite">
              ipfs-lite
            </AppLink> (Go) For short-lived IPFS peers and for embedding IPFS as part of a Go application.
          </li>
          <li>
            <AppLink href="https://github.com/ipfs-shipyard/gomobile-ipfs">
              gomobile-ipfs
            </AppLink> (Go) Experimental mobile implementation of IPFS
          </li>
          <li>DuriniOS and Android app with support for aching gateway & uploads to pinning services</li>
        </ul>
      </div>
      <Card background="light">
        <Subhead tight center bold>
          Don’t see what you're looking for? We encourage you to explore <span class="text-brand-teal">other experimental implementations</span> or create your own.
        </Subhead>
      </Card>
    </PageSection>
    <PageSection dark-gradient>
      <div class="text-white">
        <Heading center>
          Quick Start With IPFS
        </Heading>
        <Card background="dark">
          <Subhead tight center>
            Weather you're looking to access IPFS-hosted content or publish your own, Gateways, Pinning Services, and Browsers are the best ways to get started.
          </Subhead>
        </Card>
      </div>
      <div class="text-white my-16">
        <ImageSplit flip image="constellation-ipfs-gateway.svg">
          <Subhead bold tight>
            Fetch IPFS data through a gateway
          </Subhead>
          <Subhead tight>
            The most common way to locate and retrieve files stored through IPFS is by using an IPFS Gateway
          </Subhead>
          <p class="text-xl mb-8">
            Every piece of content on IPFS is hashed with a content address, which we call a content identifier, or CID. Even if you’re not running your own IPFS node, gateways give you access to that content through the usual web (HTTP).
          </p>
          <Btn primary href="#">
            View all public IPFS Gateways here
          </Btn>
        </ImageSplit>
      </div>
      <div class="text-white my-16">
        <ImageSplit flip image="constellation-pinning-service.svg">
          <Subhead bold tight>
            Publish through a pinning service
          </Subhead>
          <p class="text-xl mb-8">
            To keep your data available via IPFS, you can choose a pinning service (which will run a node for you) or run your own node(s) with one of our implementations above.
          </p>
          <Btn primary href="#">
            Learn more about how they work
          </Btn>
        </ImageSplit>
      </div>
    </PageSection>
    <PageSection>
      <Heading center>
        Browsers
      </Heading>
      <Subhead center>
        Access IPFS apps directly through your browser with one of these extensions.
      </Subhead>
      <Grid>
        <Card background="light" button-label="Check it out" button-link="#" center>
          <img src="/images/logo-opera.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Opera
          </h3>
          <p class="text-2xl mb-8">
            Supports IPFS and IPNS schemes
          </p>
        </Card>
        <Card background="light" button-label="Check it out" button-link="#" center>
          <img src="/images/logo-chrome.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Chromium Extensions
          </h3>
          <p class="text-2xl mb-8">
            IPFS browser extension
          </p>
        </Card>
        <Card background="light" button-label="Check it out" button-link="#" center>
          <img src="/images/logo-firefox.png" class="mb-8 h-32 w-full object-contain object-center">
          <h3 class="text-xl mb-8">
            Firefox Extension
          </h3>
          <p class="text-2xl mb-8">
            IPFS browser extension
          </p>
        </Card>
      </Grid>
    </PageSection>
  </div>
</template>
