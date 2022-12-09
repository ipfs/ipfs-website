<template>
  <div>
    <seo-tags
      title="IPFS Powers the Distributed Web"
      description="The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."
    />
    <StarfieldHero title="IPFS powers the Distributed Web">
      <h2 class="text-center">
        A peer-to-peer hypermedia protocol
        <br />
        designed to preserve and grow humanity's knowledge
        <br />
        by making the web upgradeable, resilient, and more open.
      </h2>
      <div class="flex flex-col sm:flex-row mt-6">
        <Button
          type="primary"
          href="#install"
          text="Get started"
          class="mr-0 sm:mr-2.5 mb-2.5 sm:mb-0 px-8 py-3"
          :on-click="(item) => onCTAClick({ ui: 'hero/install', ...item })"
        />
        <Button
          href="#how"
          class="px-8 py-3"
          text="How it works"
          :on-click="(item) => onCTAClick({ ui: 'hero/how', ...item })"
        />
      </div>
    </StarfieldHero>
    <section id="why" class="grid-margins py-20 sm:py-36">
      <div class="text-center mb-8 sm:mb-20">
        <h2 class="font-display mb-3">The web of tomorrow needs IPFS today</h2>
        <p class="text-base sm:text-lg">
          IPFS aims to complement HTTP in order to build a better web for all of
          us.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20">
        <div>
          <div class="flex justify-center items-center h-52 px-3">
            <Icon name="ipfs-illustration-http" class="max-w-xs h-52" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is inefficient and expensive
          </h3>
          <p>
            HTTP downloads files from one server at a time — but peer-to-peer
            IPFS retrieves pieces from multiple nodes at once, enabling
            substantial bandwidth savings.
            IPFS makes it possible to efficiently distribute high volumes of
            data without duplication.
          </p>
        </div>
        <div>
          <div class="flex justify-center items-center h-52 px-3">
            <Icon name="ipfs-illustration-history" class="max-w-xs h-52" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web can't preserve humanity's history
          </h3>
          <p>
            <Link
              class="text-blueGreen font-bold hover:underline"
              :item="{
                link: 'https://blogs.loc.gov/thesignal/2011/11/the-average-lifespan-of-a-webpage/',
                text: 'The average lifespan of a web page is 100 days',
              }"
              :on-click="
                (item) => onCTAClick({ ui: 'why/2-preservation', ...item })
              "
            />
            before it's gone forever. The medium of our era shouldn't be this
            fragile. IPFS makes it simple to set up resilient networks for
            mirroring data, and thanks to content addressing, files stored using
            IPFS are automatically versioned.
          </p>
        </div>
        <div>
          <div class="flex justify-center items-center h-52 px-3">
            <Icon name="ipfs-illustration-centralized" class="max-w-xs h-52" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is centralized, limiting opportunity
          </h3>
          <p>
            The Internet has turbocharged innovation by being one of the great
            equalizers in human history &mdash; but increasing consolidation of
            control threatens that progress. IPFS stays true to the original
            vision of an open, flat web by delivering technology to make that
            vision a reality.
          </p>
        </div>
        <div>
          <div class="flex justify-center items-center h-52 px-3">
            <Icon name="ipfs-illustration-network" class="max-w-xs h-52" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is addicted to the backbone
          </h3>
          <p>
            IPFS powers the creation of diversely resilient networks that enable
            persistent availability &mdash; with or without internet backbone
            connectivity. This means better connectivity for the developing
            world, during natural disasters, or just when you're on flaky coffee
            shop wi-fi.
          </p>
        </div>
      </div>
    </section>
    <section id="install" class="pt-20 pb-10 sm:py-20 bg-gradient-6 text-white">
      <div class="grid-margins 2xl:px-32">
        <div class="text-center mb-16">
          <h2 class="font-display mb-3">Install IPFS</h2>
          <p class="text-base sm:text-lg">
            Join the future of the web right now &mdash; just choose the option
            that's right for you.
          </p>
        </div>
        <h3 class="text-2xl sm:text-3xl font-display text-center">
          Store and provide files
        </h3>
        <div class="grid grid-cols-12 p-4 mt-4 gap-y-0 sm:gap-y-24">
          <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
            <img
              class="max-h-24 sm:max-h-36 mx-auto"
              :src="$relativity('/images/ipfs-desktop-hex.png')"
              alt="IPFS Desktop icon"
            />
          </div>
          <div
            class="
              col-span-12
              mb-16
              text-center
              sm:mb-0 sm:col-span-10 sm:text-left sm:ml-3
            "
          >
            <h4 class="text-xl md:text-2xl mb-1.5">
              <Link
                class="text-blueGreenLight font-display hover:underline"
                :item="{
                  link: 'https://github.com/ipfs-shipyard/ipfs-desktop',
                  text: 'IPFS Desktop',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-desktop', ...item })
                "
              />
            </h4>
            <h5 class="mb-4 text-base md:text-lg font-bold">
              IPFS for everyone
            </h5>
            <p class="mb-4">
              The IPFS Desktop app offers menubar/tray shortcuts and an easy
              interface for adding, pinning, and sharing files &mdash; plus a
              full IPFS node ready for heavy-duty hosting and development. Great
              for developers and less experienced users alike.
            </p>
            <div class="flex justify-center sm:justify-start">
              <Button
                href="https://docs.ipfs.tech/install/ipfs-desktop/"
                target="_blank"
                rel="noopener"
                text="Install IPFS Desktop"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-desktop', ...item })
                "
              />
            </div>
          </div>
          <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
            <img
              class="max-h-24 sm:max-h-36 mx-auto"
              :src="$relativity('/images/command-line-hex.png')"
              alt="Screenshot of IPFS command-line interface"
            />
          </div>
          <div
            class="
              col-span-12
              mb-16
              text-center
              sm:mb-0 sm:col-span-10 sm:text-left sm:ml-3
            "
          >
            <h4 class="text-xl md:text-2xl mb-1.5">
              <Link
                class="text-blueGreenLight font-display hover:underline"
                :item="{
                  link: 'https://docs.ipfs.tech/how-to/command-line-quick-start',
                  text: 'Command-line install',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-cli', ...item })
                "
              />
            </h4>
            <h5 class="mb-4 text-base md:text-lg font-bold">
              All IPFS, no frills
            </h5>
            <p class="mb-4">
              Just want to use IPFS from your terminal? Follow these
              step-by-step instructions for getting up and running on the
              command line using the Go implementation of IPFS. Includes
              directions for Windows, macOS, and Linux.
            </p>
            <div class="flex justify-center sm:justify-start">
              <Button
                href="https://docs.ipfs.tech/how-to/command-line-quick-start"
                target="_blank"
                rel="noopener"
                text="Install the IPFS CLI"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-cli', ...item })
                "
              />
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                :src="$relativity('/images/ipfs-companion-hex.png')"
                alt="IPFS Companion icon"
              />
            </div>
            <div
              class="
                col-span-12
                mb-16
                text-center
                sm:mb-0 sm:col-span-4 sm:text-left sm:ml-3 sm:mr-10
              "
            >
              <h4 class="text-xl md:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://github.com/ipfs-shipyard/ipfs-companion',
                    text: 'IPFS Companion',
                  }"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-companion', ...item })
                  "
                />
              </h4>
              <h5 class="mb-4 text-base md:text-lg font-bold">
                Add IPFS to your browser
              </h5>
              <p class="mb-4">
                Get <code>ipfs://</code> address support and more in your
                browser with this extension for Chromium and Firefox.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://docs.ipfs.tech/install/ipfs-companion/"
                  target="_blank"
                  rel="noopener"
                  text="Get IPFS Companion"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-companion', ...item })
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                :src="$relativity('/images/ipfs-cluster.png')"
                alt="IPFS Cluster logo"
              />
            </div>
            <div
              class="col-span-12 text-center sm:col-span-4 sm:text-left sm:ml-3"
            >
              <h4 class="text-xl md:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://ipfscluster.io/',
                    text: 'IPFS Cluster',
                  }"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-cluster', ...item })
                  "
                />
              </h4>
              <h5 class="mb-4 text-base md:text-lg font-bold">
                Orchestrate multiple IPFS nodes
              </h5>
              <p class="mb-4">
                Automatically allocate, replicate, and track your data as a
                global pinset distributed among a swarm of peers.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://ipfscluster.io/"
                  target="_blank"
                  rel="noopener"
                  text="Get IPFS Cluster"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-cluster', ...item })
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-2xl sm:text-3xl font-display text-center mt-24 mb-8">
          For developers
        </h3>
        <div class="grid grid-cols-12 p-4 mt-4 gap-y-0 sm:gap-y-24">
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                :src="$relativity('/images/kubo-hex-logo.png')"
                alt="IPFS icon with a superimposed Go logo"
              />
            </div>
            <div
              class="
                col-span-12
                mb-16
                sm:mb-0
                text-center
                sm:col-span-4 sm:text-left sm:ml-3 sm:mr-10
              "
            >
              <h4 class="text-xl md:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://github.com/ipfs/kubo',
                    text: 'Go implementation',
                  }"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/kubo', ...item })
                  "
                />
              </h4>
              <p class="mb-4">
                The original IPFS implementation: IPFS core, daemon server, CLI
                tooling, and more.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://github.com/ipfs/kubo"
                  target="_blank"
                  rel="noopener"
                  text="Get Kubo"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/kubo', ...item })
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                :src="$relativity('/images/js-ipfs-logo.png')"
                alt="js-ipfs logo"
              />
            </div>
            <div
              class="
                col-span-12
                mb-16
                sm:mb-0
                text-center
                sm:col-span-4 sm:text-left sm:ml-3
              "
            >
              <h4 class="text-xl md:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://js.ipfs.tech',
                    text: 'JS implementation',
                  }"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/js-ipfs', ...item })
                  "
                />
              </h4>
              <p class="mb-4">
                IPFS implemented entirely in JavaScript for a world of
                possibilities in the browser and Node.js.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://js.ipfs.tech"
                  target="_blank"
                  rel="noopener"
                  text="Get js-ipfs"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/js-ipfs', ...item })
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how" class="grid-margins py-20">
      <div class="text-center mb-16">
        <h2 class="font-display mb-4">How IPFS works</h2>
        <p class="text-base sm:text-lg">
          Here's what happens when you add a file to IPFS — whether you're
          storing that file on your own local node or one operated by a pinning
          service or IPFS-enabled app.
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <div
          class="
            flex flex-col
            sm:flex-row
            text-center
            sm:text-left
            items-center
            mb-12
          "
        >
          <div class="flex items-center justify-center max-h-36 mb-5 sm:mb-0">
            <Icon name="ipfs-illustrations-how-1" class="w-40 max-h-32" />
          </div>
          <div class="pl-0 sm:pl-10">
            <p class="leading-normal">
              When you add a file to IPFS, your file is split into smaller
              chunks, cryptographically hashed, and given a
              <strong>unique fingerprint</strong> called a
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: 'https://proto.school/anatomy-of-a-cid',
                  text: 'content identifier',
                }"
                :on-click="(item) => onCTAClick({ ui: 'how/1-cid', ...item })"
              />
              (CID). This CID acts as a permanent record of your file as it
              exists at that point in time.
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-col
            sm:flex-row
            text-center
            sm:text-left
            items-center
            mb-12
          "
        >
          <div class="flex items-center justify-center max-h-36 mb-5 sm:mb-0">
            <Icon name="ipfs-illustrations-how-4" class="w-40 max-h-32" />
          </div>
          <div class="pl-0 sm:pl-10">
            <p class="leading-normal">
              When other nodes <strong>look up your file</strong>, they ask
              their peer nodes who's storing the content referenced by the
              file's CID. When they view or download your file, they cache a
              copy — and become another provider of your content until their
              cache is cleared.
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-col
            sm:flex-row
            text-center
            sm:text-left
            items-center
            mb-12
          "
        >
          <div class="flex items-center justify-center max-h-36 mb-5 sm:mb-0">
            <Icon name="ipfs-illustrations-how-3" class="w-40 max-h-32" />
          </div>
          <div class="pl-0 sm:pl-10">
            <p class="leading-normal">
              A node can
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: 'https://docs.ipfs.tech/concepts/persistence/',
                  text: 'pin content',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'how/1-pinning', ...item })
                "
              />
              in order to keep (and provide) it forever, or discard content it
              hasn't used in a while to save space. This means each node in the
              network
              <strong>stores only content it is interested in</strong>, plus
              some indexing information that helps figure out which node is
              storing what.
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-col
            sm:flex-row
            text-center
            sm:text-left
            items-center
            mb-12
          "
        >
          <div class="flex items-center justify-center max-h-36 mb-5 sm:mb-0">
            <Icon name="ipfs-illustrations-how-2" class="w-40 max-h-32" />
          </div>
          <div class="pl-0 sm:pl-10">
            <p class="leading-normal">
              If you add a new version of your file to IPFS, its cryptographic
              hash is different, and so it gets a new CID. This means
              <strong
                >files stored on IPFS are resistant to tampering and
                censorship</strong
              >
              — any changes to a file don't overwrite the original, and common
              chunks across files can be reused in order to minimize storage
              costs.
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-col
            sm:flex-row
            text-center
            sm:text-left
            items-center
          "
        >
          <div class="flex items-center justify-center max-h-36 mb-5 sm:mb-0">
            <Icon name="ipfs-illustrations-how-5" class="w-40 max-h-32" />
          </div>
          <div class="pl-0 sm:pl-10">
            <p class="leading-normal">
              However, this doesn't mean you need to remember a long string of
              CIDs &mdash; IPFS can find the latest version of your file using
              the
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: 'https://docs.ipfs.tech/concepts/ipns/',
                  text: 'IPNS',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'how/1-performance', ...item })
                "
              />
              decentralized naming system, and
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: 'https://docs.ipfs.tech/concepts/dnslink/',
                  text: 'DNSLink',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'how/1-performance', ...item })
                "
              />
              can be used to map CIDs to
              <strong>human-readable DNS names</strong>.
            </p>
          </div>
        </div>
      </div>
      <h3 class="text-2xl sm:text-3xl font-display text-center mt-16 mb-8">
        Take a closer look
      </h3>
      <div class="flex flex-col sm:flex-row justify-around">
        <div class="flex flex-col items-center mb-8 sm:mb-0">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Want to dig in?
          </h4>
          <Button
            type="primary"
            href="https://docs.ipfs.tech/"
            target="_blank"
            text="Check out the docs"
            :on-click="(item) => onCTAClick({ ui: 'how/docs', ...item })"
          />
        </div>
        <div class="flex flex-col items-center mb-8 sm:mb-0">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Hands-on learner?
          </h4>
          <Button
            type="primary"
            href="https://proto.school/course/ipfs"
            target="_blank"
            text="Explore ProtoSchool"
            :on-click="(item) => onCTAClick({ ui: 'how/protoschool', ...item })"
          />
        </div>
        <div class="flex flex-col items-center">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Curious where it all began?
          </h4>
          <Button
            type="primary"
            href="https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf"
            target="_blank"
            text="Read the whitepaper"
            :on-click="(item) => onCTAClick({ ui: 'how/whitepaper', ...item })"
          />
        </div>
      </div>
    </section>
    <Divider />
    <section class="grid-margins text-center py-20">
      <h2 class="font-display mb-4">IPFS can help here and now</h2>
      <p class="text-base sm:text-lg">
        No matter what you do with the web, IPFS helps make it better today.
      </p>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-3
          gap-y-12
          sm:gap-y-0
          gap-x-8
          mt-12
          sm:mt-24
        "
      >
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon
              name="ipfs-illustration-archivists"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Archivists
          </h3>
          <p>
            Storing archival data using IPFS enables deduplication, clustered
            persistence, and high performance &mdash; empowering you to store
            the world's information for future generations.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon name="ipfs-illustration-service" class="h-36 w-36 mx-auto" />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Service providers
          </h3>
          <p>
            Providing large amounts of data to users? Storing on IPFS could help
            you slash bandwidth costs thanks to its use of secure, peer-to-peer
            content delivery.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon name="ipfs-illustration-data" class="h-36 w-36 mx-auto" />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Researchers
          </h3>
          <p>
            If you're working with or distributing large datasets, storing that
            data using IPFS can help speed up performance and unlock
            decentralized archiving.
          </p>
        </div>
      </div>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-3
          gap-y-12
          sm:gap-y-0
          gap-x-8
          mt-12
        "
      >
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon
              name="ipfs-illustration-blockchains"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Blockchain developers
          </h3>
          <p>
            IPFS content addressing enables you to store large files off-chain
            and put immutable, permanent links in transactions &mdash;
            timestamping and securing content without having to put the data
            itself on-chain.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon name="ipfs-illustration-creators" class="h-36 w-36 mx-auto" />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Content creators
          </h3>
          <p>
            IPFS empowers creators to build and share on the decentralized web
            &mdash; whether that's delivering content free from intermediary
            control or minting NFTs that stand the test of time.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <Icon
              name="ipfs-illustration-developing"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Offline users
          </h3>
          <p>
            High-latency networks cause major obstacles for those with poor
            internet infrastructure. Peer-to-peer IPFS offers resilient access
            to data independent of latency or backbone connectivity.
          </p>
        </div>
      </div>
    </section>
    <Divider />
    <section class="grid-margins py-20">
      <h2 class="font-display text-center mb-12">Who's already using IPFS?</h2>
      <div class="grid grid-cols-2">
        <div class="col-span-2 md:col-span-1 mb-8 md:mb-0 md:mr-12">
          <div
            class="
              video-preview
              max-w-sm
              md:max-w-xl
              mx-auto
              md:mx-0 md:float-right
              cursor-pointer
            "
          >
            <div
              class="relative overflow-hidden rounded border-2 border-gray-300"
              @click="
                () => {
                  openVideoModal({
                    title: 'Building Web3: Pinata',
                    url: 'https://www.youtube.com/watch?v=29k2C1JXyg4&list=PL_0VrY55uV1-THfh1GVoE6v0SxKO9M0gs',
                  });

                  onCTAClick({
                    ui: 'who/meet-builders',
                    type: 'video',
                    url: 'https://www.youtube.com/watch?v=29k2C1JXyg4&list=PL_0VrY55uV1-THfh1GVoE6v0SxKO9M0gs',
                  });
                }
              "
            >
              <img
                :src="$relativity('/images/meet-builders-thumbnail-pinata.png')"
                alt="Meet the Builders: Pinata"
                class="
                  video-preview-thumbnail
                  filter
                  brightness-75
                  transform
                  transition-transform
                  duration-300
                "
              />
              <Icon
                name="video-play"
                class="
                  absolute
                  top-0
                  bottom-0
                  left-0
                  right-0
                  mx-auto
                  my-auto
                  w-1/6
                "
              />
            </div>
          </div>
        </div>
        <div
          class="col-span-2 md:col-span-1 md:max-w-xl text-center md:text-left"
        >
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Explore the ecosystem
          </h3>
          <p class="text-base sm:text-lg mb-6">
            Companies and organizations worldwide are building amazing apps,
            services, and developer tools on IPFS. Check out the video to hear
            straight from IPFS builders, and explore the interactive IPFS
            ecosystem directory to learn more.
          </p>
          <Button
            type="primary"
            href="https://ecosystem.ipfs.tech"
            text="View the ecosystem directory"
            :on-click="(item) => onCTAClick({ ui: 'who/ecosystem', ...item })"
          />
        </div>
      </div>
    </section>
    <Divider />
    <section class="grid-margins py-20">
      <h2 class="font-display text-center mb-12">News and more</h2>
      <div class="grid grid-cols-4">
        <div class="col-span-4 sm:col-span-1 pr-16 mb-8 sm:mb-0">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Latest blog posts
          </h3>
          <ol>
            <li
              v-for="post in latestPosts"
              :key="post.title"
              class="flex flex-col mb-2.5"
            >
              <span class="text-sm text-gray-500">{{ post.date }}</span>
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: post.url,
                  text: post.title,
                }"
                :on-click="
                  (item) =>
                    onCTAClick({ ui: 'latest/link', type: 'blog', ...item })
                "
              />
            </li>
          </ol>
        </div>
        <div class="col-span-4 sm:col-span-1 pr-16 mb-8 sm:mb-0">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            In the media
          </h3>
          <ol>
            <li
              v-for="news in latestNews"
              :key="news.title"
              class="flex flex-col mb-2.5"
            >
              <span class="text-sm text-gray-500">{{ news.date }}</span>
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: news.url,
                  text: news.title,
                }"
                :on-click="
                  (item) =>
                    onCTAClick({ ui: 'latest/link', type: 'media', ...item })
                "
              />
            </li>
          </ol>
        </div>
        <div class="col-span-4 sm:col-span-2">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Latest videos
          </h3>
          <div class="flex mb-4">
            <div
              v-for="video in latestVideos"
              :key="video.title"
              class="video-preview flex flex-col mr-8 w-6/12"
            >
              <a
                :href="video.url"
                class="
                  relative
                  overflow-hidden
                  rounded
                  border-2 border-gray-300
                  mb-2
                "
                @click="
                  () =>
                    onCTAClick({
                      ui: 'latest/link',
                      type: 'video',
                      url: video.url,
                    })
                "
              >
                <img
                  :src="video.thumbnail"
                  :alt="video.title"
                  class="
                    video-preview-thumbnail
                    max-h-48
                    filter
                    brightness-75
                    transform
                    transition-transform
                    duration-300
                  "
                />
                <Icon
                  name="video-play"
                  class="
                    absolute
                    top-0
                    bottom-0
                    left-0
                    right-0
                    mx-auto
                    my-auto
                    w-1/5
                  "
                />
              </a>
              <Link
                class="text-blueGreen font-bold hover:underline"
                :item="{
                  link: video.url,
                  text: video.title,
                }"
                :on-click="
                  (item) =>
                    onCTAClick({ ui: 'latest/link', type: 'video', ...item })
                "
              />
            </div>
          </div>
          <Button
            type="primary"
            href="https://blog.ipfs.tech/?category=Video"
            text="More videos"
            target="_blank"
            :on-click="
              (item) => onCTAClick({ ui: 'latest/more-videos', ...item })
            "
          />
        </div>
      </div>
    </section>
    <VideoModal ref="videoModal" />
  </div>
