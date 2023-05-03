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
        IPFS is made of you – our open source ecosystem of nearly 2,000 active contributors and many more developers and
        users.
      </template>
    </Hero>
    <PageSection>
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
            Contribute
          </Subhead>
          <p class="text-center text-xl text-black">
            Join the conversation
          </p>
          <div class="grid grid-cols-3 mx-auto max-w-xs">
            <div>
              <AppLink>
                <UnLazyImage src="/images/circle-slack.svg" class="mx-auto my-4" />
              </AppLink>
              <p class="text-center text-xl text-black">
                <AppLink>Slack</AppLink>
              </p>
            </div>
            <div>
              <AppLink>
                <UnLazyImage src="/images/circle-discord.svg" class="mx-auto my-4" />
              </AppLink>
              <p class="text-center text-xl text-black">
                <AppLink>Discord</AppLink>
              </p>
            </div>
            <div>
              <AppLink>
                <UnLazyImage src="/images/circle-matrix.svg" class="mx-auto my-4" />
              </AppLink>
              <p class="text-center text-xl text-black">
                <AppLink>Matrix</AppLink>
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
          <UnLazyImage src="/images/circle-star.svg" class="mx-auto my-6" />
          <p class="text-xl text-black">
            <AppLink href="https://lu.ma/ipfs">
              Subscribe
            </AppLink> to our community calendar to attend an upcoming event.
          </p>
        </Card>
        <Card background="light">
          <Subhead bold tight>
            Tune In To What's New
          </Subhead>
          <p class="text-xl text-black">
            Get the latest on news in the IPFS ecosystem by subscribing to <AppLink>our newsletter</AppLink> or watching
            This Month in <AppLink>IPFS livestream</AppLink>.
          </p>
        </Card>
      </Grid>
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
          <ZebraCard>
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Interplanetary Office Hours
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
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
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                libp2p Implementers
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                IPLD Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                WNFS Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                IPVM Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Move the Bytes Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                Content Routing Working Group
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
          <ZebraCard button-label="Meeting Calendar" button-link="#">
            <ImageSplit gap="0" image="constellation-office-hours.svg">
              <h3>
                ProbeLab Office Hours - IPFS Network Measurements
              </h3>
              <p>
                Join a working group to help us untangle the thorniest problems facing the distributed web.
              </p>
            </ImageSplit>
            <p>What's covered: Demos, new project ideas, and 1-1 time with the Protocol Labs team.</p>
            <p><b>Next meeting:</b> date</p>
          </ZebraCard>
        </Grid>
      </div>
    </PageSection>
    <PageSection>
      <Heading center>
        Community Voices
      </Heading>
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
        <div class="telescope relative mb-16 mt-30">
          <UnLazyImage src="/images/constellation-telescope.svg" class="mx-auto py-10" />
          <div class="absolute inset-0">
            <p class="absolute top-0 w-64 text-xl">
              How can we introduce privacy and encryption functionality to IPFS?
            </p>
            <p class="absolute right-0 top-0 w-80 text-xl">
              How do we enable connectivity between every platform IPFS runs on, from satellites to lower powered IoT devices?
            </p>
            <p class="absolute top-60 w-80 text-xl">
              What data structures and recommendations can we create to help other developers?
            </p>
            <p class="absolute right-0 top-60 w-56 text-xl">
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
