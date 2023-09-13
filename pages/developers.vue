<script setup lang="ts">
const { data } = await useAsyncData('data', () => queryContent('_data').findOne())
definePageMeta({
  title: 'Developers',
})
</script>

<template>
  <div>
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
        IPFS advances the design of the internet ahead by light years.
      </Subhead>
      <Subhead center>
        Unlike HTTP which loads files from one server at a time, content addressing decouples data from its location. IPFS retrieves files from multiple sources at once in a peer-to-peer fashion so you can:
      </Subhead>
      <div class="mt-10 flex flex-col gap-20 lg:gap-8 lg:px-20 lg:text-center">
        <ImageSplit flip image="constellation-fingerprinting.svg">
          <Subhead tight bold small>
            Fingerprint your data
          </Subhead>
          <p class="text-lg">
            Content identifiers (CIDs) give every piece of content, data, or file a permanent hash address that you can <AppLink href="https://docs.ipfs.tech/concepts/persistence/">
              “pin”
            </AppLink> to keep
          </p>
        </ImageSplit>
        <ImageSplit flip image="constellation-store-distribute.svg">
          <Subhead tight bold small>
            Store &amp; distribute content freely
          </Subhead>
          <p class="text-lg">
            Our peer-to-peer network joins thousands of nodes so you can find all nodes with the content you want and help others discover the content you have
          </p>
        </ImageSplit>
        <ImageSplit flip image="constellation-optimize-delivery.svg">
          <Subhead tight bold small>
            Optimize content delivery
          </Subhead>
          <p class="text-lg">
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
      <ResponsiveTable
        :col-labels="['System', 'Responsible for']"
        :rows="[
          {
            heading: 'Transferring the data',
            cols: [
              ['IPFS*', 'Data routing and transfer'],
              ['Libp2p**', 'Peer-to-peer network connectivity'],
              ['IPFS gateways', 'Interoperability with http'],
            ],
          },
          {
            heading: 'Defining the data',
            cols: [
              ['IPNS, DNSLink', 'Dynamic naming'],
              ['IPLD**', 'Define and organize data'],
              ['Multiformats**', 'Universal addressing for data and peers'],
            ],
          },
        ]"
      />
      <ul class="mt-10 text-brand-teal-dark">
        <li>* Including its various subsystems and specs</li>
        <li>** Essential components for IPFS (can also be used independently of IPFS)</li>
      </ul>
    </PageSection>
    <PageSection dark-gradient>
      <div class="mb-20 text-white">
        <Heading center>
          Orient Your Project Around IPFS
        </Heading>
        <Subhead center>
          While there are endless possibilities to explore, start with one of the primary use cases for IPFS in your application.
        </Subhead>
      </div>
      <Grid cols="2">
        <Card>
          <ImageSplit class="gap-2 md:min-h-48" image="constellation-host-publish.svg">
            <Subhead tight bold>
              Host Data and Websites on IPFS
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
            <b>Get Started:</b> Deploy your site to IPFS through
            <AppLink href="https://docs.ipfs.tech/how-to/websites-on-ipfs/introducing-fleek/#host-a-site">
              hosting with Fleek
            </AppLink>, a <AppLink href="https://docs.ipfs.tech/concepts/persistence/#pinning-services">
              pinning service
            </AppLink> or <AppLink href="https://docs.ipfs.tech/install/">
              run your own node
            </AppLink> for even more customization.
          </p>
        </Card>
        <Card>
          <ImageSplit class="gap-2 md:min-h-48" image="constellation-archives-home.svg">
            <Subhead tight bold>
              Give Your Archives a Permanent Home
            </Subhead>
          </ImageSplit>
          <p>
            Content addressing lets you replicate CIDs while retaining a permanent address. It enables you to store data with long-time horizons without having to succumb to vendor lock-in.
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
          <ImageSplit class="gap-2 md:min-h-48" image="constellation-off-chain.svg">
            <Subhead tight bold>
              Store Off-Chain Data in a Decentralized Way
            </Subhead>
          </ImageSplit>
          <p>
            Enable data transparency without the storage constraints of a blockchain in web3 through distributed storage space, where CIDs act as permanent addresses for anything from voting data to NFT art.
          </p>
          <p>
            <AppLink href="https://docs.ipfs.tech/case-studies/snapshot/">
              Snapshot uses IPFS
            </AppLink> to publicly record all proposals, votes, and data for more than 9,000 web3 projects & DAOs.
          </p>
          <p>
            <b>Get Started:</b> Learn <AppLink href="https://docs.ipfs.tech/concepts/content-addressing/">
              how content addressing and CIDs work
            </AppLink>.
          </p>
        </Card>
        <Card>
          <ImageSplit class="gap-2 md:min-h-48" image="constellation-human-agency.svg">
            <Subhead tight bold>
              Build Distributed Apps that Bring Back Human Agency
            </Subhead>
          </ImageSplit>
          <p>
            Build apps that put user agency at the front by composing IPFS into novel app architectures.
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
        To achieve our goal of IPFS running everywhere and being available to every networked device, our community keeps up active work across a variety of implementations.
      </Subhead>
      <div class="m-a max-w-4xl">
        <Card background="dark">
          <div class="text-white">
            <Subhead bold>
              Popular Implementations
            </Subhead>
            <ul class="list-lg">
              <li>
                <AppLink href="https://github.com/ipfs/helia">
                  Helia
                </AppLink> (JavaScript) The most popular JavaScript implementation for use as a long-running process in Node.js and in constrained environments like browsers (formerly js-ipfs)
              </li>
              <li>
                <AppLink href="https://github.com/ipfs/kubo">
                  Kubo
                </AppLink> (Go) The original and most widely used implementation. Also use ipfs-cluster if you’re managing multiple Kubo nodes.
              </li>
              <li>
                <AppLink href="https://ipfscluster.io">
                  IPFS Cluster
                </AppLink> provides data orchestration across a swarm of IPFS daemons by allocating, replicating and tracking a global pinset distributed among multiple Kubo peers.
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
        <div class="my-16 lg:mx-10">
          <Subhead bold>
            Lite or Experimental
          </Subhead>
          <ul class="list-lg">
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
            <li>
              Durin <AppLink href="https://apps.apple.com/us/app/durin/id1613391995">
                iOS
              </AppLink> and <AppLink href="https://play.google.com/store/apps/details?id=ai.protocol.durin&pli=1">
                Android
              </AppLink> Apps with support for aching gateway & uploads to pinning services
            </li>
          </ul>
        </div>
      </div>
      <Card background="light">
        <Subhead tight center bold>
          Don’t see what you're looking for? We encourage you to explore other <AppLink href="https://www.notion.so/IPFS-implementations-a1e52ad7734d4a268c475b95440805c5">
            experimental implementations
          </AppLink> or create your own.
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
            Whether you're looking to access IPFS-hosted content or publish your own, Gateways, Pinning Services, and Browsers are the best ways to get started.
          </Subhead>
        </Card>
      </div>
      <div class="my-16 text-white">
        <ImageSplit flip image="constellation-ipfs-gateway.svg">
          <Subhead bold tight>
            Fetch IPFS data through a gateway
          </Subhead>
          <p class="mb-4 text-lg">
            The most common way to locate and retrieve files stored through IPFS is by using an IPFS Gateway.
          </p>
          <p class="mb-8 text-lg">
            Every piece of content on IPFS is hashed with a content address, which we call a content identifier, or CID. Even if you’re not running your own IPFS node, gateways give you access to that content through the usual web (HTTP).
          </p>
          <Btn primary href="https://ipfs.github.io/public-gateway-checker/">
            View all public IPFS Gateways
          </Btn>
        </ImageSplit>
      </div>
      <div class="my-16 text-white">
        <ImageSplit flip image="constellation-pinning-service.svg">
          <Subhead bold tight>
            Publish through a pinning service
          </Subhead>
          <p class="mb-8 text-lg">
            To keep your data available via IPFS, you can choose a pinning service (which will run a node for you) or run your own node(s) with one of our implementations above.
          </p>
          <Btn primary href="https://blog.ipfs.tech/2022-06-09-practical-explainer-ipfs-gateways-1/">
            Learn more about how they work
          </Btn>
        </ImageSplit>
      </div>
    </PageSection>
    <PageSection bottom-tight>
      <Heading center>
        Web Browsers
      </Heading>
      <Subhead center>
        Access IPFS apps natively through your browser or with an extension.
      </Subhead>
    </PageSection>
    <PageSection tight full-width class="min-h-96">
      <CarouselCards :items="data?.browserCards" button-label="Read their story" />
    </PageSection>
  </div>
</template>