</template>

<script>
import SeoTags from '~/components/SeoTags.vue';
import Button from '~/components/Button';
import StarfieldHero from '~/components/StarfieldHero';
import VideoModal from '~/components/VideoModal.vue';

export default {
  components: { Button, StarfieldHero, SeoTags, VideoModal },
  data() {
    return {
      latestPosts: [],
      latestNews: [],
      latestVideos: [],
    };
  },
  async fetch() {
    const [latestPosts, latestNews, latestVideos] = await Promise.allSettled([
      fetch('https://blog.ipfs.tech/index.json')
        .then((res) => res.json())
        .then((data) => data.posts),
      fetch('https://blog.ipfs.tech/news.json')
        .then((res) => res.json())
        .then((data) => data.news),
      fetch('https://blog.ipfs.tech/videos.json')
        .then((res) => res.json())
        .then((data) => data.videos),
    ]);

    if (latestPosts.status === 'fulfilled') {
      this.latestPosts = latestPosts.value;
    }

    if (latestNews.status === 'fulfilled') {
      this.latestNews = latestNews.value;
    }

    if (latestVideos.status === 'fulfilled') {
      this.latestVideos = latestVideos.value;
    }
  },
  fetchOnServer: false,
  methods: {
    onCTAClick(data) {
      this.$countly.trackEvent(this.$countly.events.CTA_CLICK, {
        path: this.$route.path,
        ...data,
      });
    },
    openVideoModal: function (video) {
      this.$refs.videoModal.openModal(video);
    },
  },
};
</script>

<style scoped>
.video-preview:hover .video-preview-thumbnail {
  @apply scale-105;
}

h2 {
  @apply text-3xl;
}

@screen sm {
  h2 {
    @apply text-4xl;
  }
}
</style>
