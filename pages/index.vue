<script setup lang="ts">
const { data } = await useAsyncData('data', () => queryContent('_data').findOne())
const config = useRuntimeConfig()

useHead({
  title: config.public.siteTitle || '',
})

// TODO: temporary until we have meta images included in the feed
const blogPlaceholderImage = `${config.public.blogUrl}/assets/img/blog-post-placeholder.af417eb0.png`

// blog/news/video content
interface Post {
  title: string
  date: string
  excerpt?: string
  url: string
  author?: string
  category?: string
  tags?: string
  image?: string
  thumbnail?: string
}

interface BlogItems { posts: Post[] }
interface NewsItems { news: Post[] }
interface VideoItems { videos: Post[] }

// useFetch load after hydration
const defaultFetchOpts = {
  baseURL: config.public.blogUrl,
  server: false,
  lazy: true,
}

const { data: latestBlogs } = await useFetch('/index.json', {
  ...defaultFetchOpts,
  transform: (data: BlogItems) => data.posts,
})
const { data: latestNews } = await useFetch('/news.json', {
  ...defaultFetchOpts,
  transform: (data: NewsItems) => data.news,
})
const { data: latestVideos } = await useFetch('/videos.json', {
  ...defaultFetchOpts,
  transform: (data: VideoItems) => data.videos,
})
</script>

<template>
  <div>
    <Hero background="star-aurora.jpg" overlay="constellations-hero.svg" tall>
      <template #title>
        Building Blocks <br>
        For a Better Web
      </template>
      <template #subtitle>
        Open protocols to store, verify, and share data across distributed networks.
      </template>
    </Hero>
    <PageSection bottom-tight>
      <ImageSplit image="ipfs-logo.svg" image-class="max-w-40">
        <Heading>
          A Universe of Uses
        </Heading>
        <Subhead class="max-w-xl pb-10 text-xl">
          IPFS's versatility shines across different industries – making it the multi-purpose tool for the decentralized age.
        </Subhead>
      </ImageSplit>
    </PageSection>
    <PageSection bottom-tight full-width class="mb-4 min-h-128">
      <CarouselCards :items="data?.useCards" />
    </PageSection>
    <PageSection>
      <Heading center>
        Why IPFS?
      </Heading>
      <Subhead center>
        Our peer-to-peer content delivery network is built around the innovation of content addressing: store, retrieve, and locate data based on the fingerprint of its actual content rather than its name or location.
      </Subhead>
      <Grid class="gap-0">
        <Card center>
          <div>
            <img src="~/assets/images/constellation-open.svg" class="mx-auto mb-8">
            <h3 class="mb-4 text-2xl text-brand-teal-dark">
              Open
            </h3>
            <p class="mb-8">
              The IPFS network is distributed and participatory, which reduces the problem of data silos that plague central servers.
            </p>
          </div>
        </Card>
        <Card center>
          <div>
            <img src="~/assets/images/constellation-verifiable.svg" class="mx-auto mb-8">
            <h3 class="mb-4 text-2xl text-brand-teal-dark">
              Verifiable
            </h3>
            <p class="mb-8">
              The integrity of all data is verified using hash functions, so you can trust that you always get the data you’re looking for.
            </p>
          </div>
        </Card>
        <Card center>
          <div>
            <img src="~/assets/images/constellation-resilient.svg" class="mx-auto mb-8">
            <h3 class="mb-4 text-2xl text-brand-teal-dark">
              Resilient
            </h3>
            <p class="mb-8">
              Files and data can be stored across multiple nodes, which keeps content at the ready even during critical outages.
            </p>
          </div>
        </Card>
      </Grid>
      <div class="mx-auto table">
        <Btn href="/developers/" primary>
          Learn how it works
        </Btn>
      </div>
    </PageSection>
    <PageSection dark-gradient text-white overlay="constellations-home-get-started.svg" overlay-position="right-0">
      <Heading center>
        Get Started
      </Heading>
      <Subhead center>
        Join thousands of developers who choose IPFS to build software that’s open, verifiable, and resilient.
      </Subhead>
      <Grid cols="2">
        <Card>
          <h3 class="mb-4 text-xl text-black">
            Build peer-to-peer apps with IPFS
          </h3>
          <ImageSplit class="flex flex-auto" image="constellation-peer.svg" tight>
            <p class="text-lg text-black">
              Our most popular implementations are written in Go, Rust, and JavaScript – and we also have support for desktop, browsers, mobile, embedded devices, and more.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Developers" link="/developers/" />
            <ListLink label="Documentation" link="https://docs.ipfs.tech/" />
            <ListLink label="Read Case Studies" link="https://docs.ipfs.tech/case-studies/arbol/" />
          </ListLinks>
        </Card>
        <Card>
          <h3 class="mb-4 text-xl text-black">
            Store and manage your data on IPFS
          </h3>
          <ImageSplit image="constellation-store.svg" tight>
            <p class="text-lg text-black">
              Use content addressing to give your data unique identifiers, and use IPFS for large-scale data storage and compute.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Deploy Static Apps to IPFS with GitHub Actions" link="https://docs.ipfs.tech/how-to/websites-on-ipfs/deploy-github-action/" />
            <ListLink label="Retrieve CIDs with IPFS" link="https://docs.ipfs.tech/quickstart/retrieve/" />
          </ListLinks>
        </Card>
        <Card>
          <h3 class="mb-4 text-xl text-black">
            Use IPFS apps
          </h3>
          <ImageSplit image="constellation-apps.svg" tight>
            <p class="text-lg text-black">
              Share files, stream music, publish your website, store NFTs, and much more through hundreds of applications built on IPFS.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Install IPFS Desktop" link="https://docs.ipfs.tech/install/ipfs-desktop" />
            <ListLink label="Install IPFS Browser Extension" link="https://docs.ipfs.tech/install/ipfs-companion/" />
            <ListLink label="Browse IPFS Applications" link="https://ecosystem.ipfs.tech/" />
          </ListLinks>
        </Card>
        <Card>
          <h3 class="mb-4 text-xl text-black">
            Develop tooling for IPFS
          </h3>
          <ImageSplit image="constellation-tooling.svg" tight>
            <p class="text-lg text-black">
              Design storage, compute, encryption, and implementation layers to optimize the way developers use IPFS.
            </p>
          </ImageSplit>
          <ListLinks>
            <ListLink label="Kubo (Go)" link="https://github.com/ipfs/kubo" />
            <ListLink label="Cluster" link="https://github.com/ipfs-cluster/ipfs-cluster" />
            <ListLink label="Iroh (Rust)" link="https://github.com/n0-computer/iroh" />
            <ListLink label="Helia (JavaScript)" link="https://github.com/ipfs/helia" />
          </ListLinks>
        </Card>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading center>
        Connect Through Community
      </Heading>
      <Subhead center>
        We've sparked the most robust open-source ecosystem on Earth, and together we're achieving interplanetary aspirations.
      </Subhead>
      <div class="ribbon-wrap relative my-12 lg:my-44">
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
      <div class="text-center">
        <Subhead center>
          <b>Our protocol's success hinges on participation from all of our neighbors:</b> Each new node that joins IPFS makes the network stronger for everyone.
        </Subhead>
        <Btn href="/community/" primary>
          Join the Community
        </Btn>
      </div>
    </PageSection>
    <PageSection dark-gradient text-white overlay="constellations-home-by-the-numbers.svg" overlay-position="right-0 top-16">
      <Heading center>
        IPFS by the Numbers
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
        <Subhead bold>
          On Our Blog
        </Subhead>
        <Grid>
          <Card2
            v-for="item in latestBlogs"
            :key="item.title"
            :date="item.date"
            :image="item.image || blogPlaceholderImage"
            :heading="item.title"
            :subhead="item.author"
            :link="item.url"
          />
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead bold>
          In The Media
        </Subhead>
        <Grid>
          <Card2
            v-for="item in latestNews"
            :key="item.title"
            :date="item.date"
            :heading="item.title"
            :subhead="item.author"
            :link="item.url"
          />
        </Grid>
      </div>
      <div class="mb-12">
        <Subhead bold>
          Recent Videos
        </Subhead>
        <Grid>
          <Card2
            v-for="item in latestVideos"
            :key="item.title"
            :date="item.date"
            :image="item.thumbnail"
            :heading="item.title"
            :subhead="item.author"
            :link="item.url"
            category="Video"
          />
        </Grid>
      </div>
    </PageSection>
    <PageSection light-gradient>
      <Heading center>
        From The Community
      </Heading>
      <CarouselTestimonials :items="data?.testimonialCards" />
    </PageSection>
  </div>
</template>
